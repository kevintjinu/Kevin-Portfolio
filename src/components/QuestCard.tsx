'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

export default function QuestCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="w-full">
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="
          group relative h-full min-h-[420px]  /* 👈 keeps cards same height */
          rounded-2xl overflow-hidden
          bg-gradient-to-br from-zinc-900 via-black to-purple-950
          border border-purple-800/40 shadow-xl
          hover:border-purple-500/80 hover:shadow-purple-500/20
          flex flex-col               /* 👈 enables bottom push */
        "
      >
        {/* glow blob */}
        <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />

        <div className="p-6 flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-purple-200">
            {project.title}
          </h3>

          <p className="text-sm text-purple-300/80 font-medium">
            {project.tagline}
          </p>

          <p className="text-zinc-300 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-full bg-purple-900/60 text-purple-100 border border-purple-700/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* footer pushed to bottom always */}
        <div className="mt-auto px-6 py-3 bg-black/60 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            {project.role ?? 'Quest'}
          </span>
          <span className="text-sm font-mono text-purple-300">
            XP {project.xp}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
