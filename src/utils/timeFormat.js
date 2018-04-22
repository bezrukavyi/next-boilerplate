import { isInteger } from 'lodash'

const default_options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export default {
  default: (date) => {
    if (!date) { return '' }
    const validDate = isInteger(date) ? date * 1000 : new Date(Date.parse(date))
    return new Intl.DateTimeFormat('en-US', default_options).format(validDate)
  },
}
