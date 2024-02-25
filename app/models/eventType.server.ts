import type { EventType } from "@prisma/client";

import { prisma } from "~/db.server";
export type { EventType } from "@prisma/client";

export async function getEventTypeById(id: EventType["id"]) {
  return prisma.eventType.findUnique({ where: { id } });
}

export async function getEventTypes() {
  return prisma.eventType.findMany({ where: {} });
}

export async function updateEventType(
  id: EventType["id"],
  name: EventType["name"],
) {
  return prisma.eventType.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
}

export async function createEventType(name: EventType["name"]) {
  return prisma.eventType.create({
    data: {
      name,
    },
  });
}

export async function deleteEventTypeById(id: EventType["id"]) {
  return prisma.eventType.delete({ where: { id } });
}
