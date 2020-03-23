export default {
  state: {
    projectId: '',
    menu: '',
    canEdit: '',
    unitId: ''
  },
  mutations: {
    setProjectId (state, data) {
      state.projectId = data
    },
    setUnitId (state, data) {
      state.unitId = data
    },
    setMenu (state, menu) {
      state.menu = menu
    },
    setCanEdit (state, edit) {
      state.canEdit = edit
    }
  }
}
