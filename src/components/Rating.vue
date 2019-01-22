<template>
<div class="container">
  <router-view></router-view>
<br><br><br><br><br><br><br><br><br><br><br><br>
    <v-card-text >

      <h2>If you like shopping with us. please take few seconds in rating your experience. it really helps!!!</h2>

      <div class="text-sm-center mt-5">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$vuetify.icons.ratingFull"
          half-increments
          hover
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn flat router-link to="/">No Thanks</v-btn>
      <v-btn color="primary" flat router-link to="/" @click="Rating" >Rate Now</v-btn>
    </v-card-actions>

</div>
</template>
<script>
  export default {
    name: "Rating",
    data: () => ({
      rating:""
    }),
  methods: {
Rating : function(){
  console.log(rating);

}

  }
  }
</script>
<style scoped>
.container{
width: 40%
}
</style>

