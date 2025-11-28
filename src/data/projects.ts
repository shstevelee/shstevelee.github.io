export type ProjectType = "HARDWARE" | "SOFTWARE" | "R&D" | "CONFIDENTIAL";

export interface Project {
  id: string;
  title: string;
  category: string;
  types: ProjectType[];
  description: string;
  stack: string[];
  linkText: string;
  href: string;
  meta?: string;
}

export const allProjects: Project[] = [
  {
    id: "01",
    title: "3D PONG IN SYSTEMVERILOG",
    category: "ACADEMIC // RESTRICTED",
    types: ["HARDWARE", "CONFIDENTIAL"],
    description:
      "3-Dimensional version of the classic Pong game with real-time VGA/HDMI video directly from the FPGA.",
    stack: ["SystemVerilog", "Graphics", "AMD Spartan 7", "Xilinx Vivado"],
    linkText: "DETAILS RESTRICTED",
    href: "#",
  },
  {
    id: "04",
    title: "CHARACTERIZING THIN-FILM LN BARS",
    category: "UNDERGRAD RESEARCH",
    types: ["R&D", "HARDWARE"],
    description:
      "Automated Probe Station RF testing protocol for Lithium Niobate Bulk Acoustic wave resonators as part of the FENA project.",
    stack: ["C", "GPIB", "Python", "PyVISA", "MATLAB"],
    linkText: "GITHUB REPO",
    meta: "CMU MNS Lab, SUMMER 2025",
    href: "https://github.com/shstevelee/SURA_control",
  },
  {
    id: "02",
    title: "CACHE SIMULATOR & OPTIMIZED MATRIX TRANSPOSE",
    category: "ACADEMIC // RESTRICTED",
    types: ["SOFTWARE", "CONFIDENTIAL"],
    description:
      "Cache simulator in C to model various cache configurations. Cache-optimized matrix transpose for the Haswell L1 cache.",
    stack: ["C", "Haswell L1", "Hits/Misses/Evictions"],
    linkText: "DETAILS RESTRICTED",
    href: "#",
  },
  {
    id: "03",
    title: "MALLOC IN C",
    category: "ACADEMIC // RESTRICTED",
    types: ["SOFTWARE", "CONFIDENTIAL"],
    description:
      "Implemented malloc & free in C using seperate chaining and footerless blocks.",
    stack: ["C", "Explicit/Implicit Lists", "Utilization & Throughput"],
    linkText: "DETAILS RESTRICTED",
    href: "#",
  },
  {
    id: "05",
    title: "MSDS_LM",
    category: "LLMs & TTS",
    types: ["SOFTWARE"],
    description:
      "Material safety datasheets summarizer with Python Streamlit utilizing LLMs and Text-to-Speech (TTS) for emergency lab safety.",
    stack: ["Python Streamlit", "APIs"],
    linkText: "GITHUB REPO",
    meta: "7H HACK",
    href: "https://github.com/88Mangos/NOVA24",
  },
  {
    id: "06",
    title: "MYWRITER",
    category: "RECOMMENDERS // WEB DEVELOPMENT",
    types: ["SOFTWARE"],
    description:
      "Created a web application that connects readers with writers and enables writers to craft personalized stories.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    linkText: "GITHUB REPO",
    meta: "24H HACK",
    href: "https://github.com/C4fune/Sturgeon-Pro-Shops-Tartan-Hacks",
  },
];
