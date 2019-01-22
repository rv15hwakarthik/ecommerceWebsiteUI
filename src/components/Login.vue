<template>
    <v-card-media
        :src="src" height="650" width="500px,k">
    <div class="padding_login">
        
        <div class="text-xs-center">
            <!-- <p style="font-size:200%; text-align:center">LOGIN USING GOOGLE</p> -->
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout>
                    <v-flex sm12 md4 offset-md1>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex sm12 md4 offset-md1>
                        <v-text-field
                        v-model="password"
                        :type="'password'"
                        label="Password"
                        required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex sm12 md4 offset-md1>
                        <br>
                        <v-btn @click="login" >Signin</v-btn>
                    </v-flex>
                </v-layout>
                
            </v-form>
        </div>
    </div>
     </v-card-media>
</template>


<script>

 import Axios from 'axios'
 export default {
    name: "Login",


  data () {
   return {
    email: '',
    password: '',
    src: require("@/assets/back.jpg")
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
