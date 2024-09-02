// Enum
import { SideItemType } from '@/models/enum/card.enum'

class SideNavItemModel {
  public id: string
  public title: string
  public name: string
  public detail: string
  public iconName: string
  public pathName: string
  public routName: string
  public type: SideItemType

  constructor(response: any) {
    this.id = response.id || ''
    this.title = response.title || ''
    this.name = response.name || ''
    this.detail = response.detail || ''
    this.iconName = response.iconName || ''
    this.pathName = response.pathName || ''
    this.routName = response.routName || ''
    this.type = response.type || SideItemType.MENUITEM
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}
  export default SideNavItemModel