<template>
  <v-container style="margin-top:150px;">
 

    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 v-for="item in items" :key="item._id">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-media :src="item.productImage" height="150px" width="150px"></v-card-media>
            </v-flex>
            <v-flex>
              <v-card-title primary-title>
                <div class="text--black">
                  <div>
                    <h2>{{item.productName}}</h2>
                  </div>

                  <v-icon>mdi-anchor</v-icon>
                  <div>
                    <label class="text--black">
                      <b>usp:</b>
                    </label>
                    {{item.usp}}
                  </div>
                  <br>

                  <div>
                    <label class="text--black">
                      <b>Description:</b>
                    </label>
                    {{item.description}}
                  </div>
                  <br>

                  <v-btn
                    flat
                    class="purple lighten-5 purple--text"
                    type="submit"
                    v-bind:to="{name: 'SProduct', params: {id: item.productId }}"
                  >View Product</v-btn>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex>
              <v-card-title primary-title>
                <div class="text--black">
                  <div>
                    <h2>{{item.price}}</h2>
                  </div>
                  <br>

                  <div>
                    <label class="text--black">Material:</label>
                    {{item.specification.material}}
                  </div>
                  <div>
                    <label class="text--black">Color:</label>
                    {{item.specification.color}}
                  </div>
                  <br>
                  <div>
                    <label class="text--black">Ideal For:</label>
                    {{item.specification.idealFor}}
                  </div>
                  <br>
                  <div>
                    <label class="text--black">Ocassion:</label>
                    {{item.specification.occasion}}
                  </div>
                  <br>
                  <div>
                    <label class="text--black">pattern:</label>
                    {{item.specification.pattern}}
                  </div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <br>
    <br>
  </v-container>
</template>
<script>
import Axios from "axios";
import Vue from "vue";
export default {
  name: "app",

  data: function() {
    return {
      Enroll: "Enroll",
      items: [
        {
          productId: '',
          productName: '',
          description: '',
          usp:'',
          rating:'',
          productImage: require("@/assets/logo.png"),
          brand: {
            brandId: '',
            brandName: ''
          },
          specification: {
            specificationId: '',
            color: '',
            material:'',
            pattern: '',
            occasion: '',
            idealFor: ''
          },
          price: ''
        }
      ]
    };
  }
//   created: function () {
//     console.log('id is called')
  
    
//     console.log(this.$route.params.id)
    
 
//       Axios.get('http://10.177.7.131:8003/products/getAllProductsFromSubCategories/' + this.$route.params.id, {
        
//       })
//         .then((response) => {
//           this.items = response.data
//           console.log(response.data)
//         })
//         .catch((error) => {
//           console.log(error)
//         })
   
//   }
//   methods: {
//     addtocart(id) {
//       Axios.post(
//         "http://192.168.137.1:3000/student/course/enrollment/" + id,
//         null,
//         {
//           headers: {
//             Authorization: "bearer " + Vue.localStorage.get("token")
//           }
//         }
//       )
//         .then(r => console.log("r: ", JSON.stringify(r, null, 2)))
//         .catch(error => {
//           console.log(error.response);
//         });
//       //   window.alert('enrolled.')
//     }
//   }
}
</script>