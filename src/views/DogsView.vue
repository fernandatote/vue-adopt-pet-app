<template>
  <PetTable
    species="dogs"
    :pets="dogs"
  />
</template>

<script>
// import dogs from '@/data/dogs' // @ is a shortcut to "src" directory
import { mapState } from 'vuex' // fetching from store instead of importing file above and into data()
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {
    //   dogs // same as dogs: dogs
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
