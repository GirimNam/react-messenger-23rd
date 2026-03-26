import backArrow from '@assets/left.svg'
import hamBurger from '@assets/hamburg.svg'
import searchIcon from '@assets/search.svg'

interface Props {
  title: string
}

function ChatHeader({ title = '친구 이름' }: Props) {
  return (
    <div className="flex items-center justify-between px-4 h-14 bg-white border-b">
      <button className="w-[36px] h-[36px] p-[6px] flex items-center justify-center">
        <img
          src={backArrow}
          alt="뒤로가기"
          className="w-[24px] h-[24px]"
        />
      </button>

      {/* 가운데: 채팅방 이름 */}
      <div className="font-semibold text-base">{title}</div>

      {/* 오른쪽: 메뉴 */}
      <div className="flex gap-3 text-lg">
        <button>
          <img
            src={searchIcon}
            alt="돋보기"
            className="w-6 h-6"
          />
        </button>
        <button>
          <img
            src={hamBurger}
            alt="메뉴바"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
