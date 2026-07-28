export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    github: string;
    linkedin: string;
    profileImage: string;
    bio: string;
    location: string;
    status: string;
    stats: { label: string; value: string }[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location?: string;
    description: string;
    highlights: string[];
    technologies: string[];
    category: 'leadership' | 'ai-cloud' | 'fullstack';
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    location?: string;
}

export interface SkillItem {
    name: string;
    level: number;
}

export interface SkillCategory {
    category: string;
    skills: SkillItem[];
}

export interface Project {
    title: string;
    description: string;
    highlights: string[];
    technologies: string[];
    link?: string;
}

export const cvData: {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skillCategories: SkillCategory[];
    skills: SkillItem[];
    projects: Project[];
} = {
    personalInfo: {
        name: "Roberto Martínez Querol",
        title: "Director of Engineering | Senior Software Architect",
        email: "roberto.martinez.q@gmail.com",
        github: "https://github.com/eiguss",
        linkedin: "https://www.linkedin.com/in/robmartinezq",
        profileImage: "/profile.jpg",
        location: "Barcelona, Spain",
        status: "Available for Executive Leadership & Advisory",
        bio: "Visionary technology leader with 14+ years of experience in software development and systems architecture (including 12 years at Inbenta). Specialized in steering AI software innovation, end-to-end full-stack development, complex system design, and high-performing engineering teams.",
        stats: [
            { label: "Total Experience", value: "14+ Yrs" },
            { label: "Software Architecture", value: "Senior Lead" },
            { label: "Software Development", value: "Full-Stack / AI" },
            { label: "Leadership at Inbenta", value: "Director Level" },
        ],
    },
    experience: [
        {
            company: "Inbenta",
            role: "Director of Engineering",
            period: "Sep 2023 - Present",
            location: "Barcelona, Catalonia, Spain (Hybrid)",
            description: "Lead the Product division's engineering organization, setting strategy, org design, and execution for an AI-powered SaaS platform.",
            highlights: [
                "Translate product vision into actionable roadmaps; align squads and stakeholders to ship reliable, customer-impacting features on time.",
                "Drive architecture and platform evolution on AWS and TypeScript to improve scalability, reliability, and developer experience.",
                "Establish delivery practices to raise quality and predictability.",
                "Hire, mentor, and grow managers and engineers; foster a culture of ownership, learning, and psychological safety.",
                "Partner cross-functionally (Security, Data, Design, GTM) on compliance, cost optimization, and launch readiness.",
            ],
            technologies: ["TypeScript", "AWS", "Nuxt.js", "AI Platforms", "Software Architecture", "Engineering Leadership"],
            category: "leadership",
        },
        {
            company: "Inbenta",
            role: "Head of Product",
            period: "Sep 2022 - Aug 2023",
            location: "Barcelona, Catalonia, Spain (Remote)",
            description: "Owned product vision, strategy, and roadmap for an AI-powered customer experience platform.",
            highlights: [
                "Led discovery with customers and stakeholders; defined problem statements, success metrics, and prioritized outcomes.",
                "Shaped requirements into clear specs and user stories; aligned engineering, design, and GTM on release plans.",
                "Launched iterative improvements that drove adoption, satisfaction, and retention while balancing technical constraints.",
                "Established product rituals (quarterly planning, OKRs, release reviews) and a data-informed decision-making practice.",
            ],
            technologies: ["Product Strategy", "Nuxt.js", "OKRs", "Roadmapping", "Team Management"],
            category: "leadership",
        },
        {
            company: "Inbenta",
            role: "Senior Software Engineer Team Lead",
            period: "Aug 2017 - Sep 2023",
            location: "Barcelona, Spain",
            description: "Led a full-stack chapter delivering core product capabilities end-to-end across services and UI.",
            highlights: [
                "Owned technical design, code quality, and reviews; introduced standards, patterns, and documentation.",
                "Built CI/CD pipelines with automated testing and monitoring, reducing cycle time and defects.",
                "Partnered with Product and Design to refine requirements, plan sprints, and meet release commitments.",
                "Mentored engineers through pairing, design sessions, and growth plans; fostered a learning culture.",
            ],
            technologies: ["Full-stack", "TypeScript", "Nuxt.js", "Vue.js", "Node.js", "CI/CD"],
            category: "fullstack",
        },
        {
            company: "Inbenta",
            role: "Product Manager Products",
            period: "Aug 2017 - Aug 2022",
            location: "Barcelona, Spain",
            description: "Defined and developed new features and improvements for Inbenta products with a full stack team.",
            highlights: [
                "Collaborated closely with cross-functional full-stack engineering squads to deliver core product enhancements.",
                "Managed feature prioritization and agile delivery for enterprise product releases.",
            ],
            technologies: ["Product Management", "Full Stack", "Nuxt.js", "Agile Leadership"],
            category: "leadership",
        },
        {
            company: "Inbenta",
            role: "Project Manager (Full Stack) — US Exchange Program",
            period: "Feb 2017 - Apr 2017",
            location: "Foster City, San Francisco Bay Area (USA)",
            description: "Exchange program in Inbenta. Working in Foster City with the EEUU team.",
            highlights: [
                "Engineered & managed client integrations in Foster City, Silicon Valley.",
                "Bridged technical communication between US stakeholders and headquarters.",
            ],
            technologies: ["Silicon Valley Exchange", "Full Stack", "Nuxt.js", "Client Management"],
            category: "leadership",
        },
        {
            company: "Inbenta",
            role: "Project Manager (Full Stack)",
            period: "Jan 2016 - Aug 2017",
            location: "Barcelona, Spain",
            description: "In charge of a team of full stack developers to manage projects for Spanish clients.",
            highlights: [
                "Managed client communication as well as developing customer projects with a technical team.",
                "Delivered custom web and API solutions for enterprise client accounts.",
            ],
            technologies: ["Project Management", "Full Stack", "Nuxt.js", "Client Engineering"],
            category: "leadership",
        },
        {
            company: "Inbenta",
            role: "Web Developer",
            period: "Jul 2014 - Jan 2016",
            location: "Barcelona, Spain",
            description: "Built virtual assistants, avatars, chat, content indexing, APIs, and ticketing across web and mobile.",
            highlights: [
                "Delivered features with HTML5, JavaScript, PHP, and SQL; improved performance and usability.",
                "Collaborated with designers and PMs to implement UX and ship high-quality releases.",
            ],
            technologies: ["JavaScript", "HTML5", "PHP", "SQL", "APIs"],
            category: "fullstack",
        },
        {
            company: "Alteraciones",
            role: "Web Developer",
            period: "Dec 2013 - Jul 2014",
            location: "Barcelona, Spain",
            description: "Web development for custom client applications, content portals, and web services.",
            highlights: [
                "Built custom CMS features and database integrations with high uptime and quick page loads.",
            ],
            technologies: ["PHP", "JavaScript", "HTML", "SQL"],
            category: "fullstack",
        },
        {
            company: "Polytechnic University of Catalonia",
            role: "Project Developer",
            period: "Apr 2011 - Feb 2013",
            location: "Barcelona, Spain",
            description: "Designed and programmed interactive educational videogames commissioned by the Generalitat de Catalunya.",
            highlights: [
                "Engineered game mechanics, graphic assets, and interactive simulation logic.",
            ],
            technologies: ["Flash", "ActionScript", "Game Design", "Software Engineering"],
            category: "fullstack",
        },
    ],
    education: [
        {
            institution: "Universitat Politècnica de Catalunya (UPC)",
            degree: "Degree in Informatics Engineering",
            period: "2007 - 2013",
            location: "Barcelona, Spain",
        },
        {
            institution: "University of Aberdeen",
            degree: "Computing Science (Erasmus / Exchange)",
            period: "2013 - 2013",
            location: "Aberdeen, Scotland",
        },
    ],
    skillCategories: [
        {
            category: "Software Architecture & System Design",
            skills: [
                { name: "Software Architecture & Patterns", level: 95 },
                { name: "AWS Cloud & Enterprise SaaS Architecture", level: 90 },
                { name: "Full-Stack Application Design", level: 92 },
                { name: "Microservices & API Architecture", level: 88 },
            ],
        },
        {
            category: "Database & Data Management",
            skills: [
                { name: "SQL & PostgreSQL Databases", level: 92 },
                { name: "OpenSearch / Elasticsearch Search Engines", level: 88 },
                { name: "Memcached & High-Performance Caching", level: 85 },
            ],
        },
        {
            category: "Frontend, Mobile & Frameworks",
            skills: [
                { name: "TypeScript / JavaScript (ES6+)", level: 95 },
                { name: "Nuxt.js, Vue.js, React, Vuetify & MUI", level: 90 },
                { name: "Flutter & Cross-Platform Mobile", level: 85 },
                { name: "Node.js & Backend Services", level: 90 },
            ],
        },
        {
            category: "Engineering & Leadership",
            skills: [
                { name: "Engineering Team Leadership", level: 98 },
                { name: "Product Strategy & OKRs", level: 92 },
                { name: "AI Software Engineering", level: 85 },
                { name: "Agile Software Development", level: 88 },
            ],
        },
    ],
    skills: [
        { name: "Team Leadership", level: 98 },
        { name: "Software Architecture", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "Full-stack Development", level: 92 },
        { name: "SQL & PostgreSQL", level: 92 },
        { name: "Nuxt.js, Vuetify & MUI", level: 90 },
        { name: "OpenSearch & Memcached", level: 88 },
        { name: "Flutter", level: 85 },
    ],
    projects: [],
};
