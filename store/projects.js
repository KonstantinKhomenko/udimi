export const state = () => ({
  projects: [],
})

export const getters = {
  userProjects: ({ projects }) => projects,
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
}

export const actions = {
  async fetchProjects({ commit }) {
    const { projects } = await this.$axios.$get('projects-manage/index')

    commit('SET_PROJECTS', projects)
  },

  async readProject({ commit }, id) {
    const { project } = await this.$axios.$get(`projects-manage/${id}`)

    return project
  },

  async updateProject({ commit }, { id, name }) {
    await this.$axios.$post(`projects-manage/update?id=${id}`, { name })
  },
}
