<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})
</script>

<template>
    <main class="blog-template">
        <div class="content">
            <h1>{{ title }}</h1>
            <p class="date">{{ date }}</p>
            <div class="post-content" v-html="content"></div>
        </div>
    </main>
</template>

<style scoped>
.blog-template {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: var(--color-background);
}
h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 4rem;
}
.date {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
}
.post-content {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--color-text-primary);
}
</style>