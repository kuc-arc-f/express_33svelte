<script lang="ts">
import Head from '../components/Head.svelte';
//import CrudIndex from './Test/CrudIndex';
import CrudShow from './TursoTodo/CrudShow';
export let pageItem = {}, itemId: number= 0, params: any;

console.log("#TestApiShow");
console.log(params);
itemId = Number(params.id);
console.log("itemId=", itemId);
//
const handleClick = function(){
  console.log("#handleClick" , new Date().toString());
}
/**
 *
 * @param
 *
 * @return
 */
const getItem = async function(id: number) {
  try{
      if(id === 0){return;}
      const item = await CrudShow.get(id);
      pageItem = item;
console.log(pageItem);
  } catch (e) {
      console.error(e);
  } 
}
getItem(itemId);

/**
 *
 * @param
 *
 * @return
 */
const deleteItem = async function() {
  try{
    const result = await CrudShow.delete(itemId);
    if(result) {
        window.location.href = '/#/tursotodo';
    }
  } catch (e) {
    console.error(e);
  } 
}

</script>

<!-- -->
<main>
  <div class="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 class="text-4xl font-bold">Show:</h1>
    <hr class="my-2" />
    <h1 class="text-4xl font-bold">{pageItem.title}</h1>
    <p>ID: {pageItem.id}</p>
    <hr class="my-1" />
    <pre>{pageItem.content}</pre>
    <hr class="my-1" />
    <button on:click={deleteItem} class="btn btn-red"
    >Delete</button>
  </div>
</main>

<style>
</style>

<!--
<Head />
-->

