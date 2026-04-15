function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="w-14 h-14 rounded-full border-[5px] border-teal-60 border-t-transparent animate-spin" />
      <p className="text-body2_m text-gray-70 antialiased">로딩 중</p>
    </div>
  )
}

export default LoadingPage
