import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        Hello, world!
      </h1>
      <p className="mt-6 max-w-md text-base text-slate-500 sm:text-lg">
        A clean little starting point. Everything is up and running.
      </p>
    </main>
  );
}
