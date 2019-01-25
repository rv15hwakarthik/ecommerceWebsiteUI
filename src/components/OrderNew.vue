<template>
<v-card-media :src="src" height="650" width="500px,k">
<v-container>
    <v-layout>
        <v-flex md8 offset-md2>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1"
    style="margin-top:200px;"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.orderId }}</td>
      <td class="text-xs-left">{{ props.item.orderPlacedDate }}</td>
      <td class="text-xs-left">{{ props.item.orderProducts.length }}</td>
      <td class="text-xs-left">Yahan aaega button</td>
    </template>
  </v-data-table>
        </v-flex>
    </v-layout>
</v-container>
</v-card-media>
</template>
<script>
 import Axios from 'axios'
export default {
  name: "Products",
  data() {
    return {
      src: require("@/assets/back.jpg"),
      products: [
        {
          orderId: "1",
          userId: "2",
          orderPlacedDate:'1/2/3',
          orderProducts: [
            {
              orderProductId: '',
              productId:'',
              productCount: '1',
              price: ''
            }
          ]
        }
      ],
      headers: [
          {
            text: 'Order ID',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Date', value: 'date' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Details', value: 'details' },
        ]
    };
  },
  created: function() {
    console.log("id is called");
    console.log(this.$route.params.id);
    Axios.get("http://localhost:8080/getAllorder/4b726cbf-a5a1-4118-9d71-a239508b5172")
      .then(response => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
 
};
</script>

