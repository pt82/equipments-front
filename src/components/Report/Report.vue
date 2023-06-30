<template>
<div class="reportList">
  <h2 class="title">Отчет</h2>
  <div class="reportItems" v-for="item in guildmember" :key="item.id">
    <div class="reportItem">
      <h3 class="guildmember">{{ item.name }}</h3>
      <div class="guildmemberStore">
        <div class="guildmemberChars" v-for="item in guildmemberChars" :key="item.id">
          <p class="guildmemberCharRelict">{{ item.relict }}р</p>
          <p class="guildmemberCharName">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Report',
  props:
  {
    guildmember:
      {
        type: Array
      },
    guildmemberChars:
      {
        type: Array
      }
  },
  // data () {
  //   return {
  //     selectChars: []
  //   }
  // },
  methods: {
    select (item) {
      console.log(item)
    },
    addClass (value) {
      if (value > 1) {
        return 'red'
      } else {
        return 'green'
      }
    }
  }

}
</script>
