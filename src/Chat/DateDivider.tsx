import CalendarIcon from '@assets/icon-calendaricon.svg'

type Props = {
  date: string
}

function DateDivider({ date }: Props) {
  const formatted = new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  return (
    <div className="flex flex-row justify-center items-center my-5">
      <div className="flex flex-row gap-0.5 justify-center items-center bg-gray-60 text-gray-5 text-caption2_r antialiased px-3 py-1 rounded-full">
        <button>
          <img src={CalendarIcon} alt="달력" />
        </button>
        {formatted}
      </div>
    </div>
  )
}

export default DateDivider
