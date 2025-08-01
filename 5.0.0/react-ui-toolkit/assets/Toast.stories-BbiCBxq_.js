import{j as s}from"./jsx-runtime-DztICxWZ.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Bv9Y92EF.js";import{l as E}from"./lodash-BQJvgQOx.js";import{M as x}from"./Icon-B96PK6rJ.js";import{M as y}from"./Button-DN-XrF-T.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I=2e3,F=E.memoize(e=>({error:3e3,warning:3e3,info:3e3,success:2e3})[e]||I),C=1e4,k=50,t=o.forwardRef(({data:e,onCloseToast:a,className:_,...h},N)=>{var p;const r=o.useRef(null),l=o.useCallback(()=>{a==null||a(e)},[a,e]),j=o.useCallback(n=>{n.event(),l()},[l]),m=o.useCallback(()=>{var g,d;if(e!=null&&e.closeInterval)return e==null?void 0:e.closeInterval;const n=((((g=e.title)==null?void 0:g.length)||0)+(((d=e.message)==null?void 0:d.length)||0))*k,T=F(e.messageType);return n<T?T:n>C?C:n},[e.closeInterval,e.message,e.messageType,e.title]),i=o.useCallback(()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{l()},m())},[m,l]);o.useEffect(()=>(e.closeOnClick||i(),()=>{r.current&&clearTimeout(r.current)}));const u=o.useCallback(n=>{e.closeOnClick||(n?clearTimeout(r.current):i())},[e.closeOnClick,i]);return s.jsx("div",{className:L("container",e.messageType,_),ref:N,...h,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"data-testid":`messageType-${e.messageType}`,children:s.jsxs("div",{className:"content",children:[s.jsx(x,{name:e.icon||e.messageType,className:"type-icon"}),s.jsxs("div",{children:[e.title?s.jsx("p",{className:"title",children:e.title}):null,e.message?s.jsx("p",{className:"message",children:e.message}):null,e.action?s.jsx(y,{variant:"text",className:"action",onClick:()=>j(e.action),children:(p=e.action)==null?void 0:p.name}):null]}),s.jsx(y,{variant:"text",className:"close",onClick:()=>l(),children:s.jsx(x,{name:"cross",className:"close-icon"})})]})})});t.displayName="FlxToast";const O=o.memo(t);O.displayName="MemoFlxToast";try{t.displayName="FlxToast",t.__docgenInfo={description:"",displayName:"FlxToast",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ToastData"}},onCloseToast:{defaultValue:null,description:"",name:"onCloseToast",required:!1,type:{name:"((data: ToastData) => void) | undefined"}}}}}catch{}const B={component:t,title:"Toast"},c={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(t,{data:{messageType:"success",title:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(t,{data:{messageType:"info",message:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(t,{data:{messageType:"warning",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet"},onCloseToast:e=>console.log("onCloseToast",e)}),s.jsx(t,{data:{messageType:"error",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet something went very very wrong. Plese try to recconect to previous screen and reload. You can try restarting your computer in order to solve your problem. Or call numbers listed in the contact page. "},onCloseToast:e=>console.log("onCloseToast",e)})]})};var f,v,M;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const P=["Toast"];export{c as Toast,P as __namedExportsOrder,B as default};
