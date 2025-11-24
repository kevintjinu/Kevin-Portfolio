import React from 'react'

export default function Layout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-black via-gray-950 to-purple-950">
      <h1 className="text-center text-4xl md:text-6xl font-bold text-purple-300 drop-shadow mb-10">
        {title}
      </h1>
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  )
}
