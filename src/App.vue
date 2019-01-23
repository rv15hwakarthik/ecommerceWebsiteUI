<template >
  <div id="app" style="background-image: url('');">
    <v-toolbar fixed extended extension-height="40px" color>
      <v-container class="font">
        <v-layout>
          <v-toolbar-title>
            <v-btn router to="/"  active-class flat>
              <div style="color:black">
                <img :src="require('./assets/logo.png')" height="50" width="250">
              </div>
            </v-btn>
          </v-toolbar-title>
          <v-layout row pb-2>
            <v-flex>
              <v-toolbar-items slot="extension">
                <!-- <v-btn flat>
            <v-icon left>search</v-icon>
            Search
          </v-btn>
          <v-text-field
            v-model="searchText"
            solo hide-details single-line full-width
            style="border-radius:20%">
                </v-text-field>-->
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

                <v-btn flat><v-icon>search</v-icon></v-btn>
              </v-toolbar-items>
            </v-flex>
          </v-layout>

          <v-toolbar-items class="hidden-sm-and-down" style="margin-bottom:15px;">
            <v-btn flat router to="/products/all">
              <v-icon left>video_label</v-icon>Products
            </v-btn>
            <v-btn flat router to="/login">
              <v-icon left>supervisor_account</v-icon>sign in
            </v-btn>
            <v-btn flat router to="/signup">
              <v-icon left>supervisor_account</v-icon>sign up
            </v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-toolbar>
    <router-view/>
<br><br>
<v-footer
    light
    fixed
    height="auto"
  >
  <div style="margin-left:60px">
          <img src="@/assets/cod.png" style="width=100px; height:50px;">
          <span style="margin-left:200px"/>
          <img src="@/assets/made.png" style="width=100px; height:50px;">
          <span style="margin-left:250px"/>
          <img src="@/assets/coviam4.png" style="width=100px; height:50px;">
          <span style="margin-left:340px"/>
          <img src="@/assets/free.png" style="width=auto; height:50px;">
        </div>

  </v-footer>
  </div>

</template>
<script>
export default {
  name: "App",
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null
  }),

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
};
</script>

<style>
.font {
  font-family: sans-serif;
}
</style>

