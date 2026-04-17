// Shared brand constants & sample data used across mockups.

export const BRAND = {
  name: "Foxes.ai",
  tagline: "The AEO agency",
  domain: "foxes.ai",
  parent: "Lazarus LLC",
  address: "30 N Gould St, Sheridan, WY 82801",
  email: "contact@foxes.ai",
};

export const MODELS = [
  { id: "chatgpt", name: "ChatGPT", short: "GPT", color: "#10A37F" },
  { id: "claude", name: "Claude", short: "Claude", color: "#D97757" },
  { id: "perplexity", name: "Perplexity", short: "Pplx", color: "#20B8CD" },
  { id: "gemini", name: "Gemini", short: "Gemini", color: "#4C8BF5" },
  { id: "copilot", name: "Copilot", short: "Copilot", color: "#8250DF" },
] as const;

export type ModelId = (typeof MODELS)[number]["id"];
