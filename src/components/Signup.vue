<template>
<div class="container">
  <router-view></router-view>
<br><br><br><br><br><br><br>
<div class="text-xs-center">
           <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title >Signup </v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="" >
                  <v-text-field prepend-icon="person" name="userName" label="Full Name" type="text" v-model="userName"></v-text-field>
                  <v-text-field prepend-icon="mail" name="email" label="Email" type="text" v-model="email"></v-text-field>

                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup" :to="'/login'">Signup</v-btn>
              </v-card-actions>
            </v-card>
</div>
</div>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
 // Vue.use(VueLocalStorage)
  export default {
    name: 'Signup',

    data () {
      return {
        userName: '',
      email: '',
      password: '',

      }
    },
    methods: {
      signup: function () {
        console.log(this.email)
        console.log(this.password)
        Axios.post('http://10.177.7.137:8080/user/add', {
          password: this.password,
          userName: this.userName,
         email: this.email

        }).then(response => {
          console.log(response.data)
          //localStorage.getItem('token')
        }).catch(error => {

          console.log('Error signup')
          console.log(error)

        })
      }
    }
  }
</script>
