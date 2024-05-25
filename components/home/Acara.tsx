import AkadAndResepsi from "../Acara/AkadAndResepsi"
import ContainerFramer from "../elements/ContainerFramer"
import Lokasi from "./Lokasi"

export default function Acara() {
  return (
    <div id="acara">
      <ContainerFramer>
        <AkadAndResepsi title="Akad Nikah" jam="10.00" />
        <AkadAndResepsi title="Resepsi" jam="11.15" />
        <Lokasi />
      </ContainerFramer>
    </div>
  )
}
