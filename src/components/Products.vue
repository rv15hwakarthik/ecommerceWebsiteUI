<template>
  <v-container style="margin-top:150px;">
    <v-layout column>
      <v-flex xs3 sm4>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex md4 v-bind="{ [`xs${item.flex}`]: true }" v-for="item in items" :key="item._id">
              <v-card>
                <v-card-media :src="item.productImage" height="200px" contain></v-card-media>

                <v-flex>
                  <v-card-title primary-title>
                    <h2>{{item.productName}}</h2>

                    <v-btn
                      flat 
                      type="submit"
                      v-bind:to="{name: 'SProduct', params: {id: item.productId }}"
                    >View Product</v-btn>
                    <v-icon>mdi-anchor</v-icon>

                    <s>price</s>
                    Saleprice
                    <br>
                  </v-card-title>
                </v-flex>
              </v-card>
              <v-spacer></v-spacer>
              <!--no use-->
              <br>
              <br>
            </v-flex>
          </v-layout>
        </v-container>
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
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
        },
        {
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
        },
        {
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
        },
        {
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
        },
        {
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
        },
        {
          productName: "",

          productImage: require("@/assets/logo.png"),
          Saleprice: "",
          price: ""
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
};
</script>