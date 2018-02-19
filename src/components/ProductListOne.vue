<template>
    <div id="app">
        <div id="product-list-one">
            <h2>Product List One</h2>

            <ul>
                <li v-for="product in salesProducts">
                    <span>{{ product.name }}</span>
                    <span class="price">₦{{ product.price}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      products () {
        return this.$store.state.products
      },
      salesProducts () {
        return this.$store.state.products
      }
    }
  }
</script>

<style lang="scss" scoped>
    #product-list-one {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;

        ul {
            padding: 0;

            li {
                display: inline-block;
                margin-right: 10px;
                margin-top: 10px;
                padding: 20px;
                background: rgba(255,255,255,0.7);
            }
        }

        .price {
            font-weight: bold;
            color: #E8800C;
        }
    }
</style>
