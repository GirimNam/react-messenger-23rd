import type { Message } from '@/types/chat'

interface Props {
  message: Message
  showTime: boolean
  showTail: boolean
}

function ChatMessage({ message, showTime, showTail }: Props) {
  const isMe = message.sender === 'me'

  return (
    <div
      className={`flex ${isMe ? 'flex-row-reverse' : 'flex-row'} items-end gap-1 mb-[2px]`}
    >
      {/* 1. 말풍선 */}
      <div
        className={`
          relative max-w-[70%] px-3 py-2 text-[16px] leading-[22px]
          ${isMe ? 'bg-[var(--blue-20)]' : 'bg-[var(--gray-5)]'}
          
          ${
            showTail
              ? isMe
                ? 'rounded-2xl rounded-tr-none'
                : 'rounded-2xl rounded-tl-none'
              : 'rounded-2xl'
          }
        `}
      >
        {/* 말꼬리 (뾰족한 부분) 구현 - showTail이 true일 때만.. */}
        {showTail && (
          <div
            className={`
              absolute top-0 w-0 h-0 border-[6px] border-transparent
              ${
                isMe
                  ? 'left-full border-t-[var(--blue-20)] border-l-[var(--blue-20)]'
                  : 'right-full border-t-[var(--gray-5)] border-r-[var(--gray-5)]'
              }
            `}
          />
        )}
        <div className="break-all">{message.text}</div>
      </div>

      {/* 2. 상태 표시 영역 (안 읽은 숫자 + 시간) */}
      {showTime && (
        <div
          className={`flex flex-col text-[10px] mb-[2px] min-w-fit ${isMe ? 'items-end' : 'items-start'}`}
        >
          {message.unreadCount && message.unreadCount > 0 && (
            <span className="text-[#FEE500] font-bold mb-[1px]">
              {message.unreadCount}
            </span>
          )}
          <span className="text-gray-400 leading-none">{message.time}</span>
        </div>
      )}
    </div>
  )
}

export default ChatMessage
