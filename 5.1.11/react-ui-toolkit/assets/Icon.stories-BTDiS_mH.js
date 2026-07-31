import{j as s}from"./jsx-runtime-DztICxWZ.js";import{F as g,D as h}from"./Icon-Da6wEY94.js";const y={component:g,title:"Icon",argTypes:{name:{options:Object.keys(h),control:{type:"select"}}}},o={args:{name:"check"}},r={argTypes:{color:{control:{type:"color"}}},args:{name:"check",color:"#006bd8"},render:({color:u,...I})=>s.jsx("div",{style:{color:u},children:s.jsx(g,{...I})})},e={args:{path:"/assets/icon.svg"}};var n,c,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'check'
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var t,p,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    path: '/assets/icon.svg'
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const x=["Icon","IconWithCustomColor","IconFromPath"],b=Object.freeze(Object.defineProperty({__proto__:null,Icon:o,IconFromPath:e,IconWithCustomColor:r,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{b as I,r as a};
