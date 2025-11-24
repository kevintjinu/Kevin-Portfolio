'use client'

import Layout from '@/components/Layout'
import QuestCard from '@/components/QuestCard'
import projects from '@/data/projects'

export default function ProjectsPage() {
  return (
    <Layout title="Quest Board – Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <QuestCard key={p.slug} project={p} />
        ))}
      </div>
    </Layout>
  )
}
