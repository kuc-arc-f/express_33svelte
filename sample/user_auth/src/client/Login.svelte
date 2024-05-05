<script lang="ts">
//console.log("#about");
import CrudIndex from './User/CrudIndex';
import Crud from './User/Crud';
import LibCrypto from './lib/LibCrypto'
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
    const values = Crud.getInputValues();
    const resulte =  await CrudIndex.getItem(); 
console.log(values);
    //console.log(resulte);
    if(!resulte.password){
      console.error("password=nothing");
      alert("error. Login");
      return;
    }
    const decryptPassword = LibCrypto.decode(resulte.password);            
    //console.log(resulte.password);
    //console.log("decryptPassword=", decryptPassword);
    if(values.password && decryptPassword === values.password){
      alert("OK, password");
      const name = import.meta.env.VITE_APP_NAME + "_auth";
      localStorage.setItem(name, values.email);
      location.href = '/';
    }else{
      alert("error. Login password");
      return;
    }
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
