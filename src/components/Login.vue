<template>
  <v-card-media :src="src" height="650" width="500px,k">
    <div class="container">
      <router-view></router-view>
      <div class="text-xs-center" style="margin-top:150px">
        <!-- <v-card class="elevation-12"> -->
        <!-- <v-card-text> -->
        <v-layout>
          <v-flex md4 offset-md1>
            <v-card color="blue">
              <div
                style="color:white; text-align:left; font-family:sans-serif; font-size:250%; margin-left:28px; padding:5px; padding-top:20px"
              >
                <b>Sign In</b>
                <v-icon>supervisor_account</v-icon>
              </div>
              <div
                style="color:white; text-align:left; font-family:sans-serif; font-size:180%; margin-left:28px; padding:5px; margin-top:15px; padding-bottom:25px"
              >Get access to an exciting range of offers and products</div>
            </v-card>
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <!-- <p style="font-family:sans-serif; font-size:220%; margin-bottom:40px"> REGISTER NOW</p> -->
                <v-text-field
                  prepend-icon="mail"
                  name="email"
                  label="Email"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>

                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
              <!-- </v-card-text> -->
              <!-- <v-card-actions> -->
              <v-spacer></v-spacer>
              <v-btn @click="login" style="background-color:#007bff; color:white; width:50%">Sign In</v-btn>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- </v-card-actions> -->
        <!-- </v-card> -->
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
            src: require("@/assets/back.jpg"),
            valid: false,
            name: '',
            nameRules: [
              (v) => !!v || 'Name is required',
              (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
          }
        },
  methods: {
   login: function () {
    console.log(this.email)
    Axios.post('http://10.177.7.137:8000/user/login/web', {
     email: this.email,
     password: this.password,

    }).then(response => {
console.log(response.data);
this.$router.push('/')
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
.padding_login {
  margin-top: 252px;
}
</style>