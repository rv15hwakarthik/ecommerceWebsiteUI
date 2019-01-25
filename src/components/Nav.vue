<template>
    <v-layout>
      <v-flex>
        <v-navigation-drawer fixed temporary v-model="sideNav">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0 ">
              <v-list-tile avatar>
                <v-list-tile-content>
                 <img :src="require('@/assets/logo.png')" height="50" width="250">
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-layout>
            <v-flex>
              <v-card>
                <v-list class="pt-0" dense>
                  <v-list-group
                    v-for="(item) in cards"
                    :key="item.categoryName"
                    no-action  @click="getStuff(item)" >
                    <v-list-tile slot="activator" :key="item.title" 
                               >
                      <v-list-tile-content>
                        <v-list-tile-title >{{ item.categoryName }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in subcat" :key="subItem.subcategoryName">
                      <v-list-tile-content>
                        <v-list-tile-title>{{subItem.subcategoryName }}</v-list-tile-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <!-- <v-img :src="subItem.subcategoryImage "></v-img> -->
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list-group>
                </v-list>
              
              </v-card>
            </v-flex>
          </v-layout>

        </v-navigation-drawer>

        <v-toolbar color fixed>
          <v-toolbar-side-icon @click.stop="sideNav=!sideNav" />
          <v-toolbar-title class="white--text">
      <v-btn router to="/"  active-class flat>
              <div style="color:black">
                <img :src="require('@/assets/logo.png')" height="50" width="250">
              </div></v-btn></v-toolbar-title>
              <v-spacer></v-spacer>
               <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="Description"
                    item-value="API"
                    placeholder="Start typing to Search"
                    return-Object
                  ></v-autocomplete>
       
                <v-btn flat @click="functionSearch"><v-icon>search</v-icon></v-btn>
          <v-spacer> </v-spacer>
     <v-btn flat router to="/products/all">
              <v-icon left>video_label</v-icon>Products
            </v-btn>
            <v-btn flat router to="/cart">
              <v-icon left>shopping_cart</v-icon> cart
            </v-btn>
            <v-btn flat router to="/">
              <v-icon left>supervisor_account</v-icon>Login
            </v-btn>
            <v-btn flat router to="/" @click="logout">
              <v-icon left>supervisor_account</v-icon>Logut
            </v-btn>
        </v-toolbar>

               <v-toolbar-items class="hidden-sm-and-down" style="margin-bottom:15px;">
        
          </v-toolbar-items>
        <br>
        <br>
        <br>
        <br>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>

</template>

<script>
 import Axios from 'axios';
 import Vue from 'vue';
  export default {
    data () {
    
      return {
           descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
        sideNav: false,
        cards:[ {
        categoryId:"",
        categoryName: "",
       categoryImageUrl: "",
        }],
      subcat:[{
          subcategoryId:"" ,
        subcategoryName: "",
        subcategoryImage: "",
        }],
      }
    },
     created: function(){
 Axios.get('http://10.177.7.131:8003/products/getAllCategories')
       .then((response) => {
           console.log(response);
         this.cards = response.data;
       })
       .catch((error) => {
         console.log(error)
       });
     },
       methods: {
    getStuff(item) {
      console.log(item)
             Axios.get('http://10.177.7.131:8003/products/getSubCategoriesByCategory/'+item.categoryName)
       .then((response1) => {

        this.subcat=response1.data
 })
       .catch((error) => {
         console.log(error)
       })
           },
      logout: function () {
        Axios.delete(
        "http://localhost:8000/user/logout/web/"+ Vue.localStorage.get('token'),{
           }
      )
        .then(res => {
  localStorage.removeItem('token')
        })
        .catch(function(error) {
         
        });
           window.location.reload();
      
    },
    functionSearch: function() {
      console.log(model)
      this.$router.push("/products/"+ model)
    }
       },
        computed: {
    fields() {
      if (!this.model) return [];

      console.log("hi")
      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.entries.map(entry => {
        const product = entry.productName;
        console.log(product);
        return product;
        //return Object.assign({}, entry , { product });
      });
    }
  },

         watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("http://10.177.7.131:8080/getInSearch/" + val)
        .then(res => res.json())
        .then(res => {
          const entries = res;
          this.entries = entries;
          
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  }
  }
</script>