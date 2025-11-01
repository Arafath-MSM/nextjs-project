import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-6xl">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A passionate Full Stack Developer building innovative web solutions
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#contact"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100"
          >
            View Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}