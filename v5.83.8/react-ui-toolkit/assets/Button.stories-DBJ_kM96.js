import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{F as l}from"./Button-BcB-tI5y.js";import{F as s}from"./Icon-C3PZoQlD.js";const f={title:"Button",component:l,subcomponents:{FlxIcon:s},argTypes:{asChild:{table:{disable:!0}},iconComponent:{table:{disable:!0}},variant:{options:["none","fill","ghost","text"],mapping:{none:null,fill:"fill",ghost:"ghost",text:"text"},control:{type:"select"}},icon:{options:["none","left","right","center"],mapping:{none:null,center:"center",left:"left",right:"right"},control:{type:"select"}},fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}},render:({label:c,variant:p,icon:n,disabled:m,width:e,fontFamily:u})=>o.jsx("div",{className:"flx-default-theme",children:o.jsx(l,{className:"custom-class",variant:p,icon:n,disabled:m,iconComponent:n!==null?o.jsx(s,{name:"plus-circle"}):null,style:{width:e&&e>0?`${e}px`:"auto","--flxTheme-button-fontFamily":u},children:c})})},d={args:{label:"Button title",variant:"fill",fontFamily:"Open Sans",width:0,disabled:!1}},t={...d};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...ButtonTemplate
} satisfies Story`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Button"],y=Object.freeze(Object.defineProperty({__proto__:null,Button:t,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{y as B,t as a};
