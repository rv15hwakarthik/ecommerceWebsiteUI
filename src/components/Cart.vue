<template>
 <v-tabs
   dark
   color="cyan"
   show-arrows
   style="margin-top:150px;">
 >
   <v-tabs-slider color="black"></v-tabs-slider>

   <v-tab class="cart-action"
     v-for="i in 30"
     :key="i"
     :href="'#tab-' + i"
   >
     Item {{ i }}
   </v-tab>

   <v-tabs-items>
     <v-flex xs12>
     <v-tab-item cart-action
       v-for="i in 30"
       :key="i"
       :value="'tab-' + i">
      <v-flex xs12 sm10 md8>
       <v-card class="grey lighten-4 mb-3 card-style">
       <v-container fluid>
       <v-layout row>
       <v-flex>
       <v-card-media
         src="https://cdn.vuetifyjs.com/images/cards/desert.jpg
https://cdn.vuetifyjs.com/images/cards/desert.jpg
"
         height="300px" width="200px"
       ></v-card-media>
       </v-flex>
       <v-flex >
       <v-card-title primary-title justify-right>

           <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
           <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>

       </v-card-title>


       <v-divider light></v-divider>
       <v-card-actions>

         <v-btn flat color="orange">Quantity</v-btn>

       </v-card-actions>
         <v-card-text >{{ text }}</v-card-text>
          </v-flex>
    </v-layout>
     </v-container>
     </v-card>
     </v-flex>
   </v-tab-item>



   <v-tab-item cart-action
       v-for="i in 30"
       :key="i"
       :value="'tab-' + i">
      <v-flex xs8 sm4 md4>
       <v-card class="grey lighten-4 mb-3 card-style">
       <v-container fluid>
       <v-layout row>
        <v-form
   ref="form"
   v-model="valid"
   lazy-validation>

   <v-text-field
     v-model="email"
     :rules="emailRules"
     label="E-mail"
     required
   ></v-text-field>


     <v-text-field
     v-model="address"
     :rules="addressRules"
     label="Address"
     required
   ></v-text-field>

   <v-btn
     :disabled="!valid"
     color="success"
     @click="validate"
   >
    BUY NOW
   </v-btn>
   </v-form>
    </v-layout>
     </v-container>
     </v-card>
     </v-flex>
   </v-tab-item>
   </v-flex>
   </v-tabs-items>
 </v-tabs>
</template>


<script>
import Axios from 'axios'
 export default {
   data () {
     return {
       active: null,
       text: null,
     }
   },
   methods: {
     next () {
       const active = parseInt(this.active)
       this.active = (active < 2 ? active + 1 : 0)
     }
   }
 }
</script>
<style scoped>

.cart-action{
display:flex;
}

.card-style{
margin-top:30px;
margin-left:30px
}
</style>