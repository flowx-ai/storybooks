import{j as t}from"./jsx-runtime-CBDCb4rg.js";import{useMDXComponents as r}from"./index-BSj771as.js";import{ae as i,af as a,ag as s}from"./index-Bbn6NGYK.js";import{B as c,a as m}from"./Button.stories-CQBSa5u2.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-l3PPIgH2.js";import"../sb-preview/runtime.js";import"./index-DjIwiQkP.js";import"./index-CLC3E5cw.js";import"./index-DrFu-skq.js";import"./Button-DnrjwBWn.js";import"./clsx-B-dksMZM.js";import"./index-qMorCPSe.js";import"./Icon-DQNTWSJm.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.h2,{id:"import",children:"Import"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import { FlxButton } from '@flowx/react-ui-toolkit'

`})}),`
`,t.jsx(n.h2,{id:"inputs",children:"Inputs"}),`
`,t.jsx(a,{children:`
| Name         | Description                                | Default   | Comments                        |
| ------------ | ------------------------------------------ | --------- | ------------------------------- |
| variant      | 'primary' / 'ghost' / 'text'               | 'primary' | changes the style of the button |
| icon         | 'center' / 'left' / 'right'                | -         | icon position                   |
| iconComponent| ReactElement                               | -         | icon component                  |
`}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(s,{of:m}),`
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
