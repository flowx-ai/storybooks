import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BHNmyKzW.js";import{M as i,S as o,a as n}from"./blocks-BbCun1D7.js";import{C as l,a as m}from"./Chat.stories-F9lSLdyP.js";import"./iframe-jid_s0cJ.js";import"./index-C7uqCK9m.js";import"./index-kQ57TZcY.js";import"./index-BXvjnVPi.js";import"./clsx-B-dksMZM.js";import"./Button-BCZaSbf3.js";import"./useRenderElement-DWskGOts.js";import"./Icon-DpptYx4V.js";import"./Tooltip-DEuf11Ic.js";import"./popupStateMapping-_24tcnmc.js";import"./useOpenChangeComplete--9KZy65j.js";import"./useIsoLayoutEffect-XByiQ3oE.js";import"./addEventListener-C7Nm7Zds.js";import"./composite-BW41E69_.js";import"./visuallyHidden-mvbst0xE.js";import"./DirectionContext-Tdh8FO2W.js";import"./TextArea-CSRH4TMo.js";import"./useComputedClearIcon-B7i302JD.js";import"./voice-story.utils-jrTxM7LU.js";import"./valueToPercent-nxb0-Dlp.js";import"./mixpanel-sink-BpVj-oDV.js";import"./lodash-DfZXwKme.js";function a(s){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(t.h1,{id:"chat",children:"Chat"}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { FlxChat, FlxChatReasoning } from '@flowx/react-ui-toolkit'
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(n,{children:`
| Name            | Type                                       | Description                                   |
| --------------- | ------------------------------------------ | --------------------------------------------- |
| messages        | ChatMessage[]                              | Messages to render                            |
| chatAvatar      | { src: string; alt: string }               | Avatar shown in the header                    |
| title           | string                                     | Chat header title                             |
| subtitle        | string                                     | Chat header subtitle                          |
| inputPlaceholder| string                                     | Placeholder for the input field               |
| sendAriaLabel   | string                                     | Accessible label for the send button          |
| messageInput    | string                                     | Controlled input value for the message field  |
| sendMessage     | (message: string) => void                  | Callback invoked when the user sends a message |
`}),`
`,e.jsx(t.h2,{id:"chatmessage-interface",children:"ChatMessage interface"}),`
`,e.jsx(n,{children:`
\`\`\`ts
interface ChatMessage {
id?: string
content: string
sender: 'sender' | 'receiver'
timestamp?: Date | string
}
\`\`\`
`}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from 'react'
import { FlxChat, FlxChatReasoning, type ChatMessage } from '@flowx/react-ui-toolkit'

const messagesSeed: ChatMessage[] = [
  { id: '1', sender: 'sender', content: 'Hello!' },
  { id: '2', sender: 'receiver', content: 'Hi, how can I help?' },
]

export function ChatExample() {
  const [messages, setMessages] = useState<ChatMessage[]>(messagesSeed)
  const [reasoning, setReasoning] = useState(false)

  const handleSendMessage = (message: string) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'sender', content: message }])
    setReasoning(true)
    setTimeout(() => {
      setReasoning(false)
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'receiver', content: 'Here is your answer.' },
      ])
    }, 1500)
  }

  return (
    <div className="flx-default-theme" style={{ height: 560 }}>
      <FlxChat
        title="Chat title"
        subtitle="Chat subtitle"
        chatAvatar={{ src: 'https://i.pravatar.cc/150?u=24', alt: 'Chat avatar' }}
        inputPlaceholder="Ask me anything..."
        sendAriaLabel="Send message"
        messages={messages}
        sendMessage={handleSendMessage}
        messageInput=""
      />
      {reasoning ? <FlxChatReasoning message="Working on your request..." /> : null}
    </div>
  )
}
`})})]})}function L(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{L as default};
