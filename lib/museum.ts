export type Specimen = {
  slug: string;
  title: string;
  era: string;
  summary: string;
  curatorNote: string;
  specimenLabel: string;
};

export type Pattern = {
  slug: string;
  title: string;
  thesis: string;
  introduction: string;
  specimens: Specimen[];
};

export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  patterns: Pattern[];
};

export const museumNavigation = [
  { href: "/collections", label: "Collections" },
  { href: "/archive", label: "Archive" },
  { href: "/restoration-lab", label: "Restoration Lab" },
] as const;

export const museumCategories: Category[] = [
  {
    slug: "inputs",
    title: "Input Fields",
    subtitle: "Acquisition interfaces",
    description:
      "Forms and fields that promise clarity while quietly renegotiating consent, attention, and error.",
    patterns: [
      {
        slug: "apology-modal",
        title: "The Apology Modal",
        thesis: "Interruption framed as courtesy.",
        introduction:
          "A specimen class in which the interface apologizes for breaking focus while continuing to break focus on a fixed cadence.",
        specimens: [
          {
            slug: "cadence-apology",
            title: "Cadence Apology Loop",
            era: "2019–present",
            summary:
              "A modal that reopens after dismissal with refreshed contrition copy and the same blocking action.",
            curatorNote:
              "Filed under behavioral interfaces. The specimen preserves the belief that tone can substitute for timing.",
            specimenLabel: "Specimen 01",
          },
          {
            slug: "nested-regret",
            title: "Nested Regret Stack",
            era: "2021–present",
            summary:
              "Secondary sheet inside the apology modal for users who attempt to leave without accepting emotional labor.",
            curatorNote:
              "Restoration notes indicate the inner sheet was added after analytics showed users closing the first layer too quickly.",
            specimenLabel: "Specimen 02",
          },
        ],
      },
      {
        slug: "infinite-cookie-preferences",
        title: "Infinite Cookie Preferences",
        thesis: "Consent as an expanding taxonomy.",
        introduction:
          "Each acceptance event spawns additional categories, producing a preference surface that never converges.",
        specimens: [
          {
            slug: "category-bloom",
            title: "Category Bloom Drawer",
            era: "2018–present",
            summary:
              "Accepting analytics unlocks performance, personalization, and partner sub-panels with identical affordances.",
            curatorNote:
              "The drawer remains open in the collection to demonstrate non-terminating configuration trees.",
            specimenLabel: "Specimen 01",
          },
        ],
      },
    ],
  },
  {
    slug: "text-blocks",
    title: "Text Blocks",
    subtitle: "Narrative specimens",
    description:
      "Typography deployed as authority: manifestos, disclaimers, and microcopy that over-explain while understating consequence.",
    patterns: [
      {
        slug: "ethical-serif",
        title: "Ethical Serif",
        thesis: "Moral weight through contrast and tracking.",
        introduction:
          "Long-form blocks set in display serifs to signal care, often paired with dense legal exceptions in uppercase sans.",
        specimens: [
          {
            slug: "trust-preamble",
            title: "Trust Preamble",
            era: "2020–present",
            summary:
              "Opening paragraph in large serif with a single green accent phrase and no actionable summary.",
            curatorNote:
              "Collected from productivity landing pages where the serif block precedes a data-heavy form.",
            specimenLabel: "Specimen 01",
          },
        ],
      },
    ],
  },
  {
    slug: "images-galleries",
    title: "Images & Galleries",
    subtitle: "Surface theater",
    description:
      "Carousels, grids, and lightboxes that choreograph discovery while obscuring navigation state.",
    patterns: [
      {
        slug: "loading-state-studies",
        title: "Loading State Studies #4",
        thesis: "Progress as emotional staging.",
        introduction:
          "Synthetic progress indicators that advance on narrative beats rather than measurable work.",
        specimens: [
          {
            slug: "empathetic-progress",
            title: "Empathetic Progress Bar",
            era: "2017–present",
            summary:
              "Bar stalls at 92% while rotating reassurance messages imply diligence rather than latency.",
            curatorNote:
              "Exhibit includes timing annotations showing deliberate pause windows tied to copy rotation.",
            specimenLabel: "Specimen 01",
          },
        ],
      },
    ],
  },
  {
    slug: "navigation",
    title: "Navigation",
    subtitle: "Wayfinding under sponsorship",
    description:
      "Menus and route systems that reorganize themselves around campaigns, upgrades, and dark patterns dressed as IA.",
    patterns: [
      {
        slug: "gamified-consent",
        title: "Gamified Consent",
        thesis: "Privacy settings as progression systems.",
        introduction:
          "Preference centers rendered as skill trees where protective choices are gated behind optional branches.",
        specimens: [
          {
            slug: "privacy-skill-tree",
            title: "Privacy Skill Tree",
            era: "2022–present",
            summary:
              "Nodes labeled “Shield,” “Clarity,” and “Velocity” with protective defaults on locked branches.",
            curatorNote:
              "Specimen demonstrates how RPG affordances reframe refusal as incomplete build paths.",
            specimenLabel: "Specimen 01",
          },
        ],
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return museumCategories.find((category) => category.slug === slug);
}

export function getPattern(categorySlug: string, patternSlug: string) {
  const category = getCategory(categorySlug);
  if (!category) return undefined;

  const pattern = category.patterns.find((item) => item.slug === patternSlug);
  if (!pattern) return undefined;

  return { category, pattern };
}

export function getSpecimen(
  categorySlug: string,
  patternSlug: string,
  specimenSlug: string,
) {
  const result = getPattern(categorySlug, patternSlug);
  if (!result) return undefined;

  const specimen = result.pattern.specimens.find(
    (item) => item.slug === specimenSlug,
  );
  if (!specimen) return undefined;

  return { ...result, specimen };
}

export function getAllPatterns() {
  return museumCategories.flatMap((category) =>
    category.patterns.map((pattern) => ({
      category,
      pattern,
    })),
  );
}
