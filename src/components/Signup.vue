<template>
  <v-container>

    <v-content>
      <v-container fluid fill-height>

        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Vue from 'vue'

  import VueLocalStorage from 'vue-localstorage'
  Vue.use(VueLocalStorage)
  export default {
    name: 'app',
 
    data () {
      return {
        password: "",
         userName: "",
          email: "", 
      }
    },
    methods: {
      signup: function () {

        Axios.post('http://localhost:8000/user/add',{
         password: this.password,
         userName: this.userName,
          email: this.email,
        
        }).then(response => {
         
        }).catch(error => {
          console.log('Error signup')
          console.log(error)
          console.log(error.status)
          console.log(error.code)
        })
      }
    }
  }
</script>
<style scoped>
  .center{
    border-radius: 50px;
  }
</style>