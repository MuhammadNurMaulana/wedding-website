import AkadAndResepsi from "../Acara/AkadAndResepsi"
import Lokasi from "./Lokasi"

export default function Acara() {
  return (
    <div>
      <AkadAndResepsi title="Akad Nikah" jam="10.00" />
      <AkadAndResepsi title="Resepsi" jam="11.15" />
      <Lokasi />
    </div>
  )
}
