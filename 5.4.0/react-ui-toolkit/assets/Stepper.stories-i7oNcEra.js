import{j as e}from"./jsx-runtime-NtR90vs_.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as n}from"./iframe-DMgJMfTy.js";import{T as q,a as w,b as j,c as E}from"./TabsList-Ds6ugGkW.js";import{F as _}from"./Icon-BPlfcXXP.js";import"./useControlled-DPoCxAFN.js";import"./floating-ui.utils.dom-BiKb4_oH.js";import"./useRenderElement-BDAcc6QV.js";import"./CompositeList-5uNVqjSg.js";import"./DirectionContext-P2oSrbZt.js";import"./owner-CwWlm1ZE.js";import"./createBaseUIEventDetails-DyI0pd9j.js";import"./CompositeRoot-Bq4X5i7Y.js";import"./useButton-By0iWj5u.js";import"./composite-C45KQDT5.js";import"./event-BuaqxoFo.js";const V=({label:t,index:a,parentIndex:r,completed:p,isLast:s=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[r+1,".",a+1]}),e.jsx("span",{className:"step-label",children:t}),p?e.jsx(_,{name:"check",className:"step-check"}):null,s?null:e.jsx(_,{name:"caretRight",className:"step-arrow"})]}),v=({label:t,index:a,completed:r=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:r?e.jsx(_,{name:"check"}):a+1}),e.jsx("span",{className:"step-label",children:t})]}),l=n.forwardRef(({label:t,completed:a,children:r,className:p,value:s,...g},c)=>{const{parentIndex:h,value:f,totalSteps:x}=M(),m=n.useMemo(()=>a!==void 0?a:f>s,[a,f,s]),S=n.useMemo(()=>s===x-1,[s,x]),u=n.useMemo(()=>f===s,[f,s]);return n.useMemo(()=>e.jsxs(q,{...g,ref:c,className:b(["step",{completed:m},{selected:u},p]),nativeButton:!1,render:e.jsx("li",{}),value:s,children:[h!==void 0?V({label:t,index:s,parentIndex:h,completed:m,isLast:S}):v({label:t,index:s,completed:m}),r]}),[s,c,m,u,p,h,t,m,S,r])});l.displayName="FlxStepperItem";const T=n.memo(l);try{l.displayName="FlxStepperItem",l.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}}}}}catch{}try{T.displayName="FlxMemoStepperItem",T.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}},completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null | undefined"}}}}}catch{}const i=n.forwardRef(({className:t,...a},r)=>{const{parentIndex:p}=M();return e.jsx(w,{...a,activateOnFocus:!1,ref:r,className:b(["stepper",{"child-stepper":p!==void 0},t]),render:e.jsx("ol",{})})});i.displayName="FlxStepperList";const C=n.memo(i);try{i.displayName="FlxStepperList",i.__docgenInfo={description:"",displayName:"FlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}}}}}catch{}try{C.displayName="MemoFlxStepperList",C.__docgenInfo={description:"",displayName:"MemoFlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsListState> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}}}}}catch{}const o=t=>e.jsx(j,{...t,tabIndex:void 0}),L=n.memo(o);try{o.displayName="FlxStepperContent",o.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}try{L.displayName="MemoFlxStepperContent",L.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}const R=n.createContext({}),M=()=>n.useContext(R),d=n.forwardRef(({onValueChange:t,completedSteps:a,value:r,className:p,...s},g)=>{const c=n.useRef(null);n.useImperativeHandle(g,()=>c.current);const h=c.current?.querySelectorAll(".step").length??0,[f,x]=n.useState();n.useEffect(()=>{const u=c.current?.parentElement?.parentElement?.closest(".flx-stepper")?.getAttribute("aria-current");x(u?parseInt(u):void 0)},[]);const m=n.useMemo(()=>Math.max(...a),[a]);return e.jsx(R.Provider,{value:{parentIndex:f,value:r||0,totalSteps:h,completedSteps:a},children:e.jsx(E,{...s,ref:c,className:b(["flx-stepper",p]),"aria-current":r||0,value:r||0,onValueChange:(S,u)=>{if(S>m+1){u.cancel();return}t?.(S)}})})});d.displayName="FlxStepper";const I=n.memo(d);try{d.displayName="FlxStepper",d.__docgenInfo={description:"",displayName:"FlxStepper",props:{onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsRootState> | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}try{I.displayName="FlxMemoStepper",I.__docgenInfo={description:"",displayName:"FlxMemoStepper",props:{onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsRootState> | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}}}}}catch{}try{FlxStepperItem.displayName="FlxStepperItem",FlxStepperItem.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsTabState> | undefined"}}}}}catch{}try{FlxMemoStepperItem.displayName="FlxMemoStepperItem",FlxMemoStepperItem.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component’s state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},render:{defaultValue:null,description:`Allows you to replace the component’s HTML element
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

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps<any>, TabsPanelState> | undefined"}}}}}catch{}const Z={title:"Stepper",component:d,subcomponents:{FlxStepperItem:l,FlxStepperContent:o,FlxStepperList:i},decorators:[(t,{args:a})=>e.jsx("div",{style:{fontFamily:a.fontFamily},className:"flx-default-theme",children:e.jsx(t,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},N={args:{fontFamily:"Open Sans"}},y={...N,render:()=>e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},F={...N,render:()=>e.jsxs(d,{defaultValue:0,children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsxs("div",{children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1.1",index:0}),e.jsx(l,{label:"Step 1.2",index:1}),e.jsx(l,{label:"Step 1.3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(o,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};const ee=["SimpleStepper","MultiStepper"];export{F as MultiStepper,y as SimpleStepper,ee as __namedExportsOrder,Z as default};
