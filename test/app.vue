  <template>
    <div>
      {{test}}
    </div> 
  </template>
<script setup lang="ts">
import {ref} from 'vue'
const test = ref('sroxck')
console.log(test()) // => 'sroxck

test.set("sims")
console.log(test())  // => 'sims

</script>
