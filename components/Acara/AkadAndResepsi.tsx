import { Great_Vibes } from "next/font/google"
import { FaRegCalendarCheck } from "react-icons/fa"
import { IoTimeOutline } from "react-icons/io5"

interface ContainerAcaraProps {
  title: string
  jam: string
}

const greateVibe = Great_Vibes({ weight: "400", subsets: ["latin"] })
export default function AkadAndResepsi({ title, jam }: ContainerAcaraProps) {
  return (
    <div className="w-10/12 mx-auto text-center shadow-lg shadow-slate-400 py-4 my-8">
      <h1 className={`${greateVibe.className} text-4xl`}>{title}</h1>
      <div className="flex items-start justify-center gap-2 mt-10">
        <FaRegCalendarCheck size={20} />
        <h2>Minggu, 23 Juni 2024</h2>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <IoTimeOutline size={20} />
        <h2>{jam} WIB</h2>
      </div>
      <h1 className="font-semibold my-4">Lokasi / Tempat Acara:</h1>
      <p>Jl.Tanjung Barat RT.08/RW.02, Kel. Tanjung Barat Kec. Jagakarsa Jakarta Selatan</p>
    </div>
  )
}
