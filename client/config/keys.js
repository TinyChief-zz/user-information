export default {
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://auth-user.herokuapp.com/api'
}
