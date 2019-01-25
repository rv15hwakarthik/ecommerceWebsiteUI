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
                <b>Sign Up
                  <v-icon>supervisor_account</v-icon>
                </b>
              </div>
              <div
                style="color:white; text-align:left; font-family:sans-serif; font-size:180%; margin-left:28px; padding:5px; margin-top:15px; padding-bottom:25px"
              >Get access to an exciting range of offers and products</div>
            </v-card>
            <v-card>
              <!-- <p style="font-family:sans-serif; font-size:220%; margin-bottom:40px"> REGISTER NOW</p> -->
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>


                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
              </v-form>
              <!-- </v-card-text> -->
              <!-- <v-card-actions> -->
              <v-spacer></v-spacer>
              <v-btn style="background-color:#38ACEC"
                :disabled="!valid"
                color="success"
                @click="validate"
              >Signup</v-btn>
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
 data: () => ({
    src: require("@/assets/back.jpg"),
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        console.log(this.email);
      console.log(this.password);
      Axios.post("http://10.177.7.137:8000/user/add", {
        password: this.password,
        name: this.name,
        email: this.email
      })
        .then(response => {
          console.log(response.data);
          this.$router.push('/login')
          //localStorage.getItem('token')
        })
        .catch(error => {
          console.log("Error signup");
          console.log(error);
        });
    
      }
      }
  },
    signup: function() {
      
    }
};
</script>