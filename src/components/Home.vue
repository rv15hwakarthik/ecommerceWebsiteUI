<template>
    <div>
        <br><br><br><br>
         <v-toolbar light>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn > <v-icon left>supervisor_account</v-icon>Electronics</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Tv's & Appliances</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Men</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Women</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Baby&Kids</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Home</v-btn>
        <v-btn flat><v-icon left>video_label</v-icon>Furniture</v-btn>
        <v-btn > <v-icon left>supervisor_account</v-icon>Sports</v-btn>
        <v-btn flat><v-icon left>supervisor_account</v-icon>Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
         <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <br>
<slider></slider>

  </div>
</template>
<script>
import slider from '@/components/slider.vue'
export default {
    name: "Home",
     data () {
      return {
        items: [
          {
            src: 'static/discount12.png'
          },
          {
            src: 'static/261.jpg'
          },
          {
            src: 'static/10.jpg'
          }


        ]
      }
    },
    components: {
      slider
    }
}
</script>
