<template>
  <div class="container" style="margin-top:150px;">
    
 <div>
   <v-container class="justify-center text-xs-center" >
     <v-layout>
       <v-flex style="background-color:#ccc" class="fonter" md8 offset-md2>
         <v-card-media :src="require('@/assets/ThankyouPage.jpg')"></v-card-media>
         <h3
           style="font-size:250%; padding-top:10px; font-family:sans-serif"
         >Thank you for shopping with us!</h3>
         <v-layout>
           <v-flex md4 offset-md4>
             <div
               style="font-size:180%;font-family:sans-serif; margin-top:20px"
             >A confirmation mail has been sent to your email</div>
           </v-flex>
         </v-layout>
         <div style="font-size:180%;font-family:sans-serif;">
           <v-btn 
                      flat
                      type="submit"
                      v-bind:to="{name: 'Home'}" > Back to Shopping?</v-btn>
         </div>
       </v-flex>
     </v-layout>
   </v-container>
 </div>




    <h1 align="center" style="font-family:sans-serif; margin-top:90px">Order History</h1>
    <div v-for="(item,i) in products" :key="item.name">
      <v-container>
        <v-layout>
          <v-flex md7 offset-md2>
            <v-card flat>
              <v-layout>
                <v-flex>
                  <div style="font-family : sans-serif">
                    <div style="margin-left:30px; margin-top:10px;">
                      <p>
        
                      Order {{i+1}}&nbsp;
                      </p>
                    </div>
                    <div style="margin-left:30px; margin-top:10px;">
                      <p>
                        <b>Date :</b>
                        {{item.orderPlacedDate}}&nbsp;
                      </p>
                    </div>
                    <div style="margin-left:30px; margin-top:10px;">
                      <p>
                        <b>Quantity:</b>
                        {{item.orderProducts.length}}
                      </p>
                    </div>
                    <div class="text-sm-center">
<v-btn
                      flat
                      type="submit"
                      v-bind:to="{name: 'Orderhistory ', params: {id: item.orderId }}"
                    >View Details</v-btn>
                    <v-icon>mdi-anchor</v-icon>

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
 import Axios from 'axios'
 import Vue from "vue";
import VueLocalStorage from "vue-localstorage";
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          orderId: "",
          userId: "",
          orderPlacedDate:'',
          orderProducts: [
            {
              orderProductId: '',
              productId:'',
              productCount: '',
              price: ''
            }
          ]
        }
      ]
    };
  },
  created: function() {
    console.log("id is called");

    Axios.get("http://localhost:8080/getAllorder/"+ Vue.localStorage.get('token'),{

      headers: {
          "userId": Vue.localStorage.get('token')
        }  
    })
      .then(response => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch(error => {
    
           this.$router.push('/login')
      });
  }
 
};
</script>