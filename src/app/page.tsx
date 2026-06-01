import Image from 'next/image';
import Counter from './_components/Counter';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-3xl flex-col items-center gap-12">
        {/* Header Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            className="mb-4 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Next.js 15 Boilerplate
          </h1>
          <p className="max-w-md text-center text-zinc-500 dark:text-zinc-400">
            Mẫu template đã bao gồm App Router, Tailwind CSS, Redux Toolkit,
            Husky, và cấu hình chuẩn mực.
          </p>
        </div>

        {/* Demo Component */}
        <Counter />

        {/* Footer Guide */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <span>•</span>
          <a
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>•</span>
          <a
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
        </div>
      </main>
    </div>
  );
}
