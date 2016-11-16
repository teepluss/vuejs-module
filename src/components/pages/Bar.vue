<template>
  <div id="bar">
    <h2>{{ head }}</h2>
    <ul>
      <li v-for="quote in quotes.quotes">
        {{ quote.id }}: {{ quote.name }}
      </li>
    </ul>
    <input :value="quotes.title" @input="changeQuoteTitle">
    <transition name="fade">
      <h4 v-if="quotes.title !== 'Quotes'">{{ quotes.title }}</h4>
    </transition>


    <div>{{ users.users }}</div>
    <hr />
    <div>{{ userIsPattanai }}</div>
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
        return this.quotes.title + ' - ' + this.plusTitle
      },
      ...mapState([
        'users',
        'quotes'
      ]),
      // This below is just an example,
      // you can use mapState to do like this.
      ...mapGetters({
        userIsPattanai: 'userIsPattanai'
      })
    },
    methods: {
      ...mapActions([
        'getAllQuotes',
        'changeQuoteTitle',
        'addUser'
      ])
    },
    mounted () {
      // console.log(this.$store.state)
      this.getAllQuotes()
      this.addUser({ name: 'Pattanai' })
      this.addUser({ name: 'Another' })

      // this.$store.commit('users/ADD_USER', {
      //   name: 'Someone'
      // })

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
