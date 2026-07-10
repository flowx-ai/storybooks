import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DaXNmRXA.js";import{M as t,a as i,S as a}from"./blocks-tMoKKbFr.js";import{M as c,a as m}from"./Message.stories-B5uQx5NS.js";import"./iframe-BqxvtaT5.js";import"./index-BGbJyd4D.js";import"./index-DiK4KnJl.js";import"./index-BkfQMUEu.js";import"./clsx-B-dksMZM.js";import"./Icon-B8yS-63l.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
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
`})})]})}function w(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{w as default};
