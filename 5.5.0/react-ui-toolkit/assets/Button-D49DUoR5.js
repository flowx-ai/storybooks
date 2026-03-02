import{j as n}from"./jsx-runtime-DKyZFwF6.js";import{useMDXComponents as r}from"./index-Glcb8vtk.js";import{M as i,a as s,S as a}from"./blocks-BptaT5N0.js";import{B as c,a as m}from"./Button.stories-KfTgK9Ju.js";import"./iframe-D-KLx_-Q.js";import"./index-NpOAqUKs.js";import"./index-DuvN771D.js";import"./index-sD0BT8Av.js";import"./Button-B_zIIJJ0.js";import"./clsx-B-dksMZM.js";import"./useRenderElement-BuJcGdjq.js";import"./Icon-DQxgNGzd.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
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
