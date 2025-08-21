
import { createServerClient } from "@supabase/ssr";
import { NextResponse, NextRequest } from "next/server";



export async function middleware(req: NextRequest) {
  const res = NextResponse.next();


  // Helper to get all cookies from the request
  type Cookie = { name: string; value: string };
  type SetCookie = { name: string; value: string; options?: Record<string, any> };

  const getAll = (): Cookie[] => {
    const cookies: Cookie[] = [];
    req.cookies.getAll().forEach(({ name, value }) => {
      cookies.push({ name, value });
    });
    return cookies;
  };

  // Helper to set all cookies on the response
  const setAll = (cookies: SetCookie[]): void => {
    cookies.forEach(({ name, value, options }) => {
      res.cookies.set({ name, value, ...options });
    });
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll,
        setAll,
      },
    }
  );

  // Refresh the session
  await supabase.auth.getSession();
  return res;
}


export const config = {
    matcher: ['/dashboard/:path*',
        '/profile/:path*',
         '/api/protected/:path*' // optional: protect api routes  too
        ],
  };