import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col gap-8 min-h-screen w-full max-w-3xl items-start  py-32 px-16 bg-white">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Dialect.li Logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-black">
            Hoi :)
          </h1>
        </div>
      </main>
    </div>
  );
}
