import { TimelineEvent, Project, Skill, Achievement, Experience, MemoryItem } from "./types";

export interface PortfolioData {
  personal: {
    name: string;
    tagline: string;
    subTaglines: string[];
    email: string;
    secondaryEmail?: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    instagram: string;
    intro: string;
    story: string;
    visionStatement: string;
    future1Year: string;
    future3Year: string;
    future5Year: string;
  };
  education: {
    institution: string;
    degree: string;
    department: string;
    period: string;
    gpa: string;
    highlights: string[];
    interests: string[];
  };
  timeline: TimelineEvent[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  experiences: Experience[];
  gallery: MemoryItem[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Dheepesh K",
    tagline: "Mechatronics Engineering Student",
    subTaglines: ["Aspiring Entrepreneur", "Exploring Product Development, Robotics & Engineering"],
    email: "dheepeshkuppusamy@gmail.com",
    secondaryEmail: "dheepeshk.25mts@kongu.edu",
    phone: "+91 9940900999",
    address: "",
    linkedin: "https://linkedin.com/in/dheepeshk",
    github: "https://github.com/DheepeshK",
    instagram: "https://instagram.com/dheeps._",
    intro: "A second-year Mechatronics Engineering student learning entrepreneurship, product development, and engineering systems. I enjoy understanding how different disciplines come together to build meaningful solutions.",
    story: "I am a second-year B.E. Mechatronics Engineering student at Kongu Engineering College with a growing interest in entrepreneurship, product development, and engineering systems.\n\nRather than identifying with a single technology or discipline, I enjoy understanding how different fields \u2014 from mechanical design to embedded systems to business strategy \u2014 work together to solve meaningful problems. My approach to learning is product-oriented: engineering is not just about technology; it is a tool for building solutions that create real impact.\n\nBeyond academics, I actively take on leadership responsibilities in student organizations and technical events. As Secretary of the Science & Humanities Association and an Executive Member of both the Technical Team and the Institution's Innovation Council, I contribute through planning, coordination, communication, and execution. I enjoy converting ideas into structured plans and turning discussions into completed work.\n\nI believe that engineering is ultimately about creating useful solutions, building capable teams around shared goals, and continuously growing \u2014 both as a student and as a future entrepreneur. Every project, leadership role, and learning opportunity brings me closer to understanding how to build products, lead teams, and create lasting value.\n\nLanguages: Tamil (Native), English (Fluent).",
    visionStatement: "I aspire to combine engineering, entrepreneurship, and practical problem-solving to build products and organizations that create meaningful impact. Every project, leadership opportunity, and learning experience is a step toward becoming someone capable of transforming ideas into useful solutions.",
    future1Year: "Build a stronger foundation in product development and engineering systems through hands-on projects. Take on more leadership responsibilities and contribute to early-stage startup initiatives.",
    future3Year: "Lead interdisciplinary teams working on real-world engineering challenges. Develop a clear understanding of how to take a product from concept to deployment while building entrepreneurial skills.",
    future5Year: "Establish myself as someone who can bridge engineering and business \u2014 building products, leading teams, and contributing to solutions that make a measurable difference in how people interact with technology."
  },
  education: {
    institution: "Kongu Engineering College (Autonomous)",
    degree: "Bachelor of Engineering (B.E.)",
    department: "Mechatronics Engineering",
    period: "Expected Graduation: 2029",
    gpa: "8.96/10.00",
    highlights: [
      "Affiliated to Anna University.",
      "Second-year undergraduate student.",
      "Expected graduation in 2029."
    ],
    interests: ["Entrepreneurship", "Product Development", "Robotics", "Research & Development", "Engineering Systems"]
  },
  timeline: [
    {
      id: "t1",
      year: "2025",
      period: "Jul 2025 - Present",
      title: "Began B.E. Mechatronics Engineering",
      subtitle: "Kongu Engineering College",
      description: "Started undergraduate studies with a focus on mechatronics, engineering systems, and product development. Joined multiple technical clubs and student organizations.",
      category: "education",
      tags: ["Mechatronics", "Engineering", "Robotics"]
    },
    {
      id: "t2",
      year: "2026",
      period: "Sep 2025 - May 2026",
      title: "Appointed Secretary of Science & Humanities Association",
      subtitle: "Cluster 3, Kongu Engineering College",
      description: "Elected as Secretary, responsible for planning and coordinating six department-level academic and technical events. Led cross-team communication, managed volunteer teams, and ensured every event was executed on schedule.",
      category: "tech",
      tags: ["Leadership", "Event Management", "Team Coordination"]
    },
    {
      id: "t3",
      year: "2026",
      period: "Mar 2026",
      title: "Joined Institution's Innovation Council (IIC)",
      subtitle: "Media Team, KEC",
      description: "Joined the IIC Media Team as an Executive Member, taking ownership of documentation, promotion, and outreach for innovation-driven events and programs.",
      category: "creative",
      tags: ["Media", "Innovation", "Outreach"]
    },
    {
      id: "t4",
      year: "2026",
      period: "Jun 2026 - Present",
      title: "Joined Twincord & Banraw (Start-ups)",
      subtitle: "Entrepreneurship & Innovation",
      description: "Started learning and contributing to early-stage start-ups focused on technology-driven solutions, gaining hands-on experience in entrepreneurship and product development at Twincoord Technologies pvt Ltd and Banraw Industries pvt Ltd.",
      category: "milestone",
      tags: ["Entrepreneurship", "Start-Up", "Innovation", "Banraw", "Twincord"]
    },
    {
      id: "t5",
      year: "2026",
      period: "Jun 2026",
      title: "Future Vision: Entrepreneurship",
      subtitle: "Aspirational Goal",
      description: "Building entrepreneurial skills and knowledge to drive innovation and create value in the field of technology and engineering.",
      category: "future",
      tags: ["Entrepreneur", "Start-Up"]
    }
  ],
  projects: [
    {
      id: "p2",
      title: "Portfolio Website — Dheepesh K",
      description: "A premium personal brand portfolio built with React, TypeScript, and Tailwind CSS featuring glassmorphic UI and motion animations.",
      problem: "Needed a modern, data-driven portfolio that reflects both engineering skills and design sensibility.",
      impact: "Achieved a 90+ Lighthouse performance score with zero runtime errors; serves as a living resume with real-time content editing capability.",
      tags: ["React", "TypeScript", "Tailwind", "Vite"],
      github: "https://github.com/DheepeshK/dheepeshk-web",
      link: "https://dheepeshk.dev",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      featured: true
    }
  ],
  skills: [
    { name: "C", category: "programming" },
    { name: "C++", category: "programming" },
    { name: "Python", category: "programming" },
    { name: "MATLAB", category: "programming" },
    { name: "HTML", category: "programming" },
    { name: "CSS", category: "programming" },
    { name: "SolidWorks", category: "engineering" },
    { name: "Embedded Systems", category: "engineering" },
    { name: "Simulink", category: "engineering" },
    { name: "Canva", category: "design" },
    { name: "Adobe Photoshop", category: "design" },
    { name: "DaVinci Resolve", category: "design" },
    { name: "OBS Studio", category: "design" },
    { name: "Visual Studio Code (VS Code)", category: "devtools" },
    { name: "GitHub", category: "devtools" },
    { name: "Microsoft Word", category: "productivity" },
    { name: "Microsoft Excel", category: "productivity" },
    { name: "Microsoft PowerPoint", category: "productivity" },
    { name: "Google Sheets", category: "productivity" },
    { name: "Event Management", category: "leadership" },
    { name: "Team Coordination", category: "leadership" },
    { name: "Public Speaking", category: "leadership" },
    { name: "Planning & Execution", category: "leadership" }
  ],
  achievements: [
    {
      id: "a1",
      title: "First Place - MATLAB Cody Contest",
      issuer: "Department of Mathematics, Kongu Engineering College",
      date: "Sep 2025",
      category: "competition",
      description: "Secured first place among 30+ participants in a competitive MATLAB problem-solving contest covering linear algebra, signal processing, and numerical methods."
    },
    {
      id: "a2",
      title: "Second Place - C Programming Contest",
      issuer: "KEC Coding Forum, Kongu Engineering College",
      date: "Jan 2026",
      category: "competition",
      description: "Achieved second place in an intra-college C programming competition testing algorithmic thinking, memory management, and debugging skills."
    },
    {
      id: "a3",
      title: "MATLAB Onramp",
      issuer: "MATHWORKS",
      date: "Apr 2026",
      category: "certificate",
      description: "Official MATHWORKS certification covering MATLAB fundamentals including arrays, plotting, scripting, and matrix operations."
    },
    {
      id: "a4",
      title: "Simulink Onramp",
      issuer: "MATHWORKS",
      date: "Apr 2026",
      category: "certificate",
      description: "MATHWORKS certification covering Simulink basics including model-based design, subsystem creation, and simulation workflows."
    },
    {
      id: "a5",
      title: "SolidWorks Training & Certification",
      issuer: "Department of Mechatronics Engineering, Kongu Engineering College (Non-Formal)",
      date: "May 2026",
      category: "certificate",
      description: "Completed formal SolidWorks training program including 3D part modeling, assembly design, engineering drawings, and basic simulation."
    }
  ],
  experiences: [
    {
      id: "e1",
      role: "Secretary",
      organization: "Science & Humanities Association (Cluster 3)",
      period: "Feb 2026 - Present",
      type: "club",
      points: [
        "Led planning, coordination, and execution of six department-level academic and technical events including symposiums and workshops with 200+ participants.",
        "Managed cross-team communication between faculty advisors, student volunteers, and club members to ensure every event ran on schedule.",
        "Took ownership of end-to-end event operations \u2014 from scheduling and resource allocation to on-ground execution and post-event reporting."
      ],
      skillsLearned: ["Leadership", "Event Management", "Communication", "Team Coordination", "Planning & Execution"]
    },
    {
      id: "e2",
      role: "Executive Member",
      organization: "Technical Team, Self Development Club",
      period: "Jan 2026 - Present",
      type: "club",
      points: [
        "Collaborated with the Technical Team to organize workshops on programming and embedded systems for club members.",
        "Took responsibility for setting up and maintaining technical equipment for club events and hackathons.",
        "Coordinated with team members to ensure smooth facilitation of hands-on sessions and troubleshooting during events."
      ],
      skillsLearned: ["Technical Support", "Workshop Facilitation", "Teamwork", "Coordination"]
    },
    {
      id: "e3",
      role: "Executive Member",
      organization: "Media Team, Institution's Innovation Council (IIC)",
      period: "Mar 2026 - Present",
      type: "club",
      points: [
        "Owned content creation and social media coverage for innovation-driven events including hackathons, guest lectures, and startup showcases.",
        "Documented key programs for institutional archives, ensuring accurate and timely reporting.",
        "Collaborated with the IIC team to plan outreach strategies and improve event visibility across campus."
      ],
      skillsLearned: ["Content Creation", "Social Media", "Documentation", "Outreach Planning", "Ownership"]
    },
    {
      id: "e4",
      role: "Volunteer",
      organization: "IDE Bootcamp",
      period: "Apr 2026",
      type: "volunteer",
      points: [
        "Supported event logistics and participant coordination during an intensive innovation bootcamp.",
        "Assisted mentors and facilitators in conducting design-thinking and prototyping sessions, ensuring smooth session transitions.",
        "Communicated with cross-functional teams to resolve on-ground challenges in real time."
      ],
      skillsLearned: ["Logistics", "Design Thinking", "Prototyping", "On-ground Execution"]
    },
    {
      id: "e5",
      role: "Volunteer",
      organization: "Entrepreneurship Development and Innovation Institute (EDII-TN) Programs",
      period: "May 2026",
      type: "volunteer",
      points: [
        "Helped organize entrepreneurship awareness programs and workshops for aspiring student innovators.",
        "Coordinated directly with EDII-TN officials to plan and execute scheduled sessions on time.",
        "Took initiative in managing participant engagement and feedback collection during programs."
      ],
      skillsLearned: ["Entrepreneurship", "Event Coordination", "Public Relations", "Ownership"]
    }
  ],
  gallery: [
    {
      id: "g1",
      url: "/gallery/Scientium.JPG",
      caption: "Scientium — Department technical symposium coordinated by the Science & Humanities Association.",
      category: "leadership",
      date: "Mar 2026"
    },
    {
      id: "g2",
      url: "/gallery/Dheepesh.JPG",
      caption: "Dheepesh K — Personal portrait, Mechatronics Engineering student at Kongu Engineering College.",
      category: "Personal",
      date: "2025"
    }
  ]
};
