<template>
    <div class="text-xs-center">
        <br><br><br><br><br><br><br><br><br><br>
        <div v-for="item in products" :key="item.photo">
            <v-layout>
                <v-flex xs12 sm6 md4 offset-md4>
                    <v-card>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">Product Name</h3>
                                    <div>Product Usp</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat><v-icon left>shopping_cart</v-icon>ADD TO CART</v-btn>
                            </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
export default {
    name: "Products",
    data: function(){
        return {
        products: [
            {   
                photo: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                name: "Product Name",
                usp:"Unique selling point"
            },
            {
                photo: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
                name: "Product Name2",
                usp:"Unique selling point"
            }
        ]
        }
    }
}
</script>