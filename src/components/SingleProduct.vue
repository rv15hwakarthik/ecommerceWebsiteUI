<template>
  <v-container fluid style="margin-top:150px;">
    <v-layout row wrap>
      <v-card width="900px">
        <v-layout row>
          <v-flex xs12 offset-sm1>
            <v-flex justify-center>
              <div offset-sm2>
                <h1>{{item.productName}}</h1>    {{overallrate}}<v-icon>star</v-icon>

              </div>
              <div>Brand:{{item.brand.brandName}}</div>

              <v-divider></v-divider>
            </v-flex>

            <v-layout row>
              <v-flex xs6>
                <br>
                <v-card-media :src="item.productImage" height="150px" width="300px" contain></v-card-media>
              </v-flex>
              <v-flex xs8 offset-sm1>
                <v-card-title primary-title>
                  <div>
                    <v-flex offset-sm1>
                      <h1>
                        <div class="headline">
                          Actual Price
                          Rs.<s>{{merchants.price}}</s>
                          <br>
                      Discounted Price:Rs.{{merchants.salePrice}}
                    
                        </div>
                      </h1>
                    </v-flex>
                    <v-divider></v-divider>
                    <br>
                    <v-flex>
                      <v-text-field
                        prepend-icon="remove"
                        :prepend-icon-cb="decrement"
                        append-icon="add"
                        v-model="foo"
                        label="Quantity"
                        :append-icon-cb="increment"
                      ></v-text-field>
                    </v-flex>
                    <v-btn
                      color="orange"
                      v-bind:to="{name: 'Cart', params: {id: item.productId }}"
                      @click="addtocart"
                    >Add To Cart</v-btn>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex offset-sm1>
            <v-card-title primary-title>
              <div class="text--black">
                <div>
                  <h2>Features</h2>
                  <li v-for="(ite,i) in item.specification" :key="i">{{i}} : {{ite}}</li>
                </div>
                <br>

                <br>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex offset-sm1>
            <v-card-title>
              <div>
                <h2>Description</h2>
                <br>
                {{item.description}}
                <br>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-flex offset-sm1>
          <v-card flat="true">
            <h2>Ratings And Reviews</h2>
            <br>
        <v-flex v-bind="{ [`xs${item.flex}`]: true }" v-for="rate in item.userReviews" :key="rate.productId">
       <v-card>
           {{rate.userComment}}
           <span class="blue--text ml-4">
             {{rate.userRatingOnProduct}} 
              <v-icon>star</v-icon>
            </span></v-card>
      </v-flex>
          </v-card>
        </v-flex>
      </v-card>
      <v-divider></v-divider>
      <v-flex>
        <v-card height="200px" width="300px" flat="true">
          <h2>Merchant Info
            <br>Sold By
          </h2>
          <br>
          <div>
            Name:
            <span class="blue--text ml-4">{{merchants.merchant.merchantName}}</span>
          </div>
          <div>
            City:
            <span class="blue--text ml-4">{{merchants.merchant.merchantCity}}</span>
          </div>

          <div>
            Rating:
            <span class="blue--text ml-4">
              {{merchants.merchant.merchantRating}}
              <v-icon>star</v-icon>
            </span>
          </div>
        </v-card>
        <br>
        <br>

        <v-card height="200px" width="300px" flat="true">
          <merchant></merchant>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Axios from "axios";
import Vue from "vue";
import menuuu from "@/components/AllMerchants";
import VueLocalStorage from "vue-localstorage";
export default {
  name: "app",
  components: {
    merchant: menuuu
  },
  data() {
    return {
      foo: 1,
      overallrate:"",
      qty: 1,
      discount:"",
      cart: {
        cartId: ""
      },
      globalPrice: 0,
      merchants: {
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
      },
      item: {
        productId: "",
        productName: "",
        description: "",
        usp: "",
        rating: "",
        productImage: require("@/assets/fashion.jpg"),
        brand: {
          brandId: "",
          brandName: ""
        },
        specification: {},
        userReviews: [
          {
            productId: '',
            userComment: '',
            userRatingOnProduct: ''
          }
          
        ]
      },
      globalCost: 0
    };
  },

  methods: {
    updateQuantity() {
      this.globalCost = this.globalPrice;
      
    },
    increment() {
      this.foo = parseInt(this.foo, 10) + 1;
      this.globalPrice = this.merchant.price * this.foo;
      this.updateQuantity();
    },
    decrement() {
      if (this.foo > 1) {
        this.foo = parseInt(this.foo, 10) - 1;
        this.globalPrice = this.merchant.price * this.foo;
        //this.globalCost=this.globalCost-this.item.price*(this.foo);
        this.updateQuantity();
      }
    },
    async getDetail() {
      Axios.get(
        "http://10.177.7.120:8080/getPriorityMerchant/" + this.$route.params.id,
        {}
      )
        .then(response => {
          this.merchants = response.data;
          
        })
        .catch(error => {
       
        });
        
 Axios.get(
        "http://10.177.7.131:8003/products/getProductRating/" + this.$route.params.id,
       )
        .then(response => {
         this.overallrate=response.data
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });

      Axios.get(
        "http://localhost:8080/cart/getcartId/4b726cbf-a5a1-4118-9d71-a239508b5172",
      
      )
        .then(response => {
          this.cart.cartId = response.data;
        
        })
        .catch(error => {
          console.log(error);
        });
      Axios.get(
        "http://10.177.7.131:8003/products/getProduct/" + this.$route.params.id,
        {}
      )
        .then(response => {
          this.item = response.data;
          
        })
        .catch(error => {
          console.log(error);
        });
    },

    addtocart() {
      var payload = {
        cart: this.cart,
        productId: this.item.productId,
        productCount: this.foo,
        merchantId: this.merchants.merchant.merchantId
      };
    
      Axios.post("http://localhost:8080/cartproduct/add", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then()
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>