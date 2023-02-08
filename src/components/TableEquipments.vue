<template>
  <div style="max-height: 500px; overflow-y: auto">
  <b-table
    class="bg-white m-auto"
    hover
    striped
    :items="equipments"
    :fields="fields">
    <template #cell(serial)="data">
      <!-- `data.value` is the value after formatted by the Formatter -->
<!--      <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>-->
      <a @click="toEquipment(data.item.id)">{{ data.value }}</a>
    </template>
  </b-table>
  </div>
</template>

<script>
export default {
  name: 'TableEquipments',
  props: {
    equipments: Array
  },
  data () {
    return {
      fields: [
        {
          key: 'serial',
          label: 'Серийный номер'
        },
        {
          key: 'type.title',
          label: 'Название'
        }
      ]
    }
  },
  methods: {
    toEquipment (id) {
      this.$router.push('/equipment/' + id)
    }
  }
}
</script>

<style scoped>

</style>
