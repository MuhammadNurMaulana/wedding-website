import Countdown from "@/components/Countdown"
import { Sacramento } from "next/font/google"

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] })

export default function NavComponent() {
  const targetDate = new Date("2024-06-23T10:15:00")
  return (
    <nav className="w-full h-screen bg-slate-700 text-white  flex justify-center items-center">
      <div className="text-center flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">The Wedding</h2>
        <h1 className={`${sacramento.className} text-4xl`}>Sumarni</h1>
        <h1 className={`${sacramento.className} text-4xl`}> & </h1>
        <h1 className={`${sacramento.className} text-4xl`}>Muhammad Amsori</h1>
        <div className="flex items-start justify-center gap-3 text-xl">
          <h2>Minggu</h2>
          <div className="border-x-2 border-white px-3">
            <h2 className="font-semibold ">23</h2>
            <h2>2024</h2>
          </div>
          <h2>Juni</h2>
        </div>
      </div>
    </nav>
  )
}
