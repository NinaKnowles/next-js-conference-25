import Link from 'next/link';
import styles from './page.module.css';

export default function ProxyExamplePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>proxy.ts (Replaces middleware.ts)</h1>

        <p className={styles.intro}>
          Next.js 16 introduces <code>proxy.ts</code> to replace <code>middleware.ts</code>,
          making your app's network boundary more explicit.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>What Changed?</h3>
            <p>
              <code>middleware.ts</code> is now deprecated in favor of <code>proxy.ts</code>.
              The new name better reflects its purpose: handling requests at the network boundary.
            </p>
            <div className={styles.comparison}>
              <div className={styles.before}>
                <h4>Old: middleware.ts</h4>
                <pre><code>{`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware logic
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};`}</code></pre>
              </div>
              <div className={styles.after}>
                <h4>New: proxy.ts</h4>
                <pre><code>{`// proxy.ts
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Proxy logic (same as before)
  return Response.next();
}

export const config = {
  matcher: '/api/:path*',
};`}</code></pre>
              </div>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Key Differences</h3>
            <ul>
              <li><strong>Name:</strong> File is now <code>proxy.ts</code> instead of <code>middleware.ts</code></li>
              <li><strong>Function:</strong> Export <code>proxy</code> function instead of <code>middleware</code></li>
              <li><strong>Runtime:</strong> Runs on Node.js runtime (not Edge by default)</li>
              <li><strong>Purpose:</strong> Makes network boundary explicit</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Common Use Cases</h3>

            <h4>1. Authentication</h4>
            <pre><code>{`// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}`}</code></pre>

            <h4>2. Request Rewriting</h4>
            <pre><code>{`export function proxy(request: NextRequest) {
  // Rewrite /blog/* to /news/*
  if (request.nextUrl.pathname.startsWith('/blog')) {
    const url = request.nextUrl.clone();
    url.pathname = url.pathname.replace('/blog', '/news');
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}`}</code></pre>

            <h4>3. Custom Headers</h4>
            <pre><code>{`export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Add custom headers
  response.headers.set('x-custom-header', 'value');
  response.headers.set('x-request-id', crypto.randomUUID());

  return response;
}`}</code></pre>

            <h4>4. Geographic Routing</h4>
            <pre><code>{`export function proxy(request: NextRequest) {
  const country = request.geo?.country || 'US';

  // Route based on location
  if (country === 'GB') {
    return NextResponse.rewrite(
      new URL('/uk' + request.nextUrl.pathname, request.url)
    );
  }

  return NextResponse.next();
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Matcher Configuration</h3>
            <p>
              Control which routes the proxy applies to:
            </p>
            <pre><code>{`export const config = {
  matcher: [
    // Match all routes except static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

// Or match specific paths:
export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*',
  ],
};`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Runtime Options</h3>
            <p>
              By default, proxy runs on Node.js. You can still use Edge runtime:
            </p>
            <pre><code>{`// proxy.ts
export const runtime = 'edge'; // or 'nodejs' (default)

export function proxy(request: NextRequest) {
  // Your proxy logic
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Migration Guide</h3>
            <p>To migrate from middleware.ts to proxy.ts:</p>
            <ol>
              <li>Rename <code>middleware.ts</code> to <code>proxy.ts</code></li>
              <li>Rename the exported function from <code>middleware</code> to <code>proxy</code></li>
              <li>Keep all other logic the same</li>
            </ol>
            <pre><code>{`# Automated migration
npx @next/codemod@latest migrate-to-proxy .`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Backward Compatibility</h3>
            <p>
              <code>middleware.ts</code> still works in Next.js 16 but is deprecated.
              You'll see a warning encouraging you to migrate to <code>proxy.ts</code>.
            </p>
            <div className={styles.warning}>
              <p>⚠️ <code>middleware.ts</code> will be removed in a future major version.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Why the Change?</h3>
            <ul>
              <li><strong>Clarity:</strong> "Proxy" better describes the network boundary concept</li>
              <li><strong>Explicit:</strong> Makes it clear this code runs before your app</li>
              <li><strong>Consistency:</strong> Aligns with industry terminology</li>
              <li><strong>Node.js Runtime:</strong> Default to Node.js for better compatibility</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Example: Full Authentication Proxy</h3>
            <pre><code>{`// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedPaths = ['/dashboard', '/profile', '/settings'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some(path =>
    pathname.startsWith(path)
  );

  if (isProtected) {
    const token = request.cookies.get('session-token');

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Validate token (simplified)
    try {
      verifyToken(token.value);
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set('x-frame-options', 'DENY');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
