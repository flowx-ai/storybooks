import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{c as q}from"./clsx-B-dksMZM.js";import{r as n}from"./index-B-o1Wr-g.js";import{u as A}from"./index-hPfD200O.js";import{F as T}from"./Icon-DQNTWSJm.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V=({label:s,index:t,parentIndex:p,completed:o,isLast:c=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[p+1,".",t+1]}),e.jsx("span",{className:"step-label",children:s}),o?e.jsx(T,{name:"check",className:"step-check"}):null,c?null:e.jsx(T,{name:"caret-right",className:"step-arrow"})]}),_=({label:s,index:t,completed:p=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:p?e.jsx(T,{name:"check"}):t+1}),e.jsx("span",{className:"step-label",children:s})]}),l=n.forwardRef(({label:s,index:t,completed:p,disabled:o=!1,children:c,className:C,...b},S)=>{const{parentIndex:u,value:a,totalSteps:h,setCurrentStep:F}=N(),x=n.useMemo(()=>p!==void 0?p:a>t,[p,a,t]),j=n.useMemo(()=>t===h-1,[t,h]),i=n.useMemo(()=>a===t,[a,t]),f=n.useCallback(()=>{(x||!o)&&F(t)},[x,o,t,F]);return e.jsxs("li",{...b,ref:S,className:q(["step",{completed:x},{selected:i},C]),onClick:f,children:[u!==void 0?V({label:s,index:t,parentIndex:u,completed:x,isLast:j}):_({label:s,index:t,completed:x}),c]})});l.displayName="FlxStepperItem";n.memo(l);const m=n.forwardRef(({children:s,className:t,...p},o)=>{const{parentIndex:c}=N();return e.jsx("ol",{ref:o,className:q(["stepper",{"child-stepper":c!==void 0},t]),...p,children:s})});m.displayName="FlxStepperList";n.memo(m);const r=({children:s,value:t})=>{const{value:p}=N();return n.useMemo(()=>p===t,[p,t])?e.jsx(e.Fragment,{children:s}):null};n.memo(r);const E=n.createContext({}),N=()=>n.useContext(E),d=n.forwardRef(({onValueChange:s,value:t,defaultValue:p,children:o,className:c,...C},b)=>{var j;const S=n.useRef(null);n.useImperativeHandle(b,()=>S.current);const u=((j=S.current)==null?void 0:j.querySelectorAll(".step").length)??0,[a,h]=A({prop:t,defaultProp:p,onChange:s}),[F,x]=n.useState();return n.useEffect(()=>{var y,g;const i=(g=(y=S.current)==null?void 0:y.parentElement)==null?void 0:g.parentElement,f=i!=null&&i.className.includes("flx-stepper")?i==null?void 0:i.getAttribute("data-current"):void 0;x(f?parseInt(f):void 0)},[]),e.jsx(E.Provider,{value:{parentIndex:F,value:a||0,setCurrentStep:h,totalSteps:u},children:e.jsx("div",{ref:S,"data-current":a,className:q(["flx-stepper",c]),...C,children:o})})});d.displayName="FlxStepper";n.memo(d);const K={title:"Stepper",component:d,subcomponents:{FlxStepperItem:l,FlxStepperContent:r,FlxStepperList:m},decorators:[(s,{args:t})=>e.jsx("div",{style:{fontFamily:t.fontFamily},className:"flx-default-theme",children:e.jsx(s,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},O={args:{fontFamily:"Open Sans"}},v={...O,render:()=>e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(r,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(r,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},I={...O,render:()=>e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsxs(r,{value:0,children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(l,{label:"Step 1.1",index:0}),e.jsx(l,{label:"Step 1.2",index:1}),e.jsx(l,{label:"Step 1.3",index:2})]}),e.jsx(r,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(r,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(r,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};var L,k,M;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(k=v.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,w,P;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...StepperTemplate,
  render: () => <FlxStepper>
      <FlxStepperList>
        <FlxStepperItem label="Step 1" index={0}></FlxStepperItem>
        <FlxStepperItem label="Step 2" index={1}></FlxStepperItem>
        <FlxStepperItem label="Step 3" index={2}></FlxStepperItem>
      </FlxStepperList>
      <FlxStepperContent value={0}>
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
      </FlxStepperContent>
      <FlxStepperContent value={1}>
        <p>This is the contents of &quot;Step 2&quot;</p>
      </FlxStepperContent>
      <FlxStepperContent value={2}>
        <p>This is the contents of &quot;Step 3&quot;</p>
        <p>It can contain multiple elements</p>
      </FlxStepperContent>
    </FlxStepper>
} satisfies Story`,...(P=(w=I.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const Q=["SimpleStepper","MultiStepper"];export{I as MultiStepper,v as SimpleStepper,Q as __namedExportsOrder,K as default};
