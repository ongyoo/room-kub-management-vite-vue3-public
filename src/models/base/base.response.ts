class BaseResponse {
  public success: boolean
  public message: string
  public errorCode: any
  public errorMessage: any
  public data: any
  public count: number
  public code: number
  public currentPage: number
  public totalRow: number
  public totalPage: number
  public perPage: number

  constructor(response: any) {
    this.success = response.success || false
    this.message = response.message || ''
    this.data = response.data || null
    this.count = response.count || 0
    this.errorCode = response.errorCode || null
    this.errorMessage = response.errorMessage || null
    this.code = response.code || 0
    this.currentPage = response.currentPage || 0
    this.totalRow = response.totalRow || 0
    this.totalPage = response.totalPage || 0
    this.perPage = response.perPage || 0
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

export default BaseResponse
