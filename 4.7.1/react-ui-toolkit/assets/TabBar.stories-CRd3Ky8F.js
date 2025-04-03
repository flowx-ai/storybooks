import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as n}from"./index-B-o1Wr-g.js";import{u as y}from"./index-hPfD200O.js";import{F as f}from"./Icon-C3PZoQlD.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B=({activeIconComponent:t,iconComponent:a,isActive:s})=>{if(s){if(t)return e.jsx(e.Fragment,{children:t});if(a)return e.jsx(e.Fragment,{children:a})}return null},i=n.forwardRef(({id:t,title:a,iconComponent:s,activeIconComponent:x},o)=>{const{value:l,setCurrentTab:b}=C(),r=n.useMemo(()=>l===t,[l,t]);return e.jsxs("li",{className:T(["flx-tab-header",{active:r}]),role:"tab",onClick:()=>b(t),ref:o,children:[s&&!r?s:null,B({activeIconComponent:x,iconComponent:s,isActive:r}),a]})});i.displayName="FlxTab";n.memo(i);const p=n.forwardRef((t,a)=>e.jsx("div",{...t,className:"tab-content",ref:a}));p.displayName="FlxTabContent";n.memo(p);const c=n.forwardRef(({children:t,value:a,...s},x)=>{const{value:o}=C(),l=n.useMemo(()=>o===a,[o,a]);return e.jsx("div",{ref:x,...s,className:T({active:l}),style:{display:l?"block":"none"},children:t})});c.displayName="FlxTabContentItem";n.memo(c);const u=n.forwardRef((t,a)=>e.jsx("ul",{className:"flx-tab-list",role:"tablist",...t,ref:a}));u.displayName="FlxTabList";n.memo(u);const v=n.createContext({}),C=()=>n.useContext(v),d=n.forwardRef(({onValueChange:t,value:a,defaultValue:s,className:x,children:o,...l},b)=>{const r=n.useRef(null);n.useImperativeHandle(b,()=>r.current);const[S,I]=y({prop:a,defaultProp:s,onChange:t});return e.jsx(v.Provider,{value:{value:S,setCurrentTab:I},children:e.jsx("div",{ref:r,className:T(["flx-tab-bar",x]),...l,children:o})})});d.displayName="FlxTabBar";n.memo(d);const E={title:"TabBar",component:d,subcomponents:{FlxTab:i,FlxTabContentItem:c,FlxTabList:u,FlxTabContent:p},decorators:[(t,{args:a})=>e.jsx("div",{style:{fontFamily:a.fontFamily},className:"flx-default-theme",children:e.jsx(t,{})})],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},N={args:{fontFamily:"Open Sans"}},m={...N,render:()=>e.jsxs(d,{defaultValue:0,children:[e.jsxs(u,{children:[e.jsx(i,{title:"Step 1",id:0,activeIconComponent:e.jsx(f,{name:"check"})}),e.jsx(i,{iconComponent:e.jsx(f,{name:"plus-circle"}),title:"Step 2",id:1}),e.jsx(i,{title:"Step 3",id:2})]}),e.jsxs(p,{children:[e.jsx(c,{value:0,children:e.jsx("p",{children:'This is the contents of "Step 1"'})}),e.jsx(c,{value:1,children:e.jsx("p",{children:'This is the contents of "Step 2"'})}),e.jsxs(c,{value:2,children:[e.jsx("p",{children:'This is the contents of "Step 3"'}),e.jsx("p",{children:"It can contain multiple elements"})]})]})]})};var F,h,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...TabBarTemplate,
  render: () => <FlxTabBar defaultValue={0}>
      <FlxTabList>
        <FlxTab title="Step 1" id={0} activeIconComponent={<FlxIcon name="check" />}></FlxTab>
        <FlxTab iconComponent={<FlxIcon name="plus-circle" />} title="Step 2" id={1}></FlxTab>
        <FlxTab title="Step 3" id={2}></FlxTab>
      </FlxTabList>
      <FlxTabContent>
        <FlxTabContentItem value={0}>
          <p>This is the contents of &quot;Step 1&quot;</p>
        </FlxTabContentItem>
        <FlxTabContentItem value={1}>
          <p>This is the contents of &quot;Step 2&quot;</p>
        </FlxTabContentItem>
        <FlxTabContentItem value={2}>
          <p>This is the contents of &quot;Step 3&quot;</p>
          <p>It can contain multiple elements</p>
        </FlxTabContentItem>
      </FlxTabContent>
    </FlxTabBar>
} satisfies Story`,...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const O=["SimpleTabBar"];export{m as SimpleTabBar,O as __namedExportsOrder,E as default};
