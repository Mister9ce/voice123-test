"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface AudioContextType {
  currentlyPlaying: string | null
  setCurrentlyPlaying: (id: string | null) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)

  return <AudioContext.Provider value={{ currentlyPlaying, setCurrentlyPlaying }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}

