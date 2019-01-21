<template>
    <div class="text-xs-center padding_products" >
        
        <div v-for="item in products" :key="item.photo">
            <v-layout>
                <v-flex xs12 sm6 md4 offset-md4>
                    <v-card>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Product Name</h3>
                                    <div>Product Usp</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat><v-icon left>shopping_cart</v-icon>ADD TO CART</v-btn>
                            </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>


<script>
//   import Axios from 'axios'

  export default {
    name: 'Products',

    data() {
      return {
    
       products: [
            {   
                photo: '',
                name: '',
                usp:''
            }
        ]
      }
    },

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