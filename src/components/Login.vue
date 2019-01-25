<template>
  <v-container>


    <v-spacer></v-spacer>
    <v-content>
      <v-container fluid fill-height>

        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title > Login form</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="email ID" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login" >Login</v-btn>
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
      email: '',
    password: ''
      }
    },
    methods: {
      login: function () {
        console.log(this.email)
        Axios.post('http://localhost:8000/user/login/web', {
          password: this.password,
          email: this.email
        }).then(response => {
          console.log(response.data)

        }).catch(error => {
          console.log('Error login')
          console.log(error)
          window.alert('Please enter correct username and Password')
          this.$router.push('/')
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