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
    console.log(this.email)
    Axios.post('http://10.177.7.137:8080/user/login', {
     password: this.password,
     email: this.email,
    }).then(response => {
console.log(response.data);
    }).catch(error => {
     console.log('Error login')
     console.log(error)
     //this.$router.push('/Admin/login')
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