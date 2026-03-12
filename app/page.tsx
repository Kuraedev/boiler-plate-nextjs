import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <main className="flex flex-col items-center gap-6 text-center px-6 py-16 max-w-md w-full">

        {/* Profile Photo — replace photo.jpg with your image in the /public folder */}
        <Image
          src="/photo.jpg"
          alt="Profile photo"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-white shadow-md"
          priority
        />

        {/* Name */}
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Your Name
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Full-Stack Developer · Based in Philippines
          </p>
        </div>

        {/* Bio */}
        <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
          Hi! I&apos;m a developer passionate about building clean and useful web
          applications. Currently leveling up my skills through a bootcamp and
          working on personal projects.
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm font-medium">
          <a
            href="https://github.com/Kuraedev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-80 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            LinkedIn
          </a>
        </div>

      </main>
    </div>
  );
}
