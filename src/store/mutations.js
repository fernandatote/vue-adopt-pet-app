// "mutations" are called by "actions" and update the state
export default {
  appendPet: (state, { pet, species }) => {
    state[species].push(pet)
  }
}
