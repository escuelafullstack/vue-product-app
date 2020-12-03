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
        <div v-if="isLoggedIn">
          <v-row class="text-center">
          <v-col cols="12">
            <!-- Product List -->
            <ProductForm/>
            <ProductList/>
          </v-col>
        </v-row>
        </div>
        <div v-else>
          <h1> Bienvenido</h1>
          <h2> Es necesario iniciar sesión para poder tener acceso al administrador de productos</h2>
        </div>
        
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
  data: () => ({
    user: null,
    isLoggedIn: false
  }),
  created() {
    this.user =  localStorage.getItem("user")
    console.log('USER: ', this.user)
    this.isLoggedIn = this.user ? true : false
  },
  mounted() {

  },
  components: {
    AppBar,
    ProductForm,
    ProductList
  }
}
</script>
