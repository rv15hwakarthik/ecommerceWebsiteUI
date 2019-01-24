<template>
    <div class="padding_login">
        <div class="text-xs-center">
            <!-- <p style="font-size:200%; text-align:center">LOGIN USING GOOGLE</p> -->
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field v-model="email"  label="E-mail" required></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4></v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field
                        v-model="password"
                       
                        label="Password"
                        required
                        ></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4></v-flex>
                </v-layout>
                <br>
                <v-btn @click="login" >Signin</v-btn>
            </v-form>
        </div>
    </div>
</template>


<script>

 import Axios from 'axios'
 import VueLocalStorage from 'vue-localstorage'
 import Vue from 'vue'
   Vue.use(VueLocalStorage)
 export default {
    name: "Login",
  data () {
   return {
    email: '',
    password: ''
    }
  },
    login: function () {
        console.log(this.student_email)
        Axios.post('http://localhost:8080/user/login/web', {
          password: this.password,
         email: this.email
        }).then(response => {
          Vue.localStorage.set('token', response.data.token)
          console.log(response.data.token)
          localStorage.getItem('token')
          this.$router.push('/')
        }).catch(error => {
          console.log('Error login')
          console.log(error)
          window.alert('Please enter correct username and Password')
          this.$router.push('/login')
        })
      }
 }
</script>

<style>
    .padding_login
    {
        margin-top: 252px;
    }
</style>