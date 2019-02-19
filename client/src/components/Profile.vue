<template>
  <div class="wrapper">
    <h1>Информация</h1>
    <ul>
      <li v-for="(val, i) in Object.keys(fields)" :key="i">
        <div class="item-field">{{fields[val]}}</div>
        <div class="item-value">{{user[val]}}</div>
      </li>
    </ul>
    <a class="button is-danger" @click="$emit('user-exit')">Выйти</a>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['user'],
  data () {
    return {
      fields: {
        firstName: 'Имя',
        lastName: 'Фамилия',
        gender: 'Пол',
        interests: 'Интересы',
        email: 'Электронная почта',
        birth: 'Дата Рождения',
        updated: 'Дата регистрации'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  width: 450px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}

li {
  display: inline-flex;
  margin: 0 10px;
}
[class^="item"] {
  padding: 10px;
  text-align: left
}

.item-field {
  width: 50%;
  font-weight: bold;
}
a {
  color: #42b983;
}

@media screen and (max-width: 500px) {
  ul {
    width: 90%;
  }
  li {
    flex-wrap: wrap
  }
  .item-field {
    width: 100%;
    font-weight: bold;
  }
}

</style>
