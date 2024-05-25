import { Sacramento, Scheherazade_New } from "next/font/google"
import Image from "next/image"
import Countdown from "../Countdown"

const arabic = Scheherazade_New({ weight: "700", subsets: ["arabic"] })
const sacramento = Sacramento({ weight: "400", subsets: ["latin"] })

export default function Opening() {
  return (
    <div className="px-6 flex flex-col justify-center items-center my-12 text-center">
      <h1 className={`${arabic.className} font-bold text-4xl`}>بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
      <h1 className="font-semibold my-4">Assalamualaikum Warahmatullahi Wabarakatuh</h1>
      <p>Maha Suci Allah yang telat menciptakan makhluk-Nya berpasang pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</p>
      <div className="rounded-full w-36 h-36 bg-white relative mt-12 mb-4">
        <div className="w-40 h-40 -left-2 -top-2 rounded-full absolute bg-sky-200 -z-20" />
        <Image width={100} height={100} className="w-full h-full object-cover rounded-full" src={"/mempelai/wanita.jpg"} alt={"mempelai wanita"} />
      </div>
      <h1 className={`${sacramento.className} text-4xl`}>Sumarni</h1>
      <p>Putri pertama dari Bapak Soib dan Ibu Mariah</p>
      <div className="rounded-full w-36 h-36 bg-white relative mt-12 mb-4">
        <div className="w-40 h-40 -left-2 -top-2 rounded-full absolute bg-sky-200 -z-20" />
        <Image width={100} height={100} className="w-full h-full object-cover rounded-full" src={"/mempelai/pria.jpg"} alt={"mempelai pria"} />
      </div>
      <h1 className={`${sacramento.className} text-4xl`}>Muhammad Amsori</h1>
      <p>Putra ketiga dari Bapak Warma dan Ibu Saenih</p>
      <h1 className="my-10">Minggu, 23 Juni 2024</h1>
      <Countdown date={new Date("2024-06-23T10:15:00")} />
    </div>
  )
}
