<template>
    <div>
        <div id="product-list-two">
            <h2>Product List Two - Sales</h2>

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
    name: 'product-list-two',
    data() {
      return {}
    },
    computed: {
      products() {
        return this.$store.state.products
      },
      salesProducts() {
        return this.$store.getters.salesProducts
      }
    }
  }
</script>

<style lang="scss" scoped>
    #product-list-two {
        padding: 10px 20px;
        margin-bottom: 30px;
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

        ul {
            padding: 0;
            list-style-type: none;
        }

        li {
            margin-right: 10px;
            margin-top: 10px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.7);
        }

        .price {
            font-weight: bold;
            color: #860CE8;
            display: block;
        }
    }
</style>
