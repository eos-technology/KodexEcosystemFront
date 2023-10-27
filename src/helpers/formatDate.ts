import { DateTime } from 'luxon'

const defaultFormat = 'dd/MM/yyyy HH:mm:ss'

const formatDate =
  () =>
  (date: DateTime, format: string = defaultFormat): string => {
    return date.toFormat(format)
  }

export default formatDate
