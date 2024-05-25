"use client"
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, format } from "date-fns"
import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown({ date }: { date: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()

      const days = differenceInDays(date, now)
      const hours = differenceInHours(date, now) % 24
      const minutes = differenceInMinutes(date, now) % 60
      const seconds = differenceInSeconds(date, now) % 60

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const intervalId = setInterval(calculateTime, 1000)

    return () => clearInterval(intervalId)
  }, [date])

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 text-xl font-semibold">
        <div className="bg-white shadow-md shadow-slate-700 rounded-md p-2">
          <h2>{timeLeft.days}</h2>
          <h2 className="font-bold text-lg">Days</h2>
        </div>
        <div className="bg-white shadow-md shadow-slate-700 rounded-md p-2">
          <h2>{timeLeft.hours}</h2>
          <h2 className="font-bold text-lg">Hours</h2>
        </div>
        <div className="bg-white shadow-md shadow-slate-700 rounded-md p-2">
          <h2>{timeLeft.minutes}</h2>
          <h2 className="font-bold text-lg">Min</h2>
        </div>
        <div className="bg-white shadow-md shadow-slate-700 rounded-md p-2">
          <h2>{timeLeft.seconds}</h2>
          <h2 className="font-bold text-lg">Sec</h2>
        </div>
      </div>
    </div>
  )
}
