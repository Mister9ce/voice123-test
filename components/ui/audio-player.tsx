"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import { useAudio } from "@/contexts/audio-context"

interface AudioPlayerProps {
  audioSrc: string
  sampleName: string
  providerId: string
}

export function AudioPlayer({ audioSrc, sampleName, providerId }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentlyPlaying, setCurrentlyPlaying } = useAudio()

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audioRef.current = audio

    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", () => {
      setIsPlaying(false)
      setCurrentlyPlaying(null)
    })

    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("ended", () => {
        setIsPlaying(false)
        setCurrentlyPlaying(null)
      })
      audio.pause()
    }
  }, [audioSrc, setCurrentlyPlaying])

  useEffect(() => {
    if (currentlyPlaying !== providerId && isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    }
  }, [currentlyPlaying, providerId, isPlaying])

  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(value)
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setCurrentlyPlaying(null)
      } else {
        audioRef.current.play()
        setCurrentlyPlaying(providerId)
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{sampleName}</span>
        <Button
          size="icon"
          className="h-8 w-8 rounded-full bg-[#4d93d6] text-white hover:bg-[#002a5d]"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="sr-only">{isPlaying ? "Pause" : "Play"} sample</span>
        </Button>
      </div>
      <div className="h-1 rounded-full bg-[#93bde6]/30">
        <div
          className="h-full rounded-full bg-[#4d93d6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

