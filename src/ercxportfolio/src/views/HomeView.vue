<script setup>
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const currentThings = [
  'A Third Year Student at the University of Toronto',
  'Doing a major in Computer Science',
  'Doing minors in Mathematics and Philosophy',
  'Building software for tabi-wellbeing, and UofT',
  'Revamping my portfolio website!',
];
</script>

<template>
  <main class="home">
    <div class="content">
    <h1>Hi, I'm Eric</h1>
    <h2>As of {{ currentDate }}, I am: </h2>
    <ul>
      <li v-for="(thing, index) in currentThings" :key="index">{{ thing }}</li>
    </ul>
    <h2 style="text-align: center; margin-top: 2rem;">
      You can find my resume 
      <a href="\Eric_Xia_Resume_2025F.pdf" target="_blank" rel="noopener noreferrer">
        here
      </a>.
    </h2>
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 4rem;
  text-align: center;
}

a {
  color: var(--color-accent);
  text-decoration: none;
}
</style>