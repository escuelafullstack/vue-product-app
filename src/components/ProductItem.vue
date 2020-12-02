<template>
  <v-card
    class="mx-auto"
    max-width="344"
    elevation="7"
    shaped  
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    
    <v-card-actions>
    <v-list-item-content>
          <v-list-item-title>S/ {{price}}</v-list-item-title>
    </v-list-item-content>
    <template>
      <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Eliminar
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Eliminar producto?
        </v-card-title>
        <v-card-text>Recuerde que el producto se eliminará de forma permanente.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            dark
            text
            @click="showModal = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="red darken-1"
            dark
            @click="deleteProduct"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
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
          @click="setProduct"
        >
          Editar
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Editar Producto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Título"
                  required
                  v-model="titleToShow"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Descripción"
                  required
                  v-model="descriptionToShow"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Precio"
                  required
                  v-model="priceToShow"
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
            @click="editProduct"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
    </template>
    </v-card-actions>
    
  </v-card>
</template>

<script>
  import { db } from '../main'

    export default {
        name: 'ProductItem',
        data: () => ({
          dialog: false,
          showModal: false,
          titleToShow: '',
          descriptionToShow: '',
          priceToShow: ''
        }),
        methods: {
          setProduct(){
            this.titleToShow = this.title
            this.descriptionToShow = this.description
            this.priceToShow = this.price
          },
          async editProduct() {
            const productToUpdate = {
              title: this.titleToShow,
              description: this.descriptionToShow,
              price: this.priceToShow
            }
            console.log(productToUpdate)
            const product = await db.collection('products').doc(this.id)
            product.set(productToUpdate)
            this.$emit('getProducts')
            this.dialog = false
            
          },
          async deleteProduct() {
            await db.collection('products').doc(this.id).delete()
            this.$emit('getProducts')
            this.showModal = false
            
          }
        },
        props: {
            id: String,
            title: String,
            description: String,
            price: String
        }
    }
</script>

<style>
#product-item {
    color: blue;
}
</style>