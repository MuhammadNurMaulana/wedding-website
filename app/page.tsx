import Footer from "@/module/footer"
import HomeComponents from "@/module/home"
import NavComponent from "@/module/navbar"

export default function Home() {
  return (
    <main className="w-full">
      <NavComponent />
      <HomeComponents />
      <Footer />
    </main>
  )
}
