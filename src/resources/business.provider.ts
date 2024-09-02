import HttpRequest from '@/resources/http.request'
import BaseResponse from '@/models/base/base.response'

export interface IBusinessProvider {
  getMyChannelList(page: number): Promise<BaseResponse>
}

export interface JwtUserPayload {
  payload: any
}

class BusinessProvider extends HttpRequest implements IBusinessProvider {
  private limit = 20
  constructor() {
    super('/business/api')
  }

  public getMyChannelList(page: number): Promise<BaseResponse> {
    const limit = 20
    return this.fetch(`/v1/my-channel/list/${page}/${limit}`)
  }
}

export default BusinessProvider
