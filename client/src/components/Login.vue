<template>
  <div class="wrapper">
    <p class="test-showcase">Тестовый аккаунт:
      <br>
      Логин:  admin@admin.ru
      <br>
      Пароль: 121212
    </p>
    <h1>Добро пожаловать!</h1>
    <section class="auth">
      <b-field label="Электронный адрес">
        <b-input
          type="email"
          v-model="credentials.email"
          icon="email"
          placeholder="test@example.com"
        ></b-input>
      </b-field>
      <b-field label="Пароль">
        <b-input
          type="password"
          v-model="credentials.password"
          password-reveal
          icon="lock"
          placeholder="Не менее 6 символов"
          minlength="6"
          maxlength="100"
        ></b-input>
      </b-field>
    </section>
    <p v-if="error">{{ error }}</p>
    <a class="button is-primary" @click="tryLogin()">Войти</a>
    <p>
      Или создайте
      <span class="action" @click="toRegistration()">новый аккаунт</span>
    </p>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      userData: null,
      error: null
    }
  },
  methods: {
    tryLogin () {
      AuthenticationService.login(this.credentials)
        .then(res => {
          this.$emit('login-success', res.data)
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.error = 'Нет такого пользователя'
          }
        })
    },
    toRegistration () {
      this.$emit('to-registration')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.test-showcase {
  position: absolute;
  top: 0
}
label {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  margin: 10px 0;
}
</style>
