<template>
    <div>
        <v-container class="justify-center text-xs-center" style="margin-top:100px">
            <v-layout >
                <v-flex style="background-color:#ccc" class="fonter"  md8 offset-md2>
                    <v-card-media :src="require('@/assets/ThankyouPage.jpg')"></v-card-media>
                <h3 style="font-size:250%; padding-top:100px; font-family:sans-serif">Thank you for shopping with us!</h3>    
                    <v-layout>
                        <v-flex md4 offset-md4>
                            <div style="font-size:180%;font-family:sans-serif; margin-top:100px">A confirmation mail has been sent to your email</div>
                        </v-flex>
                    </v-layout>
                    <div style="font-size:180%;font-family:sans-serif; margin-top:100px">
                        <v-btn flat>Back to Shopping?</v-btn>
                    </div>
                  
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>