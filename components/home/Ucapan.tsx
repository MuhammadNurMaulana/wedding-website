import ContainerFramer from "../elements/ContainerFramer"
import UcapanForm from "../ucapan/UcapanForm"
import UcapanList from "../ucapan/UcapanList"

export default function UcapanComponents() {
  return (
    <ContainerFramer>
      <div id="ucapan" className="lg:w-1/2 w-10/12 mx-auto">
        <UcapanForm />
        <UcapanList />
      </div>
    </ContainerFramer>
  )
}
