import Acara from "@/components/home/Acara"
import Doa from "@/components/home/Doa"
import Opening from "@/components/home/Opening"
import Sambutan from "@/components/home/Sambutan"
import UcapanComponents from "@/components/home/Ucapan"
import React from "react"

export default function HomeComponents() {
  return (
    <div className="w-full">
      <Sambutan />
      <Opening />
      <Acara />
      <Doa />
      <UcapanComponents />
    </div>
  )
}
