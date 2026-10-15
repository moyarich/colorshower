/** Canonical content sources. The playground renders them; it does not own them. */
export const registry = {
  docs: { label: "Documentation", base: "../../docs", include: "**/*.md" },
  examples: { label: "Examples", base: "../../examples", include: "**/*.css" },
} as const;
