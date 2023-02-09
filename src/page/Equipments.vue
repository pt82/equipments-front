<template>
<div class="" style="width:95%">
  <div class="mb-3">
    <b-button class="bg-primary" @click="createEquipment">Создать</b-button>
  </div>
  <table-equipments
  :equipments = 'equipments'
  @del="del"
  />

</div>
</template>

<script>
import {apiClient} from '../services/api'
import TableEquipments from '../components/TableEquipments'

export default {
  name: 'Equipments',
  components: {
    TableEquipments
  },
  data () {
    return {
      equipments: null
    }
  },
  created () {
    this.listEquipment()
  },
  computed: {
  },
  methods: {
    listEquipment () {
      apiClient.get('/equipment').then(responce => {
        this.equipments = responce.data.data.data
      })
    },
    createEquipment () {
      this.$router.push('/equipment-new')
    },
    del (item) {
      apiClient.delete('/equipment/' + item.id).then(responce => {
        this.listEquipment()
      })
    }
  }
}
</script>

<style scoped>

</style>
