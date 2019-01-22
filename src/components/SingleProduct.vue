<template>
  <v-container fluid style="margin-top:150px;">
    <v-layout row wrap>
      <v-card width="900px" flat="true">
        <v-layout row>
          <v-flex xs12 offset-sm1>
            <v-flex justify-center>
              <div offset-sm2>
                <h1>{{item.productName}}</h1>
              </div>
              <div>Brand:{{item.brandName}}</div>

              <v-divider></v-divider>
            </v-flex>

            <v-layout row>
              <v-flex xs5>
                <br>
                <v-img :src="item.productImage" height="125px" contain></v-img>
              </v-flex>
              <v-flex xs7 offset-sm3>
                <v-card-title primary-title>
                  <div>
                    <v-flex>
                      <h1>
                        <div class="headline">
                          Price:
                        {{merchants.price}}  
                        </div>
                      </h1>
                    </v-flex>
                    <v-divider></v-divider>
                    <br>
                    <v-flex>
                      <v-btn @click.prevent="increment">+</v-btn>
                      <v-text-field v-model="foo" label="Quantity"></v-text-field>
                      <v-btn @click.prevent="decrement">-</v-btn>
                    </v-flex>
                    <v-btn
                      color="orange"
                      v-bind:to="{name: 'Cart', params: {id: item.productId }}"
                    >Add To Cart</v-btn>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-flex offset-sm1>
          <v-card-title primary-title>
            <div class="text--black">
              <div>
                <h2>Features</h2>
                <li v-for="(ite,i) in item.specification" :key="i">{{i}} : {{ite}}</li>
              </div>
              <br>

              <br>
              <div>
                <label class="text--black"></label>
              
              </div>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex offset-sm1>
          <v-card flat="true">
            <h2>Ratings And Reviews</h2>
            <br>
            <v-card flat="true">
              <v-rating v-model="item.rating"></v-rating>dhgxvabjnsk
              dxjhvbskn
            </v-card>
            <v-card flat="true">
              <v-rating v-model="item.rating"></v-rating>tuhdub
              dhgxvabjnsk
              dxjhvbskn
            </v-card>
            <v-card flat="true">
              <v-rating v-model="item.rating"></v-rating>tuhdub
              dhgxvabjnsk
              dxjhvbskn
            </v-card>
            <v-card flat="true">
              <v-rating v-model="item.rating"></v-rating>tuhdub
              dhgxvabjnsk
              dxjhvbskn
            </v-card>
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
       <div>Name: <span class="blue--text ml-4">{{merchants.merchant.merchantName}}</span></div>
          <br>

          <v-divider></v-divider>
  
          <div>
           <div > Rating:<span class="blue--text ml-4">{{merchants.merchant.merchantRating}}<v-icon>star</v-icon></span></div>
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
  import menuuu from '@/components/AllMerchants'
export default {
  name: "app",
components: {
      'merchant': menuuu,
   
    },
  data() {
    return {
      foo: 1,
      qty: 1,

      globalPrice: 0,
      merchants: {
        merchantProductId: "",
        price: "",
        salePrice: "",
        stock: 10,
        productId: "",
        merchant: {
          merchantId: "",
          merchantName: "",
          merchantCity: "",
          merchantRating: ""
        }
      },
      item: {
        productId: "5c46a9772befdb05127d2b22",
        productName: "Asus Laptop 8 GB RAM 500 GB Storage",
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
          color: "dhgj",
          material: "dcd",
          pattern: "cdc",
          occasion: "cdcddc",
          idealFor: "cdcdc"
        },
      },
      globalCost: 0
    };
  },
  created: function() {
  
    Axios.get(
      "http://10.177.7.120:8080/getPriorityMerchant/" + this.$route.params.id,
      {}
    )
      .then(response => {
        this.merchants = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(
      "http://10.177.7.131:8003/products/getProduct/" + this.$route.params.id,
      { }
    )
      .then(response => {
        this.item = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    updateQuantity() {
      this.globalCost = this.globalPrice;
      console.log(this.item.price);
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
    }
  }

  // methods: {
  //   onFileSelected (event) {
  //     this.subtopic_assignment_submission = event.target.files[0]
  //     console.log(this.subtopic_assignment_submission)
  //   },
  //   async getDetail () {
  //     console.log('view id called')
  //     var jwt = Vue.localStorage.get('token')
  //     console.log('view id called' + jwt)
  //     console.log(this.$route.params._id)
  //     if (jwt) {
  //       Axios.get('http://192.168.137.1:3000/student/course/subtopics/' + this.$route.params.id,
  //         {
  //           headers: {
  //             'Authorization': 'bearer ' + Vue.localStorage.get('token')
  //           }
  //         })
  //         .then((response) => {
  //           console.log(response.data[0])
  //           this.items = response.data[0]
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //     } else {
  //       this.$router.push('/student/login')
  //     }
  //   },
  //   PostAssignment () {
  //     const fd = new FormData()
  //     var jwt = Vue.localStorage.get('token')
  //     console.log(this.$route.params.id)
  //     console.log(this.subtopic_assignment_submission)
  //     console.log('view id called' + jwt)
  //     if (jwt) {
  //       fd.append('subtopic_assignment_submission', this.subtopic_assignment_submission)
  //       Axios.post('http://192.168.137.1:3000/student/course/assignment/' + this.$route.params.id, fd,
  //         {
  //           headers: {
  //             'Content-type': 'multipart/form-data',
  //             'Authorization': 'bearer ' + Vue.localStorage.get('token')
  //           }
  //         })
  //         .then(r => console.log('r: ', JSON.stringify(r, null, 2)))
  //         .catch(error => {
  //           console.log(error.response)
  //         })
  //     } else {
  //       this.$router.push('/student/login')
  //     }
  //   }
  // },
  // mounted () {
  //   this.getDetail()
  // }
};
</script>