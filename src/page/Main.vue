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
          name: 'Лорд Вейдер'
        },
        {
          id: 2,
          name: 'Мастер джедай Кеноби'
        },
        {
          id: 3,
          name: 'Император вечных ситхов'
        },
        {
          id: 4,
          name: 'Верховный лидер Кайло Рен'
        },
        {
          id: 5,
          name: 'Джабба Хатт'
        },
        {
          id: 6,
          name: 'Генерал Скайуокер'
        },
        {
          id: 7,
          name: 'Генерал Гривус'
        },
        {
          id: 8,
          name: 'Командир Асока Тано'
        },
        {
          id: 9,
          name: 'Лорд Вейдер'
        },
        {
          id: 10,
          name: 'Старый контрабандист Хан'
        },
        {
          id: 11,
          name: 'Чубакка'
        }
      ],
      guildmember: [
        {
          id: 1,
          name: 'Марат',
          chars: [
            {
              id: 1,
              name: 'Лорд Вейдер',
              relict: 7
            },
            {
              id: 2,
              name: 'Мастер джедай Кеноби',
              relict: 7
            },
            {
              id: 3,
              name: 'Император вечных ситхов',
              relict: 6
            },
            {
              id: 4,
              name: 'Верховный лидер Кайло Рен',
              relict: 4
            }
          ]
        },
        {
          id: 2,
          name: 'Петя',
          chars: [
            {
              id: 1,
              name: 'Генерал Скайуокер',
              relict: 0
            },
            {
              id: 2,
              name: 'Командир Асока Тано',
              relict: 0
            },
            {
              id: 3,
              name: 'Генерал Гривус',
              relict: 7
            }
          ]
        },
        {
          id: 3,
          name: 'Руслан',
          chars: [
            {
              id: 1,
              name: 'Джабба Хатт',
              relict: 7
            },
            {
              id: 2,
              name: 'Верховный лидер Кайло Рен',
              relict: 7
            },
            {
              id: 3,
              name: 'Старый контрабандист Хан',
              relict: 3
            },
            {
              id: 4,
              name: 'Командир Асока Тано',
              relict: 5
            },
            {
              id: 5,
              name: 'Чубакка',
              relict: 3
            }
          ]
        }
      ]
      // ],
      // guildmemberChars: [
      //   {
      //     id: 1,
      //     name: 'Мол',
      //     relict: 2
      //   },
      //   {
      //     id: 2,
      //     name: 'Вейдер',
      //     relict: 5
      //   },
      //   {
      //     id: 3,
      //     name: 'Люк',
      //     relict: 7
      //   }
      // ]
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
