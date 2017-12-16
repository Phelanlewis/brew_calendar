<<template>
  <div>
    <h1>Add Recipe</h1>
    <form>
      <p>Batch Size: <input v-model="message" placeholder="Size?"></p>
      <p>Fermantable: 
        <input v-model="message" placeholder="Name of Malt?">
        <input v-model="message" placeholder="Weight">
        <input v-model="message" placeholder="Color">
        <input v-model="message" placeholder="Yield"></p>
      <p>Hops:
        <input class="input" v-model="message" placeholder="Name of Hop?">
        <input class="input" v-model="message" placeholder="Weight?">
        <input class="input" v-model="message" placeholder="Time?">
        <input class="input" v-model="message" placeholder="aa?">
        <input class="input" v-model="message" placeholder="Form?"></p>
      <p>Yeast: 
        <input class="input" v-model="message" placeholder="Name of yeast?">
        <input class="input" v-model="message" placeholder="Type?">
        <input class="inputForm" v-model="message" placeholder="Form?">
        <input class="inputForm" v-model="message" placeholder="Attentuable?">  </p>
    </form>  
  </div>
</template>
<<script>
export default {

}
</script>
<style>
 #inputForm {
   padding: 1em;
 }
</style>
