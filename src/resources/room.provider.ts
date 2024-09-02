import HttpRequest from '@/resources/http.request'
import BaseResponse from '@/models/base/base.response'

export interface IRoomProvider {
  getRoomList(page: number): Promise<BaseResponse>
}

export interface JwtUserPayload {
  payload: any
}

class RoomProvider extends HttpRequest implements IRoomProvider {
  private limit = 20
  constructor() {
    super('/room/api')
  }

  public getRoomList(page: number): Promise<BaseResponse> {
    const limit = 20
    return this.fetch(`/v1/${page}/${limit}`)
  }
}

export default RoomProvider
