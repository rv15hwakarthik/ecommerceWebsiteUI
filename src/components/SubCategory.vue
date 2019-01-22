<template>
    <div class="text-xs-center padding_products" >

        <!-- <div v-for="item in sscats" :key="item.name">
            <v-layout>
                <v-flex xs12 sm6 md4 offset-md4>
                    <v-card>
                        <v-img :src="item.photo" aspect-ratio="2.75"></v-img>
                            <v-card-title primary-title class="justify-center">
                                <div>
                                    <v-btn flat v-bind:to="{name: 'Products', params: {name: item.name} }"><h3 style="font-family:sans-serif">{{ item.name }}</h3></v-btn>
                                </div>
                            </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </div> -->
               <v-layout column>
          <v-flex xs3 sm4 >

            <v-card>
              <v-container fluid grid-list-md>
                <v-layout row wrap>
                  <v-flex md3
                  v-bind="{ [`xs${item.flex}`]: true }"
                    v-for="item in sscats"
                    :key="item.name"
                  >

                    <v-card width="250" height="250">
                      <v-card-media
                        :src="item.photo"
                        height="200px"
                        contain
                      >
                      </v-card-media>


                        <v-card-actions>

                          <v-btn absolute bottom  style="margin-top: auto"  color=""
                                 v-bind:to="{name: 'Products', params: {name: item.name} }">{{item.name}}
                          </v-btn>
                        </v-card-actions>

                        <br>
                        <br>

                    </v-card>
                    <v-spacer></v-spacer>
                    <br><br>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
    </div>
</template>


<script>
//   import Axios from 'axios'

  export default {
    name: 'Subcategory',

    data() {
      return {
       sscats: [
            {
                photo: require('@/assets/10.jpg'),
                name: 'TV'
            },
             {
                photo: require('@/assets/10.jpg'),
                name: 'FRIDGE'
            },
             {
                photo: require('@/assets/10.jpg'),
                name: 'WASHING MACHINE'
            },
            {
                photo: require('@/assets/10.jpg'),
                name: 'AC'
            },
            {
                photo: require('@/assets/10.jpg'),
                name: 'TV'
            },
             {
                photo: require('@/assets/10.jpg'),
                name: 'FRIDGE'
            },
             {
                photo: require('@/assets/10.jpg'),
                name: 'WASHING MACHINE'
            },
            {
                photo: require('@/assets/10.jpg'),
                name: 'AC'
            }
        ]
      }
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

<style>
    .padding_products{
        margin-top: 180px
    }
</style>
