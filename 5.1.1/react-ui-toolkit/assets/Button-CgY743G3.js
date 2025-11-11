import{j as t}from"./jsx-runtime-DztICxWZ.js";import{useMDXComponents as r}from"./index-BghErDIA.js";import{M as i,a as s,S as a}from"./index-zRIAiock.js";import{B as c,a as m}from"./Button.stories-B-oyWlnc.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B57rXz-E.js";import"./index-DZfHsFkt.js";import"./index-CJSLNY_5.js";import"./index-ChPI8MDz.js";import"./index-DrFu-skq.js";import"./Button-0EAosVNw.js";import"./clsx-B-dksMZM.js";import"./useRenderElement-CQQ5I8lv.js";import"./Icon-Da6wEY94.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.h2,{id:"import",children:"Import"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { FlxButton } from '@flowx/react-ui-toolkit'

`})}),`
`,t.jsx(n.h2,{id:"inputs",children:"Inputs"}),`
`,t.jsx(s,{children:`
| Name         | Description                                | Default   | Comments                        |
| ------------ | ------------------------------------------ | --------- | ------------------------------- |
| variant      | 'primary' / 'ghost' / 'text'               | 'primary' | changes the style of the button |
| icon         | 'center' / 'left' / 'right'                | -         | icon position                   |
| iconComponent| ReactElement                               | -         | icon component                  |
`}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(n.h2,{id:"example",children:"Example"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`<FlxButton
  variant={variant}
  icon={icon}
  iconComponent={<FlxIcon name="plus-circle" />}
>
  Button label
</FlxButton>
`})}),`
`,t.jsx(n.p,{children:"The native button attributes (for example: disabled, autofocus, name, type etc.) can also be used."})]})}function F(o={}){const{wrapper:n}={...r(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{F as default};
