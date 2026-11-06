import { z } from "zod";

/**
 * Event to set the player's availability status
 *
 * Supported statuses:
 * - ONLINE: Clear any custom status (default state)
 * - BUSY: User is busy
 * - DO_NOT_DISTURB: User does not want to be disturbed
 * - BACK_IN_A_MOMENT: User is temporarily away
 * - EATING: User is having a meal
 * - ON_THE_PHONE: User is on a phone call
 *
 * Note: SILENT and AWAY are auto-managed by the system and cannot be set directly.
 * Attempting to set them will result in a console warning.
 */
export const isSetStatusEvent = z.object({
    status: z.union([
        z.literal("ONLINE"),
        z.literal("BUSY"),
        z.literal("DO_NOT_DISTURB"),
        z.literal("BACK_IN_A_MOMENT"),
        z.literal("EATING"),
        z.literal("ON_THE_PHONE"),
    ]),
});

/**
 * A message sent from the iFrame to the game to set the player's status.
 */
export type SetStatusEvent = z.infer<typeof isSetStatusEvent>;
