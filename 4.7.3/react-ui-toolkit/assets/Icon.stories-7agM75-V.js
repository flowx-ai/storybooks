import{j as s}from"./jsx-runtime-CBDCb4rg.js";import{F as u,D as y}from"./Icon-DQNTWSJm.js";const x={component:u,title:"Icon",argTypes:{name:{options:Object.keys(y),control:{type:"select"}}}},o={args:{name:"plus-circle"}},r={argTypes:{color:{control:{type:"color"}}},args:{name:"plus-circle",color:"#006bd8"},render:({color:g,...I})=>s.jsx("div",{style:{color:g},children:s.jsx(u,{...I})})},e={args:{path:"/assets/icon.svg"}};var n,c,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'plus-circle'
  }
}`,...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var t,l,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    }
  },
  args: {
    name: 'plus-circle',
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,i,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    path: '/assets/icon.svg'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const _=["Icon","IconWithCustomColor","IconFromPath"],b=Object.freeze(Object.defineProperty({__proto__:null,Icon:o,IconFromPath:e,IconWithCustomColor:r,__namedExportsOrder:_,default:x},Symbol.toStringTag,{value:"Module"}));export{b as I,r as a};
