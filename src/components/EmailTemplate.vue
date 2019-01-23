<template>
  <div>
    <v-container class="justify-center text-xs-center">
      <br><br><br><br><br><br><br><br><br><br>
      <img :src="require('@/assets/logo.png')" height="42" width="250">
      <v-layout>
        <v-flex style="background-color:#ccc" class="fonter" md8 offset-md2>
          <h3 style="font-size:250%; padding-top:60px">Thanks For Your Business!</h3>
          <p style="font-size:150%; padding-top:40px; padding-bottom:30px">
            <b>Your Order</b>
          </p>
          <v-layout>
            <v-flex md8 offset-md2 class="fonterItems">
              <strong style="color:grey" class="spacer">Monday,1st January 2018</strong>
              <hr>
              <div style="text-align:left;" class="spacer">
                MacBook Pro
                <span style="float:right;">Overpriced Rs</span>
              </div>
              <hr>
              <div style="text-align:left;" class="spacer">
                MacBook Pro
                <span style="float:right;">Overpriced Rs</span>
              </div>
              <hr>
              <div style="text-align:left;" class="spacer">
                MacBook Pro
                <span style="float:right;">Overpriced Rs</span>
              </div>
              <hr>
              <div style="text-align:left;" class="spacer">
                MacBook Pro
                <span style="float:right;">Overpriced Rs</span>
              </div>
              <hr>
              <div style="text-align:left;" class="spacer">
                <b>Total</b>
                <span style="float:right;">
                  <b>Overpriced Rs</b>
                </span>
              </div>
              <hr>
            </v-flex>
          </v-layout>
          <p style="font-size:150%; padding-top:60px; padding-bottom:40px">
            <b>Your Shipping Details</b>
          </p>
          <v-layout>
            <v-flex md4 offset-md4>
              <span
                style="font-size:140%"
              >A-402 , Sanskriti Apartments , Sector-43, Gurgaon, Haryana, 122002</span>
            </v-flex>
          </v-layout>
          <div style="padding-top:60px; padding-bottom:10px;">Thank you for being a great customer</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.fonter {
  font-family: sans-serif;
}
.spacer {
  margin-top: 40px;
}
.fonterItems {
  font-size: 150%;
}
</style>
