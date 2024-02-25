import type { Event, EventType } from "@prisma/client";

import { prisma } from "~/db.server";

export function getEvent({
  id,
  eventTypeId,
}: Pick<Event, "id"> & {
  eventTypeId: EventType["id"];
}) {
  return prisma.event.findFirst({
    select: { id: true, createdAt: true },
    where: { id, eventTypeId },
  });
}

export function getEvents({ eventTypeId }: { eventTypeId: EventType["id"] }) {
  return prisma.event.findMany({
    where: { eventTypeId },
    select: { id: true },
    orderBy: { createdAt: "desc" },
  });
}

export function createEvent({
  value,
  eventTypeId,
}: Pick<Event, "value"> & {
  eventTypeId: EventType["id"];
}) {
  return prisma.event.create({
    data: {
      value,
      eventType: {
        connect: {
          id: eventTypeId,
        },
      },
    },
  });
}

export function deleteEvent({
  id,
}: Pick<Event, "id"> & { eventTypeId: EventType["id"] }) {
  return prisma.event.deleteMany({
    where: { id },
  });
}
