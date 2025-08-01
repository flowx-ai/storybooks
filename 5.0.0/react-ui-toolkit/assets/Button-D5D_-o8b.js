import{j as n}from"./jsx-runtime-DztICxWZ.js";import{useMDXComponents as r}from"./index-BghErDIA.js";import{M as i,a as s,S as a}from"./index-BNPPnQVK.js";import{B as c,a as m}from"./Button.stories-DgMYZCDl.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CE_5hW30.js";import"./index-CluZi8Ot.js";import"./index-BaC3dPEX.js";import"./index-B5R96xoS.js";import"./index-DrFu-skq.js";import"./Button-DN-XrF-T.js";import"./clsx-B-dksMZM.js";import"./Icon-B96PK6rJ.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
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
`,n.jsx(t.p,{children:"The native button attributes (for example: disabled, autofocus, name, type etc.) can also be used."})]})}function D(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(e,{...o})}):e(o)}export{D as default};
