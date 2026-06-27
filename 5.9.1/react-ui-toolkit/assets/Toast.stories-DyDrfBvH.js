import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as s}from"./iframe-BY6wcYIF.js";import{l as I}from"./lodash-ONJ2u3sN.js";import{M as T}from"./Icon-B3WMcCaA.js";import{M as y}from"./Button-BBMR5Rs5.js";import"./useRenderElement-DDQ_p9oy.js";const _=2e3,j=I.memoize(e=>({error:3e3,warning:3e3,info:3e3,success:2e3})[e]||_),x=1e4,N=50,t=({data:e,onCloseToast:m,className:C,iconComponent:f,...h})=>{const c=s.useId(),d=`${c}-title`,u=`${c}-desc`,n=s.useCallback(()=>{m?.(e)},[m,e]),v=s.useCallback(a=>{a.event(),n()},[n]),p=s.useMemo(()=>{if(e?.closeInterval)return e?.closeInterval;const a=((e.title?.length||0)+(e.message?.length||0))*N,g=j(e.messageType);return a<g?g:a>x?x:a},[e.closeInterval,e.messageType,e.title,e.message]),l=s.useRef(null);return s.useEffect(()=>(l.current=setTimeout(()=>{n()},p),()=>{l.current&&clearTimeout(l.current)}),[n,p]),o.jsx("li",{...h,role:"alert","aria-labelledby":e.title?d:void 0,"aria-describedby":e.message?u:void 0,"aria-atomic":"true",className:M("flx-toast-container",e.messageType,C),"data-state":"open","data-testid":`messageType-${e.messageType}`,children:o.jsxs("div",{className:"content",children:[o.jsx("div",{className:"type-icon-container",children:f||o.jsx(T,{name:e.icon||e.messageType,className:"type-icon"})}),o.jsxs("div",{children:[e.title?o.jsx("h2",{id:d,className:"title",children:e.title}):null,e.message?o.jsx("p",{id:u,className:"message",children:e.message}):null,e.action?o.jsx(y,{variant:"text",className:"action",onClick:()=>v(e.action),children:e.action?.name}):null]}),e.hideCloseButton?null:o.jsx(y,{variant:"text",className:"close","aria-label":"Close notification",onClick:()=>n(),children:o.jsx(T,{name:"dismiss",className:"close-icon"})})]})})},i=s.memo(t);i.displayName="MemoFlxToast";try{i.displayName="MemoFlxToast",i.__docgenInfo={description:"",displayName:"MemoFlxToast",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ToastData"}},onCloseToast:{defaultValue:null,description:"",name:"onCloseToast",required:!1,type:{name:"((data: ToastData) => void) | undefined"}},iconComponent:{defaultValue:null,description:"",name:"iconComponent",required:!1,type:{name:"ReactElement<FlxIconProps, string | JSXElementConstructor<any>> | null | undefined"}}}}}catch{}const O={component:t,title:"Toast"},r={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(t,{data:{messageType:"success",title:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),o.jsx(t,{data:{messageType:"info",message:"Lorem ipsum dolor sit amet"},onCloseToast:e=>console.log("onCloseToast",e)}),o.jsx(t,{data:{messageType:"warning",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet"},onCloseToast:e=>console.log("onCloseToast",e)}),o.jsx(t,{data:{messageType:"error",title:"Lorem ipsum dolor sit amet",message:"Sit dolor amet something went very very wrong. Plese try to recconect to previous screen and reload. You can try restarting your computer in order to solve your problem. Or call numbers listed in the contact page. "},onCloseToast:e=>console.log("onCloseToast",e)})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Toast"];export{r as Toast,A as __namedExportsOrder,O as default};
