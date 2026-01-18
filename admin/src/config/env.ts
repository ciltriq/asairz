const PUBLIC_DOMAIN = import.meta.env.VITE_PUBLIC_DOMAIN;

if (!PUBLIC_DOMAIN) {
  throw new Error("Missing required environment variable: VITE_PUBLIC_DOMAIN");
}

export const env = {
  PUBLIC_DOMAIN,
};
