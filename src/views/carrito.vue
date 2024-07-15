<template>
    <div class="container">
        <h1>Carrito de compras</h1>

        <!-- Lista de productos -->
        <ul v-for="product in products" :key="product.id">
            <li class="product-item">
                <img :src="`src/assets/img/product-${product.id}.jpg`" alt="Imagen del producto" />
                <div class="product-info">
                    <span>{{ product.name }} - Precio $: {{ product.price }}</span>
                    <button @click="addToCart(product)" class="add-to-cart-btn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Agregar al carrito
                    </button>
                </div>
            </li>
        </ul>

        <hr />

        <h2>Productos en el carrito</h2>

        <!-- Lista de productos en el carrito -->
        <ul v-for="item in cart" :key="item.product.id">
            <li class="cart-item">
                <img :src="`src/assets/img/product-${item.product.id}.jpg`" alt="Imagen del producto" />
                <div class="cart-info">
                    <span>{{ item.product.name }} - Cantidad: {{ item.quantity }}</span>
                    <button @click="removeFromCart(item)" class="remove-from-cart-btn">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        Remover del carrito
                    </button>
                </div>
            </li>
        </ul>

        <hr />

        <!-- Total a pagar -->
        <p class="total-label">Total a pagar: {{ total }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {id: 1, name: 'Audifono', price: 30000, stock: 3},
                    {id: 2, name: 'Mouse', price: 20000, stock: 5},
                    {id: 3, name: 'Teclado', price: 15000, stock: 10},
                    {id: 4, name: 'Gabinete', price: 35000, stock: 4},
                    {id: 5, name: 'Silla', price: 175000, stock: 3},
                    {id: 6, name: 'Pantalla', price: 150000, stock: 2}
                    
                ],
                cart: []
            };
        },
        computed: {
            total() {
                return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            }
        },
        methods: {
            addToCart(product) {
                let cartItem = this.cart.find(item => item.product.id === product.id);
                if (cartItem) {
                    if (cartItem.quantity < product.stock) {
                        cartItem.quantity++;
                    } else {
                        alert("¡ATENCION ! No puedes agregar más de  " + product.stock + "  unidades de este producto!");
                    }
                } else {
                    this.cart.push({product: product, quantity: 1});
                }
            },
            removeFromCart(item) {
                let index = this.cart.indexOf(item);
                if (index !== -1) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        this.cart.splice(index, 1);
                    }
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        width: 80%;
        margin: 0 auto;
        text-align: right;
    }

    h1 {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .product-item,
    .cart-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .product-info,
    .cart-info {
        flex: 1;
    }

    .add-to-cart-btn,
    .remove-from-cart-btn {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .add-to-cart-btn i,
    .remove-from-cart-btn i {
        margin-right: 10px;
    }

    .total-label {
        font-weight: bold;
        font-size: 20px;
        margin-top: 20px;
    }
</style>
