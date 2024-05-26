import { getUcapan } from "@/common/lib/dataFetch"
import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5"

export default async function UcapanList() {
  const ucapan = await getUcapan()

  return (
    <div className="grid gap-2 my-4 bg-white w-full h-[200px] overflow-y-scroll">
      {ucapan.map((ucapan): any => (
        <div key={ucapan.id} className="flex gap-2 items-start border-b max-h-max border-slate-500 p-2 rounded">
          <IoChatboxEllipsesOutline size={45} className="text-teal-500" />
          <div className="w-[80%]">
            <div className="flex items-center">
              <h1 className="font-bold w-[70%] truncate">{ucapan.nama}</h1>
              <p className="text-sm">{ucapan.createdAt.toLocaleDateString("id-ID", { year: "numeric", month: "numeric", day: "numeric" })}</p>
            </div>
            <p>{ucapan.pesan}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
