<template>
<div @click="filter" style="font-size: 40px; color: white">
  Тут Марат будет верстать {{con}} о боже
  <left/>
</div>
</template>
<script>

import Left from '../components/Left.vue'

export default {
  name: 'Main',
  components: {
    Left
  },
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
