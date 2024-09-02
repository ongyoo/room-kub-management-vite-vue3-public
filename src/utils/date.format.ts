import Moment from 'moment-timezone'

export const dateFormatUTC = (dateStr: string, format: string): string => {
  return Moment(dateStr).tz('Asia/Bangkok').format(format)
}

//eg. 1 day ago, 2 hours ago etc
export const dateFromNow = (dateStr: string): string => {
  return Moment(dateStr).tz('Asia/Bangkok').fromNow()
}
