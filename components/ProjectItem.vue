<template>
  <div class="table-row card">
    <img class="mr-50 img-size-50" :src="projectLogo" alt="icon" />

    <strong class="table-cell">{{ project.name }}</strong>

    <strong class="text-green project-status">{{ isActive }}</strong>

    <div class="text-gray font-size-sm white-space-nowrap mr-1">
      <p>time this week</p>
      <p>this month</p>
      <p>total</p>
    </div>

    <div class="font-size-sm font-weight-bold">
      <p>00:00:00</p>
      <p>00:00:00</p>
      <p>00:00:00</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isActive() {
      return this.project.is_active ? 'Active' : 'Inactive'
    },

    projectLogo() {
      return this.project.logo_url || require('../static/empty.jpeg')
    },
  },
}
</script>

<style scoped>
.card {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.table-row {
  display: flex;
  align-items: center;
  height: 6rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.table-cell {
  flex: 1 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.table-cell p:not(:last-child) {
  margin-bottom: 0.25rem;
}

.project-status {
  margin-right: 3rem;
}
</style>
