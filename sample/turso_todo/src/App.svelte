<script lang="ts">
import Router from 'svelte-spa-router'
//
import Head from './components/Head.svelte'
//
const pages = import.meta.glob('./client/*.svelte', { eager: true })
//
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/client\/(.*)\.svelte$/)[1]
  let pathTmp = `/${name.toLowerCase()}`; 
  if(name === 'Home') { pathTmp ='/'};
  if(name === 'TestApiShow') { pathTmp ='/testapishow/:id'};
  if(name === 'TursoTodoShow') { pathTmp ='/tursotodoshow/:id'};
 //path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
  //
  return {
    name,
    path: pathTmp,
    component: pages[path].default,
  }
})
export let routeArray = {};
routes.forEach((item, idx) => {
  let path = item.path;
  let compo = item.component;
  //@ts-ignore
  routeArray[item.path] = compo;
});
//console.log(routeArray);
</script>

<!-- -->
<main>
    <nav>
    {#each routes as item}
    <div>
      <a href={`/#${item.path}`}>{item.name}</a>
    </div>
    {/each}	
    </nav>
    <hr />
    <Router routes={routeArray} />
    <hr />
</main>

<style>
</style>
<!--
      <p>Title1</p>

  {item.path}
<h1>Vite + Svelte</h1>
-->
