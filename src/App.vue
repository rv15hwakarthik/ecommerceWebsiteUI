<template >
  <div id="app" style="background-image: url('');">
    <router-view/>

    <v-toolbar  fixed extended extension-height="70px">
      <v-container class="font">
      <v-layout>
      <v-toolbar-title><v-btn router to="/" style="font-size:160%;" active-class="" flat><div style="color:black">sabkuch.com</div></v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router to="/products/all"> <v-icon left>video_label</v-icon>Products</v-btn>
        <v-btn flat router to="/signup"><v-icon left>supervisor_account</v-icon>Signup</v-btn>
        <v-btn flat router to="/login"><v-icon left>supervisor_account</v-icon>Signin</v-btn>
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
<br><br><br><br><br><br><br>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        searchText:""
      }

    }
  }
</script>

<style>
.font{
font-family:sans-serif
}

</style>
