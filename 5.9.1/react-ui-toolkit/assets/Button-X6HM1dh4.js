import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CY0MLCDI.js";import{M as i,a as s,S as a}from"./blocks-Dxi05hSj.js";import{B as c,a as m}from"./Button.stories-CLYHjM9d.js";import"./iframe-BY6wcYIF.js";import"./index-DuX8d471.js";import"./index-CmBALIlM.js";import"./index-C7iKa3z0.js";import"./Button-BBMR5Rs5.js";import"./clsx-B-dksMZM.js";import"./useRenderElement-DDQ_p9oy.js";import"./Icon-B3WMcCaA.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
`,n.jsx(t.h1,{id:"button",children:"Button"}),`
`,n.jsx(t.h2,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { FlxButton } from '@flowx/react-ui-toolkit'

`})}),`
`,n.jsx(t.h2,{id:"inputs",children:"Inputs"}),`
`,n.jsx(s,{children:`
| Name         | Description                                | Default   | Comments                        |
| ------------ | ------------------------------------------ | --------- | ------------------------------- |
| variant      | 'primary' / 'ghost' / 'text'               | 'primary' | changes the style of the button |
| icon         | 'center' / 'left' / 'right'                | -         | icon position                   |
| iconComponent| ReactElement                               | -         | icon component                  |
`}),`
`,n.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(t.h2,{id:"example",children:"Example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<FlxButton
  variant={variant}
  icon={icon}
  iconComponent={<FlxIcon name="plus-circle" />}
>
  Button label
</FlxButton>
`})}),`
`,n.jsx(t.p,{children:"The native button attributes (for example: disabled, autofocus, name, type etc.) can also be used."})]})}function y(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{y as default};
