---
title: Using the design system
description: Give your page the Open Beekeeping look with plain CSS.
sidebar:
  order: 1
---

The Open Beekeeping design system (“Bracket”) is the shared look of Open Beekeeping and its products: colours, type, fonts, logos and plain-CSS components, with no JavaScript. These docs use it.

## Install

```sh
npm install github:OpenBeekeeping/design#v0.1.0
```

```js
// e.g. in a SvelteKit root layout
import '@openbeekeeping/design/openbeekeeping.css';
```

```html
<html lang="en" data-theme="dark">  <!-- dark, light, or leave off to follow the device -->
<body data-product="bka">           <!-- parent, bka or apiary: sets the logo’s product colour -->
```

- Dark is the home theme. Without `data-theme`, pages follow the visitor’s light or dark setting.
- Components are classes starting `ob-`: `ob-header`, `ob-lockup`, `ob-btn`, `ob-field`, `ob-input`, `ob-card`, `ob-badge`, `ob-readout`, `ob-code`.
- Fonts are included, so pages make no outside requests.

## Read more

- [Brand book](https://github.com/OpenBeekeeping/design/blob/main/docs/brand.md): names, voice, colour, type and logos
- [Components](https://github.com/OpenBeekeeping/design/blob/main/docs/components.md): markup and rules for each component
