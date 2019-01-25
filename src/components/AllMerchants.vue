<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-card height="200px" width="300px" flat="true">
        <h2>Product By Other Merchants</h2>
        <v-divider></v-divider>
        <v-card flat="true">
          <br>
        </v-card>
        <br>
          <v-flex
                  v-bind="{ [`xs${card.flex}`]: true }"
                    v-for="card in merchants"
                    :key="card.merchantId"
                  >
                   <v-card >
          <br><h3>Sold By</h3>
          <br>
          <v-divider></v-divider>
         <v-flex  offset-sm1>
         <div> Name:<span class="blue--text ml-4">{{card.merchant.merchantName}}</span></div>
          <br>
        <div>  City:<span class="blue--text ml-4">{{card.merchant.merchantCity}}</span></div>
           <br>
           <div > Price:<span class="blue--text ml-4">{{card.price}}</span></div>
            <br>
           <div > Rating:<span class="blue--text ml-4">{{card.merchant.merchantRating}}<v-icon>star</v-icon></span></div>
         </v-flex>   <v-flex offset-sm6> <v-btn>View</v-btn></v-flex> </v-card>
          </v-flex>
       
        <br>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Axios from "axios";
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      foo: 1,
      qty: 1,
      globalPrice: 0,
      merchants: [ {
        merchantProductId: '',
        price: '',
        salePrice: '',
        stock: '',
        productId: '',
        merchant: {
         merchantId: "",
          merchantName: '',
          merchantCity: '',
          merchantRating: ''
        }
      
      }]
    }
  },
//   created: function() {
//     Axios.get(
//       "http://10.177.7.120:8080/getMerchantFromProductId/" + this.$route.params.id,
//       {}
//     )
//       .then(response => {
//         this.merchants = response.data;
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
}
</script>