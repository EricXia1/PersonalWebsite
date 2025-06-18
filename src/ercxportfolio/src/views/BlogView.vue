<script setup>
import BlogCard from '@/components/BlogCard.vue'

const blogs = [
  {
    title:'UofT CS midpoint course review',
    description: "Iim halfway through my Computer Science degree at the University of Toronto, and I wanted to share my thoughts on the courses I've taken so far.",
    tags: ['Academics'],
    link: '/blogs/midpointreview',
  }
]
</script>

<template>
  <div class="blog">
    <h1>If you ever wanted to read my ramblings</h1>
    <div class="blogs-grid">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.title"
        v-bind="blog"
      />
    </div>
  </div>
</template>

<style scoped>
.blog {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 4rem;
  text-align: center;
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
</style>