import Acara from "@/components/home/Acara"
import Doa from "@/components/home/Doa"
import Opening from "@/components/home/Opening"
import Image from "next/image"
import React from "react"

export default function HomeComponents() {
  return (
    <div className="w-full">
      <Opening />
      <Acara />
      <Doa />
    </div>
  )
}
