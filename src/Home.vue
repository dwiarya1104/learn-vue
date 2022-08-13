<script setup>
import { ref, onMounted } from 'vue';
import Post from './components/Post.vue';

let posts = ref([])


onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            posts.value = data
            console.log(data)
        })
})

</script>


<template>

    <div class="post-container">
        <Post v-for="post in posts" :title="post.title" :user="post.userId" :key="post.id" :id="post.id">
            {{ post.body }}
        </Post>
    </div>


</template>


<style>
.post {
    padding: .3rem;
    width: 100%;
}
</style>