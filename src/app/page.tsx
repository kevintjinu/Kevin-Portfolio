'use client'

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

const realms = [
  { label: 'Begin Your Journey', href: '/origin' },
  { label: 'Quest Board', href: '/projects' },
  { label: 'Crystal Chamber', href: '/resume' },
  { label: 'Summon Kevin', href: '/contact' },
]

export default function Home() {
  return (
    <Layout title="Enter the Realm of Kevin">
      <div className="flex flex-col items-center gap-4">
        {realms.map((r, i) => (
          <motion.div
            key={r.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={r.href}
              className="
                block w-72 text-center px-6 py-3 rounded-xl
                bg-purple-700/80 hover:bg-purple-600
                shadow-lg hover:shadow-purple-500/30
                transition font-semibold
              "
            >
              ▶ {r.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </Layout>
  )
}
