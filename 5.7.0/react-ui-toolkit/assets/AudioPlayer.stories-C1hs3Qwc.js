import{j as s}from"./jsx-runtime-OGy5g_wK.js";import{F as i,c as n,a as d}from"./voice-story.utils-DDul952A.js";import"./iframe-BDuuskEQ.js";import"./clsx-B-dksMZM.js";import"./Icon-k5113823.js";import"./useValueAsRef-dJZegB0I.js";import"./useIsoLayoutEffect-kHDfYS6q.js";import"./useRenderElement-aHdoI15d.js";import"./valueToPercent-CmxdyyhM.js";const t=n(3),f={title:"Chat/AudioPlayer",component:i,render:e=>s.jsx("div",{className:"flx-default-theme",style:{fontFamily:"Open Sans",padding:"2rem",maxWidth:400},children:s.jsx(i,{...e})})},r={args:{audioUrl:t,audioDuration:3}},o={args:{audioUrl:t,audioDuration:3,voiceMessageLabel:"Audio recording",playAriaLabel:"Play audio recording",pauseAriaLabel:"Pause audio recording",progressAriaLabel:"Audio playback progress"}},a={args:{audioUrl:"https://example.com/fake-audio.wav",audioDuration:3,fetchAudio:async()=>(await new Promise(e=>setTimeout(e,800)),d(3)),onAudioFetched:e=>console.log("Audio fetched:",e),onAudioError:e=>console.error("Audio fetch error:",e)},parameters:{docs:{description:{story:"Demonstrates lazy audio fetching. The audio is not loaded until the user clicks play. A simulated 800ms delay mimics a network request."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    audioUrl: silentAudioUrl,
    audioDuration: 3
  }
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    audioUrl: silentAudioUrl,
    audioDuration: 3,
    voiceMessageLabel: 'Audio recording',
    playAriaLabel: 'Play audio recording',
    pauseAriaLabel: 'Pause audio recording',
    progressAriaLabel: 'Audio playback progress'
  }
} satisfies Story`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};const b=["Default","WithCustomLabels","LazyFetch"];export{r as Default,a as LazyFetch,o as WithCustomLabels,b as __namedExportsOrder,f as default};
