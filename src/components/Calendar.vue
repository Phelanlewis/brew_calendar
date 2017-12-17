/* eslint-disable */
<template>
    <div id='app'>
      <div class="hello">
        <h1>{{ title }}</h1>
        <router-link to="/recipe"><a>Recipe List</a></router-link>
        <router-link to="/addrecipe"><a>Add Recipe</a></router-link>
        <router-link to="/"><a>Home</a></router-link>
      </div>
      <div>
        <calendar-month 
			    :show-date='showDate'
			    @setShowDate='setShowDate'
			    class="holiday-us-traditional holiday-us-official"
		    />
      </div>
	</div>
</template>

<script>
  import CalendarMonth from 'vue-simple-calendar/src/components/calendar-month'
  require('vue-simple-calendar/static/css/default.css')
  require('vue-simple-calendar/static/css/holidays-us.css')

  export default {
    name: 'app',
    data: function () {
      return {
        title: 'My Calendar',
        showDate: new Date()
      }
    },
    components: {
      CalendarMonth
    },
    methods: {
      setShowDate (d) {
        this.showDate = d
      }
    }
}
</script>
<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  padding: 1em;
}
</style>