"use client"
import { useState, useEffect } from "react"

interface HomeBarContainerProps {
  children: React.ReactNode
}

export default function HomeBarContainer({ children }: HomeBarContainerProps) {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <main className="w-full">
      {isLargeScreen ? (
        <div className="w-full flex items-center justify-center text-center h-screen font-bold text-3xl bg-slate-700">
          <h1>Mohon maaf website ini hanya bisa di akses melalui HP dan Tablet saja silahkan gunakan HP atau Tablet untuk mengakses website ini</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </main>
  )
}
