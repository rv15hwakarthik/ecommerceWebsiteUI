<template>
  <!-- <v-container> -->

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

                    <v-card width="250" height="250">
                      <v-card-media
                        :src="card.photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>


                        <v-card-actions>

                          <v-btn absolute bottom  style="margin-top: auto"  color="red"
                                 v-bind:to="{name: 'Subcategory', params: {name: card.Category} }">{{card.Category}}
                          </v-btn>
                        </v-card-actions>

                        <br>
                        <br>

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
  <!-- </v-container> -->
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
            src: require('@/assets/10.jpg')
          },
          {
            src: require("@/assets/261.jpg")
          },
          {
            src: require("@/assets/discount12.png")
          }
        ],
        cards:[ {

         Category: 'Electonics',
          photo: require("@/assets/electronics.jpg"),
       },
       {
            Category: 'Footwear',
           photo: require("@/assets/footwear.jpeg"),
       },
       {

          Category: 'Fashion',
          photo: require("@/assets/fashion.jpg"),
       },
       {  Category: 'Sports and Outdoors',
          photo: require("@/assets/sports.jpeg"),

       },
       {

        Category: 'Automotive',
          photo: require("@/assets/automotive.jpeg"),
       },
       {
         Category: 'Books',
          photo: require("@/assets/boos.png"),
       },
       {

         Category: 'Beauty',
          photo: require("@/assets/healthcare.png"),
       },
       { Category: 'Home',
          photo: require("@/assets/home.jpg"),
       }
         ] }
  },
  created: function () {
     console.log('hello');
     Axios.get('http://10.177.7.131:8003/products/getAllCategories')
       .then((response) => {
           console.log(response);
         this.cards = response.data;

       })
       .catch((error) => {
         console.log(error)
       })
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
