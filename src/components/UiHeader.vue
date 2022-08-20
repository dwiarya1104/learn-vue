<script setup>
</script>

<template>
    <header class="flex justify-between px-5 py-5 mb-5 shadow-md">
        <h4 class="font-bold">Restaurant</h4>
        <nav>
            <ul class="flex gap-3">
                <li>
                    <router-link to="/" class="text-gray-500 hover:text-blue-500">Home</router-link>
                </li>
                <li>
                    <router-link to="/products" class="text-gray-500 hover:text-blue-500">Products</router-link>
                </li>
                <li>
                    <router-link to="/transactions" class="text-gray-500 hover:text-blue-500">Transaction</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

