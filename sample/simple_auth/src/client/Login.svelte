<script lang="ts">
//console.log("#about");
import CrudIndex from './Login/CrudIndex';

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
const loginProc = async function(){
  try {
    const v =  CrudIndex.login(); 
//console.log("#loginProc.v=", v);
    if(!v){
      alert("error, Login");
      return;
    }
    const name = import.meta.env.VITE_APP_NAME + "_auth";
    localStorage.setItem(name, '1');
    location.href = '/';
  } catch (e) {
    console.error(e);
  }
}
</script>

<!-- -->
<main>
  <div class="container mx-auto my-2 px-8 bg-white">
    <h1 class="text-4xl font-bold">Login!</h1>
    <hr class="my-2" />
    <label class="text-2xl font-bold my-2">Email:
      <input type="text" id="email" name="email"
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    <hr class="my-2" />
    <label class="text-2xl font-bold my-2">Password:
      <input type="text" id="password" name="password"
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />    
    </label>
    <hr class="my-2" />
    <button on:click={loginProc} class="btn btn-primary">Login
    </button>
  </div>
</main>

<style>
</style>
