<template>
   <div>
     <div id="myCarousel" class="carousel slide" data-ride="carousel">
<div class="row">
  <h2>Electronics</h2>
  <v-carousel
 height="200px"
  >
     <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      >


<!-- <v-layout row wrap>
       <v-flex xs3 sm3 >

                    <v-card width="200" height="200">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>

  </v-flex>
   <v-flex xs3 sm3 >

                    <v-card width="200" height="200">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>

  </v-flex>
   <v-flex xs3 sm3 >

                    <v-card width="200" height="200">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>

  </v-flex>
      <v-flex xs3 sm3 >

                    <v-card width="200" height="200">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>

  </v-flex>
      <v-flex xs3 sm3 >

                    <v-card width="200" height="200">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>

  </v-flex>


</v-layout>
    </v-carousel-item> -->
     <!-- <v-carousel-item>
    <v-card>



                    <v-card width="200" height="550">
                      <v-card-media
                        :src="cards.course_photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>

                    </v-card>


    </v-card> -->

    </v-carousel-item>
  </v-carousel>

</div>
  </div>

  </div>




</template>

<script>
export default {
  name: 'slider',
     data () {
      return {

           cards:[ {
          course_photo: 'static/electronics3.jpeg',
           course_photo: 'static/electronics3.jpeg',
            course_photo: 'static/electronics3.jpeg',
             course_photo: 'static/electronics3.jpeg',
              course_photo: 'static/electronics3.jpeg',
               course_photo: 'static/electronics3.jpeg',
                course_photo: 'static/electronics3.jpeg',
                 course_photo: 'static/electronics3.jpeg',

        }]

     }
    },
}

</script>

<style scoped>
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
