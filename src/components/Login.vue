<template>
    <div>
        <br><br><br><br><br><br><br><br><br><br>
        <div class="text-xs-center">
            <!-- <p style="font-size:200%; text-align:center">LOGIN USING GOOGLE</p> -->
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4></v-flex>
                </v-layout>
                <br>
                <v-layout>
                    <v-flex sm12 md4></v-flex>
                    <v-flex sm12 md4>
                        <v-text-field
                        v-model="password"
                        :type="'password'"
                        label="Password"
                        required
                        ></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4></v-flex>
                </v-layout>
                <br>
                <v-btn @click="validate">Login</v-btn>
            </v-form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login"
}
</script>