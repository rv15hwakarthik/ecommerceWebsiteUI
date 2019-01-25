<template>
  <v-container fluid="true" style="margin-top:150px;">
    <v-layout>
      <v-flex offset-sm1>
        <h1 style="font-size: 30px">Your Cart</h1>
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>
    <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field> -->
    <v-btn  @click="buynow" 
v-bind:to="{name: 'Orderh'}"
    >Buy Now</v-btn>
    <v-layout>
      <v-flex>
        <v-data-table :items="items" class="elevation-1" >
          <template slot="items" slot-scope="props">
              <td><img :src="props.item.productImage" style="width: 80px; height: 80px"></td>
           
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
      src: require("@/assets/new.jpg"),
      order: {
        userId: "",
        orderPlacedDate: "",
        orderID:""
      },
      orderProducts: [
      ],
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
      ]
    };
  },

  methods: {
    async getDetail() {
        
      Axios.get(
        "http://localhost:8080/cart/getAllproductincart/"+ Vue.localStorage.get('token'),{
        headers: {
              "userId": Vue.localStorage.get('token')
            }}
      )
        .then(response => {
          this.items = response.data;
        
        })
        .catch(error => {
          console.log(error);
          // this.$router.push('/login')
        });
      Axios.get(
        "http://localhost:8080/cart/getcartId/"+ Vue.localStorage.get('token'),{
        headers: {

              "userId": Vue.localStorage.get('token')
            }}
      )
        .then(response => {
          this.cart.cartId = response.data;
        })
        .catch(error => {
          console.log(error);
          this.$router.push('/login')
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
          "http://localhost:8080/cartproduct/delete/" + Vue.localStorage.get('token')+"/"+
            _id,
          {
            headers: {

              "userId": Vue.localStorage.get('token')
            }
          }
        )
          .then(res => {
            dialog1 = false;
            alert("Deleted Sucessfully");
          })
          .catch(function(error) {
            alert("Try Deleting again");
            // this.$router.push('/login')
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
          "Content-Type": "application/json",
          "userId": Vue.localStorage.get('token')
        }
      })
        .then(console.log(fd))
        .catch(error => {
          console.log(error.response);
         //   this.$router.push('/login')
        });
    },
 deleteAll(){
       Axios.delete(
        "http://localhost:8080/cart/deleteproduct/"+ Vue.localStorage.get('token'),{
         headers: {
          "userId": Vue.localStorage.get('token')
        }  
        }
      )
        .then(res => {
  
        })
        .catch(function(error) {
           this.$router.push('/login')
        });
           window.location.reload();
 },
    buynow(){
         for (var i = 0; i < this.items.length; i++) {
        var pricef=this.items[i].price*this.items[i].productCount
       Vue.set(this.orderProducts, i, {productId: this.items[i].productId,productCount: this.items[i].productCount,price:pricef});
  
  }     //  console.log( orderProducts.productId[i])};
      var ordert = {
        userId:  Vue.localStorage.get('token'),
        orderPlacedDate:new Date().toISOString().substr(0, 19),
       orderProducts:this.orderProducts
      };

      Axios.post("http://localhost:8080/order/add", ordert, {
        headers: {
          "Content-Type": "application/json",
         "userId":  Vue.localStorage.get('token')
        }
      })
        .then(response => { 
        })
        .catch(error => {
          console.log(error.response);
           this.$router.push('/login')
        });
         Axios.get("http://localhost:8080/send" 
       )
        .then(response => { 
        })
        .catch(error => {
          console.log(error.response);
        });
for(var i=0;i<this.items.length;i++){
var pid=this.orderProducts[i].productId;
var mid=this.items[i].merchantId;
var count=this.orderProducts[i].productCount;
Axios.post("http://localhost:8080/updateMerchantStock/"+pid+"/"+mid+"/"+count)
        .then(response => { 
        })
        .catch(error => {
          console.log(error.response);
        });

}

     this.deleteAll();
    }
  },
  mounted() {
    this.getDetail();
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