import { FaLocationArrow } from "react-icons/fa"

interface MapsLinkProps {
  lat: string
  lng: string
}

export default function MapLink({ lat, lng }: MapsLinkProps) {
  const mapsUrl = `http://maps.google.com/?q=${lat},${lng}`
  return (
    <a href={mapsUrl} target="_blank" className="bg-blue-700 px-3 py-2 rounded-full text-white font-semibold text-sm flex justify-center items-center gap-2 max-w-max mx-auto">
      <FaLocationArrow size={15} />
      Lihat Lokasi Acara
    </a>
  )
}
