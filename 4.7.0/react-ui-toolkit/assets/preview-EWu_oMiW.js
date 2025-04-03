import{_ as a}from"./iframe-CFK3jZu2.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-CtARVNi-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-CtARVNi-.js","./iframe-CFK3jZu2.js","./index-B-o1Wr-g.js","./_commonjsHelpers-Cpj98o6Y.js","./index-CDzDYm8v.js","./jsx-runtime-j_jdvEMj.js","./index-CKNPlJCH.js","./index-5vZbm243.js","./index-DrFu-skq.js","./react-18-xESHlwl4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
