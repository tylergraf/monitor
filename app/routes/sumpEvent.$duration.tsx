import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { createEvent } from "~/models/event.server";

export const action = async ({ params }: ActionFunctionArgs) => {
  const duration = Number(params.duration)

  await createEvent({value: duration, eventTypeId: "clt0bh9wz00007nlmzm5olxeh"});

  return json({status: 'ok'});
};
