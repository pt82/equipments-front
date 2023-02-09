<template>
<div style="height: 400px; padding: 20px" class="bg-white flex">
  <div><b-alert v-if="alert" variant="danger" show>Неверная маска</b-alert></div>
  <div><b-alert v-if="alertFieldReq" variant="danger" show>Не заполнены обязательные поля</b-alert></div>
  <div class="">
  <b-button @click="save" class="bg-primary">Сохранить</b-button>
  </div>
  <div class="mt-3" style="position: relative">
  <label class="float-start">Модель</label>
  <b-form-input :state="validTitle" v-model="searchTypeVal.title" @input="searchType" placeholder=""></b-form-input>
    <div v-if="showListType" class="bg-info" style="position: absolute; width: 100%; z-index: 1000">
      <div v-for="type in types" :key="type.id">
        <div class="" @click="selectType(type)" style="border: solid 1px grey; cursor: pointer">{{type.title}}</div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <label class="float-start">Маска</label>
    <b-form-input v-model="searchTypeVal.mask" placeholder=""></b-form-input>
  </div>
  <div class="mt-3">
    <label  class="float-start">Cерийный номер</label>
    <b-form-input id="serial" :state="validSerial" v-model="localEquipment.serial" placeholder="Ведите серийный номер"></b-form-input>
  </div>
</div>

</template>

<script>
import {apiClient} from '../services/api'

export default {
  name: 'EquipmentForm',
  props: {
    equipment: Object,
    edit: Boolean
  },
  data () {
    return {
      alert: false,
      alertFieldReq: false,
      localEquipment: {
        id: null,
        serial: null,
        type_id: null
      },
      showListType: false,
      searchTypeVal: {
        title: null,
        mask: null
      },
      types: ''
    }
  },
  computed: {
    validSerial () {
      if (!this.localEquipment.serial) {
        return false
      }
      return true
    },
    validTitle () {
      if (!this.searchTypeVal.title) {
        return false
      }
      return true
    }
  },
  created () {
  },
  watch: {
    equipment (equipment) {
      if (this.edit && equipment) {
        this.$set(this.localEquipment, 'serial', equipment.serial)
        this.$set(this.localEquipment, 'id', equipment.id)
        this.searchTypeVal.title = equipment.type.title
        this.searchTypeVal.mask = equipment.type.mask
        this.$set(this.localEquipment, 'type_id', equipment.type.id)
      }
    }
  },
  methods: {
    validateFields () {
      if (!this.validTitle || !this.validSerial) {
        this.alertFieldReq = true
        return false
      }
      return true
    },
    searchType (val) {
      this.types = []
      apiClient.get('/equipment-type?search=' + val).then(responce => {
        this.types = responce.data.data.data
        this.showListType = true
      })
      this.$forceUpdate()
    },
    save () {
      if (!this.validateFields()) {
        return
      }
      if (this.edit) {
        apiClient.put('/equipment/' + this.localEquipment.id, this.localEquipment).then(responce => {
          if (responce.data.errors.length === 0) {
            this.$router.push('/equipments')
          } else {
            this.alert = true
          }
        }).catch(error => {
          if (error.response) {
            if (error.response.data.serial) {
              alert(error.response.data.serial[0])
            }
          }
        })
      } else {
        apiClient.post('/equipment', this.localEquipment).then(responce => {
          if (responce.data.errors.length === 0) {
            this.$router.push('/equipments')
          } else {
            this.alert = true
          }
        }).catch(error => {
          if (error.response) {
            if (error.response.data.serial) {
              alert(error.response.data.serial[0])
            }
          }
        })
      }
    },
    selectType (item) {
      this.searchTypeVal.title = item.title
      this.searchTypeVal.mask = item.mask
      this.localEquipment.serial = ''
      this.localEquipment.type_id = item.id
      this.showListType = false
    }
  }
}
</script>

<style scoped>

</style>
