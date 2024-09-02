import HttpRequest from '@/resources/http.request'
import BaseResponse from '@/models/base/base.response'

export interface IExampleProvider {
  getExample(): Promise<BaseResponse>
}

class ExampleProvider extends HttpRequest implements IExampleProvider {
  constructor() {
    super('')
  }

  public getExample(): Promise<BaseResponse> {
    return this.fetch('')
  }
}

export default ExampleProvider
