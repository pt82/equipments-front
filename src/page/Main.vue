<template>
<div @click="filter" style="font-size: 40px; color: white">
  Тут Марат будет верстать {{con}}
  <left-column/>
</div>
</template>
<script>

import LeftColumn from '../components/leftColumn'

export default {
  name: 'Main',
  components: {LeftColumn},
  comments: {
    LeftColumn },
  data () {
    return {
      con: 1
    }
  },
  created () {

  },
  mounted () {
    this.filter()
  },
  computed: {
  },
  methods: {
    filter () {
      console.log('sdfsdf')
    }
  }
}
</script>

<style scoped>

</style>
