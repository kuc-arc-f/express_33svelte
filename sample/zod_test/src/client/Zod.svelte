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

//export let items = [], errors = {};
export let errors = {};
//
const testProc = async function(){
  const input = Crud.getInputValues();
  errors = Validate.formValidate(input);
console.log(errors);
  if (Object.keys(errors).length > 0) {
    const dlg = document.getElementById('errorModalDialog');
    if(dlg) {
      //@ts-ignore
      dlg.showModal();
    }
    return;
  }
  const modalDialog = document.getElementById('modalDialog');
  if(modalDialog) {
    //@ts-ignore
    modalDialog.showModal();
  }
}
</script>

<!-- -->
<div class="container mx-auto my-2 px-8 bg-white">
  <h1 class="text-4xl font-bold">Zod test!!</h1>
  <hr class="my-2" />
  <label>Title:
    <input type="text" id="title" 
    class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />    
  </label>
  {#if errors?.title}
    <em class="error_message">{errors?.title}</em>
  {/if}
  <hr class="my-2" />
  <label>Content:
    <input type="text" id="content" 
    class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />    
  </label>
  {#if errors?.content}
    <em class="error_message">{errors?.content}</em>
  {/if}
  <hr class="my-2" />
  <button on:click={() => testProc()} class="btn-purple">Test
  </button>
  <!-- dialog -->
  <DialogBox message={`OK, Check Complete!!`} />
  <ErrorDialogBox message={`NG, Check!`} />
</div>

<style>
</style>

<!--
-->
