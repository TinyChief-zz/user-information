import Api from './Api'

export default {
  register (credentials) {
    return Api().post('/auth/register', credentials)
  },

  async login (credentials) {
    return Api().post('/auth/login', credentials)
  }
}
