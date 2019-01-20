<template>
  <div id="app">
    <router-view/>
    <v-toolbar dark fixed>
      <v-toolbar-title style="font-size:200%">SABKUCH.COM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router to="/"> <v-icon left>supervisor_account</v-icon>Home</v-btn>
        <v-btn flat router to="/products"><v-icon left>video_label</v-icon>Products</v-btn>
        <v-btn flat router to="/login"><v-icon left>supervisor_account</v-icon>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'App',
  data(){
    return {

      }

    }
  }
</script>

<style>

</style>
