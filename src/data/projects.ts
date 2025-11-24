// src/data/projects.ts

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tech: string[]
  xp: number
  role?: string
  highlights: string[]
  demoUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    slug: "coppercore-ai",
    title: "CopperCore AI Dashboard",
    tagline: "AI-assisted mineral exploration platform",
    description:
      "A Django + HTMX platform that processes large geoscience datasets and visualizes copper prospectivity with interactive Plotly dashboards.",
    tech: ["Django", "HTMX", "Plotly", "Python", "ML", "AWS"],
    xp: 90,
    role: "Full-Stack / Data Engineer",
    highlights: [
      "Built end-to-end ingestion + cleaning pipeline for multi-source exploration data.",
      "Integrated Random Forest scoring and surfaced results in story-based visualizations.",
      "Led stakeholder demos and sprint reviews; secured pilot approval.",
    ],
  },
  {
    slug: "nsw-crime-analytics",
    title: "NSW Crime Data Analytics (ETL + BI)",
    tagline: "30-year crime dataset → OLAP + Tableau insights",
    description:
      "Designed a full ETL pipeline and Tableau dashboards for NSW crime trends, per-capita comparisons, and seasonal patterns.",
    tech: ["Python", "Pandas", "Pentaho", "Tableau", "Excel"],
    xp: 75,
    role: "Data Engineer / Analyst",
    highlights: [
      "Processed 300K+ monthly records into normalized OLAP-ready schema.",
      "Built dashboards revealing long-term decline despite population growth.",
      "Led a 6-member team and delivered policy-level storytelling insights.",
    ],
  },
  {
    slug: "gender-equality-bi",
    title: "Gender Equality BI (WGEA)",
    tagline: "Industry equality insights for 3 personas",
    description:
      "Business Intelligence project analysing pay gaps, retention, and equality policies across industries with Tableau dashboards.",
    tech: ["Tableau", "Excel", "WGEA Data"],
    xp: 60,
    role: "BI Analyst",
    highlights: [
      "Created stakeholder personas to drive analytical questions.",
      "Visualized pay equity vs policy implementation across years.",
      "Delivered actionable recommendations for employers and media.",
    ],
  },
  {
    slug: "aws-cloud-iac",
    title: "AWS Cloud Infrastructure Design (IaC)",
    tagline: "Secure multi-AZ deployment using CloudFormation",
    description:
      "Designed and deployed a scalable AWS architecture for web + API services using YAML CloudFormation.",
    tech: ["AWS", "EC2", "RDS", "IAM", "CloudFormation", "MySQL"],
    xp: 55,
    role: "Cloud Engineer",
    highlights: [
      "Provisioned VPC, subnets, security groups, EC2, RDS via IaC.",
      "Implemented scaling policies and bastion host security.",
      "Presented reliability/cost/scalability like a client demo.",
    ],
  },
  {
    slug: "cartoonopia",
    title: "Cartoonopia Web App",
    tagline: "MERN + Vue character platform",
    description:
      "A full-stack cartoon character web app featuring authentication, admin workflows, and interactive character pages.",
    tech: ["MongoDB", "Express", "React", "Node", "Vue", "Tailwind"],
    xp: 50,
    role: "Full-Stack Developer",
    highlights: [
      "Built SPA with role-based access and CRUD flows.",
      "Implemented REST APIs and responsive UI.",
      "Collaborated in a team and demoed final product.",
    ],
  },
  {
    slug: "learnirula",
    title: "LearnIrula Mobile Dictionary",
    tagline: "Language preservation app",
    description:
      "Cross-platform dictionary app to preserve the endangered Irula language with audio + visual learning support.",
    tech: ["React Native", "Firebase", "Mobile UX"],
    xp: 45,
    role: "Mobile Developer",
    highlights: [
      "Published on Android and iOS stores.",
      "Integrated media-rich vocabulary learning.",
      "Supported real community language revitalization.",
    ],
  },
  {
    slug: "offotp",
    title: "OffOTP (Smart India Hackathon)",
    tagline: "Offline OTP generator for no-signal zones",
    description:
      "Mobile app generating secure OTPs without cellular coverage, plus REST API integration for government sites.",
    tech: ["Mobile", "Crypto", "REST API"],
    xp: 40,
    role: "Mobile / Backend Dev",
    highlights: [
      "Implemented cryptographic offline OTP generation.",
      "Built REST API for external integration.",
    ],
  },
  {
    slug: "mayo-clinic-suite",
    title: "Mayo Clinic Quarantine Suite",
    tagline: "Remote health monitoring + e-prescriptions",
    description:
      "Healthcare solution with e-prescriptions, OpenCV pulse monitor, and video calling for home quarantine.",
    tech: ["Python", "OpenCV", "Firebase", "Web/Mobile"],
    xp: 40,
    role: "Full-Stack Developer",
    highlights: [
      "Built AI pulse-rate monitor using OpenCV.",
      "Integrated Firebase for prescriptions and patient data.",
    ],
  },
]

export default projects
