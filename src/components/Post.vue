<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps({
    id: Number,
    title: String,
    user: String,
})


const comments = ref([])

const isCommentsOpen = ref(false)


onMounted(() => {
    // AMBIL DATA KOMENTAR
    fetch('https://jsonplaceholder.typicode.com/posts/' + props.id + '/comments')
        .then(res => res.json())
        .then(res => comments.value = res)
})


</script>

<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <slot></slot>
        <small>Posted by {{ user }}</small>

        <div>
            <button @click="isCommentsOpen = !isCommentsOpen">Open Comments!</button>
        </div>

        <div class="comments">
            <div class="comment" v-for="comment in comments" :key="comment.id" v-show="isCommentsOpen">
                <h5>
                    {{ comment.name }}
                </h5>
                <p>
                    {{ comment.body }}
                </p>

            </div>
        </div>
    </div>
</template>

<style>
.comments {
    padding: 3rem;
}

.comments h5 {
    margin: 0;
}
</style>