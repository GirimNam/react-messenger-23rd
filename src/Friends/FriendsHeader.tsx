import IconX from '@assets/IconX.svg'
import search from '@assets/search.svg'
import { useNavigate } from 'react-router-dom'

function FriendsHeader() {
  const navigate = useNavigate()
  return (
    <div className="relative flex items-center h-[56px] px-3">
      <button
        onClick={() => navigate('/myprofile')}
        className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer"
      >
        <img
          src={IconX}
          alt="뒤로가기"
        />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2">
        <p className="text-title1 antialiased">전체 멤버 보기</p>
      </div>

      <div className="ml-auto">
        <button className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer">
          <img
            src={search}
            alt="돋보기"
          />
        </button>
      </div>
    </div>
  )
}

export default FriendsHeader
