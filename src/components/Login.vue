<template>
    <div class="padding_login">
        <div class="text-xs-center">
            <!-- <p style="font-size:200%; text-align:center">LOGIN USING GOOGLE</p> -->
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4></v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field
                        v-model="password"
                        :type="'password'"
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
 export default {
    name: "Login",


  data () {
   return {
    email: '',
    password: ''
    }
  },
  methods: {
    login: function () {
      Axios.post('http://localhost:8000/user/login/web', {
        password: this.password,
        email: this.email,
      }).then(response => {
        Vue.localStorage.set('token', response.data)
        localStorage.getItem('token')
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
        window.alert('Please enter correct username and Password')
         this.$router.push('/login')
      })
    }
  }
 }
</script>

<style>
    .padding_login
    {
        margin-top: 252px;
    }
</style>