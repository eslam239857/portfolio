import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-electric-soft">404</p>
        <h1 className="mt-2 font-display text-4xl text-white">Page not found</h1>
        <Link href="/" className="btn btn-primary mt-8">Back home</Link>
      </div>
    </main>
  );
}
