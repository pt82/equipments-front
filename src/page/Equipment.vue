<template>
<div style="width:95%" class="m-auto">
  <div class="bg-light">
  <h3 v-if="!edit">Новая</h3>
  <h3 v-else>Редактирование</h3>
  </div>
<equipment-form
  :equipment="equipment"
  :edit="edit"
></equipment-form>
</div>
</template>

<script>
import EquipmentForm from '../components/EquipmentForm'
import {apiClient} from '../services/api'

export default {
  name: 'Equipment',
  components: {
    EquipmentForm
  },
  props: {
    edit: Boolean
  },
  data () {
    return {
      equipment: {}
    }
  },
  created () {
    this.loadEquipment()
  },
  methods: {
    loadEquipment () {
      if (this.edit) {
        apiClient.get('/equipment/' + this.$route.params.id).then(responce => {
          this.equipment = responce.data.data
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
