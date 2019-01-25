<template>
  <v-container fluid style="margin-top:150px;">
    <Nav></Nav>
    <v-flex xs12 sm10 md8>
      <v-toolbar color="#337ab7" dark>
        <v-toolbar-title>Product Details</v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-layout row wrap>
      <v-card flat>
        <v-layout row wrap>
          <v-flex xs6 sm4 md5>
            <v-card flat class="rounded-card">
              <v-img class="white--text" height="450px" width="auto" :src="item.productImage"></v-img>
            </v-card>
          </v-flex>

          <v-flex xs4 sm4 md6 offset-sm1>
            <v-card-text>
              <h3>{{item.productName}}</h3>
              <b>{{overallrate}}</b>
              <v-icon style="color:#33691E;">star</v-icon>
              <b>{{item.brand.brandName}}</b>
              <br>
              <strike>Rs.{{merchants.price}}</strike>&nbsp;&nbsp;
              <i>Rs.{{merchants.salePrice}}</i>&nbsp;&nbsp;
              <h3>Description</h3>
              <br>
              {{item.description}}
              <br>
              <br>
              <br>
              <br>
              <h3>Features</h3>
              <br>
              <li v-for="(ite,i) in item.specification" :key="i">{{i}} : {{ite}}</li>
              <br>

              <v-btn
                round
                color="#FF8C00"
                v-bind:to="{name: 'Cart', params: {id: item.productId }}"
                @click="addtocart"
              >
                <b>Add To Cart</b>
              </v-btn>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs6 style="margin-top:50px;">
            <v-toolbar color="#B3E5FC" dark>
              <v-toolbar-title>
                <h5 style="color=#01579B">Product Reviews and Ratings by various Customers</h5>
              </v-toolbar-title>
            </v-toolbar>

            <v-card flat>
              <v-flex offset-sm1>
                <v-flex
                  v-bind="{ [`xs${item.flex}`]: true }"
                  v-for="rate in item.userReviews"
                  :key="rate.productId"
                >
                  <v-card flat>
                    {{rate.userComment}}
                    <span class="blue--text ml-4">
                      {{rate.userRatingOnProduct}}
                      <v-icon>star</v-icon>
                    </span>
                  </v-card>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>

      <v-flex xs3 sm2 md3 offset-sm1 >
          <v-card flat>
            <v-toolbar color="#faebcc" dark>
              <v-toolbar-title>
                <b style="color:black;">Merchant Information</b>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <h2>
                <b>{{merchants.merchant.merchantName}}</b>
              </h2>

              <b>{{merchants.merchant.merchantCity}}
                {{merchants.merchant.merchantRating}}</b>
              <v-icon style="color:#33691E;">star</v-icon>

              <br>
              <v-alert :value="true" color="black" background-color="#E6EE9C" icon="info" outline>
                <p>Merchant Rating is calculated on various factors and algorithm designed by SabKuch</p>
              </v-alert>
              <br>
            </v-card-text>
          </v-card>
       
      </v-flex>
       
    </v-layout>
  </v-container>
</template>
<script>
import Axios from "axios";
import Vue from "vue";
import nav from "@/components/Nav";
import VueLocalStorage from "vue-localstorage";
export default {
  name: "app",
  components: {
    Nav:nav
  },
  data() {
    return {
      foo: 1,
      overallrate: "",
      qty: 1,
      discount: "",
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
            productId: "",
            userComment: "",
            userRatingOnProduct: ""
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
        .catch(error => {});

      Axios.get(
        "http://10.177.7.131:8003/products/getProductRating/" +
          this.$route.params.id
      )
        .then(response => {
          this.overallrate = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });

      Axios.get(
        "http://localhost:8080/cart/getcartId/"+  Vue.localStorage.get('token'),{
        headers: {
          "userId": Vue.localStorage.get('token')
        }}
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
          "Content-Type": "application/json",
          "userId": Vue.localStorage.get('token')
        }
      })
        .then()
        .catch(error => {
          console.log(error.response);
            this.$router.push('/login')
        });
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>