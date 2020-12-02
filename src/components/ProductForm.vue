<template>
     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar Producto
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Agregar Producto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Título"
                  required
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Descripción"
                  required
                  v-model="description"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Precio"
                  required
                  v-model="price"
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
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addProduct"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { db } from '../main'
export default {
    name: 'ProductForm',
    data: () => ({
        dialog: false,
        title: '',
        description: '',
        price: ''
    }),
    methods: {
        async addProduct() {
            let product = {
                title: this.title,
                description: this.description,
                price: this.price
            }

            await db.collection('products').add(product)
            this.dialog = false
        }
    }
}
</script>