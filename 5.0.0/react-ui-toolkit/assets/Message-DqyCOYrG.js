import{j as e}from"./jsx-runtime-DztICxWZ.js";import{useMDXComponents as r}from"./index-BghErDIA.js";import{M as t,a as i,S as a}from"./index-BNPPnQVK.js";import{M as c,a as m}from"./Message.stories-B_r8k3wW.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CE_5hW30.js";import"./index-CluZi8Ot.js";import"./index-BaC3dPEX.js";import"./index-B5R96xoS.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Icon-B96PK6rJ.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(s.h1,{id:"message",children:"Message"}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import { FlxMessage } from '@flowx/ui-toolkit/react'
`})}),`
`,e.jsx(s.h2,{id:"inputs",children:"Inputs"}),`
`,e.jsx(i,{children:`
| Name             | Description                              | Default | Comments       |
| ---------------- | ---------------------------------------- | ------- | -------------- |
| type             | "success" / "warning" / "error" / "info" | success |                |
| display          | "text" / "border" / "fill"               | border  |                |
| layout           | "row"/ "column"                          | row     |                |
| iconComponent    | ReactElement                             | -       | icon component |
`}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<FlxMessage type="success">
  This is a success message
</FlxMessage>
`})})]})}function D(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{D as default};
