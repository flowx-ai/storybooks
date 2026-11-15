import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{f as n}from"./iframe-DqoPYmuj.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{t as i}from"./react-dom-sUjdcsKc.js";import{n as a,t as o}from"./clsx-DCdnwCma.js";import{a as s,i as c,n as l,r as u,t as d}from"./Icon-CS0V3G0Z.js";import{a as f,c as p,d as m,f as h,h as g,i as _,l as v,m as y,n as b,o as x,p as ee,r as S,s as te,t as ne,u as C}from"./InfoTooltip-3xzPCG5j.js";import{n as re,t as ie}from"./useComputedClearIcon-BmtxwlQN.js";import{c as w,l as T,t as ae}from"./src-BQovw55Z.js";import{t as oe}from"./lodash-CahRuWWr.js";import{n as se,t as ce}from"./Chip-nObNxej6.js";import{t as le}from"./debounce-B5d44NVB.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,ue,de,B,V,fe,pe,me,H,he,ge,_e,ve,ye,be,xe;function U(){return(U=e((()=>{E=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],D=E.join(`,`),O=typeof Element>`u`,k=O?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,A=!O&&Element.prototype.getRootNode?function(e){return e?.getRootNode?.call(e)}:function(e){return e?.ownerDocument},j=function(e,t){t===void 0&&(t=!0);var n=e?.getAttribute?.call(e,`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):j(e.parentNode))},M=function(e){var t=e?.getAttribute?.call(e,`contenteditable`);return t===``||t===`true`},N=function(e,t,n){if(j(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(D));return t&&k.call(e,D)&&r.unshift(e),r=r.filter(n),r},P=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!j(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=P(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{k.call(a,D)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!j(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=P(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},F=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},I=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||M(e))&&!F(e)?0:e.tabIndex},L=function(e,t){var n=I(e);return n<0&&t&&!F(e)?0:n},R=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},z=function(e){return e.tagName===`INPUT`},ue=function(e){return z(e)&&e.type===`hidden`},de=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},B=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},V=function(e){if(!e.name)return!0;var t=e.form||A(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=B(r,e.form);return!i||i===e},fe=function(e){return z(e)&&e.type===`radio`},pe=function(e){return fe(e)&&!V(e)},me=function(e){var t=e&&A(e),n=t?.host,r=!1;if(t&&t!==e){var i,a,o;for(r=!!((i=n)!=null&&(a=i.ownerDocument)!=null&&a.contains(n)||e!=null&&(o=e.ownerDocument)!=null&&o.contains(e));!r&&n;){var s,c;t=A(n),n=t?.host,r=!!((s=n)!=null&&(c=s.ownerDocument)!=null&&c.contains(n))}}return r},H=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},he=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=k.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(k.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=A(e);if(s&&!s.shadowRoot&&r(s)===!0)return H(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(me(e))return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return H(e);return!1},ge=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return k.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},_e=function(e,t){return!(t.disabled||ue(t)||he(t,e)||de(t)||ge(t))},ve=function(e,t){return!(pe(t)||I(t)<0||!_e(e,t))},ye=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},be=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=L(a,i),s=i?be(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(R).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},xe=function(e,t){t||={};var n=t.getShadowRoot?P([e],t.includeContainer,{filter:ve.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:ye}):N(e,t.includeContainer,ve.bind(null,t));return be(n)}})))()}var Se,Ce;function we(){return(we=e((()=>{Se=t(i(),1),Ce=({children:e,container:t})=>Se.createPortal(e,t||document.body)})))()}var Te,Ee,W,De;function Oe(){return(Oe=e((()=>{a(),Te=n(),Ee=r(),W=({isSelected:e,label:t,onClick:n,disabled:r,className:i,isFocused:a,ref:s,...c})=>{let l=e=>{r||n?.(e)};return(0,Ee.jsx)(`div`,{...c,ref:s,role:`option`,"aria-selected":e,"aria-disabled":r,tabIndex:-1,className:o([`flx-select-option`,{active:e,unselected:!e,disabled:r,focused:a},i]),onClick:l,children:t})},W.displayName=`FlxSelectOption`,De=(0,Te.memo)(W)})))()}var G,K,q,J,ke,Ae,je;function Me(){return(Me=e((()=>{a(),U(),G=n(),K=oe(),ae(),ie(),u(),we(),Oe(),q=r(),J=({id:e,optionClassName:t,listClassName:n,name:r,disabled:i=!1,hasSearch:a=!1,placeholder:s=`\xA0`,emptyMessage:c=`No options`,prefixIcon:u=null,dropdownIcon:d=null,options:f,value:p,onChange:m,hasClear:h,clearIcon:g,clearFn:_,onFocus:v,onBlur:y,error:b,onSearch:x,useServerFiltering:ee=!1,multiselect:S=!1,children:te,multiSelectSearch:ne,multiSelectSelections:C,maxSelectable:ie,optionsDisplayMode:ae=T.COMMA_SEPARATED,readOnly:oe=!1,container:se,clearIconAriaLabel:ce,"aria-label":le,...E})=>{let D=(0,G.useRef)(null),O=(0,G.useRef)(null),k=(0,G.useRef)(null),A=(0,G.useRef)(!1),j=(0,G.useRef)(null),M=(0,G.useMemo)(()=>{if(S)return Array.isArray(p)?p:[];let e=f?.find(e=>(0,K.isEqual)(e.value,p?.value));return e?[e]:[]},[S,p,f]),N=(0,G.useMemo)(()=>new Map(f.map(e=>[w(e.value),e])),[f]),P=(0,G.useMemo)(()=>N.size===0?[]:M.map(e=>N.get(w(e?.value))).filter(e=>e!==void 0),[N,M]),F=(0,G.useMemo)(()=>S?M.reduce((e,t)=>{let n=N.get(w(t?.value))?.label||``;return n?[...e,n]:e},[]).join(`, `):N.get(w(p?.value))?.label||``,[S,N,M,p]),{isOpened:I,setIsOpened:L}=(0,G.useContext)(Ae),[R,z]=(0,G.useState)(null),[ue,de]=(0,G.useState)(!1),[B,V]=(0,G.useState)(F),fe=(0,G.useMemo)(()=>S?(!Array.isArray(p)||p.length===0)&&!B:!p&&!B,[S,p,B]),pe=(0,G.useMemo)(()=>!(S&&C),[S,C]),me=(0,G.useMemo)(()=>ee?f:f.filter(e=>e?.label?.toLowerCase().includes(B?.toLowerCase())),[ee,f,B]),H=A.current?me:f,he=(0,G.useMemo)(()=>a?d?(0,q.jsx)(`div`,{"aria-label":`Open dropdown`,className:`flx-select-arrow`,tabIndex:-1,children:(0,G.cloneElement)(d,{className:o(d.props.className)})}):(0,q.jsx)(`div`,{"aria-label":`Open dropdown`,className:`flx-select-arrow`,tabIndex:-1,children:(0,q.jsx)(l,{name:`caretDown`})}):d?(0,q.jsx)(`div`,{className:`flx-select-arrow`,children:(0,G.cloneElement)(d,{className:o(d.props.className)})}):(0,q.jsx)(`div`,{className:`flx-select-arrow`,children:(0,q.jsx)(l,{name:`caretDown`})}),[d,a]),ge=(0,G.useMemo)(()=>M.length===f.length&&f.length>0,[M,f]),_e=(0,G.useMemo)(()=>M.length>0&&M.length<f.length,[M,f]),ve=(0,G.useCallback)(()=>{V(``),_?.()},[_]),{clearIconComponent:ye}=re({filled:!!p,hasClear:h&&!S,disabled:i,resetFieldFn:ve,clearIcon:g,className:`flx-select-clear`,inputRef:j,clearIconAriaLabel:ce});(0,G.useEffect)(()=>{ee&&x?.(B)},[x,B,ee]),(0,G.useEffect)(()=>{S||V(F)},[x,F,p,S]),(0,G.useEffect)(()=>{S&&!I&&V(``)},[S,I]);let be=(0,G.useCallback)(()=>{i||oe||L(!I)},[i,oe,I,L]),U=(0,G.useCallback)(()=>{L(!1),A.current=!1,z(null),S||V(F)},[L,S,F]),Se=(0,G.useCallback)(e=>{V(e.target.value),A.current=!0,!S&&!I&&L(!0)},[S,I,L]),we=(0,G.useCallback)(e=>{if(!i){if(S){let t=Array.isArray(p)?[...p]:[],n=e.value;if(t.some(e=>(0,K.isEqual)(e.value,n))){let e=t.filter(e=>!(0,K.isEqual)(e.value,n));m?.(e)}else{let n=[...t,e];m?.(n)}}else m?.(e),V(``),A.current=!1,L(!1)}},[S,m,p,i,L]),Te=(e=!1)=>{let t=xe(document.body);if(t.length===0)return null;let n=D.current;if(!n)return null;let r=e?Node.DOCUMENT_POSITION_PRECEDING:Node.DOCUMENT_POSITION_FOLLOWING,i=t.filter(e=>(n.compareDocumentPosition(e)&r)===r&&!n.contains(e));return i.length===0?null:e?i[i.length-1]:i[0]},Ee=e=>{if(e.code===`Tab`){if(I){e.preventDefault();let t=Te(e.shiftKey);t&&t.focus(),U()}}else if(e.code===`Escape`)I&&(U(),S?D.current?.focus():j.current?.focus());else if(e.code===`Enter`&&R){e.preventDefault();let t=f.find(e=>w(e.value)===R);t&&we(t)}else if(e.code===`Enter`&&I&&!R){e.preventDefault();let t=H.filter(e=>e.enabled!==!1);t.length>0&&we(t[0])}else if(e.code===`Enter`&&!I){e.preventDefault(),e.stopPropagation(),L(!0);let t=H.filter(e=>e.enabled!==!1);if(t.length===0)return;let n=t.findIndex(e=>w(e.value)===R);if(n===-1&&M.length>0){let e=M[0],r=w(e?.value),i=t.findIndex(e=>w(e.value)===r);i===-1&&(i=-1),n=i}let r=n+1>=t.length?0:n;z(w(t[r].value))}else if(e.code===`ArrowDown`||e.code===`ArrowUp`){e.preventDefault(),e.stopPropagation(),I||L(!0);let t=H.filter(e=>e.enabled!==!1);if(t.length===0)return;let n=t.findIndex(e=>w(e.value)===R);if(n===-1&&M.length>0){let r=e.code===`ArrowDown`?M[0]:M[M.length-1],i=w(r?.value),a=t.findIndex(e=>w(e.value)===i);a===-1&&(a=e.code===`ArrowDown`?-1:t.length),n=e.code===`ArrowDown`?a-1:a+1}let r=e.code===`ArrowDown`?n+1>=t.length?0:n+1:n-1<0?t.length-1:n-1;z(w(t[r].value))}},W=(0,G.useCallback)(e=>{de(!1);let{relatedTarget:t}=e,n=D.current,r=O.current;n&&n.contains(t)||r&&r.contains(t)||(y?.(),U())},[y,U]),Oe=(0,G.useCallback)(e=>{de(!0),v?.(e)},[v]),J=(0,G.useCallback)(e=>{a&&I&&e.stopPropagation()},[a,I]),ke=(0,G.useCallback)(()=>{if(D.current){let e=D.current.getBoundingClientRect();if(se){let t=se.getBoundingClientRect();return{top:e.bottom-t.top,left:e.left-t.left,width:e.width}}return{top:e.bottom+window.scrollY,left:e.left+window.scrollX,width:e.width}}return{}},[se]);(0,G.useEffect)(()=>{if(!I||!D.current)return;if(S&&O.current){let e=O.current.querySelector(`input`);e&&e.focus()}let e=()=>{if(O.current){let e=ke();Object.assign(O.current.style,{top:`${e.top}px`,left:`${e.left}px`,width:`${e.width}px`})}},t=new ResizeObserver(e);return t.observe(D.current),k.current=t,e(),()=>{k.current&&=(k.current.disconnect(),null)}},[I,ke,S]);let je=(0,G.useCallback)(()=>{let e=f.filter(e=>e.enabled??!0),t=M.filter(t=>!e.some(e=>(0,K.isEqual)(e.value,t.value)));e.length===M.length-t.length?m?.(t):m?.([...t,...e])},[m,f,M]);(0,G.useEffect)(()=>{if(R&&O.current){let e=O.current.querySelector(`#${CSS.escape(`flx-select-option-${R}`)}`);e&&e.scrollIntoView({block:`nearest`})}},[R]);let Me=(0,G.useCallback)(e=>{if(!S)return;let t=Array.isArray(p)?[...p]:[],n=e.value;if(t.some(e=>(0,K.isEqual)(e.value,n))){let e=t.filter(e=>!(0,K.isEqual)(e.value,n));m?.(e)}else{let n=[...t,e];m?.(n)}},[m,S,p]),Ne=(0,G.useMemo)(()=>S&&ae===T.CHIPS_OUTSIDE&&P.length>0&&C?C({options:P,onClose:Me}):null,[C,ae,P,S,Me]),Pe=(0,G.useMemo)(()=>C?.({options:ae===T.CHIPS_OUTSIDE?[]:P,onClose:Me}),[C,P,ae,Me]),Fe=(0,G.useMemo)(()=>`${e||`flx-select`}-selected-value`,[e]),Ie=(0,G.useMemo)(()=>{let e=[];return E[`aria-labelledby`]&&e.push(E[`aria-labelledby`]),S&&C&&F&&e.unshift(Fe),e.length>0?e.join(` `):void 0},[E,S,C,F,Fe]),Le=(0,G.useMemo)(()=>{let e=``;return F&&(e=`${F}`),le&&(e+=`, ${le}`),e},[le,F]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{id:Fe,className:`sr-only`,children:F?`${F},`:null}),(0,q.jsxs)(`div`,{...E,ref:D,className:o([`flx-select-trigger`,{disabled:i,filled:!fe,focused:ue||I,empty:fe,error:b,multiselect:S}]),role:`button`,"aria-label":Le,"aria-labelledby":Ie,"aria-describedby":E[`aria-describedby`],"aria-expanded":I,"aria-haspopup":`listbox`,"aria-disabled":i,"aria-controls":`${e||`flx-select`}-listbox`,tabIndex:pe||i||I?-1:0,onClick:be,onKeyDown:Ee,onFocus:Oe,onBlur:W,children:[u?(0,q.jsx)(`div`,{className:`flx-prefix`,children:(0,q.jsx)(u,{})}):null,S&&C?Pe:(0,q.jsx)(`div`,{className:`flx-select-value`,children:(0,q.jsx)(`input`,{role:`combobox`,"aria-controls":`${e||`flx-select`}-listbox`,"aria-describedby":E[`aria-describedby`],"aria-expanded":I,"aria-haspopup":`listbox`,"aria-disabled":i,"aria-invalid":b,"aria-owns":I?`${e||`flx-select`}-listbox`:void 0,id:e,disabled:i,name:r,type:`text`,className:`flx-select-search`,placeholder:s,value:S?F:a&&A.current?B:F,onClick:J,readOnly:!a||i||S,onChange:Se,tabIndex:0,ref:j,"aria-autocomplete":a?`list`:`none`,"aria-activedescendant":R?`flx-select-option-${R}`:void 0})}),ye,he]}),Ne,I&&(0,q.jsxs)(Ce,{container:se,children:[(0,q.jsx)(`div`,{className:`flx-select-backdrop`,onClick:()=>{U()},"aria-hidden":`true`}),(0,q.jsxs)(`div`,{id:`${e||`flx-select`}-listbox`,className:o(`flx-select-list`,n),style:ke(),ref:O,role:`listbox`,"aria-label":`${r||`Select`} options`,"aria-multiselectable":S,tabIndex:-1,onKeyDown:Ee,onBlur:W,children:[S?ne?.({searchText:B,onSearchChange:Se,toggleAll:je,isAllSelected:ge,isIndeterminate:_e}):null,H.map(e=>{let t=te(e,()=>we(e),M.some(t=>(0,K.isEqual)(t.value,e.value)),!!(S&&ie&&M.length>=ie&&!M.some(t=>(0,K.isEqual)(t.value,e.value))));if(!t)return null;let n={id:`flx-select-option-${w(e.value)}`,key:w(e.value),onMouseEnter:()=>z(w(e.value)),isFocused:R===w(e.value),"aria-disabled":e.enabled===!1};return(0,G.cloneElement)(t,n)}),H.length===0&&(0,q.jsx)(De,{label:c,className:o(`flx-select-empty`,t),"aria-disabled":`true`},`empty-option`)]})]})]})},J.displayName=`FlxSelect`,ke=(0,G.memo)(J),ke.displayName=`MemoFlxSelect`,Ae=(0,G.createContext)({}),je=({children:e,dataUniqueid:t,dataTestId:n,className:r,ref:i})=>{let[a,s]=(0,G.useState)(!1);return(0,q.jsx)(Ae.Provider,{value:{isOpened:a,setIsOpened:s},children:(0,q.jsx)(`div`,{className:o([`flx-select`,{opened:a},r]),"data-uniqueid":t,"data-testid":n,ref:i,children:e})})},je.displayName=`FlxSelectContainer`})))()}var Ne,Pe,Fe;function Ie(){return(Ie=e((()=>{a(),Ne=n(),u(),Pe=r(),Fe=({isSelected:e,label:t,disabled:n,className:r,onClick:i,selectedIcon:a,unselectedIcon:s,isFocused:c,ref:u,...d})=>{let f=e=>{n||i?.(e)},p=(0,Ne.useMemo)(()=>(e?a:s)||(e?(0,Pe.jsx)(l,{name:`checkboxChecked`}):(0,Pe.jsx)(l,{name:`checkboxUnchecked`})),[e,a,s]);return(0,Pe.jsxs)(`div`,{...d,ref:u,role:`option`,"aria-selected":e,tabIndex:-1,className:o([`flx-multi-select-option`,{active:e,unselected:!e,disabled:n,focused:c},r]),onClick:f,children:[(0,Pe.jsx)(`div`,{className:`flx-multi-select-option-icon`,children:p}),(0,Pe.jsx)(`span`,{className:`flx-multi-select-option-label`,children:t})]})},Fe.displayName=`FlxMultiSelectOption`,(0,Ne.memo)(Fe)})))()}var Le,Y,Re;function ze(){return(ze=e((()=>{a(),Le=n(),u(),Y=r(),Re=({className:e,selectedIcon:t,unselectedIcon:n,indeterminateIcon:r,toggleAll:i,isAllSelected:a,isIndeterminate:s,hideToggleAll:c,searchText:u,onSearchChange:d,...f})=>{let p=(0,Le.useMemo)(()=>(a?t:s?r:n)||(a?(0,Y.jsx)(l,{name:`checkboxChecked`}):s?(0,Y.jsx)(l,{name:`checkboxIndeterminate`}):(0,Y.jsx)(l,{name:`checkboxUnchecked`})),[a,s,t,n,r]);return(0,Y.jsxs)(`div`,{className:o(`flx-select-search-container search`,e),...f,children:[!c&&(0,Y.jsx)(`div`,{className:o({active:a||s,unselected:!a&&!s},e),role:`button`,"aria-pressed":a||s,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},tabIndex:0,children:(0,Y.jsx)(`div`,{className:`flx-multi-select-option-icon`,children:p})}),(0,Y.jsxs)(`div`,{className:`flx-input-wrapper`,children:[(0,Y.jsx)(`input`,{type:`text`,className:`flx-multi-select-search`,placeholder:`Search...`,"aria-label":`Search options`,"aria-autocomplete":`list`,value:u,onChange:d}),(0,Y.jsx)(l,{name:`search`,className:`flx-search-icon`,"aria-hidden":`true`})]})]},`search-option`)},Re.displayName=`FlxMultiSelectSearch`,(0,Le.memo)(Re)})))()}var Be,X,Z,Ve,He;function Ue(){return(Ue=e((()=>{a(),Be=t(le(),1),X=n(),Z=r(),Ve=({option:e,index:t,options:n,className:r})=>{let i=(0,X.useMemo)(()=>t!==n.length-1&&n.length>1,[t,n]);return(0,Z.jsx)(`div`,{className:o(`option-wrapper`,r,{"with-comma":i}),children:(0,Z.jsx)(`span`,{className:`option-text`,children:e.label})})},He=({options:e,placeholder:t,className:n,maxRows:r,style:i,children:a,...s})=>{let[c,l]=(0,X.useState)(e),[u,d]=(0,X.useState)(0),f=(0,X.useRef)(null),p=(0,X.useRef)(null),m=(0,X.useRef)(null),h=(0,X.useRef)(0),g=(0,X.useRef)(null),_=(0,X.useRef)(0),v=(0,X.useRef)(null),y=(t,n)=>t.map((t,r)=>{let i=a?.(t);return i?(0,Z.jsx)(X.Fragment,{children:i},`custom-${t.value}`):(0,Z.jsx)(Ve,{option:t,index:r,options:e,className:o(n,{disabled:!(t.enabled??!0)})},`default-${t.value}`)}),b=(0,X.useCallback)(()=>{if(!f.current)return;let t=f.current.getBoundingClientRect().width,n=v.current?.children||[];h.current=n?.[0]?.getBoundingClientRect().height||0;let i=[],a=null;for(let e=0;e<n.length;e++){let t=n[e],o=t.getBoundingClientRect();if(!a||o.top>a.top+h.current/2?(a={elements:[t],top:o.top,width:o.width},i.push(a)):(a.elements.push(t),a.width+=o.width),r&&i.length>r)break}let o=(p?.current?.getBoundingClientRect()?.width||0)+_.current+2,s=0,m=Math.min(r??1/0,i.length)-1;if(m>=0){let n=i.slice(0,m+1).flatMap(e=>e.elements),r=window.getComputedStyle(f.current);_.current=parseInt(r.gap||`4`,10)||4;let a=i[m],c=t-(a.width+(a.elements.length-1)*_.current);n.length>=e.length||e.length<=n.length||(a.elements.length===1&&c<o?g.current=Math.max(50,t-o):c<o&&n.pop()),s=n.length-1}let y=e.slice(0,s+1),b=e.length-y.length;b===0&&(g.current=null),(y.length!==c.length||b!==u)&&(l(y),d(b))},[e,r,c,u]),x=(0,X.useMemo)(()=>(0,Be.default)(b,100),[b]);return(0,X.useEffect)(()=>{r||l(e)},[r,e]),(0,X.useEffect)(()=>{if(!f.current||!r)return;let e=new ResizeObserver(x);return e.observe(f.current),m.current=e,x(),()=>{m.current&&m.current.disconnect(),x.cancel()}},[x,r]),(0,X.useEffect)(()=>{if(!f.current||!v.current)return;let e=()=>{let e=f.current?.getBoundingClientRect().width;v.current&&e&&(v.current.style.width=`${e}px`)};e();let t=new ResizeObserver(e);return t.observe(f.current),()=>t.disconnect()},[]),(0,X.useEffect)(()=>{if(!f.current||c.length===0)return;let e=u>0&&g.current!==null,t=Array.from(f.current.children).filter(e=>!e.classList.contains(`flx-select-counter`));if(t.length>0){let n=t[t.length-1];n.style.maxWidth=e?`${g.current}px`:``}},[c,u]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{ref:f,className:o(`flx-select-value multiselect`,e.length>0&&n),id:s.id,"aria-describedby":s[`aria-describedby`],"aria-invalid":s[`aria-invalid`],"aria-errormessage":s[`aria-errormessage`],style:{...i,...r&&h.current?{maxHeight:`${h.current*r+(r-1)*_.current}px`,overflow:`hidden`}:{}},...s,children:[c.length===0?(0,Z.jsx)(`span`,{className:`flx-multi-select-placeholder`,children:t}):y(c),r?(0,Z.jsxs)(`span`,{ref:p,className:o(`flx-select-counter`,{"is-visible":u>0}),"aria-hidden":u<=0,children:[`+`,u]}):null]},`flx-select-value`),r?(0,Z.jsx)(`div`,{ref:v,className:o(`flx-select-value-temp`,n),style:i,"aria-hidden":!0,children:y(e)},`flx-select-value-temp`):null]})},(0,X.memo)(He)})))()}var Q,We,$,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e;function et(){return(et=e((()=>{a(),Q=n(),We=oe(),ee(),ae(),m(),u(),Me(),Oe(),Ie(),ze(),v(),x(),_(),b(),Ue(),se(),s(),$=r(),Ge=[{value:`option1`,label:`Option 1`,enabled:!0},{value:`option2`,label:`Option 2`,enabled:!0},{value:`option3`,label:`Option 3`,enabled:!0},{value:`test1`,label:`Test 1`,enabled:!0},{value:`test2`,label:`Test 2`,enabled:!0},{value:`option6`,label:`This is a long option label`},{value:`option7`,label:`This is another long option label`}],Ke=(0,$.jsx)(d,{name:`caretRight`}),qe=()=>(0,$.jsx)(d,{name:`check`}),Je=async e=>(await new Promise(e=>setTimeout(e,1e3)),Ge.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),Ye={component:J,title:`Select`,argTypes:{fontFamily:{options:[`Open Sans`,`Source Code Pro`,`Bitter`],control:{type:`select`}},hasSearch:{control:`boolean`},hasClear:{control:`boolean`},hasCustomClearIcon:{control:`boolean`},hasCustomDropdownIcon:{control:`boolean`},hasPrefixIcon:{control:`boolean`},disabled:{control:`boolean`},requiredError:{control:`boolean`},infoTooltip:{control:`boolean`},optionIconSelected:{options:[`none`,`check`,`close`],control:{type:`select`},mapping:{none:null}},optionIconUnselected:{options:[`none`,`check`,`close`],control:{type:`select`},mapping:{none:null}},optionsDisplayMode:{options:[`Comma separated`,`Chips inside`,`Chips outside`],control:{type:`select`},mapping:{"Comma separated":T.COMMA_SEPARATED,"Chips inside":T.CHIPS_INSIDE,"Chips outside":T.CHIPS_OUTSIDE}}},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/2n2umsSLJbNigLx43nseml/FlowX-Design-System?node-id=5405-1553`}}},Xe={args:{fontFamily:`Open Sans`,label:`Select label`,placeholder:`Select an option`,emptyMessage:`No options found`,width:0,hasSearch:!1,hasClear:!1,hasCustomClearIcon:!1,hasCustomDropdownIcon:!1,hasPrefixIcon:!1,disabled:!1,requiredError:!1,helper:`Helper text`,infoTooltip:!1,options:Ge},decorators:[e=>{let t=y({mode:`onTouched`,defaultValues:{select:``}});return(0,$.jsx)(C,{...t,children:(0,$.jsx)(e,{})})}],render:function({width:e,...t}){let n=(0,Q.useId)(),r=`${n}-form-item`,i=`${n}-form-item-description`,a=`select`,o=t.requiredError?{required:`This field is required`}:{},{watch:s,control:c,resetField:l}=g();return(0,$.jsxs)(`div`,{style:{fontFamily:t.fontFamily},className:`flx-default-theme`,children:[(0,$.jsxs)(je,{children:[(0,$.jsxs)(p,{children:[(0,$.jsx)(te,{htmlFor:r,disabled:t.disabled,children:t.label}),t.infoTooltip?(0,$.jsx)(ne,{children:t.helper}):null]}),(0,$.jsx)(h,{control:c,name:a,rules:o,render:({field:n,fieldState:r})=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(J,{disabled:t.disabled,hasClear:t.hasClear,clearFn:()=>l(a),clearIcon:t.hasCustomClearIcon?(0,$.jsx)(d,{name:`trash`}):null,hasSearch:t.hasSearch,placeholder:t.placeholder,prefixIcon:t.hasPrefixIcon?qe:null,style:{width:e||`100%`},options:t.options,dropdownIcon:t.hasCustomDropdownIcon?Ke:null,value:n.value,error:!!r.error,onChange:n.onChange,onBlur:n.onBlur,children:(e,t,n)=>(0,$.jsx)(W,{label:e.label,isSelected:n,onClick:t},e.value)}),!t.infoTooltip&&!r.error?(0,$.jsx)(f,{id:i,children:t.helper}):null,(0,$.jsx)(S,{error:r?.error?.message})]})})]}),(0,$.jsx)(`hr`,{}),(0,$.jsxs)(`p`,{children:[`Selected option: `,JSON.stringify(s(a))||`-`]})]})}},Ze={args:{fontFamily:`Open Sans`,label:`Multi-Select label`,placeholder:`Select multiple options`,emptyMessage:`No options found`,width:200,dropDownIcon:`caretDown`,hasPrefixIcon:!1,disabled:!1,requiredError:!1,helper:`Helper text`,infoTooltip:!1,options:Ge,optionIconSelected:`none`,optionIconUnselected:`none`,optionIconIndeterminate:`none`,maxRows:2,maxSelectable:3,optionsDisplayMode:T.COMMA_SEPARATED,closeIcon:`clearCircle`},argTypes:{closeIcon:{control:`select`,options:Object.keys(c)},dropDownIcon:{control:`select`,options:Object.keys(c)}},decorators:[e=>{let t=y({mode:`onTouched`,defaultValues:{multiSelect:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}]}});return(0,$.jsx)(C,{...t,children:(0,$.jsx)(e,{})})}],render:function({width:e,...t}){let n=[T.CHIPS_INSIDE,T.CHIPS_OUTSIDE].includes(t?.optionsDisplayMode||T.CHIPS_INSIDE),r=(0,Q.useId)(),i=`${r}-form-item`,a=`${r}-form-item-description`,s=`multiSelect`,c=t.requiredError?{required:`This field is required`}:{},{watch:l,control:u}=g(),m=(0,Q.useMemo)(()=>!t.optionIconSelected||t.optionIconSelected===`none`?null:(0,$.jsx)(d,{name:t.optionIconSelected}),[t.optionIconSelected]),_=(0,Q.useMemo)(()=>!t.optionIconUnselected||t.optionIconUnselected===`none`?null:(0,$.jsx)(d,{name:t.optionIconUnselected}),[t.optionIconUnselected]),v=(0,Q.useMemo)(()=>!t.optionIconIndeterminate||t.optionIconIndeterminate===`none`?null:(0,$.jsx)(d,{name:t.optionIconIndeterminate}),[t.optionIconIndeterminate]),y=(0,Q.useMemo)(()=>t.closeIcon?(0,$.jsx)(d,{name:t.closeIcon}):null,[t.closeIcon]),b=(0,Q.useMemo)(()=>t.dropDownIcon?(0,$.jsx)(d,{name:t.dropDownIcon}):null,[t.dropDownIcon]);return(0,$.jsxs)(`div`,{style:{fontFamily:t.fontFamily},className:`flx-default-theme`,children:[(0,$.jsxs)(je,{children:[(0,$.jsxs)(p,{children:[(0,$.jsx)(te,{htmlFor:i,disabled:t.disabled,children:t.label}),t.infoTooltip?(0,$.jsx)(ne,{children:t.helper}):null]}),(0,$.jsx)(h,{control:u,name:s,rules:c,render:({field:r,fieldState:i})=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(J,{disabled:t.disabled,hasClear:t.hasClear,clearIcon:t.hasCustomClearIcon?(0,$.jsx)(d,{name:`trash`}):(0,$.jsx)(d,{name:`clearCircle`}),placeholder:t.placeholder,prefixIcon:t.hasPrefixIcon?qe:null,options:t.options,dropdownIcon:b,value:r.value,error:!!i.error,onChange:r.onChange,onBlur:r.onBlur,multiselect:!0,multiSelectSearch:({searchText:e,onSearchChange:n,toggleAll:r,isAllSelected:i,isIndeterminate:a})=>(0,$.jsx)(Re,{searchText:e,onSearchChange:n,toggleAll:r,isAllSelected:i,isIndeterminate:a,selectedIcon:m,unselectedIcon:_,indeterminateIcon:v,hideToggleAll:!!(t.maxSelectable&&t.maxSelectable>0)}),multiSelectSelections:({options:r,onClose:i})=>(0,$.jsx)(He,{options:r,maxRows:t.maxRows,placeholder:t.placeholder,style:{width:e||`100%`},className:o({chips:n,"chips-outside":t.optionsDisplayMode===T.CHIPS_OUTSIDE}),children:n?e=>(0,$.jsx)(ce,{label:e.label,onClose:()=>i(e),closeIcon:y},e.value):null}),maxSelectable:t.maxSelectable,optionsDisplayMode:t.optionsDisplayMode,children:(e,t,n,r)=>(0,$.jsx)(Fe,{label:e.label,isSelected:n,onClick:t,selectedIcon:m,unselectedIcon:_,disabled:r},e.value)}),!t.infoTooltip&&!i.error?(0,$.jsx)(f,{id:a,children:t.helper}):null,(0,$.jsx)(S,{error:i.error?.message})]})})]}),(0,$.jsx)(`hr`,{}),(0,$.jsxs)(`p`,{children:[`Selected option: `,JSON.stringify(l(s))||`-`]})]})}},Qe={args:{fontFamily:`Open Sans`,width:0,options:[]},render:function({width:e,...t}){let n=Ge[1],[r,i]=(0,Q.useState)([n]),[a,o]=(0,Q.useState)(n.value),s=(0,We.debounce)(async e=>{let t=await Je(e);i(t)},600),c=(0,Q.useCallback)(async e=>{!e.trim()||e.length<2?(i([]),o(``)):await s(e)},[]);return(0,$.jsxs)(`div`,{style:{fontFamily:t.fontFamily},className:`flx-default-theme`,children:[(0,$.jsxs)(je,{children:[(0,$.jsxs)(p,{children:[(0,$.jsx)(te,{disabled:t.disabled,children:t.label}),t.infoTooltip?(0,$.jsx)(ne,{children:t.helper}):null]}),(0,$.jsx)(J,{hasClear:!0,hasSearch:!0,useServerFiltering:!0,style:{width:e||`100%`},options:r,value:a,onChange:e=>o(e),onSearch:c,children:(e,t,n)=>(0,$.jsx)(W,{label:e.label,isSelected:n,onClick:t},e.value)})]}),(0,$.jsxs)(`p`,{children:[`selected option: `,a||`-`]})]})}},$e=[`Select`,`MultiSelect`,`SelectServerSearch`],Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  args: {
    fontFamily: 'Open Sans',
    label: 'Select label',
    placeholder: 'Select an option',
    emptyMessage: 'No options found',
    width: 0,
    hasSearch: false,
    hasClear: false,
    hasCustomClearIcon: false,
    hasCustomDropdownIcon: false,
    hasPrefixIcon: false,
    disabled: false,
    requiredError: false,
    helper: 'Helper text',
    infoTooltip: false,
    options: SELECT_OPTIONS
  },
  decorators: [(Story: StoryFn) => {
    const form = useForm({
      mode: 'onTouched',
      defaultValues: {
        select: ''
      }
    });
    return <FlxForm {...form}>
          <Story />
        </FlxForm>;
  }],
  render: function Render({
    width,
    ...args
  }: FlxSelectPropsCustomArgs) {
    const id = useId();
    const formItemId = \`\${id}-form-item\`;
    const formDescriptionId = \`\${id}-form-item-description\`;
    const name = 'select';
    const rules = args.requiredError ? {
      required: 'This field is required'
    } : {};
    const {
      watch,
      control,
      resetField
    } = useFormContext();
    return <div style={{
      fontFamily: args.fontFamily
    }} className="flx-default-theme">
        <FlxSelectContainer>
          <FlxFormLabelContainer>
            <FlxFormLabel htmlFor={formItemId} disabled={args.disabled}>
              {args.label}
            </FlxFormLabel>
            {args.infoTooltip ? <FlxFormInfoHelper>{args.helper}</FlxFormInfoHelper> : null}
          </FlxFormLabelContainer>
          <Controller control={control} name={name} rules={rules} render={({
          field,
          fieldState
        }) => <>
                <FlxSelect disabled={args.disabled} hasClear={args.hasClear} clearFn={() => resetField(name)} clearIcon={args.hasCustomClearIcon ? <FlxIcon name="trash" /> : null} hasSearch={args.hasSearch} placeholder={args.placeholder} prefixIcon={args.hasPrefixIcon ? prefixIcon : null} style={{
            width: width ? width : '100%'
          }} options={args.options} dropdownIcon={args.hasCustomDropdownIcon ? customDropdownIcon : null} value={field.value} error={!!fieldState.error} onChange={field.onChange} onBlur={field.onBlur}>
                  {(option, onClick, isSelected) => <FlxSelectOption key={option.value as unknown as string} label={option.label} isSelected={isSelected} onClick={onClick} />}
                </FlxSelect>
                {!args.infoTooltip && !fieldState.error ? <FlxFormHelper id={formDescriptionId}>{args.helper}</FlxFormHelper> : null}
                <FlxFormError error={fieldState?.error?.message} />
              </>} />
        </FlxSelectContainer>
        <hr />
        <p>Selected option: {JSON.stringify(watch(name)) || '-'}</p>
      </div>;
  }
}`,...Xe.parameters?.docs?.source}}},Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
  args: {
    fontFamily: 'Open Sans',
    label: 'Multi-Select label',
    placeholder: 'Select multiple options',
    emptyMessage: 'No options found',
    width: 200,
    dropDownIcon: 'caretDown',
    hasPrefixIcon: false,
    disabled: false,
    requiredError: false,
    helper: 'Helper text',
    infoTooltip: false,
    options: SELECT_OPTIONS,
    optionIconSelected: 'none',
    optionIconUnselected: 'none',
    optionIconIndeterminate: 'none',
    maxRows: 2,
    maxSelectable: 3,
    optionsDisplayMode: MultiSelectOptionsDisplayModeType.COMMA_SEPARATED,
    closeIcon: 'clearCircle'
  },
  argTypes: {
    closeIcon: {
      control: 'select',
      options: Object.keys(icons)
    },
    dropDownIcon: {
      control: 'select',
      options: Object.keys(icons)
    }
  },
  decorators: [(Story: StoryFn) => {
    const form = useForm({
      mode: 'onTouched',
      defaultValues: {
        multiSelect: [{
          value: 'option1',
          label: 'Option 1'
        }, {
          value: 'option2',
          label: 'Option 2'
        }, {
          value: 'option3',
          label: 'Option 3'
        }]
      }
    });
    return <FlxForm {...form}>
          <Story />
        </FlxForm>;
  }],
  render: function Render({
    width,
    ...args
  }) {
    const isChipsMode = [MultiSelectOptionsDisplayModeType.CHIPS_INSIDE, MultiSelectOptionsDisplayModeType.CHIPS_OUTSIDE].includes(args?.optionsDisplayMode || MultiSelectOptionsDisplayModeType.CHIPS_INSIDE);
    const id = useId();
    const formItemId = \`\${id}-form-item\`;
    const formDescriptionId = \`\${id}-form-item-description\`;
    const name = 'multiSelect';
    const rules = args.requiredError ? {
      required: 'This field is required'
    } : {};
    const {
      watch,
      control
    } = useFormContext();
    const computedOptionIconSelected = useMemo(() => {
      if (!args.optionIconSelected || args.optionIconSelected === 'none') return null;
      return <FlxIcon name={args.optionIconSelected} />;
    }, [args.optionIconSelected]);
    const computedOptionIconUnselected = useMemo(() => {
      if (!args.optionIconUnselected || args.optionIconUnselected === 'none') return null;
      return <FlxIcon name={args.optionIconUnselected} />;
    }, [args.optionIconUnselected]);
    const computedOptionIconIndeterminate = useMemo(() => {
      if (!args.optionIconIndeterminate || args.optionIconIndeterminate === 'none') return null;
      return <FlxIcon name={args.optionIconIndeterminate} />;
    }, [args.optionIconIndeterminate]);
    const computedCloseIcon = useMemo(() => {
      if (!args.closeIcon) return null;
      return <FlxIcon name={args.closeIcon} />;
    }, [args.closeIcon]);
    const computedDropDownIcon = useMemo(() => {
      if (!args.dropDownIcon) return null;
      return <FlxIcon name={args.dropDownIcon} />;
    }, [args.dropDownIcon]);
    return <div style={{
      fontFamily: args.fontFamily
    }} className="flx-default-theme">
        <FlxSelectContainer>
          <FlxFormLabelContainer>
            <FlxFormLabel htmlFor={formItemId} disabled={args.disabled}>
              {args.label}
            </FlxFormLabel>
            {args.infoTooltip ? <FlxFormInfoHelper>{args.helper}</FlxFormInfoHelper> : null}
          </FlxFormLabelContainer>
          <Controller control={control} name={name} rules={rules} render={({
          field,
          fieldState
        }) => <>
                <FlxSelect disabled={args.disabled} hasClear={args.hasClear} clearIcon={args.hasCustomClearIcon ? <FlxIcon name="trash" /> : <FlxIcon name="clearCircle" />} placeholder={args.placeholder} prefixIcon={args.hasPrefixIcon ? prefixIcon : null} options={args.options} dropdownIcon={computedDropDownIcon} value={field.value} error={!!fieldState.error} onChange={field.onChange} onBlur={field.onBlur} multiselect multiSelectSearch={({
            searchText,
            onSearchChange,
            toggleAll,
            isAllSelected,
            isIndeterminate
          }) => <FlxMultiSelectSearch searchText={searchText} onSearchChange={onSearchChange} toggleAll={toggleAll} isAllSelected={isAllSelected} isIndeterminate={isIndeterminate} selectedIcon={computedOptionIconSelected} unselectedIcon={computedOptionIconUnselected} indeterminateIcon={computedOptionIconIndeterminate} hideToggleAll={Boolean(args.maxSelectable && args.maxSelectable > 0)} />} multiSelectSelections={({
            options,
            onClose
          }) => <FlxMultiSelectSelections options={options} maxRows={args.maxRows} placeholder={args.placeholder} style={{
            width: width ? width : '100%'
          }} className={clsx({
            'chips': isChipsMode,
            'chips-outside': args.optionsDisplayMode === MultiSelectOptionsDisplayModeType.CHIPS_OUTSIDE
          })}>
                      {isChipsMode ? option => <FlxChip key={option.value as string} label={option.label} onClose={() => onClose(option)} closeIcon={computedCloseIcon} /> : null}
                    </FlxMultiSelectSelections>} maxSelectable={args.maxSelectable} optionsDisplayMode={args.optionsDisplayMode}>
                  {(option, onClick, isSelected, isDisabled) => <FlxMultiSelectOption key={option.value as string} label={option.label} isSelected={isSelected} onClick={onClick} selectedIcon={computedOptionIconSelected} unselectedIcon={computedOptionIconUnselected} disabled={isDisabled} />}
                </FlxSelect>
                {!args.infoTooltip && !fieldState.error ? <FlxFormHelper id={formDescriptionId}>{args.helper}</FlxFormHelper> : null}
                <FlxFormError error={fieldState.error?.message} />
              </>} />
        </FlxSelectContainer>
        <hr />
        <p>Selected option: {JSON.stringify(watch(name)) || '-'}</p>
      </div>;
  }
}`,...Ze.parameters?.docs?.source}}},Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`{
  args: {
    fontFamily: 'Open Sans',
    width: 0,
    options: []
  },
  render: function Render({
    width,
    ...args
  }: FlxSelectPropsCustomArgs) {
    const initialSelectedOption = SELECT_OPTIONS[1];
    const [options, setOptions] = useState<Option<string>[]>([initialSelectedOption]);
    const [value, setValue] = useState(initialSelectedOption.value);
    const searchOptionsDeb = debounce(async (searchText: string) => {
      const newOptions = await searchOptions(searchText);
      setOptions(newOptions);
    }, 600);
    const onSearch = useCallback(async (searchText: string) => {
      if (!searchText.trim() || searchText.length < 2) {
        setOptions([]);
        setValue('');
        return;
      }
      await searchOptionsDeb(searchText);
    }, []);
    return <div style={{
      fontFamily: args.fontFamily
    }} className="flx-default-theme">
        <FlxSelectContainer>
          <FlxFormLabelContainer>
            <FlxFormLabel disabled={args.disabled}>{args.label}</FlxFormLabel>
            {args.infoTooltip ? <FlxFormInfoHelper>{args.helper}</FlxFormInfoHelper> : null}
          </FlxFormLabelContainer>
          <FlxSelect hasClear hasSearch useServerFiltering style={{
          width: width ? width : '100%'
        }} options={options} value={value} onChange={value => setValue(value as string)} onSearch={onSearch}>
            {(option, onClick, isSelected) => <FlxSelectOption key={option.value as unknown as string} label={option.label} isSelected={isSelected} onClick={onClick} />}
          </FlxSelect>
        </FlxSelectContainer>
        <p>selected option: {value || '-'}</p>
      </div>;
  }
}`,...Qe.parameters?.docs?.source}}}})))()}et();export{Ze as MultiSelect,Xe as Select,Qe as SelectServerSearch,$e as __namedExportsOrder,Ye as default};