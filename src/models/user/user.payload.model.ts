class UserPayloadModel {
  public id: string
  public email: string
  public firstName: string
  public lastName: string
  public nickName: string
  public phone: string
  public thumbnailUrl: string
  public roleId: string
  public businessId: string

  constructor(response: any) {
    this.id = response.id || ''
    this.email = response.email || ''
    this.firstName = response.firstName || ''
    this.lastName = response.lastName || ''
    this.nickName = response.nickName || ''
    this.phone = response.phone || ''
    this.thumbnailUrl = response.thumbnailUrl || ''
    this.roleId = response.role || ''
    this.businessId = response.businessId || ''
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

export default UserPayloadModel

/*
{
  "payload": {
    "id": "652a42cff598856ca659e2df",
    "email": "roomkub.thailand@gmail.com",
    "first_name": "RoomKub",
    "last_name": "Thailand",
    "nick_name": "RoomKub Thailand",
    "thumbnail_url": "",
    "role_id": "652ad10d7d0d962661756b26",
    "role_name": "Root Super Admin Hero",
    "business_id": ""
  },
  "exp": 1705131992
}
*/
