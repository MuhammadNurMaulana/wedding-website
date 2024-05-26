"use client"
import { useRef, useState, useEffect } from "react"
import ContainerFramer from "./ContainerFramer"
import { FaPlay } from "react-icons/fa"
import { IoMdPause } from "react-icons/io"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [])

  return (
    <div className="p-4 fixed right-2 z-50 top-1/2 bottom-1/2">
      <ContainerFramer>
        <audio ref={audioRef} src="/audio/1.mp3" className="max-w-max max-h-max" />
        <button onClick={handleAudioToggle} className="p-2 bg-white shadow-md shadow-slate-500 rounded-full">
          {isPlaying ? <IoMdPause size={15} /> : <FaPlay size={15} />}
        </button>
      </ContainerFramer>
    </div>
  )
}
