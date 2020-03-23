export default {
  state: {
    unApprovalCount: 0,
    isCollapse: false,
    projectId: '',
    projectName: '',
    breadcrumbItem: ['首页']
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    setProjectName (state, data) {
      state.projectName = data
    },
    setBreadcrumbItem (state, data) {
      state.breadcrumbItem = data
    },
    setProjectId (state, data) {
      state.projectId = data
    },
    setUnApprovalCount (state, data) {
      state.unApprovalCount = data
    }
  }
}
