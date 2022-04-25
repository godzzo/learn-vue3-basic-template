<script setup lang="ts">
import { ref } from 'vue'
import {
  BasicOptions,
  BasicComposite,
  bookmarkIcon,
  ShortestWorking,
  SimpleHello,
} from './components/Small'
import { TextComponent } from './components/Sample'

const msg = ref('Hello World!')
</script>

<template>
  <h1
    class="
      font-bold
      text-3xl
      p-2
      bg-blue-200
      rounded-md
      m-4
      text-center
      ring-4 ring-purple-200
      text-white
      hover:text-yellow-500
    "
  >
    Hello World
  </h1>

  <div class="m-2 bg-green-50 p-4 flex flex-col">
    <bookmarkIcon style="width: 30px"></bookmarkIcon>
    <ShortestWorking />
    <label>Message: </label>
    <input class="ring-2 p-2 m-2" v-model="msg" />
    <div class="italic text-xs"><b>message text:</b> {{ msg }}</div>
  </div>

  <BasicOptions :title="'Basic Options Title'"></BasicOptions>
  <BasicComposite :title="'Basic Composite Title'"></BasicComposite>

  <Joe :title="'Basic Composite Title'" />

  <TextComponent color="green"></TextComponent>
  <SimpleHello color="red" />

  <!-- <HelloWorld :msg="msg" /> -->

  <template
    class="bg-green-700 bg-red-700 bg-blue-700 text-yellow-300"
  ></template>
</template>
