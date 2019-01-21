<template>
  <div id="app">
    <router-view/>
    
    <v-toolbar  fixed extended extension-height="70px">
      <v-container>
      <v-layout>
      <v-toolbar-title><v-btn router to="/" style="font-size:160%" active-class="" flat><div style="color:red">sabkuch.com</div></v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router to="/"> <v-icon left>supervisor_account</v-icon>Home</v-btn>
        <v-btn flat router to="/products"><v-icon left>video_label</v-icon>Products</v-btn>
        <v-btn flat router to="/login"><v-icon left>supervisor_account</v-icon>Login</v-btn>
      </v-toolbar-items>
      </v-layout>
    <v-layout row pb-2>
      <v-flex>
        <v-toolbar-items slot="extension">
          <v-btn flat>
            <v-icon left>search</v-icon>
            Search
          </v-btn>
          <v-text-field
            v-model="searchText"
            solo hide-details single-line full-width
            >
            </v-text-field>
             
                    
                    
        </v-toolbar-items>
      </v-flex>
    </v-layout>
      </v-container>
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
