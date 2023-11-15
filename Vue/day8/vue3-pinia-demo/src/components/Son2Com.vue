  <template>
  <div>SonCom2</div>
  <button @click="counterStore.subCount">-</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script>

<style scoped>

</style>