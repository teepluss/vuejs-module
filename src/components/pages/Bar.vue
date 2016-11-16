<template>
  <div id="bar">
    <h2>{{ head }}</h2>
    <ul>
      <li v-for="quote in quotes">
        {{ quote.id }}: {{ quote.name }}
      </li>
    </ul>
    <input :value="title" @input="changeTitle">
    <transition name="fade">
      <h4 v-if="title !== 'Quotes'">{{ title }}</h4>
    </transition>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'bar',
    data () {
      return {
        plusTitle: 'Plus Title'
      }
    },
    computed: {
      head () {
        return this.title + ' - ' + this.plusTitle
      },
      ...mapState([
        'quotes'
      ]),
      // This below is just an example,
      // you can use mapState to do like this.
      ...mapGetters({
        all: 'all',
        title: 'title'
      })
    },
    methods: {
      ...mapActions([
        'getAllQuotes',
        'changeTitle'
      ])
    },
    mounted () {
      // console.log(this.$store.state)
      this.getAllQuotes()

      // This data is come from mapState
      // console.log(this.quotes.title)

      // This data is come from mapGetters
      // console.log(this.title)

      this.$nextTick(() => {
        this.$store.dispatch('addQuote', {'name': 'Something'})
      })
      // console.log(this.$store.state.quotes.all)
    }
  }
</script>
<style scoped>
  #bar ul li { list-style: none; }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave {
    opacity: 0
  }
</style>
