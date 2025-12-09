# Next.js Conference 2025 Demo

A comprehensive demo showcasing the latest features from Next.js 15 and React 19, announced at the Next.js Conference 2025.

## Features Demonstrated

### 🚀 React 19 Features
- New `use()` hook for reading Promises and Context
- `useActionState` for form state management
- `useOptimistic` for optimistic UI updates
- Enhanced Suspense and streaming
- Document metadata support

### ⚡ Next.js 15 Updates
- **Async Request APIs**: `params`, `searchParams`, `headers()`, and `cookies()` are now async
- **Server Actions**: Enhanced form handling with progressive enhancement
- **Turbopack**: Lightning-fast dev server with improved HMR
- **Caching Changes**: `fetch()` is no longer cached by default
- **Streaming & Suspense**: Advanced patterns with Partial Prerendering (PPR)

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server with Turbopack:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The development server uses Turbopack by default for incredibly fast HMR and updates.

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page with navigation
├── globals.css             # Global styles
├── react19-features/       # React 19 demos
├── async-request/          # Async Request APIs demo
├── form-actions/           # Server Actions & forms demo
├── streaming/              # Streaming & Suspense demo
├── turbopack/              # Turbopack information
└── caching/                # Caching changes demo
```

## Key Technologies

- **Next.js 15.1**: Latest version with stable App Router
- **React 19**: Includes new hooks and features
- **TypeScript**: Full type safety
- **Turbopack**: Rust-powered bundler for dev
- **CSS Modules**: Scoped styling

## Demo Pages

### 1. React 19 Features (`/react19-features`)
Explore the new React 19 hooks and capabilities:
- Actions and `useActionState`
- `useOptimistic` for optimistic updates
- Enhanced Suspense
- `use()` hook for Promises
- Document metadata

### 2. Async Request APIs (`/async-request`)
Learn about the new async APIs in Next.js 15:
- Async `searchParams`
- Async `params`
- Async `headers()`
- Async `cookies()`

### 3. Server Actions & Forms (`/form-actions`)
Interactive demo of Server Actions:
- Progressive enhancement
- Automatic loading states
- Form validation
- Type-safe actions

### 4. Streaming & Suspense (`/streaming`)
See streaming in action:
- Progressive rendering
- Suspense boundaries
- Partial Prerendering (PPR)
- Loading states

### 5. Turbopack (`/turbopack`)
Learn about Next.js's new bundler:
- Performance improvements
- Architecture overview
- Migration guide
- Configuration options

### 6. Caching Updates (`/caching`)
Understand the new caching behavior:
- Breaking changes in Next.js 15
- Cache control options
- On-demand revalidation
- Migration strategies

## Development Scripts

```bash
# Start development server with Turbopack
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
- React 19 compiler enabled
- TypeScript support
- App Router

### tsconfig.json
TypeScript configuration with:
- Strict mode enabled
- Path aliases configured
- Next.js plugin integrated

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Turbopack Documentation](https://turbo.build/pack)
- [Next.js Conference 2025](https://nextjs.org/conf)

## License

MIT License - see [LICENSE](LICENSE) file for details
