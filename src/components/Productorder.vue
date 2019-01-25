<template>
  <div class="container" style="margin-top:150px;">
    <h1 align="center" style="font-family:sans-serif; margin-top:90px">Detailed Order History</h1>
    <div v-for="(item,i) in orderProducts" :key="item.name">
      <v-container>
        <v-layout>
          <v-flex md7 offset-md2>
            <v-card flat>
              <v-layout>
                <v-flex>
                  <div style="font-family : sans-serif">
                    <div style="margin-left:30px; margin-top:10px;">
                      <h3>{{items[i].productName}}</h3>&nbsp;
                    </div>
                    <div style="margin-left:30px; margin-top:10px;">
                      <p>
                        <b>Price:</b>
                        {{item.price}}&nbsp;
                      </p>
                    </div>
                    <div style="margin-left:30px; margin-top:10px;">
                      <p>
                        <b>Quantity:</b>
                        {{item.productCount}}
                      </p>
                    </div>
                    <div>
                      <v-text-field style="margin-left:60px;" label="Reviews" single-line outline :id="'review'+i"></v-text-field>
                    </div>
                    <div class="text-sm-center">
                      <v-rating
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$vuetify.icons.ratingFull"
                        half-increments
                        hover
                       :id="'rating'+i"
                       v-model="rating[i]"
                      ></v-rating>
                    </div>

                    <v-btn color="orange" @click="addreview(i)">Submit</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import Vue from "vue";
export default {
  name: "Products",
  data() {
    return {
    rating:[]
,      orderProducts: [
        {
          orderProductId: "",
          productId: "",
          productCount: "",
          price: ""
        }
      ],

      items: [  
          {
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
      }
      ]
    };
  },

  created: function() {
    Axios.get(
      "http://localhost:8080/getAllorderProducts/" + this.$route.params.id
    )
      .then(response => {
        this.orderProducts = response.data;

        for (var i = 0; i < response.data.length; i++) {
          this.getStuff(i, response.data[i].productId);
        }
        console.log(this.items);
      })

      .catch(error => {
        console.log(error);
      });

    // },
  },
  methods: {
    getStuff(i, id) {
      Axios.get("http://17552ce1.ngrok.io/products/getProduct/" + id)
        .then(response1 => {
          Vue.set(this.items,i,response1.data)})
        .catch(error => {
          console.log(error);
        });
    },
    addreview(index) {
        console.log(index);
      var rev= document.getElementById("review"+index).value
    
       console.log(rev);
       console.log(this.items[index].productId);
      Axios.put(
        "http://17552ce1.ngrok.io/products/updateProduct/" +
          this.items[index].productId +
          "?comment=" +
          rev +
          "&userRating=" +
       this.rating[index]
      )
        .then( this.$router.push('/'))
        .catch(error => {
          console.log(error.response);
        });
            
    }
  }
};
</script>