import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BatJBCaX.js";import{M as l,a as r,S as c}from"./blocks-QGo94kKh.js";import{A as a,a as d}from"./Accordion.stories-t-lTCmcA.js";import"./iframe-zYHOjd-Y.js";import"./index--f_n78qm.js";import"./index-UAcn6FC5.js";import"./index-DhyPoLvB.js";import"./Accordion-C0xLK_vv.js";import"./clsx-B-dksMZM.js";import"./Card-Cd9u1q_1.js";import"./Icon-DxlAPyV_.js";import"./useOpenChangeComplete-z6Hq2Y0p.js";import"./useRenderElement-BG9gqNO3.js";import"./useIsoLayoutEffect-Dtmp57ar.js";import"./useControlled-C-35pI1f.js";import"./useButton-yrPMaa0V.js";import"./addEventListener-C7Nm7Zds.js";function n(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(i.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(i.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`import {
  FlxAccordion,
  FlxAccordionItem,
  FlxAccordionItemHeader,
  FlxAccordionItemTitle,
  FlxAccordionItemSubtitle,
  FlxAccordionItemContent
} from '@flowx/react-ui-toolkit'
`})}),`
`,e.jsx(i.h2,{id:"inputs",children:"Inputs"}),`
`,e.jsx(r,{children:`
| Name          | Description  | Comments                                               |
| ------------- | -----------  | ------------------------------------------------------ |
| completed     | boolean      | if true, it sets the class "completed" on the item     |
| disabled      | boolean      | if true, it sets the class "disabled" on the item      |
| opened        | boolean      | if true, it sets the class "opened" on the item        |
| alwaysOpened  | boolean      | if true, it sets the class "always-opened" on the item |
| completedIcon | ReactElement | sets the completed icon on the "FlxAccordionTitle"     |
| caretIcon     | ReactElement | sets the caret icon on the "FlxAccordionTitle"         |
`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"<FlxAccordion>"})," component contains different items that are represented by the ",e.jsx(i.code,{children:"<FlxAccordionItem>"})," component."]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(i.h2,{id:"example",children:"Example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<FlxAccordion>
  <FlxAccordionItem completed>
    <FlxAccordionItemHeader>
      <FlxAccordionItemTitle>
        Title 1 - this is actually a very long title that should turn into ellipsis
      </FlxAccordionItemTitle>
   </FlxAccordionItemHeader>
   <FlxAccordionItemContent>
      Duis cillum magna culpa eu adipisicing enim aliquip aliquip dolore deserunt ex irure aliqua excepteur. Aute aliqua officia id fugiat ex Lorem amet cillum amet pariatur
      quis consequat velit. Nisi culpa in dolore et consequat laboris ea dolor elit ad
      aliquip Lorem elit. Est proident et reprehenderit velit reprehenderit deserunt. Velit
      minim eu qui cillum irure.
    </FlxAccordionItemContent>
  </FlxAccordionItem>

  <FlxAccordionItem>
    <FlxAccordionItemHeader>
      <FlxAccordionItemTitle>
        Title 2 (with subtitle)
      </FlxAccordionItemTitle>
      <FlxAccordionItemSubtitle>Subtitle 2</FlxAccordionItemSubtitle>
    </FlxAccordionItemHeader>
    <FlxAccordionItemContent>
      Duis cillum magna culpa eu adipisicing enim aliquip aliquip dolore deserunt ex irure
      aliqua excepteur. Aute aliqua officia id fugiat ex Lorem amet cillum amet pariatur
      quis consequat velit. Nisi culpa in dolore et consequat laboris ea dolor elit ad
      aliquip Lorem elit. Est proident et reprehenderit velit reprehenderit deserunt. Velit
      minim eu qui cillum irure.
    </FlxAccordionItemContent>
  </FlxAccordionItem>

  <FlxAccordionItem>
    <FlxAccordionItemHeader>
      <FlxAccordionItemTitle>
        Title 3
      </FlxAccordionItemTitle>
    </FlxAccordionItemHeader>
    <FlxAccordionItemContent>
      Duis cillum magna culpa eu adipisicing enim aliquip aliquip dolore deserunt ex irure
      aliqua excepteur. Aute aliqua officia id fugiat ex Lorem amet cillum amet pariatur
      quis consequat velit. Nisi culpa in dolore et consequat laboris ea dolor elit ad
      aliquip Lorem elit. Est proident et reprehenderit velit reprehenderit deserunt. Velit
      minim eu qui cillum irure.
     </FlxAccordionItemContent>
    </FlxAccordionItem>

  <FlxAccordionItem disabled>
    <FlxAccordionItemHeader>
      <FlxAccordionItemTitle>
        Title 4 (with subtitle)
      </FlxAccordionItemTitle>
      <FlxAccordionItemSubtitle>Subtitle 4</FlxAccordionItemSubtitle>
  </FlxAccordionItemHeader>
  <FlxAccordionItemContent>
    Duis cillum magna culpa eu adipisicing enim aliquip aliquip dolore deserunt ex irure
    aliqua excepteur. Aute aliqua officia id fugiat ex Lorem amet cillum amet pariatur
    quis consequat velit. Nisi culpa in dolore et consequat laboris ea dolor elit ad
    aliquip Lorem elit. Est proident et reprehenderit velit reprehenderit deserunt. Velit
    minim eu qui cillum irure.
  </FlxAccordionItemContent>
  </FlxAccordionItem>
</FlxAccordion>
`})})]})}function H(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{H as default};
