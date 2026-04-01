import{j as n}from"./jsx-runtime-B2vo17nN.js";import{useMDXComponents as r}from"./index-C-2ItNXd.js";import{M as i,a as s,S as a}from"./blocks-DkbhhiFo.js";import{B as c,a as m}from"./Button.stories-CeoDEX6C.js";import"./iframe-BxDDtFTO.js";import"./index-DIhqq-Rr.js";import"./index-BrFHg4Dx.js";import"./index-CVk-YjQf.js";import"./Button-DPKTouYd.js";import"./clsx-B-dksMZM.js";import"./useRenderElement-CYv6NJKW.js";import"./Icon-CdSN3cIM.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
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
