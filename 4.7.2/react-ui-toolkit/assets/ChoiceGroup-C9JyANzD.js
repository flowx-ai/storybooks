import{r as e}from"./index-B-o1Wr-g.js";import{j as s}from"./jsx-runtime-j_jdvEMj.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as a}from"./Content-Bg962QKp.js";function j(r){const o=e.useRef({value:r,previous:r});return e.useMemo(()=>(o.current.value!==r&&(o.current.previous=o.current.value,o.current.value=r),o.current.previous),[r])}const x="row",c=e.forwardRef(({direction:r=x,children:o,error:i,wrapperStyle:t,style:u,className:n,...m},p)=>s.jsx("div",{ref:p,className:l([n,"flx-choice-group",{"direction-column":r==="column"}]),style:t,...m,children:s.jsx(a,{error:i,children:s.jsx("div",{className:"flx-choice-group-inputs",style:u,children:o})})}));c.displayName="FlxChoiceGroup";const f=e.memo(c);f.displayName="MemoFlxChoiceGroup";export{c as F,j as u};
