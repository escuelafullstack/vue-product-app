<template>
    <div id="product-list">
        <h1>
            Product List
        </h1>
        <ul>
            <ProductItem title="Zapatilla Nike" description="Zapatillas para correr" price="200"/>
            <ProductItem title="Zapatilla Adidas" description="Zapatillas para jugar futbol" price="220"/>
            <ProductItem title="Zapatilla Puma" description="Zapatillas para jugar tenis" price="230"/>
        </ul>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'

    export default {
        name: 'ProductList',
        components: {
            ProductItem
        }
    }
</script>

<style>
    #product-list {
        color: red;
    }
</style>