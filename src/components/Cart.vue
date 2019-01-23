<template>
  <div style="margin-top:130px">
    <v-container class="justify-center text-xs-center">
      <v-layout>
        <v-flex style="background-color:#ccc" class="fonter" md4 offset-md4>
          <div>
            <v-tabs v-model="active" color="#ededed" slider-color="red">
              <v-tab v-for="n in 3" :key="n" ripple>Item {{ n }}</v-tab>
              <v-tab-item v-for="n in 3" :key="n">
                <v-flex md12>
                  <v-card>
                    <v-card-media :src="src"></v-card-media>
                  </v-card>
                </v-flex>
                <v-flex style="text-align:left; font-family:sans-serif">
                  <p></p>
                  <p>&nbsp; Product Name:</p>
                  <br>
                  <p>&nbsp; Product Quantity:</p>
                  <br>
                  <p>&nbsp; Product Price:</p>
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
      src: require("@/assets/back.jpg")
    };
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