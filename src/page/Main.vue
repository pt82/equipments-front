<template>
<div @click="filter" style="font-size: 40px; color: white">
  Тут Марат будет верстать {{con}} о боже
  <leftColumn/>
</div>
</template>
<script>
import leftColumn from '../components/leftColumn.vue'
export default {
  name: 'Main',
  comments: {
    leftColumn
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
