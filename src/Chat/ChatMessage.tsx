import type { Message } from '@/types/chat'
import SendOther from '@Chat/SendOther'
import SendMe from '@Chat/SendMe'

interface Props {
  message: Message
  nextMessage?: Message
  showTime: boolean
  showTail: boolean
}

function ChatMessage({ message, showTail, showTime, nextMessage }: Props) {
  const isMe = message.sender === 'me'

  /*const isSameGroup =
    nextMessage &&
    nextMessage.sender === message.sender &&
    nextMessage.time === message.time

  const gapClass = isSameGroup ? 'mb-1' : 'mb-5'*/

  if (isMe) {
    return (
      <div className="flex flex-row-reverse items-end gap-1">
        <SendMe
          message={message.text}
          time={message.time}
          unreadCount={message.unreadCount}
          showTail={showTail}
          showTime={showTime}
        />
      </div>
    )
  }

  return (
    <SendOther
      name="정다샘"
      message={message.text}
      time={message.time}
      unreadCount={message.unreadCount}
      showTail={showTail}
      showTime={showTime}
    />
  )
}

export default ChatMessage
