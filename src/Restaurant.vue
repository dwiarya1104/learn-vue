<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';
import UiHeader from './components/UiHeader.vue';

let count = ref(0);
let name = ref("Aku");
let isActive = ref(false)
let person = reactive({
    id: 1,
    nama: 'aldy',
    umur: 20
})

let transaction = ref([
    {
        name: "Nasi Goreng",
        price: 1000
    },
    {
        name: "Nasi Uduk",
        price: 3000
    },
    {
        name: "Nasi Kuning",
        price: 2000
    }
])

let doubleCount = computed(() => {
    return count.value * 2
})
let isTransactionSuccess = ref(0)
let TransactionClass = computed(() => {
    return { 'alert': true, 'alert-success': isTransactionSuccess.value == 1, 'alert-danger': isTransactionSuccess.value == 0 }
})
let isShow = ref(false)

function toggleShow() {
    isShow.value = !isShow.value
}

let loadingPercent = ref(0)
let loadingText = computed(() => `Loading : ${loadingPercent.value}`)

function submitTransaksi() {
    if (loadingPercent.value === 100) return
    let addPercent = setInterval(() => {
        loadingPercent.value++

        if (loadingPercent.value == 100) {
            toggleShow()
            clearInterval(addPercent)
        }
    }, 20)
}

let addName = ref('')
let addPrice = ref(0)

function submitItem() {
    if (addName.value === '') return alert('Nama Tidak Boleh Kosong')
    if (!addPrice.value) return alert('Harga Tidak Boleh Kosong')

    transaction.value.push({
        name: addName,
        price: addPrice,
    })
}
</script>
<template>
    <UiHeader></UiHeader>

    <main>
        <router-view></router-view>
    </main>

</template>
<!-- <template>
    <UiHeader></UiHeader>
    <div class="container mx-auto">


        <div>
            <div :class="TransactionClass" v-show="isShow" :style="{ color: isTransactionSuccess ? 'white' : 'white' }">
                <p v-if="isTransactionSuccess == 1">
                    Transaksi Sukses
                </p>
                <p v-else-if="isTransactionSuccess > 0 && isTransactionSuccess < 1">Transaksi Diproses..</p>
                <p v-else> Transaksi Gagal</p>
            </div>
            {{ loadingText }}

            <table class="border-collapse table-auto w-full text-sm">
                <thead>
                    <tr>
                        <th
                            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                            No.</th>
                        <th
                            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                            Nama</th>
                        <th
                            class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                            Price</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(t, index) in transaction" :key="index">
                        <td
                            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            {{ index + 1 }}</td>
                        <td
                            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            {{ t.name }}</td>
                        <td
                            class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            {{ t.price }}</td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="submitTransaksi">
                Submit Transaksi
            </button>
            <button v-on:click="toggleShow">Show / Hide</button>
        </div>


        <hr>

        <form @submit.prevent="submitItem">
            <div>
                <label for="">Nama</label>
                <input type="text" v-model="addName" placeholder="Nama Makanan">
            </div>
            <div>
                <label for="">Price</label>
                <input type="number" v-model="addPrice" placeholder="Harga">
            </div>
            <button>Submit</button>
        </form>
    </div>
</template> -->

<style scoped>
.alert {
    padding: 1rem;
    width: 100%;
    background-color: gray;
}

.alert-success {
    background-color: green;
}

.alert-danger {
    background-color: red;
}
</style>