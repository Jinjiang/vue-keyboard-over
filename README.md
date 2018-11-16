# vue-keyboard-over

A Vue component that display pressed keys on the keyboard by the user right now.

## Install

```bash
npm install vue-keyboard-over
# or
yarn add vue-keyboard-over
```

## Import

```js
import KeyboardOver from "vue-keyboard-over";
```

## Usage

```html
<KeyboardOver />
```

## Advanced Usage

### Custom Print Format

The format of keys it prints out is depends on:

1. The [`key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) field and the [`code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) field of a [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) object.
2. `<KeyboardOver>` will determine using `key` or `code` "smartly" to match people's common cognitions.
3. For some special `KeyboardEvent` without a brief `key` or `code`, `<KeyboardOver>` will print a pre-defined emoji or symbol.

So you can customize the print format by:

- `nameType: string`

  values: `"smart"` (default) | `"key"` | `"code"`

  - `"key"`: print the `key` field of the `KeyboardEvent` object
  - `"code"`: print the `code` field of the `KeyboardEvent` object
  - `"smart"` (default): print it in a "smart" way

- `nameMap: Record<string, string>`: customized map over the pre-defined key map

  You can access the pre-defined key map by:

  ```js
  export { defaultKeyMap } from "vue-keyboard-over";
  ```

  The value is below:

  ```js
  {
    // modifiers
    Meta: "⌘",
    Shift: "⇧",
    Control: "⌃",
    Alt: "⌥",

    // action keys
    Enter: "⏎",
    Backspace: "⌫",

    // navigation keys
    ArrowUp: "↑",
    ArrowDown: "↓",
    ArrowLeft: "←",
    ArrowRight: "→",

    // special chars
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
  }
  ```

### Events

- `update(keys: Array<string>)`: It will be emitted with current keys when any key pressed down or released up. So you can use this to do more about current keys.

### Custom Style

You can override the component style throught these CSS selectors:

- `.keyboard-over`: The root element.
- `.keyboard-over > kbd`: The printed key item.
- `.keyboard-over-list-*`: The prefix of CSS transition classes. Or you can totally drop the default transition by set the prop `transition` which allows you to specify another prefix of CSS transition classes.

## API References

### Default Export `<KeyboardOver>`

#### Props

- `nameType`
- `nameMap`
- `transition`

#### Events

- `update(keys)`

#### CSS Selectors

- `.keyboard-over`
- `.keyboard-over > kbd`
- `.keyboard-over-list-*`

### Named Exports

- `defaultKeyMap: Record<string, string>`
