<script lang="ts">
 import { Button } from "$lib/components/ui/button/index.js";
 
 import * as Card from "$lib/components/ui/card/index.js";

 let { title='', description='', children} = $props()
</script>
 
<Card.Root class="w-full max-w-sm">
 <Card.Header>
  <Card.Title>{title}</Card.Title>
  <Card.Description
   >{description}</Card.Description
  >
  
 </Card.Header>
 <Card.Content>
   {@render children?.()}
 </Card.Content>

</Card.Root>