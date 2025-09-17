import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  //you can pass client configuration here
  // For client bundles, use NEXT_PUBLIC_* envs or omit to use same-origin
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});
