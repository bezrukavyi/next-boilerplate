import axios from 'axios'
import { camelCaseKeys, snakeCaseKeys } from 'utils/deepTransformKeys'
import { isString } from 'lodash'
import Cookie from 'utils/cookie'

const transformResponse = (data) => {
  const parsedData = isString(data) ? JSON.parse(data) : data
  return camelCaseKeys(parsedData)
}

const request = (method) => (context) => ({ path, data, params }) => {
  const headers = Cookie.get(context)

  const config = {
    baseURL: process.env.API_DOMAIN,
    method: method,
    url: path,
    data: snakeCaseKeys(data || {}),
    params,
    transformResponse,
    headers,
  }

  return axios.request(config)
}

export default {
  get: request('get'),
  post: request('post'),
  patch: request('patch'),
  destroy: request('delete'),
}

