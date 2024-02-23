// "actions" are called inside components and trigger mutations that will update the state
export default {
  addPet: (context, payload) => { // or ({ commit }, { pet, species }) and below not use "context."
    context.commit('appendPet', payload) // will call a mutation
  }
}
