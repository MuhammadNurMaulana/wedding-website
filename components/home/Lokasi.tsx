import { Great_Vibes } from "next/font/google"
import DenahLokasi from "../denah/DenahLokasi"

const greateVibe = Great_Vibes({ weight: "400", subsets: ["latin"] })

export default function Lokasi() {
  return (
    <div className="text-center w-10/12 mx-auto my-12">
      <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu dalam acara pernikahan kami.</p>
      <p className="my-2">Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih yang sebesar-besarnya. Semoga Allah SWT senantiasa melimpahkan rahmat dan hidayah-Nya kepada kita semua.</p>
      <p className="font-semibold my-6">Jazakumullah Khairan Katsiran Wassalamuallaikum Warahmatullahi Wabarakatuh</p>
      <p className="font-semibold my-2">Kami yang berbahagia,</p>
      <h1 className={`${greateVibe.className} text-2xl`}>Sumarni & Muhammad Amsori</h1>
      <p className="font-semibold">Beserta keluarga besar kedua mempelai</p>
      <DenahLokasi />
    </div>
  )
}
