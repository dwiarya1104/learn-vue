<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';
import UiHeader from './components/UiHeader.vue';

const users = ref([
  {
    id: 1,
    kelas: "RPL",
    nama: "Dwi",
    nis: 24343
  }, {
    id: 2,
    kelas: "AKL",
    nama: "Nazla",
    nis: 24343
  }, {
    id: 3,
    kelas: "BDP",
    nama: "Arya",
    nis: 24343
  },
])

const deleteUser = (index) => {
  users.value.splice(index, 1)
}

const addName = ref('')
const addKelas = ref('')
const addNis = ref('')

const addUser = () => {
  users.value.push({
    id: users.value.length,
    nama: addName.value,
    kelas: addKelas.value,
    nis: addNis.value
  })
}

</script>

<template>
  <UiHeader></UiHeader>
  <form class="form" @submit.prevent="addUser">

    <label for="">Nama</label>
    <input type="text" name="nama" v-model="addName">

    <label for="">Kelas</label>
    <input type="text" name="kelas" v-model="addKelas">

    <label for="">NIS</label>
    <input type="number" name="nis" v-model="addNis">
    <button>Submit</button>
  </form>
  <div class="card-container">
    <Card v-for="(user, index) in users" :title="user.nama" :key="user.id">
      <ul>
        <li>ID : {{ user.id }}</li>
        <li>Nama : {{ user.nama }}</li>
        <li>NIS : {{ user.nis }}</li>
        <li>Kelas : {{ user.kelas }}</li>

        <button>Edit</button>
        <button @click="deleteUser(index)">Delete</button>
      </ul>
    </Card>
  </div>

</template>

<style>
.card-container {
  display: flex;
  gap: 1rem;
}

.form {
  width: 400px;
  margin: 3rem 0;
}

.form input {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
