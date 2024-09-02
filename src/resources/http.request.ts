/* eslint-disable prettier/prettier */
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import {
  loadingRequestInterceptor,
  requestInterceptor,
} from './interceptors/request.interceptor'
import {
  loadingResponseInterceptor,
  serializeResponseInterceptor,
  catchErrorResponseInterceptor,
} from './interceptors/response.interceptor'
import { sessionStorageKey } from '@/utils/constants'
import { getAuthToken } from '@/utils/cookie'

interface IHttpRequest {
  fetch(endPoint: string, data: object): Promise<any>
  download(endPoint: string, data: object): Promise<any>
  post(endPoint: string, data: object, config: object): Promise<any>
  put(endPoint: string, data: object, config: object): Promise<any>
  patch(endPoint: string, data: object, config: object): Promise<any>
  delete(endPoint: string, config?: object): Promise<any>
  request(type: string, url: string, data: object): Promise<any>
  asyncFetch<T>(api: string, param?: any): Promise<AxiosResponse<T>>
}

class HttpRequest implements IHttpRequest {
  public axios: AxiosInstance
  private readonly url: string

  constructor(apiVersion: string) {
    // custom = replace url
    const VITE_SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string
    if (apiVersion !== 'custom') {
      const VITE_APP_API = import.meta.env.VITE_APP_API
      this.url = `${VITE_APP_API}${apiVersion}`
    } else {
      // replace url
      this.url = apiVersion
    }

    this.axios = axios.create({
      baseURL: this.url,
      timeout: 120000,
      withCredentials: false,
    })

    //OriginProvider.getInstance().setOrigin(window.origin)
    this.axios.interceptors.request.use(...loadingRequestInterceptor)
    this.axios.interceptors.response.use(...loadingResponseInterceptor)

    this.axios.interceptors.request.use(...requestInterceptor)
    this.axios.interceptors.response.use(...serializeResponseInterceptor)
    this.axios.interceptors.response.use(...catchErrorResponseInterceptor)

    this.axios.defaults.headers.common['secret-key'] = VITE_SECRET_KEY
    const cookieToken = getAuthToken()
    if (
      cookieToken !== null &&
      cookieToken !== undefined &&
      cookieToken.length > 0
    ) {
      this.axios.defaults.headers.common['authentication'] =
        'Bearer ' + cookieToken
    } else {
      const token = sessionStorage.getItem(sessionStorageKey.authenJWTToken)
      if (token !== null) {
        this.axios.defaults.headers.common['authentication'] = 'Bearer ' + token
      }
    }
  }

  public fetch(endPoint: string, data?: object): Promise<any> {
    return this.axios.get(endPoint, {
      params: data,
    })
  }

  public async asyncFetch<T>(
    api: string,
    param?: any
  ): Promise<AxiosResponse<T>> {
    return await axios.get(api, { params: param })
  }

  public download(endPoint: string, data?: object): Promise<any> {
    return axios.get(endPoint, {
      params: data,
      responseType: 'blob',
    })
  }

  public post(endPoint: string, data: object, config?: object): Promise<any> {
    return this.axios.post(endPoint, data, config)
  }

  public put(endPoint: string, data: object, config?: object): Promise<any> {
    return this.axios.put(endPoint, data, config)
  }

  public patch(endPoint: string, data: object, config?: object): Promise<any> {
    return this.axios.patch(endPoint, data, config)
  }

  public delete(endPoint: string, config?: object): Promise<any> {
    return this.axios.delete(endPoint, config)
  }

  public request(type: string, url: string, data: object): Promise<any> {
    let promise: any = null
    switch (type) {
      case 'GET':
        promise = axios.get(url, { params: data })
        break
      case 'GETAUTH':
        promise = axios.get(url, { params: data, withCredentials: true })
        break
      case 'POST':
        promise = axios.post(url, data)
        break
      case 'PUT':
        promise = axios.put(url, data)
        break
      case 'PATCH':
        promise = axios.patch(url, data)
        break
      case 'DELETE':
        promise = axios.delete(url, data)
        break
    }
    return promise
  }
}

export default HttpRequest
