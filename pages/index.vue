<template>
    <div class="root">
        <header>

        </header>
        <main>
            <Hero />
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
import Hero from '~/components/Hero/Hero';

export default {
  name: 'IndexPage',
  components: {
      Hero,
  },
}
</script>

<style lang="scss" scoped>
.root {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
