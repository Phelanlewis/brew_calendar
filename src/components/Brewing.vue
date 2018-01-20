<<template>
  <div class="hello">
    <div class="hello">
        <h1>{{ title }}</h1>
        <router-link to="/recipe"><a>Recipe List</a></router-link>
        <router-link to="/addrecipe"><a>Add Recipe</a></router-link>
        <router-link to="/"><a>Home</a></router-link>
        <router-link to="/brewing"><a>Is it Brew Day?</a></router-link>
      </div>
      <h2>What recipe are we doing today?</h2>
  </div>
</template>

<<script>
export default {
  data () {
    return {
      title: 'Welcome to Brew Day!'
    }
  }
}
</script>
<<style>
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
