import Image from "next/image"
import { AudioPlayer } from "@/components/ui/audio-player"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, MapPin, Star } from "lucide-react"
import type { Provider } from "@/lib/types"

interface VoiceActorCardProps {
  provider: Provider
  searchQuery: string
}

function highlightText(text: string | undefined | null, highlight: string) {
  if (!text || typeof text !== "string") {
    return ""
  }
  if (!highlight.trim()) {
    return text
  }
  const parts = text.split(new RegExp(`(${highlight})`, "gi"))
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-yellow-200">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function VoiceActorCard({ provider, searchQuery }: VoiceActorCardProps) {
  const getAudioUrl = (file: string) => {
    if (file.includes("/samples/")) {
      return `${file}`
    }
    return "https://sandbox.voice123.com/samples/Voice123%20-%20testing%20%20-%20Jerry%20Pelletier.mp3"
  }

  return (
    <div className="rounded-xl border border-[#d9d9d9] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105">
      <div className="mb-4 flex items-start gap-4">
        <Image
          src={provider.user.picture_medium || "/favicon-180.png"}
          alt={provider.user.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#002a5d] mb-1">{highlightText(provider.user.name, searchQuery)}</h3>
          <p className="text-sm text-gray-600 flex items-center">
            <MapPin size={14} className="mr-1" />
            {provider.user.location ? highlightText(provider.user.location, searchQuery) : 'No location'}
          </p>
          <div className="flex items-center mt-1">
            <Star size={14} className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <span className="text-xs text-gray-500 ml-1">(123 reviews)</span>
          </div>
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-700 leading-relaxed">{highlightText(provider.headline, searchQuery)}</p>
      {provider.relevant_sample && (
        <AudioPlayer
          audioSrc={getAudioUrl(provider.relevant_sample.file)}
          sampleName={provider.relevant_sample.name}
          providerId={provider.id.toString()}
        />
      )}
      <div className="mt-4 flex justify-between items-center">
        <Button variant="outline" size="sm" className="text-[#002a5d] border-[#002a5d]">
          <Heart size={16} />
        </Button>
        <Button
          variant="default"
          size="sm"
          className="bg-[#002a5d] hover:bg-[#001a3d]"
          onClick={() => window.open(`https://voice123.com/${provider.user.username}`, "_blank")}
        >
          <BookOpen size={16} className="mr-2" />
          Book Now
        </Button>
      </div>
    </div>
  )
}

