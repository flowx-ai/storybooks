import{j as s}from"./jsx-runtime-B2vo17nN.js";import{F as a}from"./Chip-CvfNbeEc.js";import{F as r,D as p}from"./Icon-CdSN3cIM.js";import"./iframe-BxDDtFTO.js";import"./clsx-B-dksMZM.js";const x={component:a},e={args:{handleClose:!0,chips:["Chip 1","Chip 2","Chip 3"],disabled:!1,closeIcon:"close"},argTypes:{handleClose:{control:"boolean"},disabled:{control:"boolean"},closeIcon:{control:"select",options:Object.keys(p)}},render:({handleClose:l,chips:c,disabled:n,closeIcon:i})=>s.jsx("div",{className:"flx-chip-container",style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:c.map(o=>s.jsx(a,{label:o,onClose:l?()=>alert(`Chip "${o}" closed`):void 0,closeIcon:l?s.jsx(r,{name:i}):void 0,disabled:n},o))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const b=["Chip"];export{e as Chip,b as __namedExportsOrder,x as default};
