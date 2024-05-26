import AudioPlayer from "@/components/elements/AudioPlayer"
import HomeBarContainer from "@/components/elements/HomeBarContainer"
import Footer from "@/module/footer"
import HomeComponents from "@/module/home"
import NavComponent from "@/module/navbar"

export default function Home() {
  return (
    <HomeBarContainer>
      <NavComponent />
      <AudioPlayer />
      <HomeComponents />
      <Footer />
    </HomeBarContainer>
  )
}
