<template>
  <v-container>
    <v-layout column>
      <v-flex xs3 sm4>
        <v-card style="margin-top:150px" color="#ededed">
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex md3 v-for="card in something" :key="card.title">
                <v-card width="250" height="350">
                  <v-card-media :src="card.photo" height="200px" contain></v-card-media>
                  <div
                    style="font-family:sans-serif; margin-left:10px; font-size:170%; margin-top:10px"
                  >{{ card.title }}</div>
                  <div
                    style="font-family:sans-serif; margin-left:10px; font-size:200%; margin-top:10px"
                  >
                    <span style="font-size:70%">
                      <s>{{ card.mrp }} Rs</s>
                    </span>
                    <span>
                      <b>{{ card.price }} Rs</b>
                    </span>
                  </div>
                  <div style="margin-top:10px">
                    <span
                      style="font-family:sans-serif; margin-left:10px; font-size:170%; margin-top:10px"
                    >4.8</span>
                    <v-icon style="color:#33691E;">star</v-icon>
                  </div>
                </v-card>
                <v-spacer></v-spacer>
                <!--no use-->
                <br>
                <br>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import Axios from "axios";
import Vue from "vue";
export default {
  name: "app",

  data() {
    return {
      Enroll: "Enroll",
      something: [
        {
          title: "Electonics",
          photo: require("@/assets/electronics.jpg"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Footwear",
          photo: require("@/assets/footwear.jpeg"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Fashion",
          photo: require("@/assets/fashion.jpg"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Sports and Outdoors",
          photo: require("@/assets/sports.jpeg"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Automotive",
          photo: require("@/assets/automotive.jpeg"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Books",
          photo: require("@/assets/boos.png"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Beauty",
          photo: require("@/assets/healthcare.png"),
          price: "2000",
          mrp: "3000"
        },
        {
          title: "Home",
          photo: require("@/assets/home.jpg"),
          price: "2000",
          mrp: "3000"
        }
      ]
    };
  }
  //   created: function() {
  //     console.log("id is called");

  //     console.log(this.$route.params.id);

  //     Axios.get(
  //       "http://10.177.7.131:8003/products/shortListing?subCategoryName=" +
  //         this.$route.params.id,
  //       {}
  //     )
  //       .then(response => {
  //         this.items = response.data;
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
};
</script>