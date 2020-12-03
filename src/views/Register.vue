<template>
  <div class="about">
    <AppBar/>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <h1>Registro de Usuario</h1>

            <v-card>
        <v-card-title>
          <!-- <span class="headline">Editar Producto</span> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Contraseña"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="registerUser"
          >
            Registrar
          </v-btn>
        </v-card-actions>
      </v-card>
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
  name: 'Register',
  data: () => ({
    email: '',
    password: '',
    user: null
  }),
  created() {
    this.user = localStorage.getItem("user")

    if (this.user) {
      this.$router.push('/')
    }
  },
  methods: {
    async registerUser() {
      console.log(`Registrando usuario... ${this.email} y ${this.password}`)
      const { user } = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log('USUARIO: ', user)
      this.$router.push('/login')
    }
  },
  components: {
    AppBar
  }
}
</script>