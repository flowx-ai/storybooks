import{j as e}from"./jsx-runtime-DztICxWZ.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as n}from"./index-Bv9Y92EF.js";import{T as X,a as P,b as O,c as D}from"./TabsList-rLQHVfJg.js";import{F as b}from"./Icon-Da6wEY94.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useControlled-bC22fXfP.js";import"./floating-ui.utils.dom-cLmtQo3s.js";import"./useRenderElement-CQQ5I8lv.js";import"./CompositeList-oGVV_oZ2.js";import"./DirectionContext-BpJw-_6G.js";import"./owner-BLNona6N.js";import"./useBaseUiId-BJFIvnQ9.js";import"./CompositeRoot-T9Fbzyy1.js";import"./useButton-BpCaeLYm.js";import"./composite-DpKW5ESM.js";import"./event-BieJfEq0.js";import"./createBaseUIEventDetails-2goIIMRX.js";const $=({label:t,index:a,parentIndex:r,completed:i,isLast:s=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[r+1,".",a+1]}),e.jsx("span",{className:"step-label",children:t}),i?e.jsx(b,{name:"check",className:"step-check"}):null,s?null:e.jsx(b,{name:"caretRight",className:"step-arrow"})]}),z=({label:t,index:a,completed:r=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:r?e.jsx(b,{name:"check"}):a+1}),e.jsx("span",{className:"step-label",children:t})]}),l=n.forwardRef(({label:t,completed:a,children:r,className:i,value:s,..._},m)=>{const{parentIndex:S,value:f,totalSteps:y}=k(),u=n.useMemo(()=>a!==void 0?a:f>s,[a,f,s]),h=n.useMemo(()=>s===y-1,[s,y]),p=n.useMemo(()=>f===s,[f,s]);return n.useMemo(()=>e.jsxs(X,{..._,ref:m,className:T(["step",{completed:u},{selected:p},i]),nativeButton:!1,render:e.jsx("li",{}),value:s,children:[S!==void 0?$({label:t,index:s,parentIndex:S,completed:u,isLast:h}):z({label:t,index:s,completed:u}),r]}),[s,m,u,p,i,S,t,u,h,r])});l.displayName="FlxStepperItem";const R=n.memo(l);try{l.displayName="FlxStepperItem",l.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}}}}}catch{}try{R.displayName="FlxMemoStepperItem",R.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}}}}}catch{}const d=n.forwardRef(({className:t,...a},r)=>{const{parentIndex:i}=k();return e.jsx(P,{...a,activateOnFocus:!1,ref:r,className:T(["stepper",{"child-stepper":i!==void 0},t]),render:e.jsx("ol",{})})});d.displayName="FlxStepperList";const M=n.memo(d);try{d.displayName="FlxStepperList",d.__docgenInfo={description:"",displayName:"FlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}}}}}catch{}try{M.displayName="MemoFlxStepperList",M.__docgenInfo={description:"",displayName:"MemoFlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}}}}}catch{}const o=t=>e.jsx(O,{...t,tabIndex:void 0}),N=n.memo(o);try{o.displayName="FlxStepperContent",o.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}try{N.displayName="MemoFlxStepperContent",N.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}const A=n.createContext({}),k=()=>n.useContext(A),c=n.forwardRef(({onValueChange:t,completedSteps:a,value:r,className:i,...s},_)=>{var h;const m=n.useRef(null);n.useImperativeHandle(_,()=>m.current);const S=((h=m.current)==null?void 0:h.querySelectorAll(".step").length)??0,[f,y]=n.useState();n.useEffect(()=>{var C,L,I;const p=(I=(L=(C=m.current)==null?void 0:C.parentElement)==null?void 0:L.parentElement)==null?void 0:I.closest(".flx-stepper"),x=p==null?void 0:p.getAttribute("aria-current");y(x?parseInt(x):void 0)},[]);const u=n.useMemo(()=>Math.max(...a),[a]);return e.jsx(A.Provider,{value:{parentIndex:f,value:r||0,totalSteps:S,completedSteps:a},children:e.jsx(D,{...s,ref:m,className:T(["flx-stepper",i]),"aria-current":r||0,value:r||0,onValueChange:(p,x)=>{if(p>u+1){x.cancel();return}t==null||t(p)}})})});c.displayName="FlxStepper";const q=n.memo(c);try{c.displayName="FlxStepper",c.__docgenInfo={description:"",displayName:"FlxStepper",props:{onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsRootState> | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}try{q.displayName="FlxMemoStepper",q.__docgenInfo={description:"",displayName:"FlxMemoStepper",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsRootState> | undefined"}},onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}}}}}catch{}try{FlxStepperItem.displayName="FlxStepperItem",FlxStepperItem.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}}}}}catch{}try{FlxMemoStepperItem.displayName="FlxMemoStepperItem",FlxMemoStepperItem.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}}}}}catch{}try{FlxStepperList.displayName="FlxStepperList",FlxStepperList.__docgenInfo={description:"",displayName:"FlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}}}}}catch{}try{MemoFlxStepperList.displayName="MemoFlxStepperList",MemoFlxStepperList.__docgenInfo={description:"",displayName:"MemoFlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}}}}}catch{}try{FlxStepperContent.displayName="FlxStepperContent",FlxStepperContent.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}try{MemoFlxStepperContent.displayName="MemoFlxStepperContent",MemoFlxStepperContent.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}const de={title:"Stepper",component:c,subcomponents:{FlxStepperItem:l,FlxStepperContent:o,FlxStepperList:d},decorators:[(t,{args:a})=>e.jsx("div",{style:{fontFamily:a.fontFamily},className:"flx-default-theme",children:e.jsx(t,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},J={args:{fontFamily:"Open Sans"}},F={...J,render:()=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},g={...J,render:()=>e.jsxs(c,{defaultValue:0,children:[e.jsxs(d,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsxs("div",{children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(l,{label:"Step 1.1",index:0}),e.jsx(l,{label:"Step 1.2",index:1}),e.jsx(l,{label:"Step 1.3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(o,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};var w,j,E;F.parameters={...F.parameters,docs:{...(w=F.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(j=F.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var V,v,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(v=g.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const ce=["SimpleStepper","MultiStepper"];export{g as MultiStepper,F as SimpleStepper,ce as __namedExportsOrder,de as default};
