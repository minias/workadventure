import { writable } from "svelte/store";
import { localUserStore } from "../Connection/LocalUserStore";

/**
 * Whether leaving the window/tab ("away mode", see PrivacyShutdownStore) should also show the user as AWAY.
 * Off by default: switching focus keeps the current status. The camera/microphone privacy shutdown is
 * controlled separately by the camera/microphone privacy settings.
 */
function createAwayStatusOnBlurStore() {
    const { subscribe, set } = writable<boolean>(localUserStore.getAwayStatusOnBlur());

    return {
        subscribe,
        setValue: (value: boolean) => {
            set(value);
            localUserStore.setAwayStatusOnBlur(value);
        },
    };
}

export const awayStatusOnBlurStore = createAwayStatusOnBlurStore();
