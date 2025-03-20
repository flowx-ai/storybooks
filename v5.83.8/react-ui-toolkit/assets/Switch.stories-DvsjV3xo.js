import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as f}from"./index-B-o1Wr-g.js";import{f as g,u as q,F as E,a as N,c as _,b as O,C as I,d as k,e as L}from"./Content-Bg962QKp.js";const R="start",c=f.forwardRef(({checked:r=!1,labelPosition:t=R,name:o,value:d,className:m,error:u,disabled:l=!1,onChange:s,onBlur:a,dataUniqueid:w,dataTestId:S,errorDisplayType:j,...y},T)=>{const[P,v]=f.useState(!1),x=i=>v(i),C=i=>{l||s==null||s(i.target.checked||!1)};return e.jsx("div",{className:h(["flx-switch",m]),ref:T,"data-uniqueid":w,"data-testid":S,children:e.jsx("label",{className:h({reversed:t==="end"}),children:e.jsx(g,{error:u,errorDisplayType:j,children:e.jsx("div",{className:h(["flx-switch-container",{disabled:l,checked:r,empty:!r,focused:P}]),children:e.jsx("input",{type:"checkbox",name:o,checked:d,onFocus:()=>x(!0),...y,onBlur:i=>{x(!1),a==null||a(i)},onChange:C})})})})})});c.displayName="FlxSwitch";f.memo(c);const D={component:c,title:"Choices",decorators:[(r,{args:t})=>{const o=q({mode:"onBlur",defaultValues:{switch:!1}});return e.jsx(E,{...o,children:e.jsx(N,{name:"switch",label:t.label,disabled:t.disabled,helperText:t.helperText,rules:t.requiredError?{required:"This field is required"}:{},hideInsideInfoPoint:t.infoTooltip,children:e.jsx(r,{})})})}],argTypes:{labelPosition:{options:["start","end"],control:{type:"radio"}},fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}},render:function(t){var l;const{rules:o,name:d}=_(),{watch:m,control:u}=O();return e.jsxs("div",{style:{fontFamily:t.fontFamily},className:"flx-default-theme",children:[e.jsx(I,{control:u,name:d,rules:o,render:({field:s,fieldState:a})=>e.jsx(k,{children:e.jsx(L,{children:e.jsx(c,{name:s.name,disabled:t.disabled,error:a.error,style:{width:t.width?t.width:"auto"},labelPosition:t.labelPosition,onChange:s.onChange,onBlur:s.onBlur,value:s.value,checked:s.value})})})}),e.jsxs("p",{children:["Value: ",(l=m("switch"))==null?void 0:l.toString()]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2n2umsSLJbNigLx43nseml/FlowX-Design-System?node-id=6737-14344"}}},n={args:{disabled:!1,label:"Switch label",helperText:"Helper text",infoTooltip:!1,requiredError:!1,labelPosition:"start",width:200}};var p,F,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Switch label',
    helperText: 'Helper text',
    infoTooltip: false,
    requiredError: false,
    labelPosition: 'start',
    width: 200
  }
}`,...(b=(F=n.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const H=["Switch"],M=Object.freeze(Object.defineProperty({__proto__:null,Switch:n,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{M as S,n as a};
