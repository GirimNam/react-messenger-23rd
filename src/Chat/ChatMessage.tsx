import type { Message } from '@/types/chat'

interface Props {
  message: Message
}

export default function ChatMessage({ message }: Props) {
  const isMe = message.sender === 'me'

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
          px-3 py-2 rounded-xl max-w-[70%]
          ${isMe ? 'bg-yellow-300' : 'bg-white'}
        `}
      >
        {message.text}
      </div>
    </div>
  )
}
