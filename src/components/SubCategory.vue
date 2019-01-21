<template>
    <div class="text-xs-center padding_products" >
        
        <div v-for="item in sscats" :key="item.name">
            <v-layout>
                <v-flex xs12 sm6 md4 offset-md4>
                    <v-card>
                        <v-img :src="item.photo" aspect-ratio="2.75"></v-img>                   
                            <v-card-title primary-title class="justify-center">
                                <div>
                                    <v-btn flat><h3 style="font-family:sans-serif">{{ item.name }}</h3></v-btn>
                                    <!-- <div>Product Usp</div> -->
                                </div>
                            </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
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
                photo: 'static/Photos/new.jpg',
                name: 'Something1'
            },
             {   
                photo: 'static/Photos/electronics.jpg',
                name: 'Something2'
            },
             {   
                photo: 'static/Photos/electronics.jpg', 
                name: 'Something3'
            },
            {   
                photo: 'static/Photos/electronics.jpg',
                name: 'Something4'
            }
        ]
      }
    }
    // created: function () {
    //   console.log('hello')
    //   Axios.get('http://192.168.137.1:3000/student/course/view')
    //     .then((response) => {
    //       this.products = response.data
    //       console.log(this.products)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
  }
</script>

<style>
    .padding_products{
        margin-top: 180px
    }
</style>