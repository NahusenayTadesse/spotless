<script lang="ts">
 import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
 let { title, children} = $props();
</script>
 
<Dialog.Root >
 <Dialog.Trigger class="w-auto px-4"
  >{title}</Dialog.Trigger
 >
 <Dialog.Content class="w-full bg-white">
  <Dialog.Header>
   <Dialog.Title>{title}</Dialog.Title>
  </Dialog.Header>
  {@render children()}
 </Dialog.Content>
</Dialog.Root>