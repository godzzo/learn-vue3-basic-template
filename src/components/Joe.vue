<script setup lang="ts">
import { ref, defineComponent } from 'vue'

const props = defineProps({
  title: String,
})

const message = ref()

const sayHi = () => {
  alert(props.title)
}
</script>

<template>
  <div class="m-4 p-2 rounded-xl ring-4 ring-green-6 bg-yellow-100">
    <div class="font-mono text-blue-600 font-bold">Vue SFC + script setup</div>
    <div @click="sayHi">{{ title }} - {{ message }}</div>
  </div>
</template>
