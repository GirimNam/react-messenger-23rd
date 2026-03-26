import ChatMessage from '../Chat/ChatMessage'
import type { Message } from '@/types/chat'

interface Props {
  messages: Message[]
}

export default function ChatList({ messages }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg}
        />
      ))}
    </div>
  )
}
