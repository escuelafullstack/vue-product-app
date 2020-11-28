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
    <!-- 
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
      
      -->
    </v-card-actions>
    
  </v-card>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: {
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