import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,i as r,r as i,t as a}from"./Icon-CS0V3G0Z.js";import{n as o,t as s}from"./Chip-nObNxej6.js";var c,l,u,d;function f(){return(f=e((()=>{o(),i(),n(),c=t(),l={component:s},u={args:{handleClose:!0,chips:[`Chip 1`,`Chip 2`,`Chip 3`],disabled:!1,closeIcon:`close`},argTypes:{handleClose:{control:`boolean`},disabled:{control:`boolean`},closeIcon:{control:`select`,options:Object.keys(r)}},render:({handleClose:e,chips:t,disabled:n,closeIcon:r})=>(0,c.jsx)(`div`,{className:`flx-chip-container`,style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:t.map(t=>(0,c.jsx)(s,{label:t,onClose:e?()=>alert(`Chip "${t}" closed`):void 0,closeIcon:e?(0,c.jsx)(a,{name:r}):void 0,disabled:n},t))})},d=[`Chip`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    handleClose: true,
    chips: ['Chip 1', 'Chip 2', 'Chip 3'],
    disabled: false,
    closeIcon: 'close'
  },
  argTypes: {
    handleClose: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    closeIcon: {
      control: 'select',
      options: Object.keys(icons)
    }
  },
  render: ({
    handleClose,
    chips,
    disabled,
    closeIcon
  }) => <div className="flx-chip-container" style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  }}>
      {chips.map((chip: string) => <FlxChip key={chip} label={chip} onClose={handleClose ? () => alert(\`Chip "\${chip}" closed\`) : undefined} closeIcon={handleClose ? <FlxIcon name={closeIcon} /> : undefined} disabled={disabled} />)}
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Chip,d as __namedExportsOrder,l as default};