// "getters" are used for filtering, updating state data for a component without changing state values
export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => pet.species === 'cat')
  }
}
