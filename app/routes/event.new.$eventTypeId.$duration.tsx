import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { createEvent } from "~/models/event.server";

export const action = async ({ params }: ActionFunctionArgs) => {
  const eventTypeId = params.eventTypeId || ""
  const duration = Number(params.duration)

  await createEvent({value: duration, eventTypeId});

  return json({status: 'ok'});
};
