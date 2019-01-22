<template>
  <div style="margin-top:130px">
    <v-container class="justify-center text-xs-center">
      <v-layout>
        <v-flex style="background-color:#ccc" class="fonter" md4 offset-md4>
          <div>
            <v-tabs v-model="active" color="#ededed" slider-color="red">
              <v-tab v-for="(item,n) in cartproducts" :key="n" ripple>Item {{ n }}</v-tab>
              <v-tab-item  v-for="item in cartproducts" :key="item">
                <v-flex md12>
                  <v-card>
                    <v-card-media :src="src"></v-card-media>
                  </v-card>
                </v-flex>
                <v-flex style="text-align:left; font-family:sans-serif">
                  <p></p>
                  <p>&nbsp; Product Name: {{cartproducts}}</p>
                  <br>
                  <p>&nbsp; Product Quantity:</p>
                  <br>
                  <p>&nbsp; Product Price:</p>
                </v-flex>
                <v-card-actions>
                  <v-btn>ORDER</v-btn>
                </v-card-actions>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  data() {
    return {
      active: null,
      text: null,
      src: require("@/assets/new.jpg"),
      cartId:'',
      items: [
        {
          productId: "",
          productName: "",
          description: "",
          usp: "",
          rating: "",
          productImage: require("@/assets/logo.png"),
          brand: {
            brandId: "",
            brandName: ""
          },
          specification: {
            specificationId: "",
            color: "",
            material: "",
            pattern: "",
            occasion: "",
            idealFor: ""
          },
          price: ""
        }
      ],
       merchants: {
        merchantProductId: '',
        price: '',
        salePrice: '',
        stock: '',
        productId: '',
        merchant: {
          merchantId: '',
          merchantName: '',
          merchantCity: '',
          merchantRating: ''
        }
      },
      cartproducts: [
        {
          cartProductId: '',
          productId: '',
          productCount: '',
          merchantId: ''
        }
      ]
    };
  },
  created: function() {
    console.log("id is called");

    console.log(this.$route.params.id);
       
    Axios.get(
      "http://localhost:8080/cart/getAllproduct/4b726cbf-a5a1-4118-9d71-a239508b5172" 
    )
      .then(response => {
        this.cartproducts = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    //   Axios.get(
    //     "http://10.177.7.131:8003/products/getProduct/" + this.$route.params.id,
    //     {}
    //   )
    //     .then(response => {
    //       this.item = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    //     Axios.get(
    //     "http://10.177.7.120:8080/getPriorityMerchant/" + this.$route.params.id,
    //     {}
    //   )
    //     .then(response => {
    //       this.merchants = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
     
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
};
</script>
<style scoped>
.cart-action {
  display: flex;
}

.card-style {
  margin-top: 30px;
  margin-left: 30px;
}
</style>