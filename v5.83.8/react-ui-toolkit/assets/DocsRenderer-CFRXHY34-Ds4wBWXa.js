import{_ as p}from"./iframe-C8fgDnxO.js";import{R as e,r as c}from"./index-B-o1Wr-g.js";import{ah as l,ai as h,aj as u,ak as E}from"./index-BpRuhJq3.js";import{renderElement as d,unmountElement as x}from"./react-18-xESHlwl4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./jsx-runtime-j_jdvEMj.js";import"./index-CKNPlJCH.js";import"./index-5vZbm243.js";import"./index-DrFu-skq.js";var _={code:l,a:h,...u},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=E;return new Promise((m,a)=>{p(()=>import("./index-BSj771as.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:i})=>d(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{x(t)}}};export{F as DocsRenderer,_ as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BSj771as.js","./index-B-o1Wr-g.js","./_commonjsHelpers-Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
