import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{i as n,r}from"./react-CvSb7aOu.js";import{a as i,c as a,o,s}from"./blocks-DQsjqlNX.js";import{n as c,r as l,t as u}from"./Accordion.stories-6rX2Mj3Y.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,p.jsx)(t.h2,{id:`imports`,children:`Imports`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`import {
  FlxAccordion,
  FlxAccordionItem,
  FlxAccordionItemHeader,
  FlxAccordionItemTitle,
  FlxAccordionItemSubtitle,
  FlxAccordionItemContent
} from '@flowx/react-ui-toolkit'
`})}),`
`,(0,p.jsx)(t.h2,{id:`inputs`,children:`Inputs`}),`
`,(0,p.jsx)(i,{children:`
| Name          | Description  | Comments                                               |
| ------------- | -----------  | ------------------------------------------------------ |
| completed     | boolean      | if true, it sets the class "completed" on the item     |
| disabled      | boolean      | if true, it sets the class "disabled" on the item      |
| opened        | boolean      | if true, it sets the class "opened" on the item        |
| alwaysOpened  | boolean      | if true, it sets the class "always-opened" on the item |
| completedIcon | ReactElement | sets the completed icon on the "FlxAccordionTitle"     |
| caretIcon     | ReactElement | sets the caret icon on the "FlxAccordionTitle"         |
`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`<FlxAccordion>`}),` component contains different items that are represented by the `,(0,p.jsx)(t.code,{children:`<FlxAccordionItem>`}),` component.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(s,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<FlxAccordion>
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
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),a(),l()})))()}m();export{f as default};