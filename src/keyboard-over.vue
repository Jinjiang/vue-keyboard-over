<template>
  <div class="keyboard-over">
    <kbd v-for="key in keys" :key="key">{{ key }}</kbd>
    <span v-if="keys && keys.length && modifiers && modifiers.length">+</span>
    <kbd v-for="modifier in modifiers" :key="modifier">{{ modifier }}</kbd>
  </div>
</template>

<script>
const smartNameMap = {
  Meta: "⌘",
  Shift: "⇧",
  Control: "⌃",
  Alt: "⌥",
  Enter: "⏎",
  Backspace: "⌫",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",

  Backquote: "`",
  Minus: "-",
  Equal: "=",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  Semicolon: ";",
  Quote: "'",
  Comma: ",",
  Period: ".",
  Slash: "/"
};

const nameTypeMap = {
  key: true,
  code: true,
  smart: true
};

function parseKey(event) {
  const { key, code } = event;
  // modifier: key
  if (["Control", "Shift", "Alt", "Meta"].indexOf(key) >= 0) {
    return { key, code, isModifier: true, smart: key };
  }
  // navigation: key
  if (
    [
      "Up",
      "Down",
      "Left",
      "Right",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "PageUp",
      "PageDown"
    ].indexOf(key) >= 0
  ) {
    return { key, code, smart: key };
  }
  // number: key
  if (key.match(/^\d$/)) {
    return { key, code, smart: key };
  }
  // number: code
  if (code.match(/^Digit\d$/)) {
    return { key, code, smart: code.substr(5) };
  }
  // alphabet: code
  if (code.match(/^Key\w$/)) {
    return { key, code, smart: code.substr(3).toUpperCase() };
  }
  // other: code
  return { key, code, smart: code };
}

function getKeyName(info, nameType, nameMap) {
  const type = nameTypeMap[nameType] || "smart";
  const value = info[type];
  const map = Object.assign(
    {},
    nameMap,
    type === "smart" ? smartNameMap : null
  );
  return map[value] || value;
}

export default {
  created() {
    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
  },
  props: {
    nameType: String,
    nameMap: Object
  },
  data() {
    return {
      keys: [],
      modifiers: []
    };
  },
  watch: {
    nameType() {
      this.reset();
    },
    nameMap() {
      this.reset();
    }
  },
  methods: {
    reset() {
      this.modifiers = [];
      this.keys = [];
    },
    keydown(event) {
      if (event.repeat) {
        return;
      }
      const info = parseKey(event);
      const name = getKeyName(info, this.nameType, this.nameMap);
      if (info.isModifier) {
        const index = this.modifiers.indexOf(name);
        if (index < 0) {
          this.modifiers.push(name);
        }
      } else {
        const index = this.keys.indexOf(name);
        if (index < 0) {
          this.keys.push(name);
        }
      }
    },
    keyup(event) {
      const info = parseKey(event);
      const name = getKeyName(info, this.nameType, this.nameMap);
      if (info.isModifier) {
        const index = this.modifiers.indexOf(name);
        if (index >= 0) {
          this.modifiers.splice(index, 1);
        }
      } else {
        const index = this.keys.indexOf(name);
        if (index >= 0) {
          this.keys.splice(index, 1);
        }
      }
    }
  }
};
</script>

<style>
/* https://w3c.github.io/aria-practices/examples/css/core.css */
.keyboard-over kbd {
  display: inline-block;
  padding: 0.1em 0.3em;
  color: #555;
  text-align: center;
  min-width: 1em;
  height: 1.5em;
  vertical-align: middle;
  background-color: #fcfcfc;
  border: solid 1px #ccc;
  border-bottom-color: #bbb;
  border-radius: 0.2em;
  box-shadow: inset 0 -1px 0 #bbb;
}
.keyboard-over kbd + kbd {
  margin-left: 0.5em;
}
</style>
