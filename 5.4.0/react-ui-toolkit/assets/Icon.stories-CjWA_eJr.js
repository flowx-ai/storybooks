import{j as s}from"./jsx-runtime-NtR90vs_.js";import{F as n,D as t}from"./Icon-BPlfcXXP.js";const p={component:n,title:"Icon",argTypes:{name:{options:Object.keys(t),control:{type:"select"}}}},o={args:{name:"check"}},r={argTypes:{color:{control:{type:"color"}}},args:{name:"check",color:"#006bd8"},render:({color:c,...a})=>s.jsx("div",{style:{color:c},children:s.jsx(n,{...a})})},e={args:{path:"/assets/icon.svg"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'check'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    }
  },
  args: {
    name: 'check',
    color: '#006bd8'
  },
  render: ({
    color,
    ...props
  }) => <div style={{
    color
  }}>
      <FlxIcon {...props} />
    </div>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    path: '/assets/icon.svg'
  }
}`,...e.parameters?.docs?.source}}};const m=["Icon","IconWithCustomColor","IconFromPath"],i=Object.freeze(Object.defineProperty({__proto__:null,Icon:o,IconFromPath:e,IconWithCustomColor:r,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{i as I,r as a};
