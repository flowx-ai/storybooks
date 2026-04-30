import{j as e}from"./jsx-runtime-OGy5g_wK.js";import{useMDXComponents as r}from"./index-Yxy0t_HJ.js";import{M as i,S as o,a as n}from"./blocks-Cu_IoQ3q.js";import{C as m,a as l}from"./Chat.stories-DyzIDVbD.js";import"./iframe-BDuuskEQ.js";import"./index-DlPrnibQ.js";import"./index-DLuRtuy9.js";import"./index-DF1-lbFn.js";import"./clsx-B-dksMZM.js";import"./Button-CU_k3-IV.js";import"./useRenderElement-aHdoI15d.js";import"./Icon-k5113823.js";import"./Tooltip-BLRr7OJs.js";import"./floating-ui.utils.dom-gz7ecO5V.js";import"./useIsoLayoutEffect-kHDfYS6q.js";import"./useTransitionStatus-DttcehsZ.js";import"./useOpenChangeComplete-xd2g7OxU.js";import"./useValueAsRef-dJZegB0I.js";import"./createBaseUIEventDetails-B7NY9dLT.js";import"./popupStateMapping-D4wc29Qc.js";import"./owner-DNGSRpeE.js";import"./event-CsHIXaxF.js";import"./DirectionContext-EXIw-Sia.js";import"./TextArea-JMhLPSZc.js";import"./useComputedClearIcon-bxvjHusB.js";import"./voice-story.utils-DDul952A.js";import"./valueToPercent-CmxdyyhM.js";import"./task.constants-g_6BxPdv.js";import"./lodash-Yp05OsXa.js";function a(s){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:m}),`
`,e.jsx(t.h1,{id:"chat",children:"Chat"}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:l}),`
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
`})})]})}function _(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{_ as default};
