import{_ as a}from"./iframe-Bwr7nfWW.js";import"../sb-preview/runtime.js";var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-DlJN53qb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-DlJN53qb.js","./iframe-Bwr7nfWW.js","./index-B-o1Wr-g.js","./_commonjsHelpers-Cpj98o6Y.js","./index-X-JQWa98.js","./jsx-runtime-CBDCb4rg.js","./index-DjIwiQkP.js","./index-CLC3E5cw.js","./index-DrFu-skq.js","./react-18-DiQWGYXC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
