<template>
    <PetTable
      species="cats"
      :pets="cats"
    />
</template>

<script>
// import cats from '@/data/cats' // @ is a shortcut to "src" directory
import { mapState } from 'vuex' // fetching from store instead of importing file above and into data()
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {
    //   cats // same as cats: cats
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
