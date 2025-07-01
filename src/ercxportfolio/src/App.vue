<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const nav = document.querySelector('nav')
  if (nav) {
    nav._wheelHandler = function(e) {
      if (e.deltaY !== 0) {
        e.preventDefault()
        nav.scrollLeft += e.deltaY
      }
    }
    nav.addEventListener('wheel', nav._wheelHandler, { passive: false })
  }
})

onBeforeUnmount(() => {
  const nav = document.querySelector('nav')
  if (nav && nav._wheelHandler) {
    nav.removeEventListener('wheel', nav._wheelHandler)
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/about">Things I made</RouterLink>
        <RouterLink to="/blog">Things I wrote</RouterLink>
        <RouterLink to="/hobby">Things you don't care about</RouterLink>
        <a href="/Eric_Xia_Resume_2025F.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid var(--color-border);
  --navbar-height: clamp(32px, calc(160px - 10vw), 340px);
  height: var(--navbar-height);
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--color-accent);
}

nav a.router-link-exact-active {
  color: var(--color-accent);
}

.wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
