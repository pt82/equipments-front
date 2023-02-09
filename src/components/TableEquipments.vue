<template>
  <div style="max-height: 500px; overflow-y: auto">
    <b-table
      :fields="fields"
      :items="equipments"
      class="bg-white m-auto"
      hover
      striped>
      <template #cell(serial)="data">
        <a @click="toEquipment(data.item.id)">{{ data.value }}</a>
      </template>
      <template #cell(del)="data">
        <b-icon icon="x-circle" scale="2" variant="danger" @click="del(data.item
)"></b-icon>
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
        },
        {
          key: 'del',
          label: ''
        }
      ]
    }
  },
  methods: {
    toEquipment (id) {
      this.$router.push('/equipment/' + id)
    },
    del (item) {
      this.$emit('del', item)
    }
  }
}
</script>

<style scoped>

</style>
