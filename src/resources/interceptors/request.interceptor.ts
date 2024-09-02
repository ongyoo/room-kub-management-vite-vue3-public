import { pubSubSubscribeChannels } from '@/utils/constants'
import type { AxiosRequestConfig } from 'axios'
import PubSub from 'pubsub-js'
import humps from 'humps'
import Qs from 'qs'
// AxiosResponse
//Promise<AxiosRequestConfig>
export const loadingRequestInterceptor = [
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (!config?.params?.disabled_loading) {
      PubSub.publish(pubSubSubscribeChannels.loadingIncrease)
    }
    return config
  },
]

export const requestInterceptor = [
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers = config.headers ?? {}
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      return config
    }

    config.data = config.data ? humps.decamelizeKeys(config.data) : config.data
    config.params = config.params
      ? humps.decamelizeKeys(config.params)
      : config.params
    config.paramsSerializer = {
      encode: (params) => Qs.stringify(params, { arrayFormat: 'repeat' }),
    }
    return config
  },
]
