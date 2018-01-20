<template>
  <div class="app"> 
    <div class="hello">
      <h1>{{ title }}</h1>
      <router-link to="/calendar"><a>Calendar</a></router-link>
      <router-link to="/addrecipe"><a>Add Recipe</a></router-link>
      <router-link to="/"><a>Home</a></router-link>
      <router-link to="/brewing"><a>Is it Brew Day?</a></router-link>
    </div>
    <p>Malt : I am a number</p>
    <p>Hops : I am also a number</p>
  </div>

</template>
<<script>
export default {
  data () {
    return {
      title: 'Recipe List'
    }
  }
}
</script>
<<style>
  #app{
    padding: 2em
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

