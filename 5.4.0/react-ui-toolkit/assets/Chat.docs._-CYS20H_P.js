import{j as e}from"./jsx-runtime-NtR90vs_.js";import{useMDXComponents as r}from"./index-BFIdbSN5.js";import{M as i,S as o,a as n}from"./blocks-B-SsFYDg.js";import{C as l,a as h}from"./Chat.stories-CeCmG6Rq.js";import"./iframe-DMgJMfTy.js";import"./index-BuszbRwq.js";import"./index-z-sgVaVj.js";import"./index-CwmSl8QK.js";import"./clsx-B-dksMZM.js";import"./Button-BXeyTgse.js";import"./useRenderElement-BDAcc6QV.js";import"./TextArea-4_YHnEeT.js";import"./useComputedClearIcon-glaqsIhY.js";import"./Icon-BPlfcXXP.js";import"./task.constants-D9FsWdym.js";import"./lodash-CmQLOLUV.js";function a(t){const s={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(s.h1,{id:"chat",children:"Chat"}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(s.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { FlxChat, FlxChatReasoning } from '@flowx/react-ui-toolkit'
`})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
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
`,e.jsx(s.h2,{id:"chatmessage-interface",children:"ChatMessage interface"}),`
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
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { useState } from 'react'
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
`})})]})}function k(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{k as default};
