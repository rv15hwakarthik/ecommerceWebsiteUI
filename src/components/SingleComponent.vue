<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8>
          <v-toolbar color="#337ab7" dark>
            <v-toolbar-title>Product Details</v-toolbar-title>
          </v-toolbar>

          <v-card flat>
            <v-container fluid>
              <v-layout row>
                <v-flex xs6 sm4 md5>
                  <v-card flat class="rounded-card">
                    <v-img
                      class="white--text"
                      height="450px"
                      width="auto"
                      :src="require('@/assets/electronics.jpg')"
                    ></v-img>
                  </v-card>
                </v-flex>

                <v-flex xs4 sm4 md6 offset-sm1>
                  <v-card-text>
                    <h3>Mi A2 (Black)
                      <br>(64 GB)
                      <br>(4GB RAM)
                    </h3>
                    <b>4.8</b>
                    <v-icon style="color:#33691E;">star</v-icon>
                    <b>&nbsp;&nbsp; 2018 ratings</b>
                    <br>
                    <strike>Rs.25000</strike>&nbsp;&nbsp;
                    <i>Rs.12500</i>&nbsp;&nbsp;
                    <p>50% off</p>
                    <h3>Highlights</h3>
                    <br>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</li>
                    <li>15.9 cm (6.26 inch) FHD+ Display</li>
                    <li>12MP + 5MP | 20MP + 2MP Dual Front Camera</li>
                    <li>4000 mAh Li-polymer Battery</li>
                    <li>Qualcomm Snapdragon 636 Processor</li>
                    <br>
                    <v-btn round color="#FF8C00">
                      <b>Add To Cart</b>
                    </v-btn>
                    <v-btn round color="#337ab7">
                      <b>Buy Now</b>
                    </v-btn>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs3 sm2 md3 offset-sm1>
          <v-card flat>
            <v-toolbar color="#faebcc" dark>
              <v-toolbar-title>
                <b style="color:black;">Merchant Information</b>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <h2>
                <b>Merchant Rating.</b>
              </h2>
              <b>3.8</b>
              <v-icon style="color:#33691E;">star</v-icon>

              <br>
              <v-alert :value="true" color="black" background-color="#E6EE9C" icon="info" outline>
                <p>Merchant Rating is calculated on various factors and algorithm designed by SabKuch</p>
              </v-alert>
              <br>
              <h2>
                <b>Merchant Info.</b>
              </h2>
              <br>
              <li>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</li>
              <li>15.9 cm (6.26 inch) FHD+ Display</li>
              <li>12MP + 5MP | 20MP + 2MP Dual Front Camera</li>
              <li>4000 mAh Li-polymer Battery</li>
              <li>Qualcomm Snapdragon 636 Processor</li>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-container>
        <v-layout row>
          <v-flex xs6 style="margin-top:50px;">
            <v-toolbar color="#B3E5FC" dark>
              <v-toolbar-title>
                <h5 style="color=#01579B">Product Reviews and Ratings by various Customers</h5>
              </v-toolbar-title>
            </v-toolbar>

            <v-card flat>
              <v-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt recusandae possimus optio cupiditate harum sit at veritatis molestiae. Officiis cupiditate minima autem id eligendi, beatae tempore. Quos, consequatur nulla?
                <b>1</b>
                <v-icon style="color:#BF360C">star</v-icon>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt recusandae possimus optio cupiditate harum sit at veritatis molestiae. Officiis cupiditate minima autem id eligendi, beatae tempore. Quos, consequatur nulla?
                <b>2</b>
                <v-icon style="color:#CDDC39;">star</v-icon>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt recusandae possimus optio cupiditate harum sit at veritatis molestiae. Officiis cupiditate minima autem id eligendi, beatae tempore. Quos, consequatur nulla?
                <b>3</b>
                <v-icon style="color:#8D6E63">star</v-icon>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt recusandae possimus optio cupiditate harum sit at veritatis molestiae. Officiis cupiditate minima autem id eligendi, beatae tempore. Quos, consequatur nulla?
                <b>4</b>
                <v-icon style="color:#81D4FA">star</v-icon>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque incidunt recusandae possimus optio cupiditate harum sit at veritatis molestiae. Officiis cupiditate minima autem id eligendi, beatae tempore. Quos, consequatur nulla?
                <b>5</b>
                <v-icon style="color:#33691E;">star</v-icon>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs6 sm2 md5 offset-sm1 style="margin-top:50px;" flat>
            <v-toolbar color="#B3E5FC" dark>
              <v-toolbar-title>
                <h5 style="color=#01579B">Other Merchants Selling this Product</h5>
              </v-toolbar-title>
            </v-toolbar>
            <v-data-table :headers="headers" :items="names" class="elevation-1">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.rating }}</td>
              </template>
              <template
                slot="pageText"
                slot-scope="props"
              >Lines {{ props.pageStart }} - {{ props.pageStop }} to {{ props.itemsLength }}</template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>


<style scoped>
.rounded-card {
  border-radius: 50px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>