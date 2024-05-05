<script lang="ts">
//console.log("#about");
import CrudIndex from './User/CrudIndex';
import Crud from './User/Crud';
import Validate from './User/Validate';
//
export let errors = {};
/**
 *
 * @param
 *
 * @return
 */     
const hiddenNavibar = function(){
  const elm = document.querySelector(`.app_navi_wrap`);
  if(elm) {elm.classList.remove('d-none');}
  if(elm) {elm.classList.add('d-none');}
}
hiddenNavibar();
/**
 *
 * @param
 *
 * @return
 */
const addProc = async function(){
  try {
    const input = Crud.getInputValues();
console.log(input);
    errors = Validate.formValidate(input);
console.log(errors);
    if (Object.keys(errors).length > 0) {
        alert("Error!");
        return;
    }
    const result = await CrudIndex.addItem(); 
    if(result){
      alert("OK, add User");
      location.href = '/login';
    } else{
        alert("Error, add User");
    }

    /*
    const v =  CrudIndex.login(); 
    if(!v){
      alert("error, Login");
      return;
    }
    const name = import.meta.env.VITE_APP_NAME + "_auth";
    localStorage.setItem(name, '1');
    location.href = '/';
    */
  } catch (e) {
    alert("NG, save");
    console.error(e);
  }
}
</script>

<!-- -->
<main>
  <div class="container mx-auto my-2 px-8 bg-white">
    <h1 class="text-4xl font-bold">UserCreate!</h1>
    <hr class="my-2" />
    <label class="text-2xl font-bold my-2">Name: 
      <input type="text" id="name" name="name" 
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    {#if errors?.name}
      <em class="error_message">{errors?.name}</em>
    {/if}
    <hr class="my-2" />
    <label class="text-2xl font-bold my-2">Email:
      <input type="text" id="email" name="email"
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    {#if errors?.email}
      <em class="error_message">{errors?.email}</em>
    {/if}
    <hr class="my-2" />
    <label class="text-2xl font-bold my-2">Password:
      <input type="text" id="password" name="password"
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    {#if errors?.password}
      <em class="error_message">{errors?.password}</em>
    {/if}
    <hr class="my-2" />
    <button on:click={addProc} class="btn btn-primary">Save
    </button>
  </div>
</main>

<style>
</style>
