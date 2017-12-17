<<template>
  <div>
    <div class="hello">
      <h1>{{ title }}</h1>
      <router-link to="/calendar"><a>Calendar</a></router-link>
      <router-link to="/recipe"><a>Recipe</a></router-link>
      <router-link to="/"><a>Home</a></router-link>
    </div>
    <form>
      <p>Batch Size: <input v-model="batchSize" placeholder="Size?"></p>
      <p>Fermantable: 
        <input v-model="nameMalt" placeholder="Name of Malt?">
        <input v-model="weightMalt" placeholder="Weight">
        <input v-model="colourMalt" placeholder="Color">
        <input v-model="yieldMalt" placeholder="Yield">
      </p>
      <p>Hops:
        <input class="input" v-model="nameHop" placeholder="Name of Hop?">
        <input class="input" v-model="weightHop" placeholder="Weight?">
        <input class="input" v-model="timeHop" placeholder="Time?">
        <input class="input" v-model="aaHop" placeholder="AA?">
        <input class="input" v-model="formHop" placeholder="Form?">
      </p>
      <p>Yeast: 
        <input class="input" v-model="nameYeast" placeholder="Name of yeast?">
        <input class="input" v-model="typeYeast" placeholder="Type?">
        <input class="inputForm" v-model="formYeast" placeholder="Form?">
        <input class="inputForm" v-model="attentuableYeast" placeholder="Attentuable?">  
      </p>
      <button v-on:click></button>
    </form>  
    <div>
      <p>The Batch size is <strong>{{ batchSize }}</strong> </p>
      <p>The Fermantable is <strong>{{ nameMalt }}</strong> with a weight of <strong>{{ weightMalt }}</strong> and a colour of <strong>{{ colourMalt }}</strong> that will yield <strong>{{ yieldMalt }}</strong> </p>
      <p>Tha Hop is <strong>{{ nameHop }}</strong> with a weight of <strong>{{ weightHop }}</strong> takes the time of <strong>{{ timeHop }}</strong>. It has the AA is <strong>{{ aaHop }}</strong></p>
      <p>The yeast is <strong>{{ nameYeast }}</strong>. It comes in <strong>{{ formYeast }}</strong> and is <strong>{{ typeYeast }}</strong> which attentuable at <strong>{{ attentuableYeast }}</strong></p>
    </div>
  </div>
</template>
<<script>
export default {
  data () {
    return {
      title: 'Welcome to the Add Recipe Page',
      batchSize: '',
      nameMalt: '',
      weightMalt: '',
      colourMalt: '',
      yieldMalt: '',
      nameHop: '',
      weightHop: '',
      timeHop: '',
      aaHop: '',
      formHop: '',
      nameYeast: '',
      typeYeast: '',
      formYeast: '',
      attentuableYeast: ''
    }
  }
}
</script>
<style>
 #inputFh1, h2 {
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
