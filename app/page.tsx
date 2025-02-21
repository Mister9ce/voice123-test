import { Suspense } from "react"
import VoiceActorSearch from "@/components/ui/voice-actor-search"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading search page...</div>}>
      <VoiceActorSearch />
    </Suspense>
  )
}

