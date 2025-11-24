'use client'
// we use client: Particles need the browser (canvas). Server Components can’t run browser code.

import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function StarField() {
  // this runs once when particles starts
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.6 },
          size: { value: 1.2 },
          move: { enable: true, speed: 0.35 },
        },
      }}
    />
  )
}
