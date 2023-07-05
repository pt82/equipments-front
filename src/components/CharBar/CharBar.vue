<template>
<div class="charList">
  <h2 class="title">Персонажи</h2>
  <div class="charRel">
    <input type="checkbox"/>
    <label class="label">1р</label>
    <input type="checkbox"/>
    <label class="label">2р</label>
    <input type="checkbox"/>
    <label class="label">3р</label>
    <input type="checkbox"/>
    <label class="label">4р</label>
    <input type="checkbox"/>
    <label class="label">5р</label>
    <input type="checkbox"/>
    <label class="label">6р</label>
    <input type="checkbox"/>
    <label class="label">7р</label>
    <input type="checkbox"/>
    <label class="label">8р</label>
    <input type="checkbox"/>
    <label class="label">9р</label>
  </div>
  <div class="charItem" v-for="item in chars" :key="item.id">
    <div>
      <input @input="select(item.id)" type="checkbox" :id="'checkbox_' + item.id" />
      <label>{{ item.name }}</label>
      <!-- <label :class="addClass(item.id)" :for="'checkbox_' + item.id">{{ item.name }}</label> -->
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
    }
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
