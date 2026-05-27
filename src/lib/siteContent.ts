// ─── Verdant Axis — Site Content ─────────────────────────────────────────────
// All marketing copy lives here. No hardcoded strings in JSX.

export const brand = {
  name: "Verdant Axis",
  tagline: "Where Land Meets Strategy",
  location: "Harrow Falls, New Zealand",
  email: "hello@verdantaxis.nz",
  description:
    "Verdant Axis delivers evidence-based environmental consulting for agribusinesses and landowners committed to long-term ecological and economic performance.",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "— Land & Environmental Strategy",
  headlineLine1: "Where Land",
  headlineLine2: "Meets",
  headlineLine3: "Strategy",
  subheadline:
    "Verdant Axis delivers evidence-based environmental consulting for agribusinesses and landowners committed to long-term ecological and economic performance.",
  cta: "Contact Us",
  credentials: [
    "Certified Agronomist",
    "ISO 14001 Accredited",
    "18 Years Field Experience",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&w=1600",
  imageAlt: "Aerial view of patchwork farmland at golden hour",
};

export const services = {
  sectionLabel: "Services",
  eyebrow: "— What We Do",
  headline: "Land expertise, applied precisely.",
  items: [
    {
      number: "01",
      title: "Soil Health & Remediation",
      description:
        "We conduct rigorous soil profiling and targeted remediation planning to restore fertility, structure, and long-term productive capacity. From compaction correction to biological inoculation programmes, every recommendation is evidenced by on-site analysis.",
    },
    {
      number: "02",
      title: "Regenerative Land Transition Planning",
      description:
        "Transitioning to regenerative practices requires sequenced planning, not ideology. We design phased transition roadmaps that protect yield during change, align with your market commitments, and build measurable ecological capital over time.",
    },
    {
      number: "03",
      title: "Carbon Credit Structuring & Verification",
      description:
        "We navigate the New Zealand Emissions Trading Scheme and voluntary carbon markets on your behalf — identifying eligible land parcels, structuring sequestration projects, and managing verification to maximise credit revenue.",
    },
    {
      number: "04",
      title: "Environmental Compliance Advisory",
      description:
        "Regulatory requirements in freshwater, land use, and resource consent are growing in complexity. Our compliance team ensures you meet RMA obligations, NPS-FM requirements, and council plan rules without operational disruption.",
    },
    {
      number: "05",
      title: "Water & Catchment Management",
      description:
        "From irrigation efficiency audits to riparian planting programmes and nutrient loss mitigation, we deliver integrated water strategies that protect both your resource consents and the ecological health of your catchment.",
    },
    {
      number: "06",
      title: "Biodiversity & Habitat Assessment",
      description:
        "We conduct full ecological surveys, identify threatened species obligations, and develop biodiversity management plans that satisfy regulatory requirements while building genuine habitat value across your land.",
    },
  ],
};

export const about = {
  eyebrow: "— About the Practice",
  headline: "Rooted in the land. Built on science.",
  paragraphs: [
    "Verdant Axis was founded on a simple conviction: that the best land outcomes arise when ecological intelligence and commercial discipline are applied together. We are not generalist consultants who arrived at agriculture — we are agronomists, ecologists, and land economists who have spent careers in the field.",
    "Operating from Harrow Falls in Aotearoa New Zealand, our practice spans the breadth of the country's farming and land investment sectors. We have worked across hill country sheep and beef, intensive horticulture, large-scale forestry transitions, and corporate agribusiness portfolios reaching into Southeast Asia and Europe.",
    "Every engagement is led by a senior practitioner, never handed to a junior team. Our clients receive a strategist with field experience, not a report produced at a distance.",
  ],
  stats: [
    { value: "18+", label: "Years Field Experience" },
    { value: "340+", label: "Client Engagements" },
    { value: "12", label: "Countries Advised" },
  ],
  certifications: [
    "AgriNZ Certified",
    "ISO 14001",
    "NZICA Member",
    "Carbon Neutral Verified",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&w=1200",
  imageAlt: "Lead consultant reviewing land data in the field at dusk",
};

export const process = {
  eyebrow: "— How We Work",
  headline: "A deliberate process. Measurable outcomes.",
  steps: [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "A focused 60-minute session to map your land, goals, and current challenges. We ask the questions that matter before any site visit.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description:
        "On-site visit with soil sampling, ecological observation, and data collection. We read the land directly rather than relying on remote interpretation alone.",
    },
    {
      number: "03",
      title: "Strategic Report",
      description:
        "A bespoke written strategy with prioritised recommendations, compliance roadmap, and financial modelling of outcomes. Delivered within four weeks of site visit.",
    },
    {
      number: "04",
      title: "Ongoing Advisory",
      description:
        "Retainer or project-based support through implementation phases. We remain accountable for the outcomes we recommend.",
    },
  ],
};

export const testimonials = {
  eyebrow: "— Client Testimonials",
  headline: "Results that speak plainly.",
  items: [
    {
      quote:
        "Verdant Axis restructured our entire land use model. The carbon credit work alone returned the consulting fee within 8 months.",
      author: "James Tūhoe",
      role: "Director, Tūhoe Station Holdings",
    },
    {
      quote:
        "Their soil remediation report changed how we think about our 2,000-acre block entirely. The analysis was detailed, honest, and immediately actionable.",
      author: "Priya Nair",
      role: "CFO, Greenfield Agri Group",
    },
    {
      quote:
        "Methodical, honest, and genuinely committed to the land. We've retained them for three consecutive seasons and intend to continue.",
      author: "Tom Mackay",
      role: "Owner, Mackay Family Farms",
    },
  ],
};

export const contact = {
  eyebrow: "— Get Started",
  headline: "Ready to transform your land?",
  body: "Book a no-obligation discovery call. We work with a limited number of clients each quarter to ensure full strategic attention.",
  cta: "Book a Discovery Call",
  emailLabel: "Or email us directly",
  email: "hello@verdantaxis.nz",
  formFields: {
    name: { label: "Full Name", placeholder: "Your full name" },
    email: { label: "Email Address", placeholder: "your@email.com" },
    landSize: {
      label: "Land Size (approx.)",
      placeholder: "e.g. 500 hectares",
    },
    message: {
      label: "Tell us about your land and goals",
      placeholder:
        "Describe your land type, current challenges, and what outcomes matter most to you.",
    },
    submit: "Send Enquiry",
  },
};

export const footer = {
  copyright: "© 2025 Verdant Axis Ltd. Harrow Falls, NZ",
};
