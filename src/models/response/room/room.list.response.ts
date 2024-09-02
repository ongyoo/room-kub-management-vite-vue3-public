//enum ROOM_STATUS {
enum RoomStatus {
  Available = 'available', // ว่าง
  Busy = 'busy', // ไม่ว่าง
  ReportOut = 'report_out', // แจ้งออก
  Repair = 'repair', // แจ้งซ่อม
}
//export type RoomStatus = typeof ROOM_STATUS

enum ROOM_TYPE {
  Hotel = 'hotel', // โรงแรม
  Apartment = 'apartment', // อพาตเม้ย
  ReportOut = 'house', // บ้าน
  Repair = 'other', // อื่นๆ
}
export type RoomType = typeof ROOM_TYPE

enum ROOM_SUB_TYPE {
  OneBedroom = 'one_bedroom', // โรงแรม
  Other = 'other', // อื่นๆ
}
export type RoomSubType = typeof ROOM_SUB_TYPE

//enum ROOM_PAYMENT_STATUS {
enum RoomPaymentStatus {
  Paid = 'paid', // ชำระแล้ว
  WaitingForPayment = 'waiting_for_payment', // รอชำระ
  WaitingForApprove = 'waiting_for_approve', // รอตรวจสอบชำระ
  CashPayment = 'cash_payment', // ชำระเงินสด
  PaymentBankTransfer = 'payment_bank_transfer', // ชำระด้วยการโอนเงิน
  Overdue = 'overdue', // ค้างชำระ
  None = 'none', // ไม่มีสถานะ
}
//export type RoomPaymentStatus = typeof ROOM_PAYMENT_STATUS

export class RoomListResponse {
  public roomList: RoomItemResponse[]

  constructor(response: any) {
    const items = response.result.roomList as any[]
    this.roomList = items.map((item) => new RoomItemResponse(item)) || []
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

export class RoomItemResponse {
  public id: string
  public businessId: string
  public name: string
  public description: string
  public thumbnailUrl: string
  public floor: number
  public price: number
  public specialPrice: number
  public isSpecialPrice: boolean
  public tags: string[]
  public location: string
  public status: RoomStatus
  public paymentStatus: RoomPaymentStatus | null
  public type: RoomType
  public subType: RoomSubType
  public isPublisher: boolean
  public isActive: boolean
  public createAt: string
  public updateAt: string

  // Room Status
  public get isAvailable(): boolean {
    return this.status === RoomStatus.Available
  }

  public get isBusy(): boolean {
    return this.status === RoomStatus.Busy
  }

  public get isReportOut(): boolean {
    return this.status === RoomStatus.ReportOut
  }

  public get isRepair(): boolean {
    return this.status === RoomStatus.Repair
  }

  public get isBusyAndOrverDue(): boolean {
    return this.isBusy && this.paymentStatus === RoomPaymentStatus.Overdue
  }

  // Payment Status
  // ชำระแล้ว
  public get isBusyAndPaid(): boolean {
    return this.isBusy && this.paymentStatus === RoomPaymentStatus.Paid
  }

  // รอชำระ
  public get isBusyAndWaitingForPayment(): boolean {
    return (
      this.isBusy && this.paymentStatus === RoomPaymentStatus.WaitingForPayment
    )
  }

  // รอตรวจสอบชำระ
  public get isBusyAndWaitingForApprove(): boolean {
    return (
      this.isBusy && this.paymentStatus === RoomPaymentStatus.WaitingForApprove
    )
  }

  // ชำระเงินสด
  public get isBusyAndCashPayment(): boolean {
    return this.isBusy && this.paymentStatus === RoomPaymentStatus.CashPayment
  }

  // ชำระด้วยการโอนเงิน
  public get isBusyAndPaymentBankTransfer(): boolean {
    return (
      this.isBusy &&
      this.paymentStatus === RoomPaymentStatus.PaymentBankTransfer
    )
  }

  // ค้างชำระ
  public get isBusyAndOverdue(): boolean {
    return this.isBusy && this.paymentStatus === RoomPaymentStatus.Overdue
  }

  // ไม่มีสถานะ
  public get isBusyAndNone(): boolean {
    return this.isBusy && this.paymentStatus === RoomPaymentStatus.None
  }

  constructor(response: any) {
    this.id = response.id || ''
    this.businessId = response.businessId || ''
    this.name = response.name || ''
    this.description = response.description || ''
    this.thumbnailUrl = response.thumbnailUrl || ''
    this.floor = response.floor || 0
    this.price = response.price || 0
    this.specialPrice = response.specialPrice || 0
    this.isSpecialPrice = response.isSpecialPrice || false
    this.tags = response.tags || []
    this.location = response.location || ''
    this.status = response.status || ''
    this.paymentStatus = response.paymentStatus || ''
    this.type = response.type || ''
    this.subType = response.subType || ''
    this.isPublisher = response.isPublisher || false
    this.isActive = response.isActive || false
    this.createAt = response.createAt || false
    this.updateAt = response.updateAt || false
  }

  public toString(): string {
    return JSON.stringify(this)
  }
}

/*
{
        "room_list": [
            {
                "id": "656d4b3cf8e6f7fc9b4cdc01",
                "business_id": "652a430cf598856ca659e2e0",
                "name": "101",
                "description": "ห้องแอร์ พร้อมอยู่",
                "thumbnail_url": "https://roomkub-service-api-dx4nu.ondigitalocean.app/api/v1/upload/public/MTp0KzN6VVFBK0tXZDFoY3dMYmR2cEthTUw0N3c5WUVGNjltVll1NFJSWWJ2N0Ftc3ZySFMyZXVIK3FhcXZGcjlmUHFCaklIMTNMc0lMMys3dzNOUk5takVvN2MwQnZqczNYUS9pSmlWaGV6dkNCbCtwQXNMRFltRW9QQk5HRnc9PQ==",
                "floor": 0,
                "price": 3500,
                "special_price": 3200,
                "is_special_price": true,
                "tags": [
                    "ห้องแอร์",
                    "เฟอร์นิเจอร์",
                    "ชุมแพ"
                ],
                "location": "",
                "status": "available",
                "type": "apartment",
                "sub_type": "other",
                "is_publisher": false,
                "is_active": true,
                "create_at": "2023-12-04T03:45:00.601Z",
                "update_at": "2024-01-06T11:08:35.765Z"
            }
        ]
    }
*/
