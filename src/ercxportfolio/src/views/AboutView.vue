<script setup>
import ProjectCard from '@/components/Card.vue'

const projects = [
  {
    title: 'Time Management App',
    description: 'An all-purpose time management app featuring a social aspect.',
    /*imageUrl: '/path/to/image.jpg,'*/
    technologies: ['Java', 'SQLite'],
    projectUrl: 'https://github.com/AnishRoy10/CSC207-Time-Management-Project'
  },
  {
    title: 'UofT Apex Legends Website',
    description: 'A website for the University of Toronto Apex Legends community, featuring a forum and event calendar.',
    /*imageUrl: '/path/to/image.jpg,'*/
    technologies: ['NextJS', 'Tailwind CSS', 'React'],
    projectUrl: 'https://github.com/EricXia1/UofTApexWebsite'
  },
  {
    title: 'Tabi-Wellbeing Marketplace',
    description: 'A mobile/web app for Tabi-Wellbeing, a mental health startup, featuring a marketplace for mental health services.',
    /*imageUrl: '/path/to/image.jpg,'*/
    technologies: ['NextJS', 'React', 'Firebase', 'Node.js'],
  },
  {
    title: 'CSC258 AI Tutor Tool',
    description: 'An AI-powered tool for CSC258, designed under supervision of Professor Rutwa Engineer, to assist students with course material.',
    /*imageUrl: '/path/to/image.jpg,'*/
    technologies: ['NextJS', 'FastAPI', 'Django', 'PostgreSQL'],
  },
]
</script>

<template>
  <div class="about">
    <h1>A list of projects I've built/contributed to</h1>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 4rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
</style>