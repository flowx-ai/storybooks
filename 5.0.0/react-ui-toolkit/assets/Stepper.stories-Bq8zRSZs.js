import{j as e}from"./jsx-runtime-DztICxWZ.js";import{c as q}from"./clsx-B-dksMZM.js";import{r as p}from"./index-Bv9Y92EF.js";import{u as O}from"./index-CsL57FjJ.js";import{F as b}from"./Icon-B96PK6rJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z=({label:n,index:t,parentIndex:l,completed:a,isLast:c=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[l+1,".",t+1]}),e.jsx("span",{className:"step-label",children:n}),a?e.jsx(b,{name:"check",className:"step-check"}):null,c?null:e.jsx(b,{name:"caretRight",className:"step-arrow"})]}),A=({label:n,index:t,completed:l=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:l?e.jsx(b,{name:"check"}):t+1}),e.jsx("span",{className:"step-label",children:n})]}),r=p.forwardRef(({label:n,index:t,completed:l,disabled:a=!1,children:c,className:F,..._},m)=>{const{parentIndex:S,value:d,totalSteps:j,setCurrentStep:v}=g(),o=p.useMemo(()=>l!==void 0?l:d>t,[l,d,t]),h=p.useMemo(()=>t===j-1,[t,j]),i=p.useMemo(()=>d===t,[d,t]),f=p.useCallback(()=>{(o||!a)&&v(t)},[o,a,t,v]);return p.useMemo(()=>e.jsxs("li",{..._,ref:m,className:q(["step",{completed:o},{selected:i},F]),onClick:f,children:[S!==void 0?z({label:n,index:t,parentIndex:S,completed:o,isLast:h}):A({label:n,index:t,completed:o}),c]}),[t,m,o,i,F,f,S,n,o,h,c])});r.displayName="FlxStepperItem";p.memo(r);try{r.displayName="FlxStepperItem",r.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}const u=p.forwardRef(({children:n,className:t,...l},a)=>{const{parentIndex:c}=g();return e.jsx("ol",{ref:a,className:q(["stepper",{"child-stepper":c!==void 0},t]),...l,children:n})});u.displayName="FlxStepperList";p.memo(u);try{u.displayName="FlxStepperList",u.__docgenInfo={description:"",displayName:"FlxStepperList",props:{}}}catch{}const s=({children:n,value:t})=>{const{value:l}=g();return p.useMemo(()=>l===t,[l,t])?e.jsx(e.Fragment,{children:n}):null},T=p.memo(s);try{s.displayName="FlxStepperContent",s.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}try{T.displayName="MemoFlxStepperContent",T.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const P=p.createContext({}),g=()=>p.useContext(P),x=p.forwardRef(({onValueChange:n,value:t,defaultValue:l,children:a,className:c,...F},_)=>{var h;const m=p.useRef(null);p.useImperativeHandle(_,()=>m.current);const S=((h=m.current)==null?void 0:h.querySelectorAll(".step").length)??0,[d,j]=O({prop:t,defaultProp:l,onChange:n}),[v,o]=p.useState();return p.useEffect(()=>{var C,N;const i=(N=(C=m.current)==null?void 0:C.parentElement)==null?void 0:N.parentElement,f=i!=null&&i.className.includes("flx-stepper")?i==null?void 0:i.getAttribute("data-current"):void 0;o(f?parseInt(f):void 0)},[]),e.jsx(P.Provider,{value:{parentIndex:v,value:d||0,setCurrentStep:j,totalSteps:S},children:e.jsx("div",{ref:m,"data-current":d,className:q(["flx-stepper",c]),...F,children:a})})});x.displayName="FlxStepper";p.memo(x);try{x.displayName="FlxStepper",x.__docgenInfo={description:"",displayName:"FlxStepper",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number | undefined"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}const Q={title:"Stepper",component:x,subcomponents:{FlxStepperItem:r,FlxStepperContent:s,FlxStepperList:u},decorators:[(n,{args:t})=>e.jsx("div",{style:{fontFamily:t.fontFamily},className:"flx-default-theme",children:e.jsx(n,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},E={args:{fontFamily:"Open Sans"}},I={...E,render:()=>e.jsxs(x,{children:[e.jsxs(u,{children:[e.jsx(r,{label:"Step 1",index:0}),e.jsx(r,{label:"Step 2",index:1}),e.jsx(r,{label:"Step 3",index:2})]}),e.jsx(s,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(s,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(s,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},y={...E,render:()=>e.jsxs(x,{defaultValue:0,children:[e.jsxs(u,{children:[e.jsx(r,{label:"Step 1",index:0}),e.jsx(r,{label:"Step 2",index:1}),e.jsx(r,{label:"Step 3",index:2})]}),e.jsx(s,{value:0,children:e.jsxs("div",{children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(x,{children:[e.jsxs(u,{children:[e.jsx(r,{label:"Step 1.1",index:0}),e.jsx(r,{label:"Step 1.2",index:1}),e.jsx(r,{label:"Step 1.3",index:2})]}),e.jsx(s,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(s,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(s,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]})}),e.jsx(s,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(s,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};var V,M,L;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(M=I.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,k,w;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(k=y.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const U=["SimpleStepper","MultiStepper"];export{y as MultiStepper,I as SimpleStepper,U as __namedExportsOrder,Q as default};
