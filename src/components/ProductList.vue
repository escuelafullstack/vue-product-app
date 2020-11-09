<template>
    <div id="product-list">
        <h1>
            Product List
        </h1>
        <ul>
            <ProductItem title="Zapatilla Nike" />
            <ProductItem title="Zapatilla Adidas" />
            <ProductItem title="Zapatilla Puma" />
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