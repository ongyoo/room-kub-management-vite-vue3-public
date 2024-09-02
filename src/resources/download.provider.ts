import HttpRequest from '@/resources/http.request'

export interface IDownloadProvider {
  getImage(url: string): Promise<any>
}

class DownloadProvider extends HttpRequest implements IDownloadProvider {
  private limit = 20
  constructor() {
    super('custom')
  }
  getImage(url: string): Promise<any> {
    return this.fetch(url, {
      responseType: 'arraybuffer',
      disabledLoading: true,
    })
  }
}

export default DownloadProvider
