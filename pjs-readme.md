
# pjs-readme

Quirks Mode, MS Edge case: On windows 10 Edge seems to have a border-radius of --radius-3 on all four corners.

And it has a cool vertical scroll bar.

- [dynamic css variables in react](https://www.section.io/engineering-education/dynamically-update-react-and-javascript-with-css-variables/)
- [css variables in react with typescript](https://www.curiouslychase.com/posts/fix-css-variable-keys-in-style-attributes-in-react-and-typescript/)

```jsx
import React, { CSSProperties } from 'react';

export interface CSSPropertiesWithVars extends CSSProperties {
  '--color': string;
  // any other vars you may use
}
```

- [module declaration merge using string templates](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript/70398145#70398145)
  
```jsx
import 'react';

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}
```

- [the stack: flow elements](https://every-layout.dev/layouts/stack/)

```css
.stack > * + * {
  margin-block-start: 1.5rem;
}
```

```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```

- provides a consistent max width, padded container that sits in the middle
of the viewport when the viewport is greater than 60rem wide.

```css
.wrapper {
  margin-inline: auto;
  padding-inline: 1rem;
  max-width: 60rem;
}
```
