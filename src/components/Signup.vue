<template>
  <v-card-media :src="src" height="650" width="500px,k">
    <div class="container">
      <router-view></router-view>
      <div class="text-xs-center" style="margin-top:150px">
        <!-- <v-card class="elevation-12"> -->
        <!-- <v-card-text> -->
        <v-layout>
          <v-flex md4 offset-md1>
            <v-card color="blue"><div style="color:white; text-align:left; font-family:sans-serif; font-size:250%; margin-left:28px; padding:5px; padding-top:20px"><b>Sign Up<v-icon>supervisor_account</v-icon></b></div>
            <div style="color:white; text-align:left; font-family:sans-serif; font-size:180%; margin-left:28px; padding:5px; margin-top:15px; padding-bottom:25px">Get access to an exciting range of offers and products</div>
            </v-card>
            <v-card>
            <v-form @submit.prevent>
              <!-- <p style="font-family:sans-serif; font-size:220%; margin-bottom:40px"> REGISTER NOW</p> -->
              <v-text-field
                prepend-icon="person"
                name="userName"
                label="Full Name"
                type="text"
                v-model="userName"
              ></v-text-field>
              <v-text-field
                prepend-icon="mail"
                name="email"
                label="Email"
                type="text"
                v-model="email"
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
            <v-btn @click="signup" :to="'/login'" style="background-color:#007bff; color:white; width:50%">Signup</v-btn>
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
import Axios from "axios";
import Vue from "vue";
// Vue.use(VueLocalStorage)
export default {
  name: "Signup",

  data() {
    return {
      userName: "",
      email: "",
      password: "",
      src: require("@/assets/back.jpg")

    };
  },
  methods: {
    signup: function() {
      console.log(this.email);
      console.log(this.password);
      Axios.post("http://10.177.7.137:8080/user/add", {
        password: this.password,
        userName: this.userName,
        email: this.email
      })
        .then(response => {
          console.log(response.data);
          //localStorage.getItem('token')
        })
        .catch(error => {
          console.log("Error signup");
          console.log(error);
        });
    }
  }
};
</script>