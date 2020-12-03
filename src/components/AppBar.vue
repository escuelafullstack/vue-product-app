<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <div v-if="!isLoggedIn">
        <v-btn
        target="_blank"
        text
        @click="redirectToRegister"
      >
        <span class="mr-2">Registrar</span>
      </v-btn>
      </div>
      <div v-if="!isLoggedIn">
          <v-btn
          target="_blank"
          text
          @click="redirectToLogin"
        >
          <span class="mr-2">Login</span>
        </v-btn>
      </div>

      <div v-if="isLoggedIn">
        <v-btn
        target="_blank"
        text
        @click="logout"
      >
        <span class="mr-2">Cerrar Sesion</span>
      </v-btn>
      </div>
      
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    user: null,
    isLoggedIn: false
  }),
  created(){
    this.user = localStorage.getItem("user")
    this.isLoggedIn = this.user ? true : false
  },
  methods: {
    redirectToRegister() {
      console.log(this.$route.name)
      if (this.$route.name != 'Register') {
        this.$router.push('/register')
      }
      
    },
    redirectToLogin() {
      console.log(this.$route.name)
      if (this.$route.name != 'Login') {
        this.$router.push('/login')
      }
      
    },
    logout() {
      localStorage.removeItem("user")
      this.$router.push('/login')
    }

  }
}
</script>

<style>

</style>