import { FaMapMarkerAlt, FaRocketchat } from "react-icons/fa"
import { FaHeart, FaMapLocation } from "react-icons/fa6"
import { IoHome } from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 p-2 bg-slate-100 left-0 right-0">
      <div className="w-full grid grid-cols-5 gap-2">
        <a href="#home" className="flex flex-col items-center justify-center font-semibold text-sm">
          <IoHome size={15} />
          <h2>Home</h2>
        </a>
        <a href="#mempelai" className="flex flex-col items-center justify-center font-semibold text-sm">
          <FaHeart size={15} />
          <h2>Mempelai</h2>
        </a>
        <a href="#acara" className="flex flex-col items-center justify-center font-semibold text-sm">
          <FaMapMarkerAlt size={15} />
          <h2>Acara</h2>
        </a>
        <a href="#lokasi" className="flex flex-col items-center justify-center font-semibold text-sm">
          <FaMapLocation size={15} />
          <h2>Lokasi</h2>
        </a>
        <a href="#ucapan" className="flex flex-col items-center justify-center font-semibold text-sm">
          <FaRocketchat size={15} />
          <h2>Ucapan</h2>
        </a>
      </div>
    </footer>
  )
}
