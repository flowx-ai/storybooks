import{j as s}from"./jsx-runtime-CBDCb4rg.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as o}from"./index-B-o1Wr-g.js";import{l as I}from"./lodash-Bud-oXvm.js";import{M as d}from"./Icon-DQNTWSJm.js";import{M as C}from"./Button-DnrjwBWn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qMorCPSe.js";const k=2e3,F=I.memoize(e=>({error:3e3,warning:3e3,info:3e3,success:2e3})[e]||k),y=1e4,_=50,n=o.forwardRef(({data:e,onCloseToast:a,className:h,...j},L)=>{var p;const r=o.useRef(null),l=o.useCallback(()=>{a==null||a(e)},[a,e]),E=o.useCallback(t=>{t.event(),l()},[l]),i=o.useCallback(()=>{var g,x;if(e!=null&&e.closeInterval)return e==null?void 0:e.closeInterval;const t=((((g=e.title)==null?void 0:g.length)||0)+(((x=e.message)==null?void 0:x.length)||0))*_,T=F(e.messageType);return t<T?T:t>y?y:t},[e.closeInterval,e.message,e.messageType,e.title]),m=o.useCallback(()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{l()},i())},[i,l]);o.useEffect(()=>(e.closeOnClick||m(),()=>{r.current&&clearTimeout(r.current)}));const u=o.useCallback(t=>{e.closeOnClick||(t?clearTimeout(r.current):m())},[e.closeOnClick,m]);return s.jsx("div",{className:N("container",e.messageType,h),ref:L,...j,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"data-testid":`messageType-${e.messageType}`,children:s.jsxs("div",{className:"content",children:[s.jsx(d,{name:e.icon||e.messageType,className:"type-icon"}),s.jsxs("div",{children:[e.title?s.jsx("p",{className:"title",children:e.title}):null,e.message?s.jsx("p",{className:"message",children:e.message}):null,e.action?s.jsx(C,{variant:"text",className:"action",onClick:()=>E(e.action),children:(p=e.action)==null?void 0:p.name}):null]}),s.jsx(C,{variant:"text",className:"close",onClick:()=>l(),children:s.jsx(d,{name:"dismiss",className:"close-icon"})})]})})});n.displayName="FlxToast";const O=o.memo(n);O.displayName="MemoFlxToast";const U={component:n,title:"Toast"},c={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(n,{data:{messageType:"success",title:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(n,{data:{messageType:"info",message:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(n,{data:{messageType:"warning",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(n,{data:{messageType:"error",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet something went very very wrong. Plese try to recconect to previous screen and reload. You can try restarting your computer in order to solve your problem. Or call numbers listed in the contact page. "},onCloseToast:e=>console.log("onCloseToast",e)})]})};var f,v,M;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <FlxToast data={{
      messageType: 'success',
      title: 'Lorem ipsum dolor sit amet'
    }} onCloseToast={data => console.log('onCloseToast', data)} />

      <FlxToast data={{
      messageType: 'info',
      message: 'Lorem ipsum dolor sit amet'
    }} onCloseToast={data => console.log('onCloseToast', data)} />

      <FlxToast data={{
      messageType: 'warning',
      title: 'Lorem ipsum dolor sit amet',
      message: 'Sit dolor amet'
    }} onCloseToast={data => console.log('onCloseToast', data)} />

      <FlxToast data={{
      messageType: 'error',
      title: 'Lorem ipsum dolor sit amet',
      message: 'Sit dolor amet something went very very wrong. Plese try to recconect to previous screen and reload. You can try restarting your computer in order to solve your problem. Or call numbers listed in the contact page. '
    }} onCloseToast={data => console.log('onCloseToast', data)} />
    </>
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const V=["Toast"];export{c as Toast,V as __namedExportsOrder,U as default};
