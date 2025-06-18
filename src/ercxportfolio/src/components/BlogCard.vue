<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <a :href="link"><h3>{{ title }}</h3></a>
      <p>{{ description }}</p>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="blog-tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

h3 {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
}

p {
  margin: 0 0 1rem 0;
  opacity: 0.8;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.blog-tag {
  background: var(--color-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
}
a:link, a:visited, a:hover, a:active {
  color: white;
}
</style>