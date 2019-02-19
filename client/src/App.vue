<template>
  <div id="app">
    <login
      v-if="pageData.login"
      v-on:login-success="onLoginSuccess"
      v-on:to-registration="onToRegistration"
    ></login>
    <register
      v-if="pageData.register"
      v-on:register-success="onRegisterSuccess"
      v-on:to-login="onToLogin"
    ></register>
    <profile v-if="pageData.profile" v-bind:user="userData" v-on:user-exit="onUserExit"></profile>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Profile from '@/components/Profile.vue'

export default {
  components: { Login, Register, Profile },
  name: 'app',
  data () {
    return {
      userData: {},
      pageData: {
        login: true,
        register: false,
        profile: false
      },
      userFields: [
        'firstName',
        'lastName',
        'gender',
        'interests',
        'email',
        'birth',
        'updated'
      ]
    }
  },
  beforeMount () {
    if (window.localStorage.getItem('email')) {
      const data = {}

      this.userFields.forEach(el => {
        data[el] = window.localStorage.getItem(el)
      })

      this.userData = data

      this.setCurrentView('profile')
    }
  },
  methods: {
    /*
     * Переходы между маршрутами
     */
    setCurrentView (view) {
      this.pageData = {
        login: false,
        register: false,
        profile: false
      }
      this.pageData[view] = true
    },
    onUserExit () {
      this.setCurrentView('login')
      window.localStorage.clear()
    },
    onLoginSuccess (data) {
      this.userData = this.setUser(data)
      this.setCurrentView('profile')
    },
    onRegisterSuccess (data) {
      this.userData = this.setUser(data)
      this.setCurrentView('profile')
    },
    onToRegistration () {
      this.setCurrentView('register')
    },
    onToLogin () {
      this.setCurrentView('login')
    },
    /*
     * Функциональные
     */
    setUser (rawData) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }
      const processedData = {
        ...rawData,
        gender: rawData.gender === 'male' ? 'мужской' : 'женский',
        birth: new Date(rawData.birth).toLocaleString('ru-RU', options),
        updated: new Date(rawData.updated).toLocaleString('ru-RU', options)
      }

      for (let key in processedData) {
        window.localStorage.setItem(key, processedData[key])
      }

      return processedData
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* max-width: 900px; */
  min-height: 100vh;
}
.wrapper {
  margin: 0 auto;
  max-width: 900px;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
}

h1 {
  font-size: 30px;
  margin-bottom: 30px;
}

h2 {
  font-size: 26px;
}

h3 {
  font-size: 20px;
}

span.action {
  text-decoration: underline;
  cursor: pointer;
}

section.auth {
  width: 350px;
  margin-bottom: 20px;
}
@media screen and (max-width: 400px) {
  section.auth {
    width: 300px;
  }
}
</style>
