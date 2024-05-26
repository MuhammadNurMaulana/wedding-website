import { Great_Vibes } from "next/font/google"
import MapLink from "./MapLink"

const greateVibe = Great_Vibes({ weight: "400", subsets: ["latin"] })

export default function DenahLokasi() {
  return (
    <div className="w-11/12 mx-auto my-20" id="lokasi">
      <h1 className={`${greateVibe.className} text-4xl`}>Denah Lokasi</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.6482957841554!2d106.84740207499121!3d-6.3098509936794445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTgnMzUuNSJTIDEwNsKwNTAnNTkuOSJF!5e0!3m2!1sid!2sid!4v1716637675881!5m2!1sid!2sid"
        loading="lazy"
        className="w-full h-[370px] my-4"
        title="denah lokasi"
      />
      <MapLink lat="-6.309851" lng="106.849977" title="Lihat Lokasi Acara" />
      <MapLink lat="-6.309404" lng="106.850162" title="Lihat Lokasi Untuk Parkir" />
    </div>
  )
}
