<template>
  <div>
    <ProjectItem
      v-for="(project, index) in userProjects"
      :key="index"
      class="project-item"
      :project="project"
      @click.native="onClickProject(project.id)"
    />

    <project-item-modal
      v-if="isShownModal"
      :selected-id="selectedId"
      @closeModal="onCloseModal"
      @projectUpdated="fetchProjects"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProjectItemModal from '~/components/ProjectItemModal.vue'
import ProjectItem from '~/components/ProjectItem.vue'

export default {
  name: 'ProjectsPage',

  components: {
    ProjectItemModal,
    ProjectItem,
  },

  middleware: ['auth'],

  data: () => ({
    selectedId: null,
    isShownModal: false,
  }),

  async fetch({ store }) {
    await store.dispatch('projects/fetchProjects')
  },

  computed: {
    ...mapGetters('projects', ['userProjects']),
  },

  methods: {
    ...mapActions('projects', ['fetchProjects']),

    onClickProject(id) {
      this.selectedId = id
      this.isShownModal = true
    },

    onCloseModal() {
      this.isShownModal = false
    },
  },
}
</script>

<style scoped>
.project-item:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
