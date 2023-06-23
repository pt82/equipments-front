<template>
<div @click="filter" style="font-size: 40px; color: white">
  <Header/>
  <body class="content">
    <CharBar
    :chars="chars"
    />
    <Report/>
  </body>

</div>
</template>
<script>

import './Main.css'
import Header from '../components/Header/Header.vue'
import CharBar from '../components/CharBar/CharBar.vue'
import Report from '../components/Report/Report.vue'

export default {
  name: 'Main',
  components: {
    Header,
    CharBar,
    Report
  },
  data () {
    return {
      chars: [
        {
          id: 1,
          name: 'Марат'
        },
        {
          id: 2,
          name: 'Петя'
        },
        {
          id: 3,
          name: 'Руслан'
        }
      ]
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
    }
  }
}
</script>

<style scoped>

</style>
