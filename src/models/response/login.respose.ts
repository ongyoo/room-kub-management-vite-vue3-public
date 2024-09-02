class LoginResponse {
  public token: string

  constructor(response: any) {
    this.token = response.token
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

export default LoginResponse
