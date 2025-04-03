import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{F as s,a as b}from"./Radio-BIqBC04P.js";import{u as j,F as d,a as O,b as y,c as B,d as p,C,e as R}from"./Content-Bg962QKp.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./ChoiceGroup-C9JyANzD.js";import"./index-hPfD200O.js";import"./index-DggQIU-7.js";import"./Icon-C3PZoQlD.js";import"./Portal-Kk8hBqhk.js";import"./index-CKNPlJCH.js";const T=["Option 1","Option 2","Option 3"],G={component:s,title:"Choices",decorators:[(a,{args:o})=>{const l=j({mode:"onBlur",defaultValues:{radio:""}});return e.jsx(d,{...l,children:e.jsx(O,{name:"radio",label:o.label,disabled:o.disabled,helperText:o.helperText,hideInsideInfoPoint:o.infoTooltip,rules:o.requiredError?{validate:{required:n=>n==="Option 1"||"Field required"}}:{},children:e.jsx(a,{})})})}],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}},disabledFirstOption:{control:{type:"boolean"}},groupDirection:{options:["row","column"],control:{type:"select"}}},render:function(o){const{control:l,watch:n}=y(),{name:x,rules:F}=B();return e.jsxs(d,{...form,children:[e.jsx("div",{style:{fontFamily:o.fontFamily},className:"flx-default-theme",children:e.jsx(p,{children:e.jsx(C,{control:l,name:x,rules:F,render:({field:r,fieldState:f})=>e.jsx(b,{direction:o.groupDirection,noBorder:o.noBorder,onValueChange:r.onChange,onBlur:r.onBlur,name:r.name,value:r.value,error:f.error,children:T.map((i,h)=>e.jsx(p,{children:e.jsx(R,{children:e.jsx(s,{disabled:o.disabledFirstOption&&h===0,value:i,label:i})})},i))})})})}),e.jsxs("p",{children:["Selected option: ",n("radio")]})]})}},t={args:{disabled:!1,label:"Radio label",helperText:"Helper text",infoTooltip:!1,requiredError:!1,disabledFirstOption:!1,groupDirection:"row",noBorder:!1}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Radio label',
    helperText: 'Helper text',
    infoTooltip: false,
    requiredError: false,
    disabledFirstOption: false,
    groupDirection: 'row',
    noBorder: false
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Radio"];export{t as Radio,N as __namedExportsOrder,G as default};
