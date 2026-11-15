import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{f as t}from"./iframe-DqoPYmuj.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./clsx-DCdnwCma.js";import{r as a,t as o}from"./Icon-CS0V3G0Z.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./TabsList-CQbncaC2.js";var h,g,_,v,y;function b(){return(b=e((()=>{r(),h=t(),a(),P(),d(),g=n(),_=({label:e,index:t,parentIndex:n,completed:r,isLast:i=!1})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`step-index`,children:[n+1,`.`,t+1]}),(0,g.jsx)(`span`,{className:`step-label`,children:e}),r?(0,g.jsx)(o,{name:`check`,className:`step-check`}):null,i?null:(0,g.jsx)(o,{name:`caretRight`,className:`step-arrow`})]}),v=({label:e,index:t,completed:n=!1})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`step-index`,children:n?(0,g.jsx)(o,{name:`check`}):t+1}),(0,g.jsx)(`span`,{className:`step-label`,children:e})]}),y=({label:e,completed:t,children:n,className:r,value:a,ref:o,...c})=>{let{parentIndex:l,value:u,totalSteps:d}=M(),f=(0,h.useMemo)(()=>t===void 0?u>a:t,[t,u,a]),p=(0,h.useMemo)(()=>a===d-1,[a,d]),m=(0,h.useMemo)(()=>u===a,[u,a]);return(0,h.useMemo)(()=>(0,g.jsxs)(s,{...c,ref:o,className:i([`step`,{completed:f},{selected:m},r]),nativeButton:!1,render:(0,g.jsx)(`li`,{}),value:a,children:[l===void 0?v({label:e,index:a,completed:f}):_({label:e,index:a,parentIndex:l,completed:f,isLast:p}),n]}),[a,o,f,m,r,l,e,f,p,n])},y.displayName=`FlxStepperItem`,(0,h.memo)(y)})))()}var x,S,C;function w(){return(w=e((()=>{r(),x=t(),P(),u(),S=n(),C=({className:e,ref:t,...n})=>{let{parentIndex:r}=M();return(0,S.jsx)(m,{...n,activateOnFocus:!1,ref:t,className:i([`stepper`,{"child-stepper":r!==void 0},e]),render:(0,S.jsx)(`ol`,{})})},C.displayName=`FlxStepperList`,(0,x.memo)(C)})))()}var T,E,D;function O(){return(O=e((()=>{T=t(),l(),E=n(),D=e=>(0,E.jsx)(f,{...e,tabIndex:void 0}),(0,T.memo)(D)})))()}var k,A,j,M,N;function P(){return(P=e((()=>{r(),k=t(),c(),A=n(),b(),w(),O(),j=(0,k.createContext)({}),M=()=>(0,k.useContext)(j),N=({onValueChange:e,completedSteps:t,value:n,className:r,ref:a,...o})=>{let s=(0,k.useRef)(null);(0,k.useImperativeHandle)(a,()=>s.current);let c=s.current?.querySelectorAll(`.step`).length??0,[l,u]=(0,k.useState)();(0,k.useEffect)(()=>{let e=(s.current?.parentElement?.parentElement?.closest(`.flx-stepper`))?.getAttribute(`aria-current`);u(e?parseInt(e):void 0)},[]);let d=(0,k.useMemo)(()=>Math.max(...t),[t]);return(0,A.jsx)(j.Provider,{value:{parentIndex:l,value:n||0,totalSteps:c,completedSteps:t},children:(0,A.jsx)(p,{...o,ref:s,className:i([`flx-stepper`,r]),"aria-current":n||0,value:n||0,onValueChange:(t,n)=>{t>d+1?n.cancel():e?.(t)}})})},N.displayName=`FlxStepper`,(0,k.memo)(N)})))()}var F,I,L,R,z,B;function V(){return(V=e((()=>{P(),F=n(),I={title:`Stepper`,component:N,subcomponents:{FlxStepperItem:y,FlxStepperContent:D,FlxStepperList:C},decorators:[(e,{args:t})=>(0,F.jsx)(`div`,{style:{fontFamily:t.fontFamily},className:`flx-default-theme`,children:(0,F.jsx)(e,{})})],argTypes:{fontFamily:{options:[`Open Sans`,`Source Code Pro`,`Bitter`],control:{type:`select`}}}},L={args:{fontFamily:`Open Sans`}},R={...L,render:()=>(0,F.jsxs)(N,{children:[(0,F.jsxs)(C,{children:[(0,F.jsx)(y,{label:`Step 1`,index:0}),(0,F.jsx)(y,{label:`Step 2`,index:1}),(0,F.jsx)(y,{label:`Step 3`,index:2})]}),(0,F.jsx)(D,{value:0,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 1"`})}),(0,F.jsx)(D,{value:1,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 2"`})}),(0,F.jsxs)(D,{value:2,children:[(0,F.jsx)(`p`,{children:`This is the contents of "Step 3"`}),(0,F.jsx)(`p`,{children:`It can contain multiple elements`})]})]})},z={...L,render:()=>(0,F.jsxs)(N,{defaultValue:0,children:[(0,F.jsxs)(C,{children:[(0,F.jsx)(y,{label:`Step 1`,index:0}),(0,F.jsx)(y,{label:`Step 2`,index:1}),(0,F.jsx)(y,{label:`Step 3`,index:2})]}),(0,F.jsx)(D,{value:0,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{children:`This is the contents of "Step 1"`}),(0,F.jsxs)(N,{children:[(0,F.jsxs)(C,{children:[(0,F.jsx)(y,{label:`Step 1.1`,index:0}),(0,F.jsx)(y,{label:`Step 1.2`,index:1}),(0,F.jsx)(y,{label:`Step 1.3`,index:2})]}),(0,F.jsx)(D,{value:0,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 1.1"`})}),(0,F.jsx)(D,{value:1,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 1.2"`})}),(0,F.jsx)(D,{value:2,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 1.3"`})})]})]})}),(0,F.jsx)(D,{value:1,children:(0,F.jsx)(`p`,{children:`This is the contents of "Step 2"`})}),(0,F.jsxs)(D,{value:2,children:[(0,F.jsx)(`p`,{children:`This is the contents of "Step 3"`}),(0,F.jsx)(`p`,{children:`It can contain multiple elements`})]})]})},B=[`SimpleStepper`,`MultiStepper`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...StepperTemplate,
  render: () => <FlxStepper>
      <FlxStepperList>
        <FlxStepperItem label="Step 1" index={0}></FlxStepperItem>
        <FlxStepperItem label="Step 2" index={1}></FlxStepperItem>
        <FlxStepperItem label="Step 3" index={2}></FlxStepperItem>
      </FlxStepperList>
      <FlxStepperContent value={0}>
        <p>This is the contents of &quot;Step 1&quot;</p>
      </FlxStepperContent>
      <FlxStepperContent value={1}>
        <p>This is the contents of &quot;Step 2&quot;</p>
      </FlxStepperContent>
      <FlxStepperContent value={2}>
        <p>This is the contents of &quot;Step 3&quot;</p>
        <p>It can contain multiple elements</p>
      </FlxStepperContent>
    </FlxStepper>
} satisfies Story`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...StepperTemplate,
  render: () => <FlxStepper defaultValue={0}>
      <FlxStepperList>
        <FlxStepperItem label="Step 1" index={0}></FlxStepperItem>
        <FlxStepperItem label="Step 2" index={1}></FlxStepperItem>
        <FlxStepperItem label="Step 3" index={2}></FlxStepperItem>
      </FlxStepperList>
      <FlxStepperContent value={0}>
        <div>
          <p>This is the contents of &quot;Step 1&quot;</p>
          <FlxStepper>
            <FlxStepperList>
              <FlxStepperItem label="Step 1.1" index={0}></FlxStepperItem>
              <FlxStepperItem label="Step 1.2" index={1}></FlxStepperItem>
              <FlxStepperItem label="Step 1.3" index={2}></FlxStepperItem>
            </FlxStepperList>
            <FlxStepperContent value={0}>
              <p>This is the contents of &quot;Step 1.1&quot;</p>
            </FlxStepperContent>
            <FlxStepperContent value={1}>
              <p>This is the contents of &quot;Step 1.2&quot;</p>
            </FlxStepperContent>
            <FlxStepperContent value={2}>
              <p>This is the contents of &quot;Step 1.3&quot;</p>
            </FlxStepperContent>
          </FlxStepper>
        </div>
      </FlxStepperContent>
      <FlxStepperContent value={1}>
        <p>This is the contents of &quot;Step 2&quot;</p>
      </FlxStepperContent>
      <FlxStepperContent value={2}>
        <p>This is the contents of &quot;Step 3&quot;</p>
        <p>It can contain multiple elements</p>
      </FlxStepperContent>
    </FlxStepper>
} satisfies Story`,...z.parameters?.docs?.source}}}})))()}V();export{z as MultiStepper,R as SimpleStepper,B as __namedExportsOrder,I as default};