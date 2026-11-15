import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./clsx-B-dksMZM.js";import{r}from"./iframe-B0Oin5YK.js";import{T as V,a as M,b as w,c as R}from"./TabsList-BcXcCyrJ.js";import{F as C}from"./Icon-D6FS4cWA.js";import"./useControlled-BjcOYkMA.js";import"./useIsoLayoutEffect-5DQDAzNk.js";import"./useOpenChangeComplete-B0RlNB8f.js";import"./useRenderElement-GnqStkhd.js";import"./index-Bj-3PwFE.js";import"./index-BvQw7Egl.js";import"./CompositeList-nz69pq2u.js";import"./composite-BM41BBaQ.js";import"./CompositeRoot-gHmwYQ8h.js";import"./useButton-CzW80B33.js";import"./composite-DhrtzRVd.js";import"./DirectionContext-Cycs3_rR.js";import"./inertValue-BolspF1d.js";const E=({label:t,index:n,parentIndex:a,completed:p,isLast:s=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-index",children:[a+1,".",n+1]}),e.jsx("span",{className:"step-label",children:t}),p?e.jsx(C,{name:"check",className:"step-check"}):null,s?null:e.jsx(C,{name:"caretRight",className:"step-arrow"})]}),P=({label:t,index:n,completed:a=!1})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"step-index",children:a?e.jsx(C,{name:"check"}):n+1}),e.jsx("span",{className:"step-label",children:t})]}),l=({label:t,completed:n,children:a,className:p,value:s,ref:y,...m})=>{const{parentIndex:h,value:S,totalSteps:x}=N(),c=r.useMemo(()=>n!==void 0?n:S>s,[n,S,s]),f=r.useMemo(()=>s===x-1,[s,x]),u=r.useMemo(()=>S===s,[S,s]);return r.useMemo(()=>e.jsxs(V,{...m,ref:y,className:_(["step",{completed:c},{selected:u},p]),nativeButton:!1,render:e.jsx("li",{}),value:s,children:[h!==void 0?E({label:t,index:s,parentIndex:h,completed:c,isLast:f}):P({label:t,index:s,completed:c}),a]}),[s,y,c,u,p,h,t,c,f,a])};l.displayName="FlxStepperItem";const T=r.memo(l);try{l.displayName="FlxStepperItem",l.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsTabState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsTabState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{T.displayName="FlxMemoStepperItem",T.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsTabState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsTabState) => CSSProperties | undefined) | undefined"}}}}}catch{}const i=({className:t,ref:n,...a})=>{const{parentIndex:p}=N();return e.jsx(M,{...a,activateOnFocus:!1,ref:n,className:_(["stepper",{"child-stepper":p!==void 0},t]),render:e.jsx("ol",{})})};i.displayName="FlxStepperList";const g=r.memo(i);try{i.displayName="FlxStepperList",i.__docgenInfo={description:"",displayName:"FlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsListState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsListState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{g.displayName="MemoFlxStepperList",g.__docgenInfo={description:"",displayName:"MemoFlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsListState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsListState) => CSSProperties | undefined) | undefined"}}}}}catch{}const o=t=>e.jsx(w,{...t,tabIndex:void 0}),q=r.memo(o);try{o.displayName="FlxStepperContent",o.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsPanelState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsPanelState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{q.displayName="MemoFlxStepperContent",q.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsPanelState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsPanelState) => CSSProperties | undefined) | undefined"}}}}}catch{}const I=r.createContext({}),N=()=>r.useContext(I),d=({onValueChange:t,completedSteps:n,value:a,className:p,ref:s,...y})=>{const m=r.useRef(null);r.useImperativeHandle(s,()=>m.current);const h=m.current?.querySelectorAll(".step").length??0,[S,x]=r.useState();r.useEffect(()=>{const u=m.current?.parentElement?.parentElement?.closest(".flx-stepper")?.getAttribute("aria-current");x(u?parseInt(u):void 0)},[]);const c=r.useMemo(()=>Math.max(...n),[n]);return e.jsx(I.Provider,{value:{parentIndex:S,value:a||0,totalSteps:h,completedSteps:n},children:e.jsx(R,{...y,ref:m,className:_(["flx-stepper",p]),"aria-current":a||0,value:a||0,onValueChange:(f,u)=>{if(f>c+1){u.cancel();return}t?.(f)}})})};d.displayName="FlxStepper";const j=r.memo(d);try{d.displayName="FlxStepper",d.__docgenInfo={description:"",displayName:"FlxStepper",props:{onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsRootState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsRootState) => CSSProperties | undefined) | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}try{j.displayName="FlxMemoStepper",j.__docgenInfo={description:"",displayName:"FlxMemoStepper",props:{onValueChange:{defaultValue:null,description:"Callback invoked when new value is being set.",name:"onValueChange",required:!1,type:{name:"((index: number) => void) | undefined"}},completedSteps:{defaultValue:null,description:"",name:"completedSteps",required:!0,type:{name:"number[]"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsRootState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsRootState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsRootState) => CSSProperties | undefined) | undefined"}},parentIndex:{defaultValue:null,description:"",name:"parentIndex",required:!1,type:{name:"number | undefined"}}}}}catch{}try{FlxStepperItem.displayName="FlxStepperItem",FlxStepperItem.__docgenInfo={description:"",displayName:"FlxStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsTabState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsTabState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{FlxMemoStepperItem.displayName="FlxMemoStepperItem",FlxMemoStepperItem.__docgenInfo={description:"",displayName:"FlxMemoStepperItem",props:{completed:{defaultValue:{value:"false"},description:"",name:"completed",required:!1,type:{name:"boolean | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsTabState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsTabState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsTabState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{FlxStepperList.displayName="FlxStepperList",FlxStepperList.__docgenInfo={description:"",displayName:"FlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsListState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsListState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{MemoFlxStepperList.displayName="MemoFlxStepperList",MemoFlxStepperList.__docgenInfo={description:"",displayName:"MemoFlxStepperList",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsListState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsListState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsListState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{FlxStepperContent.displayName="FlxStepperContent",FlxStepperContent.__docgenInfo={description:"",displayName:"FlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsPanelState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsPanelState) => CSSProperties | undefined) | undefined"}}}}}catch{}try{MemoFlxStepperContent.displayName="MemoFlxStepperContent",MemoFlxStepperContent.__docgenInfo={description:"",displayName:"MemoFlxStepperContent",props:{className:{defaultValue:null,description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:"className",required:!1,type:{name:"string | ((state: TabsPanelState) => string | undefined) | undefined"}},render:{defaultValue:null,description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:"render",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsPanelState> | undefined"}},style:{defaultValue:null,description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:"style",required:!1,type:{name:"CSSProperties | ((state: TabsPanelState) => CSSProperties | undefined) | undefined"}}}}}catch{}const te={title:"Stepper",component:d,subcomponents:{FlxStepperItem:l,FlxStepperContent:o,FlxStepperList:i},decorators:[(t,{args:n})=>e.jsx("div",{style:{fontFamily:n.fontFamily},className:"flx-default-theme",children:e.jsx(t,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},L={args:{fontFamily:"Open Sans"}},b={...L,render:()=>e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})},F={...L,render:()=>e.jsxs(d,{defaultValue:0,children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1",index:0}),e.jsx(l,{label:"Step 2",index:1}),e.jsx(l,{label:"Step 3",index:2})]}),e.jsx(o,{value:0,children:e.jsxs("div",{children:[e.jsx("p",{children:'This is the contents of "Step 1"'}),e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(l,{label:"Step 1.1",index:0}),e.jsx(l,{label:"Step 1.2",index:1}),e.jsx(l,{label:"Step 1.3",index:2})]}),e.jsx(o,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1.1"'})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 1.2"'})}),e.jsx(o,{value:2,children:e.jsx("p",{children:'This is the contents of "Step 1.3"'})})]})]})}),e.jsx(o,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(o,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};const ne=["SimpleStepper","MultiStepper"];export{F as MultiStepper,b as SimpleStepper,ne as __namedExportsOrder,te as default};
