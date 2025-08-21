import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{F as s,a as b}from"./Radio-Df77H0rJ.js";import{u as j,a as O,F as d,b as p,C as y,c as B,d as C,e as R}from"./Content-DlMT5peK.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./ChoiceGroup-4MVEf2vz.js";import"./index-hPfD200O.js";import"./index-qMorCPSe.js";import"./Icon-DQNTWSJm.js";import"./Portal-vLh0jiGk.js";import"./index-DjIwiQkP.js";const T=["Option 1","Option 2","Option 3"],G={component:s,title:"Choices",decorators:[(a,{args:o})=>{const l=C({mode:"onBlur",defaultValues:{radio:""}});return e.jsx(d,{...l,children:e.jsx(R,{name:"radio",label:o.label,disabled:o.disabled,helperText:o.helperText,hideInsideInfoPoint:o.infoTooltip,rules:o.requiredError?{validate:{required:n=>n==="Option 1"||"Field required"}}:{},children:e.jsx(a,{})})})}],argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}},disabledFirstOption:{control:{type:"boolean"}},groupDirection:{options:["row","column"],control:{type:"select"}}},render:function(o){const{control:l,watch:n}=j(),{name:x,rules:F}=O();return e.jsxs(d,{...form,children:[e.jsx("div",{style:{fontFamily:o.fontFamily},className:"flx-default-theme",children:e.jsx(p,{children:e.jsx(y,{control:l,name:x,rules:F,render:({field:r,fieldState:f})=>e.jsx(b,{direction:o.groupDirection,noBorder:o.noBorder,onValueChange:r.onChange,onBlur:r.onBlur,name:r.name,value:r.value,error:f.error,children:T.map((i,h)=>e.jsx(p,{children:e.jsx(B,{children:e.jsx(s,{disabled:o.disabledFirstOption&&h===0,value:i,label:i})})},i))})})})}),e.jsxs("p",{children:["Selected option: ",n("radio")]})]})}},t={args:{disabled:!1,label:"Radio label",helperText:"Helper text",infoTooltip:!1,requiredError:!1,disabledFirstOption:!1,groupDirection:"row",noBorder:!1}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
