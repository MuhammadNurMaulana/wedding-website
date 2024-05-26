import Image from "next/image"
import ContainerFramer from "../elements/ContainerFramer"
import { Sacramento } from "next/font/google"

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] })

export default function Sambutan() {
  return (
    <ContainerFramer>
      <div className="w-full  h-screen relative" id="home">
        <Image src={"/background/3.png"} alt={"background"} width={2000} height={2000} className="w-full h-full absolute top-0 object-cover" />

        <div className="text-center h-full flex flex-col gap-2 items-center justify-center">
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
      </div>
    </ContainerFramer>
  )
}
