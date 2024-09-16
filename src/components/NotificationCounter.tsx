type NotificationCounterProps = {
  count: number
}

export const NotificationCounter = ({ count }: NotificationCounterProps) => {
  if (!count) {
    return
  }

  return (
    <div className="flex items-center p-[9px] justify-center top-0 left-3.5 text-xs w-4 h-4 text-white bg-red-600 rounded-full absolute">
      {count}
    </div>
  )
}
