<script lang="ts">
import type { ComponentEvents } from 'svelte';
import type { SvelteHTMLElements  } from 'svelte/elements';
type InputOnChangeEvent = SvelteHTMLElements['input']['on:change']

import HttpCommon from './lib/HttpCommon';
import CrudIndex from './Zod/CrudIndex';
import Crud from './Zod/Crud';
import Validate from './Zod/Validate';
import DialogBox from '../components/DialogBox.svelte'
import ErrorDialogBox from '../components/ErrorDialogBox.svelte'
import ConfirmDialog from '../components/ConfirmDialog.svelte'
//
//export let errors = {};
//
const testProc = async function(){
  const dlg = document.getElementById('confirmDialog');
  if(dlg) {
    //@ts-ignore
    dlg.showModal();
  }
}
//
const cbFunc = async function(){
  console.log("#cbFunc");
  alert("parent.cbFunc");
  const dlg = document.getElementById('confirmDialog');
  if(dlg) {
    //@ts-ignore
    dlg.close();
  }
}
</script>

<!-- -->
<div class="container mx-auto my-2 px-8 bg-white">
  <h1 class="text-4xl font-bold">Confirm.svelte!</h1>
  <hr class="my-2" />
  <button on:click={() => testProc()} class="btn-purple">Test
  </button>
  <!-- dialog -->
  <ConfirmDialog message={`OK? next`} cbFunction={cbFunc}/>
</div>

<style>
</style>

<!--
-->
