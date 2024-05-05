<script>
import LibLayout from '../client/lib/LibLayout';
//
LibLayout.startProc();
</script>

<!-- Layout.svelte -->
<div>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot> <!-- デフォルトのスロット -->
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
<!--
-->