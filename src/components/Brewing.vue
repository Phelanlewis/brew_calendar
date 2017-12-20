<<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
  </div>
</template>

<<script>
export default {
  data () {
    return {
      msg: 'Welcome to Brew Day!'
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
