<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
     <router-link to="/calendar"><a>Calendar</a></router-link>
     <router-link to="/recipe"><a>Recipe</a></router-link>
     <router-link to="/addrecipe"><a>Add Recipe</a></router-link>
     <router-link to="/brewing"><a>Is it Brew Day?</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Brewstr'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
