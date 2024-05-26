import { FaLocationArrow } from "react-icons/fa"

interface MapsLinkProps {
  lat: string
  lng: string
  title: string
}

export default function MapLink({ lat, lng, title }: MapsLinkProps) {
  const mapsUrl = `http://maps.google.com/?q=${lat},${lng}`
  return (
    <a href={mapsUrl} target="_blank" className="bg-blue-700 px-3 py-2 rounded-full text-white font-semibold text-sm flex justify-center items-center gap-2 max-w-max mx-auto my-4">
      <FaLocationArrow size={15} />
      <span>{title}</span>
    </a>
  )
}
