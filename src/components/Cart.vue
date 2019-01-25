<template>
  <v-container fluid="true" style="margin-top:120px;" class="text-xs-center">
    <v-layout>
      <v-flex>
        <h1 style="font-size: 30px; font-family:sans-serif">Your Cart</h1>
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>
    <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field> -->
    <v-layout>
      <v-flex>
        <v-data-table :items="items" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>
              <img :src="props.item.productImage" style="width: 80px; height: 80px">
            </td>

            <td class="text-xs-left" style="font-size:20px">{{ props.item.productName }}</td>

            <td class="text-xs-left" style="font-size: 20px">{{ props.item.productCount}}</td>
            <td class="text-xs-left" style="font-size: 20px">{{ props.item.price}}</td>
            <td class="text-xs-left" style="font-size: 20px">{{ props.item.totalPrice}}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="increment(props.item)">
                <v-icon color="teal">add</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="decrement(props.item)">
                <v-icon color="teal">remove</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="deleteData(props.item.productId)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md6 offset-md3>
        <v-form ref="form" v-model="valid" lazy-validation  @submit.prevent="validate">
        <v-text-field
          v-model="address"
          label="Address"
          counter
          maxlength="120"
          full-width
          single-line
          :rules="nameRules"
          color="success"
          required
        ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn
          @click="validate"
          style="color:white; background-color:#2E86C1; width:40%"
          v-bind:to="{name: 'Orderh'}"
          :disabled="!valid"
        >Buy Now</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Axios from "axios";
import Vue from "vue";
import VueLocalStorage from "vue-localstorage";
export default {
  data() {
    return {
      active: null,
      text: null,
      orderID: "",
      totalPrice: "",
      valid: true,
      address: '',
      src: require("@/assets/new.jpg"),
      order: {
        userId: "",
        orderPlacedDate: "",
        orderID: ""
      },
      orderProducts: [],
      cart: {
        cartId: " "
      },
      items: [
        {
          merchantId: "",
          totalPrice: "",
          cartProductId: "",
          productId: "",
          productName: "",
          productImage: "",
          productCount: "",
          price: ""
        }
      ],
      nameRules: [
        v => !!v || "Address is required"
      ]
    };
  },
  methods: {
    async getDetail() {
      Axios.get(
        "http://localhost:8080/cart/getAllproductincart/4b726cbf-a5a1-4118-9d71-a239508b5172"
      )
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      Axios.get(
        "http://localhost:8080/cart/getcartId/4b726cbf-a5a1-4118-9d71-a239508b5172",
        {}
      )
        .then(response => {
          this.cart.cartId = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    increment(item) {
      const index = this.items.indexOf(item);
      item.productCount = item.productCount + 1;
      item.totalPrice = item.productCount * item.price;
      console.log(item);
      this.updateCart(item);
    },
    decrement(item) {
      if (item.productCount > 1) {
        item.productCount = item.productCount - 1;
        item.totalPrice = item.productCount * item.price;
        this.updateCart(item);
        //this.globalCost=this.globalCost-this.item.price*(this.foo);
      }
    },
    deleteData(_id) {
      if (confirm("Are you sure to remove this item?")) {
        Axios.delete(
          "http://localhost:8080/cartproduct/delete/4b726cbf-a5a1-4118-9d71-a239508b5172/" +
            _id,
          {
            headers: {
              // 'Authorization': 'bearer ' + Vue.localStorage.get('token')
            }
          }
        )
          .then(res => {
            dialog1 = false;
            alert("Deleted Sucessfully");
          })
          .catch(function(error) {
            alert("Try Deleting again");
          });
        window.location.reload();
      }
    },
    updateCart(item) {
      var payload = {
        cartProductId: item.cartProductId,
        cart: this.cart,
        productId: item.productId,
        productCount: item.productCount,
        merchantId: item.merchantId
      };
      console.log(item.merchantId);
      Axios.put(" http://localhost:8080/cartproduct/update", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(console.log(fd))
        .catch(error => {
          console.log(error.response);
        });
    },
    deleteAll() {
      Axios.delete(
        "http://localhost:8080/cart/deleteproduct/4b726cbf-a5a1-4118-9d71-a239508b5172"
      )
        .then(res => {})
        .catch(function(error) {});
      window.location.reload();
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        for (var i = 0; i < this.items.length; i++) {
        var pricef = this.items[i].price * this.items[i].productCount;
        Vue.set(this.orderProducts, i, {
          productId: this.items[i].productId,
          productCount: this.items[i].productCount,
          price: pricef
        });
      } //  console.log( orderProducts.productId[i])};
      var ordert = {
        userId: "4b726cbf-a5a1-4118-9d71-a239508b5172",
        orderPlacedDate: new Date().toISOString().substr(0, 10),
        orderProducts: this.orderProducts
      };
      Axios.post("http://localhost:8080/order/add", ordert, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {})
        .catch(error => {
          console.log(error.response);
        });
      Axios.get("http://localhost:8080/send")
        .then(response => {})
        .catch(error => {
          console.log(error.response);
        });
      for (var i = 0; i < this.items.length; i++) {
        var pid = this.orderProducts[i].productId;
        var mid = this.items[i].merchantId;
        var count = this.orderProducts[i].productCount;
        Axios.post(
          "http://localhost:8080/updateMerchantStock/" +
            pid +
            "/" +
            mid +
            "/" +
            count
        )
          .then(response => {})
          .catch(error => {
            console.log(error.response);
          });
      }
      this.deleteAll();
      }
      }
  }
}
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