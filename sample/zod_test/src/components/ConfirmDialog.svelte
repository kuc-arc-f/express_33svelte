<script lang="ts">
export let message: string= "", cbFunction:any;
//console.log("message=", message);
//
const closeButton = function(){
  const dlg = document.getElementById('confirmDialog');
  if(dlg) {
    //@ts-ignore
    dlg.close();
  }
}
const okFunc = async function(){
  console.log("#okFunc");
  cbFunction();
}
</script>

<!-- MarkUp -->
<dialog id="confirmDialog" class="dialog">
  <div class="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
    <p class="text-3xl font-bold text-gay-900">{message}</p>
    <hr class="my-3" />
    <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
    type="submit" on:click={() => okFunc()}>OK</button>
    <button 
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
    type="submit" on:click={() => closeButton()}>Cancel</button>
  </div>
</dialog>

<!--
-->