import{j as s}from"./jsx-runtime-DztICxWZ.js";import{F as i}from"./Chip-CDLAxl6v.js";import{F as t,D as h}from"./Icon-D7WurJMX.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const u={component:i},e={args:{handleClose:!0,chips:["Chip 1","Chip 2","Chip 3"],disabled:!1,closeIcon:"close"},argTypes:{handleClose:{control:"boolean"},disabled:{control:"boolean"},closeIcon:{control:"select",options:Object.keys(h)}},render:({handleClose:l,chips:r,disabled:p,closeIcon:d})=>s.jsx("div",{className:"flx-chip-container",style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:r.map(o=>s.jsx(i,{label:o,onClose:l?()=>alert(`Chip "${o}" closed`):void 0,closeIcon:l?s.jsx(t,{name:d}):void 0,disabled:p},o))})};var a,c,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const y=["Chip"];export{e as Chip,y as __namedExportsOrder,u as default};
