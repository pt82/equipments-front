<template>
<div class="reportList">
  <div class="reportItems" v-for="member in guildmember" :key="member.id">
    <div class="reportItem">
      <h3 class="guildmember">{{ member.name }}</h3>
      <div class="guildmemberStore">
        <!-- <div class="guildmemberChars" v-for="item in guildmemberChars" :key="item.id">
          <p class="guildmemberCharRelict">{{ item.relict }}р</p>
          <p class="guildmemberCharName">{{ item.name }}</p>
        </div> -->

        <div class="guildmemberChars" v-for="char in member.chars" :key="char.id">
          <p class="guildmemberCharRelict">{{ char.relict }}р</p>
          <p class="guildmemberCharName">| {{ char.name }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReportMember',
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
    // select (item) {
    //   console.log(item)
    // }
    // addClass (value) {
    //   if (value > 1) {
    //     return 'red'
    //   } else {
    //     return 'green'
    //   }
    // }
  }

}
</script>
