/* eslint-disable */
<template>
    <div id='app'>
        <h1>My Calendar</h1>
            <calendar-month 
			:show-date='showDate'
			@setShowDate='setShowDate'
			class="holiday-us-traditional holiday-us-official"
		/>
	</div>
</template>

<script>
  import CalendarMonth from 'vue-simple-calendar/src/components/calendar-month'
  require('vue-simple-calendar/static/css/default.css')
  require('vue-simple-calendar/static/css/holidays-us.css')

  export default {
    name: 'app',
    data: function () {
      return { showDate: new Date() }
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
</style>