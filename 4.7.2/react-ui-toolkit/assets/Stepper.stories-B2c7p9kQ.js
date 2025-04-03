import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as n}from"./index-B-o1Wr-g.js";import{u as A}from"./index-hPfD200O.js";import{F as C}from"./Icon-C3PZoQlD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V=({label:p,index:t,parentIndex:s,completed:o,isLast:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[s+1,".",t+1]}),e.jsx("span",{className:"step-label",children:p}),o?e.jsx(C,{name:"check",className:"step-check"}):null,i?null:e.jsx(C,{name:"caret-right",className:"step-arrow"})]}),_=({label:p,index:t,completed:s=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:s?e.jsx(C,{name:"check"}):t+1}),e.jsx("span",{className:"step-label",children:p})]}),l=n.forwardRef(({label:p,index:t,completed:s,disabled:o=!1,children:i,className:j,...f},c)=>{const{parentIndex:u,value:a,totalSteps:v,setCurrentStep:I}=T(),m=n.useMemo(()=>s!==void 0?s:a>t,[s,a,t]);return e.jsxs("li",{...f,ref:c,className:b(["step",{completed:a>t},{selected:a===t},j]),onClick:m||!o?()=>{I(t)}:()=>{},children:[u!==void 0?V({label:p,index:t,parentIndex:u,completed:m,isLast:t===v-1}):_({label:p,index:t,completed:m}),i]})});l.displayName="FlxStepperItem";n.memo(l);const S=n.forwardRef(({children:p,className:t,...s},o)=>{const{parentIndex:i}=T();return e.jsx("ol",{ref:o,className:b(["stepper",{"child-stepper":i!==void 0},t]),...s,children:p})});S.displayName="FlxStepperList";n.memo(S);const r=({children:p,value:t})=>{const{value:s}=T();return n.useMemo(()=>s===t,[s,t])?e.jsx(e.Fragment,{children:p}):null};n.memo(r);const E=n.createContext({}),T=()=>n.useContext(E),d=n.forwardRef(({onValueChange:p,value:t,defaultValue:s,children:o,className:i,...j},f)=>{var q;const c=n.useRef(null);n.useImperativeHandle(f,()=>c.current);const u=((q=c.current)==null?void 0:q.querySelectorAll(".step").length)??0,[a,v]=A({prop:t,defaultProp:s,onChange:p}),[I,m]=n.useState();return n.useEffect(()=>{var y,g;const x=(g=(y=c.current)==null?void 0:y.parentElement)==null?void 0:g.parentElement,N=x!=null&&x.className.includes("flx-stepper")?x==null?void 0:x.getAttribute("data-current"):void 0;m(N?parseInt(N):void 0)},[]),e.jsx(E.Provider,{value:{parentIndex:I,value:a||0,setCurrentStep:v,totalSteps:u},children:e.jsx("div",{ref:c,"data-current":a,className:b(["flx-stepper",i]),...j,children:o})})});d.displayName="FlxStepper";n.memo(d);const K={title:"Stepper",component:d,subcomponents:{FlxStepperItem:l,FlxStepperContent:r,FlxStepperList:S},decorators:[(p,{args:t})=>e.jsx("div",{style:{fontFamily:t.fontFamily},className:"flx-default-theme",children:e.jsx(p,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},O={args:{fontFamily:"Open Sans"}},h={...O,render:()=>e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(r,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(r,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},F={...O,render:()=>e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsxs(r,{value:0,children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(l,{label:"Step 1.1",index:0}),e.jsx(l,{label:"Step 1.2",index:1}),e.jsx(l,{label:"Step 1.3",index:2})]}),e.jsx(r,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(r,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]}),e.jsx(r,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(r,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};var L,R,k;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(R=h.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var w,M,P;F.parameters={...F.parameters,docs:{...(w=F.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(M=F.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Q=["SimpleStepper","MultiStepper"];export{F as MultiStepper,h as SimpleStepper,Q as __namedExportsOrder,K as default};
