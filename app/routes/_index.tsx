import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Monitor" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
     <div>
      Hi
      <Link to="/eventTypes">Event Types</Link>
     </div>
    </main>
  );
}
