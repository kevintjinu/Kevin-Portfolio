(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Layout({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen px-6 py-10 bg-gradient-to-b from-black via-gray-950 to-purple-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-4xl md:text-6xl font-bold text-purple-300 drop-shadow mb-10",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Layout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuestCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function QuestCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/projects/${project.slug}`,
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                scale: 1.03,
                y: -4
            },
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            },
            className: " group relative h-full min-h-[420px]  /* 👈 keeps cards same height */ rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-purple-950 border border-purple-800/40 shadow-xl hover:border-purple-500/80 hover:shadow-purple-500/20 flex flex-col               /* 👈 enables bottom push */ ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-20 -right-20 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuestCard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-purple-200",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-purple-300/80 font-medium",
                            children: project.tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-300 leading-relaxed line-clamp-4",
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 pt-2",
                            children: project.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-xs rounded-full bg-purple-900/60 text-purple-100 border border-purple-700/40",
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/src/components/QuestCard.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuestCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-auto px-6 py-3 bg-black/60 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-zinc-400",
                            children: project.role ?? 'Quest'
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-mono text-purple-300",
                            children: [
                                "XP ",
                                project.xp
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuestCard.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuestCard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuestCard.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/QuestCard.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = QuestCard;
var _c;
__turbopack_context__.k.register(_c, "QuestCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/projects.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const projects = [
    {
        slug: "coppercore-ai",
        title: "CopperCore AI Dashboard",
        tagline: "AI-assisted mineral exploration platform",
        description: "A Django + HTMX platform that processes large geoscience datasets and visualizes copper prospectivity with interactive Plotly dashboards.",
        tech: [
            "Django",
            "HTMX",
            "Plotly",
            "Python",
            "ML",
            "AWS"
        ],
        xp: 90,
        role: "Full-Stack / Data Engineer",
        highlights: [
            "Built end-to-end ingestion + cleaning pipeline for multi-source exploration data.",
            "Integrated Random Forest scoring and surfaced results in story-based visualizations.",
            "Led stakeholder demos and sprint reviews; secured pilot approval."
        ]
    },
    {
        slug: "nsw-crime-analytics",
        title: "NSW Crime Data Analytics (ETL + BI)",
        tagline: "30-year crime dataset → OLAP + Tableau insights",
        description: "Designed a full ETL pipeline and Tableau dashboards for NSW crime trends, per-capita comparisons, and seasonal patterns.",
        tech: [
            "Python",
            "Pandas",
            "Pentaho",
            "Tableau",
            "Excel"
        ],
        xp: 75,
        role: "Data Engineer / Analyst",
        highlights: [
            "Processed 300K+ monthly records into normalized OLAP-ready schema.",
            "Built dashboards revealing long-term decline despite population growth.",
            "Led a 6-member team and delivered policy-level storytelling insights."
        ]
    },
    {
        slug: "gender-equality-bi",
        title: "Gender Equality BI (WGEA)",
        tagline: "Industry equality insights for 3 personas",
        description: "Business Intelligence project analysing pay gaps, retention, and equality policies across industries with Tableau dashboards.",
        tech: [
            "Tableau",
            "Excel",
            "WGEA Data"
        ],
        xp: 60,
        role: "BI Analyst",
        highlights: [
            "Created stakeholder personas to drive analytical questions.",
            "Visualized pay equity vs policy implementation across years.",
            "Delivered actionable recommendations for employers and media."
        ]
    },
    {
        slug: "aws-cloud-iac",
        title: "AWS Cloud Infrastructure Design (IaC)",
        tagline: "Secure multi-AZ deployment using CloudFormation",
        description: "Designed and deployed a scalable AWS architecture for web + API services using YAML CloudFormation.",
        tech: [
            "AWS",
            "EC2",
            "RDS",
            "IAM",
            "CloudFormation",
            "MySQL"
        ],
        xp: 55,
        role: "Cloud Engineer",
        highlights: [
            "Provisioned VPC, subnets, security groups, EC2, RDS via IaC.",
            "Implemented scaling policies and bastion host security.",
            "Presented reliability/cost/scalability like a client demo."
        ]
    },
    {
        slug: "cartoonopia",
        title: "Cartoonopia Web App",
        tagline: "MERN + Vue character platform",
        description: "A full-stack cartoon character web app featuring authentication, admin workflows, and interactive character pages.",
        tech: [
            "MongoDB",
            "Express",
            "React",
            "Node",
            "Vue",
            "Tailwind"
        ],
        xp: 50,
        role: "Full-Stack Developer",
        highlights: [
            "Built SPA with role-based access and CRUD flows.",
            "Implemented REST APIs and responsive UI.",
            "Collaborated in a team and demoed final product."
        ]
    },
    {
        slug: "learnirula",
        title: "LearnIrula Mobile Dictionary",
        tagline: "Language preservation app",
        description: "Cross-platform dictionary app to preserve the endangered Irula language with audio + visual learning support.",
        tech: [
            "React Native",
            "Firebase",
            "Mobile UX"
        ],
        xp: 45,
        role: "Mobile Developer",
        highlights: [
            "Published on Android and iOS stores.",
            "Integrated media-rich vocabulary learning.",
            "Supported real community language revitalization."
        ]
    },
    {
        slug: "offotp",
        title: "OffOTP (Smart India Hackathon)",
        tagline: "Offline OTP generator for no-signal zones",
        description: "Mobile app generating secure OTPs without cellular coverage, plus REST API integration for government sites.",
        tech: [
            "Mobile",
            "Crypto",
            "REST API"
        ],
        xp: 40,
        role: "Mobile / Backend Dev",
        highlights: [
            "Implemented cryptographic offline OTP generation.",
            "Built REST API for external integration."
        ]
    },
    {
        slug: "mayo-clinic-suite",
        title: "Mayo Clinic Quarantine Suite",
        tagline: "Remote health monitoring + e-prescriptions",
        description: "Healthcare solution with e-prescriptions, OpenCV pulse monitor, and video calling for home quarantine.",
        tech: [
            "Python",
            "OpenCV",
            "Firebase",
            "Web/Mobile"
        ],
        xp: 40,
        role: "Full-Stack Developer",
        highlights: [
            "Built AI pulse-rate monitor using OpenCV.",
            "Integrated Firebase for prescriptions and patient data."
        ]
    }
];
const __TURBOPACK__default__export__ = projects;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuestCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Quest Board – Projects",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    project: p
                }, p.slug, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7dac6771._.js.map