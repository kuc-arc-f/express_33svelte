<script lang="ts">
export let items = [];

import HttpCommon from './lib/HttpCommon';
//console.log("#about");

//
async function handleClick() {
console.log('clicked');
  try{
    const postItem = {
      userId: 0,
    }
//console.log(postItem); 
    const json = await HttpCommon.post(postItem, "/api/test/test1");
    items = json.data;  
console.log(items);
  } catch (error) {
    console.error(error);
  }   
}
</script>

<!-- -->
<div class="container mx-auto my-2 px-8 bg-white">
  <hr class="my-2" />
  <h1 class="text-4xl font-bold">Test1</h1>
  <hr class="my-2" />
  {#each items as item}
  <div>
    <h3><a href={`/chats/show/${item.id}`}>{item.title}</a>
    </h3>
    <hr />
  </div>
  {/each}
  <hr class="my-2" />
  <button on:click={handleClick} class="btn btn-primary">Test</button>
</div>

<style>
</style>
