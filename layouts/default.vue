<template>
  <div>
    <app-navbar />

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue'

export default {
  components: {
    AppNavbar,
  },
}
</script>
