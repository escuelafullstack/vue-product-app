<template>
  <div class="about">
    <AppBar/>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <h1> Iniciar Sesion</h1>
            <v-container>
            <v-row class="text-center" style="width: 800px;"> 
              <v-col cols="4">
                <v-text-field
                  label="Email"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Password"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-btn @click="signIn">
                  Iniciar Sesion
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import firebase from 'firebase'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async signIn() {
      console.log(`Iniciando sesion... ${this.email} y ${this.password}`) 
      const { user } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      console.log('USER: ', user)
      localStorage.setItem("user", JSON.stringify(user))
      this.$router.push('/')
    }
  },
  components: {
    AppBar
  }
}
</script>

<style>

</style>
