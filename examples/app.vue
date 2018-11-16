<template>
  <div id="app">
    <h1>Vue Keyboard Over</h1>
    <p>
      A Vue component that display pressed keys on the keyboard by the user
      right now.
    </p>
    <h2>Install</h2>
    <pre><code>npm install vue-keyboard-over<br /># or<br />yarn add vue-keyboard-over</code></pre>
    <h2>Import</h2>
    <pre><code>import KeyboardOver from "vue-keyboard-over"</code></pre>
    <h2>Usage</h2>
    <pre><code>&lt;KeyboardOver /&gt;</code></pre>
    <p>
      see more on
      <a href="https://github.com/jinjiang/vue-keyboard-over/">GitHub</a>
    </p>
    <KeyboardOver class="overlay"></KeyboardOver>
    <a href="https://github.com/jinjiang/vue-keyboard-over/"
      ><img
        style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
        alt="Fork me on GitHub"
    /></a>
  </div>
</template>

<script>
import KeyboardOver from "../src/keyboard-over.vue";
export default {
  components: { KeyboardOver }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
}

pre {
  background-color: #2c3e50;
  color: white;
  padding: 1em 2em;
  border-radius: 3px;
}

.overlay {
  position: fixed;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 64px;
}
</style>
