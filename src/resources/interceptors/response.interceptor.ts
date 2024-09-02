import BaseResponse from '@/models/base/base.response'
import { pubSubSubscribeChannels } from '@/utils/constants'
import PubSub from 'pubsub-js'
import type { AxiosResponse } from 'axios'
import humps from 'humps'
import router from '@/router'

interface IServerResponseData {
  config: any
  data: {
    data: any
    count: number
    per_page?: number
    total_page?: number
    total_row?: number
    current_page?: number
  }
  status: number
  headers: any
}

interface IErrorData {
  response: {
    data: {
      errorCode: any
      errorMessage: any
      message: string
    }
    message: string
    status: number
    config: {
      method: string
      responseType: string
    }
  }
}

export const loadingResponseInterceptor = [
  (response: AxiosResponse): AxiosResponse => {
    if (!response?.config?.params?.disabled_loading) {
      PubSub.publish(pubSubSubscribeChannels.loadingDecrease)
    }
    return response
  },
  (error: AxiosResponse): AxiosResponse => {
    if (!error?.config?.params?.disabled_loading) {
      PubSub.publish(pubSubSubscribeChannels.loadingDecrease)
    }
    throw error
  },
]

export const serializeResponseInterceptor = [
  (response: AxiosResponse): Promise<any> => {
    if (!response || !response.data) {
      throw response
    }

    if (response?.config?.responseType === 'blob') {
      return Promise.resolve(
        new BaseResponse({
          data: response.data,
        })
      )
    } else if (response?.config?.responseType === 'arraybuffer') {
      return Promise.resolve(response)
    }

    const res: any = humps.camelizeKeys(response)
    return Promise.resolve(
      new BaseResponse({
        data: res.data,
        count: res.count,
        code: response.status,
        perPage: res.perPage,
        totalPage: res.totalPage,
        totalRow: res.totalRow,
        currentPage: res.currentPage,
      })
    )
  },
]

export const catchErrorResponseInterceptor = [
  (response: AxiosResponse): AxiosResponse => response,
  async (e: any): Promise<any> => {
    const error = e as IErrorData
    const status: number = error.response && error.response.status
    if (status === 401) {
      router.push({ name: 'page-401' })
      return new BaseResponse(e.response)
    }
    // } else if (status === 404) {
    //   router.push({ name: "not-found" });
    //   return new BaseResponse(e.response);
    // }
    throw new BaseResponse(e.response)
  },
]
