<template>
  <div class="about">
    <AppBar/>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <h1> Inciar Sesion</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
export default {
  name: 'Login',
  components: {
    AppBar
  }
}
</script>

<style>

</style>
