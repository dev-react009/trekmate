// lib/supabase.ts
import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

export function createClientComponentClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Creates a Supabase server component client for server-side operations.
 * 
 * This function initializes a Supabase client that can be used in server-side
 * components or API routes, allowing access to Supabase services with proper
 * authentication handling.
 *
 * @param cookies - The RequestCookies object from Next.js, used for managing
 *                  authentication state across requests.
 * 
 * @returns A Supabase client instance configured for server-side use, with
 *          authentication state managed through cookies.
 */
export function createServerComponentClient(cookies: RequestCookies) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies }
  );
}
