export class MyChannelListResponse {
  public result: MyChannelItemResponse[]

  constructor(response: any) {
    const items = response.result as any[]
    this.result = items.map((item) => new MyChannelItemResponse(item)) || []
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

export class MyChannelItemResponse {
  public id: string
  public channelId: string
  public name: string
  public logoThumbnailUrl: string
  public isActive: boolean
  public isBan: boolean
  public isSeparate: boolean
  public createAt: string
  public updateAt: string

  constructor(response: any) {
    this.id = response.id || ''
    this.channelId = response.channelId || ''
    this.name = response.name || ''
    this.logoThumbnailUrl = response.logoThumbnailUrl || ''
    this.isActive = response.isActive || false
    this.isBan = response.isBan || false
    this.isSeparate = response.isSeparate || false
    this.createAt = response.createAt || ''
    this.updateAt = response.updateAt || ''
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

/*
{
            "id": "65337a92ec357d10d9edeb11",
            "channel_id": "65337a92ec357d10d9edeb10",
            "name": "VK House (ชุมแพ)",
            "logo_thumbnail_url": "https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/305147241_514049264059109_7562849173087790957_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XWbp9hHFnPkAX-Aw2I4&_nc_ht=scontent.fbkk22-1.fna&oh=00_AfD6k94rleJvpSZ7U-6F8uKozUPk8lq6dnqTVcASK3i_UQ&oe=6537B28D",
            "is_active": true,
            "is_ban": false,
            "is_separate": false,
            "create_at": "2023-10-21T07:15:30.646Z",
            "update_at": "2023-10-21T07:15:30.646Z"
        }
*/
