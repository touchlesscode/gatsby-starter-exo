export const apiVersion =
  process.env.GATSBY_PUBLIC_SANITY_API_VERSION || "2023-01-01";

export const dataset = assertValue(
  process.env.GATSBY_PUBLIC_SANITY_DATASET,
  "Missing environment variable: GATSBY_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.GATSBY_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: GATSBY_PUBLIC_SANITY_PROJECT_ID"
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

export const previewSecretDocumentId: `${string}.${string}` = "preview.secret";

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
