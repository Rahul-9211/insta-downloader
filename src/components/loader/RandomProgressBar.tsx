"use client"

import { useState, useEffect } from 'react'

interface ProgressBarProps {
  onComplete?: () => void
  showSuccessMessage?: boolean
}

export default function RandomGradientProgressBar({ onComplete, showSuccessMessage = false }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const updateProgress = () => {
      setProgress((oldProgress) => {
        if (oldProgress >= 98) {
          clearInterval(timer)
          setTimeout(() => {
            setProgress(100)
            setIsComplete(true)
            if (onComplete) onComplete()
          }, 2000) // Wait for 2 seconds at 98%
          return 92
        }
        const increment = Math.random() * 10
        return Math.min(oldProgress + increment, 98)
      })
    }

    timer = setInterval(updateProgress, 200)

    return () => {
      clearInterval(timer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden backdrop-blur-lg bg-white/30  shadow-lg">
    <div
      className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-4 text-white transition-all duration-200 ease-out"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>
  <p className="text-center mt-2 text-sm text-white">
    {isComplete && showSuccessMessage ? "" : "Fetching Data, Please Wait Few Seconds!"}
  </p>
</div>

  )
}