<template>
    <li id="product-item">{{ title }}</li>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: {
            title: String
        }
    }
</script>

<style>
#product-item {
    color: blue;
}
</style>