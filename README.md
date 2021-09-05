# Loading indicator plugin for Vite

Show fancy loading indicator while page is loading!  
Inspired by [nuxtjs](https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading-indicator)

# Install

with yarn

```
yarn add vite-plugin-loading-indicator -D
```

with npm

```
npm install vite-plugin-loading-indicator -D
```

# How to use

vite.config.ts or vite.config.js

```
import LoadingIndicator from "vite-plugin-loading-indicator";

export default defineConfig({
  plugins: [LoadingIndicator({})]
  ...
))
```

## options

### name

default:"circle"  
desc:These indicators are imported from the awesome [SpinKit](https://tobiasahlin.com/spinkit/) project. You can use its demo page to preview spinners.

- circle
- cube-gri
- fading-circl
- folding-cub
- chasing-dot
- puls
- rectangle-bounc
- rotating-plan
- three-bounc
- wandering-cube

custom indicators example:  
name:"loading/custom.html"(base on Project Root)  
custom.html structure like
```
<style>
body, html, #<%= options.mountId %> {
  background: <%= options.background %>;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.sk-circle .sk-child{
  ...
  background-color: <%= options.color %>;
}
</style>

<div class="sk-circle">
  ...
  <div class="sk-child"></div>
</div>
```

### color

default:"black"  
desc:indicators color

### background

default:"white"  
desc:background color

### mountId

default:"#app"  
desc:vue mount point id
