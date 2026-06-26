export const services = [
  {
    id: 1,
    slug: "architectural-documentation",
    eyebrow: "Architecture",
    title: "Architectural Documentation",
    href: "/services/architectural-documentation",
    imageUrl: "/services/architectural.jpg",
    shortDescription:
      "Transforming design intent into coordinated, buildable documentation.",
    intro:
      "Architectural documentation transforms design intent into coordinated, buildable information.",
    details:
      "Architectural documentation transforms design intent into coordinated, buildable information. It includes the development of plans, sections, elevations, schedules and technical details required for permitting, coordination and construction. DETAILICA supports architectural teams by producing and developing documentation packages, integrating consultant information and maintaining consistency across project stages. Our experience spans residential, commercial, hospitality, healthcare and public-sector projects across multiple international markets.",
    features: [
      "Plans, sections and elevations",
      "Schedules and technical details",
      "Permitting documentation",
      "Coordination documentation",
      "Consultant information integration",
      "Documentation package development",
    ],
  },
  {
    id: 2,
    slug: "structural-design-documentation",
    eyebrow: "Structure",
    title: "Structural Design & Documentation",
    href: "/services/structural-design-documentation",
    imageUrl: "/services/structural.jpg",
    shortDescription:
      "Translating engineering solutions into clear construction information.",
    intro:
      "Structural documentation translates engineering solutions into clear and coordinated construction information.",
    details:
      "Structural documentation translates engineering solutions into clear and coordinated construction information. It includes structural plans, sections, reinforcement layouts, steel detailing coordination and technical documentation required for project delivery. DETAILICA supports engineering teams by developing structural models, calculations, drawings and coordinated documentation packages for reinforced concrete, steel and precast structures in accordance with project-specific requirements and local standards.",
    features: [
      "Structural plans and sections",
      "Reinforcement layouts",
      "Steel detailing coordination",
      "Technical documentation",
      "Structural model development",
      "Reinforced concrete, steel and precast support",
    ],
  },
  {
    id: 3,
    slug: "existing-conditions-scan-to-bim",
    eyebrow: "Existing Conditions",
    title: "Existing Conditions & Scan-to-BIM",
    href: "/services/existing-conditions-scan-to-bim",
    imageUrl: "/services/workflows.jpg",
    shortDescription:
      "Transforming existing conditions into accurate, coordinated digital models.",
    intro:
      "Accurate information about existing buildings is essential for successful renovation, extension and redevelopment projects.",
    details:
      "Accurate information about existing buildings is essential for successful renovation, extension and redevelopment projects. Existing conditions modelling transforms point clouds, surveys, as-built drawings and site measurements into coordinated digital building models that provide a reliable foundation for design and construction. DETAILICA supports architects, engineers and consultants by creating BIM models of existing structures, capturing architectural, structural and spatial information required for project development. Depending on project requirements, models can be developed from laser scans, survey data, legacy documentation or a combination of multiple information sources. Our workflows help project teams reduce uncertainty, improve coordination and establish a reliable digital representation of existing conditions for design, analysis and documentation purposes.",
    features: [
      "Point cloud to BIM",
      "As-built model development",
      "Survey data integration",
      "Legacy documentation conversion",
      "Renovation and redevelopment support",
      "Existing conditions coordination",
    ],
  },
];

export type Service = (typeof services)[number];
