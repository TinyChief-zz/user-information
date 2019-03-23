import axios from 'axios'
import keys from '../../config/keys'

export default () => {
  return axios.create({
    baseURL: keys.url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
