<template>
<div class="charList">
  <h2 class="charTitle">Отчет</h2>
  <div class="charItem" v-for="item in chars" :key="item.id">
    <div>
      <input @input="select(item.id)" type="checkbox" :id="'checkbox_' + item.id" />
      <label :class="addClass(item.id)" :for="'checkbox_' + item.id">{{ item.name }}</label>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CharBar',
  props:
  {
    chars:
      {
        type: Array
      }
  },
  data () {
    return {
      selectChars: []
    }
  },
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
