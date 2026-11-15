import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{f as t}from"./iframe-DqoPYmuj.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./clsx-DCdnwCma.js";import{n as a,r as o}from"./Icon-CS0V3G0Z.js";import{n as s,r as c}from"./Button-D8tNQZl_.js";import{t as l}from"./lodash-CahRuWWr.js";var u,d,f;function p(){return(p=e((()=>{u=l(),d=(0,u.memoize)(e=>({error:3e3,warning:3e3,info:3e3,success:2e3})[e]||2e3),f=1e4})))()}var m,h,g,_;function v(){return(v=e((()=>{r(),m=t(),p(),o(),c(),h=n(),g=({data:e,onCloseToast:t,className:n,iconComponent:r,...o})=>{let c=(0,m.useId)(),l=`${c}-title`,u=`${c}-desc`,p=(0,m.useCallback)(()=>{t?.(e)},[t,e]),g=(0,m.useCallback)(e=>{e.event(),p()},[p]),_=(0,m.useMemo)(()=>{if(e?.closeInterval)return e?.closeInterval;let t=((e.title?.length||0)+(e.message?.length||0))*50,n=d(e.messageType);return t<n?n:t>1e4?f:t},[e.closeInterval,e.messageType,e.title,e.message]),v=(0,m.useRef)(null);return(0,m.useEffect)(()=>(v.current=setTimeout(()=>{p()},_),()=>{v.current&&clearTimeout(v.current)}),[p,_]),(0,h.jsx)(`li`,{...o,role:`alert`,"aria-labelledby":e.title?l:void 0,"aria-describedby":e.message?u:void 0,"aria-atomic":`true`,className:i(`flx-toast-container`,e.messageType,n),"data-state":`open`,"data-testid":`messageType-${e.messageType}`,children:(0,h.jsxs)(`div`,{className:`content`,children:[(0,h.jsx)(`div`,{className:`type-icon-container`,children:r||(0,h.jsx)(a,{name:e.icon||e.messageType,className:`type-icon`})}),(0,h.jsxs)(`div`,{children:[e.title?(0,h.jsx)(`h2`,{id:l,className:`title`,children:e.title}):null,e.message?(0,h.jsx)(`p`,{id:u,className:`message`,children:e.message}):null,e.action?(0,h.jsx)(s,{variant:`text`,className:`action`,onClick:()=>g(e.action),children:e.action?.name}):null]}),e.hideCloseButton?null:(0,h.jsx)(s,{variant:`text`,className:`close`,"aria-label":`Close notification`,onClick:()=>p(),children:(0,h.jsx)(a,{name:`dismiss`,className:`close-icon`})})]})})},_=(0,m.memo)(g),_.displayName=`MemoFlxToast`})))()}var y,b,x,S;function C(){return(C=e((()=>{v(),y=n(),b={component:g,title:`Toast`},x={render:()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{data:{messageType:`success`,title:`Lorem ipsum dolor sit amet`},onCloseToast:e=>console.log(`onCloseToast`,e)}),(0,y.jsx)(g,{data:{messageType:`info`,message:`Lorem ipsum dolor sit amet`},onCloseToast:e=>console.log(`onCloseToast`,e)}),(0,y.jsx)(g,{data:{messageType:`warning`,title:`Lorem ipsum dolor sit amet`,message:`Sit dolor amet`},onCloseToast:e=>console.log(`onCloseToast`,e)}),(0,y.jsx)(g,{data:{messageType:`error`,title:`Lorem ipsum dolor sit amet`,message:`Sit dolor amet something went very very wrong. Plese try to recconect to previous screen and reload. You can try restarting your computer in order to solve your problem. Or call numbers listed in the contact page. `},onCloseToast:e=>console.log(`onCloseToast`,e)})]})},S=[`Toast`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Toast,S as __namedExportsOrder,b as default};