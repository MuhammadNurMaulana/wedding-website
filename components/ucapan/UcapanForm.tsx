"use client"
import { addUcapan } from "@/common/lib/addData"
import { Sacramento } from "next/font/google"
import { useFormState } from "react-dom"

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] })

export default function UcapanForm() {
  const [state, formAction] = useFormState(addUcapan, null)
  return (
    <form action={formAction}>
      <h1 className={`${sacramento.className} text-4xl text-center`}>Kirim Ucapan & Doa Restu</h1>
      <div className="grid gap-2 mt-6 mb-2">
        <input type="text" name="nama" placeholder="Masukkan Nama Anda" className="text-sm font-semibold p-2 shadow shadow-slate-500" />
        <p className="text-red-500 text-sm font-semibold">{state?.Error?.nama}</p>
      </div>
      <div className="grid gap-2">
        <textarea name="pesan" placeholder="Tulis Ucapan & Doa Restu" className="text-sm font-semibold p-2 shadow shadow-slate-500 resize-none" />
        <p className="text-red-500 text-sm">{state?.Error?.pesan}</p>
      </div>
      <button type="submit" className="my-2 w-full font-bold  bg-teal-500 rounded-md shadow-md shadow-slate-500 p-2">
        Send Ucapan
      </button>
    </form>
  )
}
