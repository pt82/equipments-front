<template>
<div @click="filter" style="font-size: 40px; color: white">
  <Header/>
  <body class="content">
    <CharBar
    :chars="chars"
    />
    <Report
    :guildmember="guildmember"
    :guildmemberChars="guildmemberChars"
    />
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
          name: 'Мол'
        },
        {
          id: 2,
          name: 'Вейдер'
        },
        {
          id: 3,
          name: 'Люк'
        }
      ],
      guildmember: [
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
      ],
      guildmemberChars: [
        {
          id: 1,
          name: 'Мол',
          relict: 2
        },
        {
          id: 2,
          name: 'Вейдер',
          relict: 5
        },
        {
          id: 3,
          name: 'Люк',
          relict: 7
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
