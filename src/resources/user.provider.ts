import HttpRequest from '@/resources/http.request'
import BaseResponse from '@/models/base/base.response'
import jwtDecode from 'jwt-decode'
import UserPayloadModel from '@/models/user/user.payload.model'
import humps from 'humps'
import { getAuthToken } from '@/utils/cookie'

export interface IUserProvider {
  login(userName: string, password: string): Promise<BaseResponse>

  // decode jwt
  getAuthenJWT(): UserPayloadModel | null
}

export interface JwtUserPayload {
  payload: any
}

class UserProvider extends HttpRequest implements IUserProvider {
  private limit = 20
  constructor() {
    super('/authen/api')
  }
  getAuthenJWT(): UserPayloadModel | null {
    const token = getAuthToken()
    if (token !== null && token !== undefined) {
      const decoded = jwtDecode<JwtUserPayload>(token)
      const res: any = humps.camelizeKeys(decoded)
      const userModel = new UserPayloadModel(res.payload)
      return userModel
    }
    return null
  }
  getRoleAll(): Promise<BaseResponse> {
    throw new Error('Method not implemented.')
  }

  public login(userName: string, password: string): Promise<BaseResponse> {
    return this.post('/v1/login', {
      email: userName,
      password: password,
    })
  }
}

export default UserProvider
