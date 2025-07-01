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
  imageUrl: {
    type: String,
    default: ''
  },
  technologies: {
    type: Array,
    default: () => []
  },
  projectUrl: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card">
    <img v-if="imageUrl" :src="imageUrl" :alt="title" class="card-image">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="technologies">
        <span v-for="tech in technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
      <a v-if="projectUrl" :href="projectUrl" target="_blank" class="project-link">View Project</a>
      <a v-else class="project-link" href="#">No project link available/Private repo</a>
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
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--color-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
}

.project-link {
  display: inline-block;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
}

.project-link:hover {
  text-decoration: underline;
}
</style>