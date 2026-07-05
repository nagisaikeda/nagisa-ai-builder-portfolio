import type { CaseStudy } from "@/lib/case-studies/types";

export const probeiqCaseStudy: CaseStudy = {
  slug: "probeiq",
  title: "ProbeIQ",
  eyebrow: "Voice AI · Built at YC × Moss Conversational AI Hackathon",
  tagline: "Transforming Educational Videos into Interactive AI Tutors",
  description:
    "ProbeIQ is a multimodal AI learning system that converts educational videos into conversational tutors. Instead of passively watching lectures, learners can ask questions naturally and receive grounded answers, explanations, and guidance based on the original source material.",
  demoUrl: "https://www.youtube.com/watch?v=a4XDWGnEkhg",
  githubUrl: null,
  demoLabel: "Watch Demo",
  backLabel: "Back to AI Work",
  backHref: "/#ai-products",
  showGithub: false,
  heroImage: "/images/projects/probeiq/hero.png",
  heroImageAspect: "1024/770",
  snapshot: [
    {
      label: "Role",
      value: "AI Product Design · AI Engineering · Conversation Design",
    },
    { label: "Timeline", value: "2 days" },
    {
      label: "Built At",
      value: "YC × Moss Conversational AI Hackathon",
    },
    {
      label: "Focus",
      value:
        "Multimodal AI · Conversational UX · Retrieval · Voice Interfaces",
    },
    {
      label: "Outcome",
      value:
        "Working conversational prototype · Video understanding · Grounded responses · Real-time voice interaction",
    },
  ],
  opportunity: {
    heading: "Overview",
    body: "Educational videos contain enormous amounts of expert knowledge, but interacting with them is difficult.\n\nLearners often rewind videos, search transcripts, or leave the lesson entirely when they become confused.\n\nProbeIQ explores a different interaction model: transforming passive educational media into an AI tutor that understands the source material and answers questions naturally in real time.",
  },
  extraSections: [
    {
      heading: "The problem",
      body: "Students frequently struggle to:\n\n• Find the exact explanation they need\n• Navigate long instructional videos\n• Connect concepts across lessons\n• Receive clarification while learning\n• Stay engaged without leaving the lesson\n\nThe problem isn't a lack of educational content.\n\nThe problem is that existing content is difficult to search, navigate, and interact with.",
    },
  ],
  thesis: {
    heading: "From video to conversation",
    body: "",
  },
  solutionFlow: {
    layers: [
      "Educational Video",
      "Transcription",
      "Knowledge Structuring",
      "Semantic Retrieval",
      "AI Tutor",
      "Grounded Answer + Timestamp",
    ],
    body: "Rather than generating generic AI responses, ProbeIQ grounds every answer in the original instructional content. Learners receive contextual explanations tied directly to the lesson being watched.",
  },
  contributions: {
    heading: "My contributions",
    intro:
      "I designed both the product experience and the AI workflow behind ProbeIQ. I also designed how learners transition naturally between watching content, asking questions, retrieving context, and resuming playback.",
    items: [
      "Product strategy",
      "AI interaction design",
      "Conversation design",
      "Retrieval workflow design",
      "Information architecture",
      "AI UX",
      "Frontend implementation",
      "Demo experience",
    ],
  },
  designDecisions: {
    heading: "Product decisions",
    cards: [
      {
        title: "Grounded AI",
        description:
          "Instead of hallucinating, every response references the original lesson.",
      },
      {
        title: "Conversation over Search",
        description:
          "Learners ask natural questions rather than searching transcripts manually.",
      },
      {
        title: "Context Preservation",
        description:
          "The tutor maintains awareness of where the learner is within the lesson.",
      },
      {
        title: "Invisible AI",
        description:
          "The technology supports the learning experience without overwhelming the interface.",
      },
    ],
  },
  demo: {
    heading: "Demo",
    body: "",
    videoId: "a4XDWGnEkhg",
    caption:
      "Prototype demonstrated during the YC × Moss Conversational AI Hackathon.",
    closing:
      "The prototype demonstrates an educational video becoming an interactive AI tutor capable of answering questions while preserving context from the lesson.",
  },
  screenshots: {
    heading: "At the hackathon",
    items: [
      {
        src: "/images/projects/probeiq/presentation.png",
        alt: "ProbeIQ demo presentation",
        caption:
          "Presenting the ProbeIQ prototype during the YC × Moss Conversational AI Hackathon.",
      },
      {
        src: "/images/projects/probeiq/hackathon.png",
        alt: "YC Conversational AI Hackathon signage",
        caption:
          "Built over two days at the YC × Moss Conversational AI Hackathon.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        step: "1",
        description:
          "Educational video is transcribed into structured learning data.",
      },
      {
        step: "2",
        description:
          "Knowledge is segmented into searchable concepts and timestamps.",
      },
      {
        step: "3",
        description:
          "Semantic retrieval finds relevant instructional context.",
      },
      {
        step: "4",
        description:
          "The conversational AI generates grounded answers while allowing learners to continue watching without interruption.",
      },
    ],
  },
  architecture: {
    heading: "System architecture",
    layers: [
      "Video",
      "Transcription",
      "Knowledge Structuring",
      "Retrieval",
      "AI Tutor",
      "Grounded Answer + Timestamp",
    ],
  },
  aiStack: {
    heading: "Technology",
    tags: [
      "Voice AI",
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "Multimodal AI",
      "Real-time Voice Interaction",
      "Conversation Memory",
      "Moss",
      "MiniMax",
      "Deepgram",
      "LiveKit",
      "Qwen",
    ],
  },
  challenges: {
    heading: "Challenges",
    items: [
      "Designing an interface that keeps learners focused on the lesson",
      "Grounding AI responses in source material instead of generating generic answers",
      "Creating a conversational workflow without interrupting video playback",
      "Balancing retrieval accuracy with real-time responsiveness",
      "Building an end-to-end prototype within a two-day hackathon",
    ],
  },
  lessons: {
    heading: "Lessons learned",
    body: "The biggest challenge wasn't building another chatbot. It was designing an AI interaction that felt like learning instead of searching.",
    itemsHeading: "Key takeaways",
    items: [
      "Retrieval quality determines user trust.",
      "Conversation must preserve learning context.",
      "AI works best when grounded in source material.",
      "The best educational AI feels like an expert sitting beside the learner.",
    ],
  },
  impact: {
    heading: "Why this project matters",
    body: "Educational AI should augment expert knowledge rather than replace it.\n\nProbeIQ demonstrates how multimodal AI, retrieval, and conversational interfaces can transform static educational content into interactive learning experiences.\n\nAlthough this prototype focused on educational videos, the same architecture could support enterprise documentation, onboarding, technical training, healthcare education, and professional certification.",
  },
  relatedHeading: "Related projects",
  relatedProjects: [
    {
      title: "ReadyLead",
      description: "AI growth intelligence for commercial HVAC",
      href: "/projects/readylead",
    },
    {
      title: "Local PM OS",
      description: "Local-first product operating system",
      href: "/projects/local-pm-os",
    },
    {
      title: "Ahead Agent",
      description: "Memory-driven financial decision agent (coming soon)",
      href: "/#ai-products",
    },
    {
      title: "FedEx AI Concierge",
      description: "Multi-agent enterprise onboarding",
      href: "/#ai-products",
    },
  ],
};
