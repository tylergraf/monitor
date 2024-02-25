import { json } from "@remix-run/node";
import { Link, NavLink, useLoaderData } from "@remix-run/react";

import { getEventTypes } from "~/models/eventType.server";

export const loader = async () => {
  const eventTypes = await getEventTypes();
  return json({ eventTypes });
};

export default function EventsTypesPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <main className="flex h-full bg-white">
        <Link to="new" className="block p-4 text-xl text-blue-500">
          + New Event Type
        </Link>

        <hr />

        {data.eventTypes?.length === 0 ? (
          <p className="p-4">No event types yet</p>
        ) : (
          <ol>
            {data.eventTypes.map((eventType) => (
              <li key={eventType.id}>
                <NavLink
                  className={({ isActive }) =>
                    `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                  }
                  to={eventType.id}
                >
                  📝 {eventType.name}
                </NavLink>
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  );
}
