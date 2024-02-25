import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

// import { deleteEvent, getEvent } from "~/models/event.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  invariant(params.eventId, "eventId not found");

  // const event = await getEvent({ id: params.eventId, eventTypeId });
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ event });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  // const eventTypeId = await requireUserId(request);
  invariant(params.eventId, "eventId not found");

  // await deleteEvent({ id: params.eventId, eventTypeId });

  return redirect("/events");
};

export default function EventDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className="text-2xl font-bold"></h3>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Event not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
