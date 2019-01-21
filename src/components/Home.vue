
<template>
  <v-container>
      
    <v-layout >
      <v-layout row wrap>
        <v-container fluid>
          <v-layout>
            <v-flex class="padding">
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  transition="fade"
                  reverse-transition="fade"
                ></v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-container>
        <router-view></router-view>


        <v-layout column>
          <v-flex xs3 sm4 >

            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row wrap>
                  <v-flex md3
                    v-bind="{ [`xs${card.flex}`]: true }"
                    v-for="card in cards"
                    :key="card.title"
                  >

                    <v-card width="250" height="300">
                      <v-card-media
                        :src="card.photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>
                      <v-flex>

                          <div class="text--black">
                            <div><h3 style=" text-align:center; margin-top:20px"> {{ card.subject }} </h3></div>
                            
                            <br>

                          </div>



                        <v-card-actions>

              
                        </v-card-actions>
                        <br>
                        <br>
                      </v-flex>
                    </v-card>
                    <v-spacer></v-spacer> <!--no use-->
                    <br><br>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>


      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  
  export default {
   name: "Home",
    // components: {'nav-Menu': menuuu},
    data() {
      return {
        sideNav: false,
        right: null,
        items: [
          {
            src: "static/Photos/10.jpg"
          },
          {
            src: "static/Photos/261.jpg"
          },
          {
            src: "static/Photos/discount12.png"
          }
        ],
        cards:[ {
          
          subject: 'Electonics',
          photo: "static/Photos/electronics.jpg",
       },
       {
            subject: 'Footwear',
           photo: "static/Photos/footwear.jpeg",
       },
       {
          
          subject: 'Fashion',
          photo: "static/Photos/fashion.jpg",
       },
       {  subject: 'Sports and Outdoors',
          photo: "static/Photos/sports.jpeg",

       },
       {
          
          subject: 'Automotive',
          photo: "static/Photos/automotive.jpeg",
       },
       { 
          subject: 'Books',
          photo: "static/Photos/boos.png",
       },
       {
          
          subject: 'Beauty',
          photo: "static/Photos/healthcare.png",
       },
       {  subject: 'Home',
          photo: "static/Photos/home.jpg",
       }
         ] }
  }
}
</script>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0
      &-enter, &-leave, &-leave-to
        opacity: 0

.padding{
    margin-top:110px
}
</style>
