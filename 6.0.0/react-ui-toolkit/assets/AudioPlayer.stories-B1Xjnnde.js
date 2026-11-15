import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,i as r,n as i,t as a}from"./voice-story.utils-eX5y1gwD.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),o=t(),s=a(3),c={title:`Chat/AudioPlayer`,component:r,render:e=>(0,o.jsx)(`div`,{className:`flx-default-theme`,style:{fontFamily:`Open Sans`,padding:`2rem`,maxWidth:400},children:(0,o.jsx)(r,{...e})})},l={args:{audioUrl:s,audioDuration:3}},u={args:{audioUrl:s,audioDuration:3,voiceMessageLabel:`Audio recording`,playAriaLabel:`Play audio recording`,pauseAriaLabel:`Pause audio recording`,progressAriaLabel:`Audio playback progress`}},d={args:{audioUrl:`https://example.com/fake-audio.wav`,audioDuration:3,fetchAudio:async()=>(await new Promise(e=>setTimeout(e,800)),i(3)),onAudioFetched:e=>console.log(`Audio fetched:`,e),onAudioError:e=>console.error(`Audio fetch error:`,e)},parameters:{docs:{description:{story:`Demonstrates lazy audio fetching. The audio is not loaded until the user clicks play. A simulated 800ms delay mimics a network request.`}}}},f=[`Default`,`WithCustomLabels`,`LazyFetch`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    audioUrl: silentAudioUrl,
    audioDuration: 3
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    audioUrl: silentAudioUrl,
    audioDuration: 3,
    voiceMessageLabel: 'Audio recording',
    playAriaLabel: 'Play audio recording',
    pauseAriaLabel: 'Pause audio recording',
    progressAriaLabel: 'Audio playback progress'
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    audioUrl: 'https://example.com/fake-audio.wav',
    audioDuration: 3,
    fetchAudio: async () => {
      // Simulate network delay then return a silent blob
      await new Promise(resolve => setTimeout(resolve, 800));
      return createSilentWavBlob(3);
    },
    onAudioFetched: (blobUrl: string) => console.log('Audio fetched:', blobUrl),
    onAudioError: (error: unknown) => console.error('Audio fetch error:', error)
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates lazy audio fetching. The audio is not loaded until the user clicks play. A simulated 800ms delay mimics a network request.'
      }
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as LazyFetch,u as WithCustomLabels,f as __namedExportsOrder,c as default};