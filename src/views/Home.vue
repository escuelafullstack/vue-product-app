<template>
  <div class="home">
    <AppBar/>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
              :src="require('../assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            />
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <!-- Product List -->
            <ProductForm/>
            <ProductList/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductForm from '@/components/ProductForm.vue'
import ProductList from '@/components/ProductList.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'Home',
  components: {
    AppBar,
    ProductForm,
    ProductList
  }
}
</script>
