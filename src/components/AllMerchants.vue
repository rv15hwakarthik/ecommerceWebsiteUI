<template>
  <v-layout>
  
        <v-flex xs6 sm2 md5 offset-sm1 style="margin-top:50px;" flat>
            <v-toolbar color="#B3E5FC" dark>
              <v-toolbar-title>
                <h5 style="color=#01579B">Other Merchants Selling this Product</h5>
              </v-toolbar-title>
            </v-toolbar>
            <v-data-table :items="merchants" class="elevation-1" >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.merchants.merchantName }}</td>
                <td>{{ props.item.merchants.merchantRating }}</td>
              </template>
              <template
                slot="pageText"
                slot-scope="props"
              >Lines {{ props.pageStart }} - {{ props.pageStop }} to {{ props.itemsLength }}</template>
            </v-data-table>
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
      merchants: [
        {
          merchantProductId: "",
          price: "",
          salePrice: "",
          stock: "",
          productId: "",
          merchant: {
            merchantId: "",
            merchantName: "",
            merchantCity: "",
            merchantRating: ""
          }
        }
      ]
    };
  },
  created: function() {
    Axios.get(
      "http://10.177.7.120:8080/getMerchantFromProductId/" +
        this.$route.params.id,
      {}
    )
      .then(response => {
        this.merchants = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>