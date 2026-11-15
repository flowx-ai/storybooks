import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{f as t}from"./iframe-DqoPYmuj.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./clsx-DCdnwCma.js";import{r as a,t as o}from"./Icon-CS0V3G0Z.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./TabsList-CQbncaC2.js";var h,g,_;function v(){return(v=e((()=>{r(),d(),M(),h=n(),g=({activeIconComponent:e,iconComponent:t,isActive:n})=>{if(n){if(e)return(0,h.jsx)(h.Fragment,{children:e});if(t)return(0,h.jsx)(h.Fragment,{children:t})}return null},_=({value:e,label:t,iconComponent:n,activeIconComponent:r,className:a,ref:o,...c})=>{let{value:l}=A(),u=l===e;return(0,h.jsxs)(s,{value:e,ref:o,role:`tab`,className:i(`flx-tab-header`,u&&`active`,a),"data-testid":`tab-${t}`,...c,children:[n&&!u?n:null,g({activeIconComponent:r,iconComponent:n,isActive:u}),t]})},_.displayName=`FlxTab`})))()}var y,b,x;function S(){return(S=e((()=>{r(),y=t(),l(),M(),b=n(),x=({ref:e,...t})=>{let{value:n}=A(),r=(0,y.useMemo)(()=>n===t.value,[n,t.value]);return(0,b.jsx)(f,{...t,className:i(`tab-content`,t.className,{active:r}),ref:e,tabIndex:void 0})},x.displayName=`FlxTabContent`,(0,y.memo)(x)})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),u(),w=n(),T=({ref:e,...t})=>(0,w.jsx)(m,{...t,activateOnFocus:!1,className:`flx-tab-list`,role:`tablist`,ref:e}),T.displayName=`FlxTabList`,(0,C.memo)(T)})))()}var D,O,k,A,j;function M(){return(M=e((()=>{r(),D=t(),c(),O=n(),v(),S(),E(),k=(0,D.createContext)({}),A=()=>(0,D.useContext)(k),j=({value:e,className:t,children:n,ref:r,...a})=>{let o=(0,D.useMemo)(()=>({value:e}),[e]);return(0,O.jsx)(k.Provider,{value:o,children:(0,O.jsx)(p,{ref:r,value:e,className:i([`flx-tab-bar`,t]),...a,children:n})})},j.displayName=`FlxTabBar`,(0,D.memo)(j)})))()}var N,P,F,I,L;function R(){return(R=e((()=>{M(),a(),N=n(),P={title:`TabBar`,component:j,subcomponents:{FlxTab:_,FlxTabList:T,FlxTabContent:x},decorators:[(e,{args:t})=>(0,N.jsx)(`div`,{style:{fontFamily:t.fontFamily},className:`flx-default-theme`,children:(0,N.jsx)(e,{})})],argTypes:{fontFamily:{options:[`Open Sans`,`Source Code Pro`,`Bitter`],control:{type:`select`}}}},F={args:{fontFamily:`Open Sans`}},I={...F,render:()=>(0,N.jsxs)(j,{defaultValue:`0`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(_,{label:`Step 1`,value:`0`,activeIconComponent:(0,N.jsx)(o,{name:`check`})}),(0,N.jsx)(_,{iconComponent:(0,N.jsx)(o,{name:`plus-circle`}),label:`Step 2`,value:`1`}),(0,N.jsx)(_,{label:`Step 3`,value:`2`})]}),(0,N.jsxs)(x,{value:`0`,children:[(0,N.jsx)(x,{value:`0`,children:(0,N.jsx)(`p`,{children:`This is the contents of "Step 1"`})}),(0,N.jsx)(x,{value:`1`,children:(0,N.jsx)(`p`,{children:`This is the contents of "Step 2"`})}),(0,N.jsxs)(x,{value:`2`,children:[(0,N.jsx)(`p`,{children:`This is the contents of "Step 3"`}),(0,N.jsx)(`p`,{children:`It can contain multiple elements`})]})]})]})},L=[`SimpleTabBar`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...TabBarTemplate,
  render: () => <FlxTabBar defaultValue="0">
      <FlxTabList>
        <FlxTab label="Step 1" value="0" activeIconComponent={<FlxIcon name="check" />}></FlxTab>
        <FlxTab iconComponent={<FlxIcon name="plus-circle" />} label="Step 2" value="1"></FlxTab>
        <FlxTab label="Step 3" value="2"></FlxTab>
      </FlxTabList>
      <FlxTabContent value="0">
        <FlxTabContent value="0">
          <p>This is the contents of &quot;Step 1&quot;</p>
        </FlxTabContent>
        <FlxTabContent value="1">
          <p>This is the contents of &quot;Step 2&quot;</p>
        </FlxTabContent>
        <FlxTabContent value="2">
          <p>This is the contents of &quot;Step 3&quot;</p>
          <p>It can contain multiple elements</p>
        </FlxTabContent>
      </FlxTabContent>
    </FlxTabBar>
} satisfies Story`,...I.parameters?.docs?.source}}}})))()}R();export{I as SimpleTabBar,L as __namedExportsOrder,P as default};