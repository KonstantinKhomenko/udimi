<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-logo">
      <span class="font-weight-bold">Q</span>
    </div>
    <div class="d-flex">
      <nuxt-link class="navbar-link" to="/"
        >PROJECTS</nuxt-link
      >

      <div class="navbar-link" @click="logout">LOGOUT</div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
}

.navbar-logo {
  font-size: 24px;
}

.navbar-link {
  font-size: 14px;
  text-decoration: none;
  color: #999;
  margin-left: 20px;
  cursor: pointer;
}

.navbar-link:hover {
  opacity: 75%;
}
</style>
