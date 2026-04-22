import { useState } from 'react'
import SendIcon from '@assets/icon-send.svg'
import PlusCircle from '@assets/icon-pluscircle.svg'
import Image from '@assets/icon-image.svg'
import At from '@assets/icon-at.svg'
import Emoji from '@assets/icon-emoji.svg'

interface Props {
  onSend: (text: string) => void
}

function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState('')

  const rows = Math.min(message.split('\n').length, 4)

  const handleSend = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const isActive = message.trim().length > 0

  return (
    <div className="px-3 pt-4 pb-9 flex flex-col bg-gray-5 shadow-[0_-1px_13px_rgba(0,0,0,0.06)]">
      <textarea
        rows={rows}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-1 resize-none leading-5.5 overflow-y-auto no-scrollbar
                  placeholder:text-[16px]
                  placeholder:font-normal
                  placeholder:leading-5.5
                  placeholder:tracking-[-0.08px]
                  placeholder:text-gray-40
                  placeholder:opacity-100
                  focus:outline-none"
        placeholder="메시지를 입력해보세요."
      />

      <div className="pt-5 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <button className="cursor-pointer">
            <img
              src={PlusCircle}
              alt=""
              className="w-8 h-8"
            />
          </button>
          <button className="cursor-pointer">
            <img
              src={Image}
              alt=""
              className="w-9 h-9"
            />
          </button>
          <button className="cursor-pointer">
            <img
              src={At}
              alt=""
              className="w-9 h-9"
            />
          </button>
          <button className="cursor-pointer">
            <img
              src={Emoji}
              alt=""
              className="w-8.5 h-8.5"
            />
          </button>
        </div>

        <button
          onClick={handleSend}
          disabled={!isActive}
          className={`
            w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200
            ${isActive ? 'bg-blue-50' : 'bg-gray-30'}
          `}
        >
          <img src={SendIcon} alt="" className="w-6.5 h-6.5" />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
