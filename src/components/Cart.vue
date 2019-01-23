<template>
  <div style="margin-top:130px">
    <v-container class="justify-center text-xs-center">
      <v-layout>
        <v-flex style="background-color:#ccc" class="fonter" md4 offset-md4>
          <div>
            <v-tabs v-model="active" color="#ededed" slider-color="red">
              <v-tab v-for="(item,n) in items" :key="n" ripple>Item {{ n }}</v-tab>
              <v-tab-item  v-for="item in items" :key="item">
                <v-flex md12>
                  <v-card>
                    <v-card-media :src="item.productImage"
                        height="200px"
                        contain></v-card-media>
                  </v-card>
                </v-flex>
                <v-flex style="text-align:left; font-family:sans-serif">
                  <p></p>
                  <p>&nbsp; Product Name: {{item.productName}}</p>
                  <br>
                  <p>&nbsp; Product Quantity:{{item.productCount}}</p>
                  <br>
                  <p>&nbsp; Product Price:{{item.price}}</p>
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
          productImage: require("@/assets/logo.png"),
          productCount:'',
          price: ""
        }
      ]
    
      
    };
  },
  created: function() {
    console.log("id is called");

    console.log(this.$route.params.id);
       
    Axios.get(
      "http://localhost:8080/cart//getAllproductincart/4b726cbf-a5a1-4118-9d71-a239508b5172" 
    )
      .then(response => {
        this.items = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  
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