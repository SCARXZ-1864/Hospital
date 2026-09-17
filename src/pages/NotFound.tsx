import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream-50 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">404</p>
      <h1 className="mt-3 text-4xl">We couldn't find that page</h1>
      <p className="mt-4 max-w-md text-ink-500">
        The page you're looking for may have moved. Head back home to find your way.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
