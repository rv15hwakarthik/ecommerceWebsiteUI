<template>
  <div class="container">
    <h1 align="center" style="font-family:sans-serif; margin-top:90px">Order History</h1>
    <div v-for="item in products" :key="item.name">
      <v-container>
        <v-layout>
          <v-flex md7 offset-md2>
            <v-card>
              <v-layout>
                <v-flex>
                  <v-img :src="item.photo"></v-img>
                </v-flex>
                <v-flex>
                  <div style="font-family : sans-serif">
                    <div style="margin-left:50px; margin-top:10px;">
                      <p>PRODUCT NAME : {{item.name}}</p>
                    </div>
                    <div style="margin-left:50px">
                      <p>Order Date : {{item.OrderDate}}</p>
                    </div>
                    <div style="margin-left:50px">
                      <p>PRICE : {{item.price}}</p>
                    </div>
                    <div style="margin-left:50px">
                      <p>QUANTITY : {{item.quantity}}</p>
                    </div>
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
// import Axios from 'axios'

export default {
  name: "Products",

  data() {
    return {
      products: [
        {
          photo: require("@/assets/261.jpg"),
          name: "special",
          OrderDate: "25-10-2019",
          price: 25000,
          quantity: 2
        },
        {
          photo: require("@/assets/261.jpg"),
          name: "iphone",
          OrderDate: "25-10-2019",
          price: 25000,
          quantity: 2
        },
        {
          photo: require("@/assets/261.jpg"),
          name: "nokia",
          OrderDate: "25-10-2019",
          price: 25000,
          quantity: 2
        },
        {
          photo: require("@/assets/261.jpg"),
          name: "nokia",
          OrderDate: "25-10-2019",
          price: 25000,
          quantity: 2
        },
        {
          photo: require("@/assets/261.jpg"),
          name: "nokia",
          OrderDate: "25-10-2019",
          price: 25000,
          quantity: 2
        }
      ]
    };
  }
};
</script>
