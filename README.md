# Next.js Conference 2025 Demo

A comprehensive demo showcasing the latest features from **Next.js 16** and React 19, announced at the Next.js Conference 2025.

## Features Demonstrated

### 🎯 Next.js 16 - New Features

#### "use cache" Directive
- **Opt-in caching model**: Everything is dynamic by default
- Explicit control over what gets cached
- Works at page, component, and function level
- Cache profiles with `cacheLife`
- Cache tags for on-demand revalidation

#### proxy.ts (Replaces middleware.ts)
- Makes network boundary explicit
- Runs on Node.js runtime (not Edge by default)
- Clearer terminology for request interception
- Same functionality as middleware.ts, better naming

#### Turbopack - Now Stable & Default!
- **Default bundler** in Next.js 16
- **2-5x faster** production builds
- **Up to 10x faster** Fast Refresh (HMR)
- 50%+ adoption rate in the community
- No configuration needed - it just works!

#### New Revalidation APIs
- `revalidateTag()` - Updated with `cacheLife` profiles
- `updateTag()` - New! Server Actions only, read-your-writes semantics
- `refresh()` - New! Refreshes uncached data only

### 🚀 React 19 Features
- New `use()` hook for reading Promises and Context
- `useActionState` for form state management
- `useOptimistic` for optimistic UI updates
- Enhanced Suspense and streaming
- Document metadata support
- React Compiler (now stable)

### ⚡ Other Features
- **Async Request APIs**: `params`, `searchParams`, `headers()`, and `cookies()` are now async
- **Server Actions**: Enhanced form handling with progressive enhancement
- **Streaming & Suspense**: Advanced patterns with Partial Prerendering (PPR)

## Getting Started

### Prerequisites
- **Node.js 20.9 or later** (Node.js 18 is no longer supported)
- npm, yarn, or pnpm
- **TypeScript 5.1+** (if using TypeScript)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

Turbopack is now the default bundler in Next.js 16 - no configuration needed!

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page with navigation
├── globals.css             # Global styles
├── use-cache/              # "use cache" directive demo (NEW!)
├── proxy-example/          # proxy.ts examples (NEW!)
├── turbopack/              # Turbopack information (now stable!)
├── react19-features/       # React 19 demos
├── async-request/          # Async Request APIs demo
├── form-actions/           # Server Actions & forms demo
├── streaming/              # Streaming & Suspense demo
└── caching/                # Legacy caching (pre-Next.js 16)
```

## Key Technologies

- **Next.js 16**: Latest version with "use cache", proxy.ts, and stable Turbopack
- **React 19**: Includes new hooks and features
- **TypeScript**: Full type safety
- **Turbopack**: Rust-powered bundler for dev
- **CSS Modules**: Scoped styling

## Demo Pages

### 1. "use cache" Directive (`/use-cache`) ⭐ NEW!
The biggest feature in Next.js 16:
- Opt-in caching model
- Explicit control at any level
- Cache profiles with `cacheLife`
- Cache tags for revalidation
- New APIs: `updateTag()`, `refresh()`

### 2. proxy.ts (`/proxy-example`) ⭐ NEW!
Replaces middleware.ts:
- Clearer network boundary
- Node.js runtime by default
- Authentication examples
- Request rewriting patterns
- Migration guide

### 3. Turbopack - Now Stable! (`/turbopack`) ⭐ UPDATED!
Default bundler in Next.js 16:
- 2-5x faster production builds
- Up to 10x faster HMR
- No configuration needed
- Architecture overview

### 4. React 19 Features (`/react19-features`)
Explore the new React 19 hooks and capabilities:
- Actions and `useActionState`
- `useOptimistic` for optimistic updates
- Enhanced Suspense
- `use()` hook for Promises
- Document metadata

### 5. Async Request APIs (`/async-request`)
Learn about the async APIs:
- Async `searchParams`
- Async `params`
- Async `headers()`
- Async `cookies()`

### 6. Server Actions & Forms (`/form-actions`)
Interactive demo of Server Actions:
- Progressive enhancement
- Automatic loading states
- Form validation
- Type-safe actions

### 7. Streaming & Suspense (`/streaming`)
See streaming in action:
- Progressive rendering
- Suspense boundaries
- Partial Prerendering (PPR)
- Loading states

### 8. Legacy Caching (`/caching`)
Old caching behavior from Next.js 15:
- How caching worked before "use cache"
- Migration strategies to Next.js 16
- fetch() caching changes

## Development Scripts

```bash
# Start development server (Turbopack is automatic!)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Configuration

### next.config.ts
The project is configured with:
- **React Compiler**: Stable in Next.js 16, automatic memoization
- **Turbopack**: Default bundler (no configuration needed)
- TypeScript support
- App Router

### tsconfig.json
TypeScript configuration with:
- Strict mode enabled
- Path aliases configured
- Next.js plugin integrated

## What's New in Next.js 16?

### Breaking Changes
- **Node.js 20.9+** required (18 no longer supported)
- **TypeScript 5.1+** required
- `middleware.ts` deprecated (use `proxy.ts`)
- Sync `params`, `searchParams`, `headers()`, `cookies()` removed (must use `await`)
- Default caching model changed to opt-in with "use cache"

### Major Features
1. **"use cache" directive** - Explicit, opt-in caching
2. **proxy.ts** - Clearer network boundary handling
3. **Turbopack stable** - Default bundler with 2-5x faster builds
4. **New revalidation APIs** - `updateTag()`, `refresh()`
5. **React 19.2 support** - Latest React features

## Learn More

- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16)
- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Turbopack Documentation](https://turbo.build/pack)
- [Next.js Conference 2025](https://nextjs.org/conf)

## License

MIT License - see [LICENSE](LICENSE) file for details
