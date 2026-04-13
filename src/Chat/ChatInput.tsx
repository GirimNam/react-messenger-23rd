import { useState } from 'react'
import PlusIcon from '@assets/PlusIcon'
import ImageIcon from '@assets/ImageIcon'
import AtIcon from '@assets/AtIcon'
import EmojiIcon from '@assets/EmojiIcon'
import SendIcon from '@assets/SendIcon'

interface Props {
  onSend: (text: string) => void
}

function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const isActive = message.trim().length > 0

  return (
    <div className="h-[130px] px-3 pt-4 pb-[36px] flex flex-col bg-[var(--gray-5)] shadow-[0_-1px_13px_rgba(0,0,0,0.06)] ">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-1 
                  placeholder:text-[16px]
                  placeholder:font-normal
                  placeholder:leading-[22px]
                  placeholder:tracking-[-0.08px]
                  placeholder:text-[var(--gray-40)]
                  placeholder:opacity-100
                  focus:outline-none"
        placeholder="메시지를 입력해보세요."
      />

      <div className="pt-5 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <PlusIcon className="w-[32px] h-[32px] text-gray-60" />
          <ImageIcon className="w-[32px] h-[32px] text-gray-60" />
          <AtIcon className="w-[32px] h-[32px] text-gray-60" />
          <EmojiIcon className="w-[32px] h-[32px] text-gray-60" />
        </div>

        <button
          onClick={handleSend}
          disabled={!isActive}
          className={`
            w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200
            ${isActive ? 'bg-blue-50' : 'bg-gray-30'}
          `}
        >
          <SendIcon className="w-[26px] h-[26px] text-gray-5" />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
