import type { Message } from '@/types/chat'

interface Props {
  message: Message
}

//채팅방에 말풍선
function ChatMessage({ message }: Props) {
  const isMe = message.sender === 'me'

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-3 py-2 rounded-xl ${
          isMe ? 'bg-[var(--blue-20)]' : 'bg-[var(--gray-5)]'
        }`}
      >
        <div className="text-4">{message.text}</div>
        <div className="text-[10px] text-gray-400 text-right">
          {message.time}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
