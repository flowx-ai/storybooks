import{r as s}from"./index-B-o1Wr-g.js";function a(e){const n=s.useRef(e);return s.useEffect(()=>{n.current=e}),s.useMemo(()=>(...o)=>{var t;return(t=n.current)==null?void 0:t.call(n,...o)},[])}function h({prop:e,defaultProp:n,onChange:o=()=>{}}){const[t,r]=v({defaultProp:n,onChange:o}),u=e!==void 0,i=u?e:t,l=a(o),d=s.useCallback(c=>{if(u){const f=typeof c=="function"?c(e):c;f!==e&&l(f)}else r(c)},[u,e,r,l]);return[i,d]}function v({defaultProp:e,onChange:n}){const o=s.useState(e),[t]=o,r=s.useRef(t),u=a(n);return s.useEffect(()=>{r.current!==t&&(u(t),r.current=t)},[t,r,u]),o}export{h as u};
