<script setup>
import { RouterView } from 'vue-router'

if (!localStorage.getItem("userLocale")) {
  localStorage.setItem("userLocale", "en")
  document.querySelector("html").setAttribute("dir", "ltr")

}

if (!localStorage.getItem("userDir")) {
  localStorage.setItem("userDir", "ltr")

}
if (localStorage.getItem("userDir") == 'rtl') {
  document.querySelector("html").setAttribute("dir", "rtl")
}
if (localStorage.getItem("userDir") == 'ltr') {
  document.querySelector("html").setAttribute("dir", "ltr")
}
</script>

<template >
      <notifications position="bottom right" />

  <div id="project" v-bind:class="[{'arabic' : $i18n.locale=='ar' },{'english':$i18n.locale=='en'}]">

  <RouterView />
  </div>
</template>



