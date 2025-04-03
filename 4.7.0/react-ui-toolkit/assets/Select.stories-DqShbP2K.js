import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as a}from"./index-B-o1Wr-g.js";import{l as fe}from"./lodash-DHyxJ22h.js";import{f as pe,u as he,F as xe,a as Fe,c as Se,b as Ce,C as we,d as ye,e as Ie}from"./Content-Bg962QKp.js";import{M as ge,F as E}from"./Icon-C3PZoQlD.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as Oe}from"./Portal-Kk8hBqhk.js";import{u as be}from"./useComputedClearIcon-CyQUpLO8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DggQIU-7.js";import"./index-CKNPlJCH.js";const G=a.forwardRef(({isSelected:c,label:t,onClick:r,disabled:n,className:u,...m},f)=>{const d=i=>{n||r==null||r(i)};return e.jsx("div",{...m,ref:f,role:"button",tabIndex:0,className:O(["flx-select-option",{active:c,unselected:!c,disabled:n},u]),onClick:d,children:t})});G.displayName="FlxSelectOption";const B=a.memo(G),S=a.forwardRef(({className:c,optionClassName:t,name:r,disabled:n=!1,hasSearch:u=!1,placeholder:m=" ",emptyMessage:f="No options",prefixIcon:d=null,dropdownIcon:i=null,options:o,value:l,onChange:h,hasClear:K,clearIcon:Q,clearFn:b,onFocus:v,onBlur:j,error:R,dataUniqueid:U,dataTestId:W,onSearch:x,useServerFiltering:C=!1,...Z},$)=>{var V;const w=a.useMemo(()=>o?o.find(s=>s.value===l):void 0,[o,l]),[F,M]=a.useState(!1),[ee,D]=a.useState(!1),[p,y]=a.useState(((V=o==null?void 0:o.find(s=>s.value===l))==null?void 0:V.label)||""),N=a.useRef(null),se=a.useRef(null),T=a.useRef(!1),L=!l&&!p,te=a.useMemo(()=>i?a.cloneElement(i,{className:O("flx-select-arrow",i.props.className)}):e.jsx(ge,{name:"caret-down",className:"flx-select-arrow"}),[i]),le=a.useMemo(()=>C?o:o.filter(s=>{var _;return(_=s==null?void 0:s.label)==null?void 0:_.toLowerCase().includes(p==null?void 0:p.toLowerCase())}),[C,o,p]),q=T.current?le:o,ae=()=>{y(""),b==null||b()},{clearIconComponent:re}=be({filled:!!l,hasClear:K,resetFieldFn:ae,clearIcon:Q,className:"flx-select-clear"});a.useEffect(()=>{C&&(x==null||x(p))},[x,p,C]),a.useEffect(()=>{y((w==null?void 0:w.label)||"")},[x,w,l]);const oe=()=>{n||M(s=>!s)},k=()=>{F&&M(!1),T.current=!1},ne=s=>{y(s.target.value),T.current=!0},ce=s=>{y(s.label),h==null||h(s.value),k()},ie=()=>{D(!1),F||j==null||j()},de=s=>{D(!0),v==null||v(s)},ue=s=>{u&&F&&s.stopPropagation()},me=()=>{if(N.current){const s=N.current.getBoundingClientRect();return{top:s.bottom+window.scrollY,left:s.left+window.scrollX,width:s.width}}return{}};return e.jsxs("div",{className:O(["flx-select",{opened:F},c]),"data-uniqueid":U,"data-testid":W,ref:$,children:[e.jsx(pe,{error:R,children:e.jsxs("div",{ref:N,className:O(["flx-select-trigger",{disabled:n,filled:!L,focused:ee,empty:L,error:R}]),role:"button",tabIndex:0,onClick:oe,children:[d?e.jsx("div",{className:"flx-prefix",children:e.jsx(d,{})}):null,e.jsx("div",{className:"flx-select-value",children:e.jsx("input",{...Z,name:r,type:"text",className:"flx-select-search",placeholder:m,value:p,onFocus:de,onBlur:ie,onClick:ue,readOnly:!u||n,onChange:ne})}),re,te]})}),F&&e.jsxs(Oe,{children:[e.jsx("div",{className:"flx-select-backdrop",onClick:()=>{k()}}),e.jsxs("div",{className:"flx-select-list",style:me(),ref:se,children:[q.map(s=>e.jsx(B,{label:s.label,isSelected:s.value===l,onClick:()=>{ce(s)},className:t},s.value)),q.length===0&&e.jsx(B,{label:f,className:t},"empty-option")]})]})]})});S.displayName="FlxSelect";const ve=a.memo(S);ve.displayName="MemoFlxSelect";const P=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Test 1"},{value:"option5",label:"Test 2"}],je=e.jsx(E,{name:"caret-right"}),Ne=e.jsx(E,{name:"plus-circle"}),Te=async c=>(await new Promise(t=>setTimeout(t,1e3)),P.filter(t=>t.label.toLowerCase().includes(c.toLowerCase()))),Je={component:S,title:"Select",argTypes:{fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2n2umsSLJbNigLx43nseml/FlowX-Design-System?node-id=5405-1553"}}},I={args:{fontFamily:"Open Sans",label:"Select label",placeholder:"Select an option",emptyMessage:"No options found",width:0,hasSearch:!1,hasClear:!1,hasCustomClearIcon:!1,hasCustomDropdownIcon:!1,hasPrefixIcon:!1,disabled:!1,requiredError:!1,helper:"Helper text",infoTooltip:!1,options:P},decorators:[(c,{args:t})=>{const r=he({mode:"onTouched",defaultValues:{select:""}});return e.jsx(xe,{...r,children:e.jsx(Fe,{name:"select",label:t.label,helperText:t.helper,hasClear:t.hasClear,disabled:t.disabled,rules:t.requiredError?{required:"This field is required"}:{},hideInsideInfoPoint:t.infoTooltip,clearIcon:t.hasCustomClearIcon?e.jsx(E,{name:"trash"}):null,children:e.jsx(c,{})})})}],render:function({width:t,...r}){const{name:n,rules:u,hasClear:m,clearFn:f,clearIcon:d}=Se(),{watch:i,control:o}=Ce();return e.jsxs("div",{style:{fontFamily:r.fontFamily},className:"flx-default-theme",children:[e.jsx(we,{control:o,name:n,rules:u,render:({field:l,fieldState:h})=>e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(Ie,{children:e.jsx(S,{hasClear:m,clearFn:f,clearIcon:d,hasSearch:r.hasSearch,placeholder:r.placeholder,prefixIcon:r.hasPrefixIcon?Ne:null,style:{width:t||"100%"},options:r.options,dropdownIcon:r.hasCustomDropdownIcon?je:null,value:l.value,error:h.error,onChange:l.onChange,onBlur:l.onBlur})})}),e.jsx("hr",{})]})}),e.jsxs("p",{children:["selected option: ",JSON.stringify(i("select"))||"-"]})]})}},g={args:{fontFamily:"Open Sans",width:0,options:[]},render:function({width:t,...r}){const n=P[1],[u,m]=a.useState([n]),[f,d]=a.useState(n.value),i=fe.debounce(async l=>{const h=await Te(l);m(h)},600),o=a.useCallback(async l=>{if(!l.trim()||l.length<2){m([]),d("");return}await i(l)},[]);return e.jsxs("div",{style:{fontFamily:r.fontFamily},className:"flx-default-theme",children:[e.jsx(S,{hasClear:!0,hasSearch:!0,useServerFiltering:!0,style:{width:t||"100%"},options:u,value:f,onChange:l=>d(l),onSearch:o}),e.jsxs("p",{children:["selected option: ",f||"-"]})]})}};var J,H,X;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  decorators: [(Story, {
    args
  }) => {
    const form = useForm({
      mode: 'onTouched',
      defaultValues: {
        select: ''
      }
    });
    return <FlxForm {...form}>
          <FlxFormField name="select" label={args.label} helperText={args.helper} hasClear={args.hasClear} disabled={args.disabled} rules={args.requiredError ? {
        required: 'This field is required'
      } : {}} hideInsideInfoPoint={args.infoTooltip} clearIcon={args.hasCustomClearIcon ? <FlxIcon name="trash" /> : null}>
            <Story />
          </FlxFormField>
        </FlxForm>;
  }],
  render: function Render({
    width,
    ...args
  }) {
    const {
      name,
      rules,
      hasClear,
      clearFn,
      clearIcon
    } = useFormField();
    const {
      watch,
      control
    } = useFormContext();
    return <div style={{
      fontFamily: args.fontFamily
    }} className="flx-default-theme">
        <Controller control={control} name={name} rules={rules} render={({
        field,
        fieldState
      }) => <>
              <FlxFormItem>
                <FlxFormControl>
                  <FlxSelect hasClear={hasClear} clearFn={clearFn} clearIcon={clearIcon} hasSearch={args.hasSearch} placeholder={args.placeholder} prefixIcon={args.hasPrefixIcon ? prefixIcon : null} style={{
              width: width ? width : '100%'
            }} options={args.options} dropdownIcon={args.hasCustomDropdownIcon ? customDropdownIcon : null} value={field.value} error={fieldState.error} onChange={field.onChange} onBlur={field.onBlur} />
                </FlxFormControl>
              </FlxFormItem>
              <hr />
            </>} />
        <p>selected option: {JSON.stringify(watch('select')) || '-'}</p>
      </div>;
  }
}`,...(X=(H=I.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var Y,z,A;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    fontFamily: 'Open Sans',
    width: 0,
    options: []
  },
  render: function Render({
    width,
    ...args
  }) {
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
        <FlxSelect hasClear hasSearch useServerFiltering style={{
        width: width ? width : '100%'
      }} options={options} value={value} onChange={value => setValue(value as string)} onSearch={onSearch} />
        <p>selected option: {value || '-'}</p>
      </div>;
  }
}`,...(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const He=["Select","SelectServerSearch"];export{I as Select,g as SelectServerSearch,He as __namedExportsOrder,Je as default};
