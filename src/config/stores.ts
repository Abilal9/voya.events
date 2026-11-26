/**
 * App store availability — the single place to edit when Voya launches.
 *
 * To activate a store button (Hero, Download section and Footer all update together):
 *   1. Paste the real, public listing URL into `url`.
 *   2. Set `available` to `true`.
 *
 * A button only becomes a link when BOTH are set, so a half-finished edit
 * never produces a dead or wrong link.
 */

export type StoreId = 'appStore' | 'googlePlay';

export interface StoreListing {
  /** Public store listing URL, or `null` until the app is published. */
  url: string | null;
  /** Flip to `true` once the listing is live. */
  available: boolean;
}

export interface StoreConfig {
  appStore: StoreListing;
  googlePlay: StoreListing;
  /** Short note shown under the buttons while at least one store is unavailable. */
  launchStatusText: string;
}

export const storeConfig: StoreConfig = {
  appStore: {
    url: null,
    available: false,
  },
  googlePlay: {
    url: null,
    available: false,
  },
  launchStatusText: 'Coming soon to the App Store and Google Play.',
};

export function liveStoreUrl(id: StoreId): string | null {
  const listing = storeConfig[id];
  return listing.available && listing.url ? listing.url : null;
}

export function allStoresLive(): boolean {
  return liveStoreUrl('appStore') !== null && liveStoreUrl('googlePlay') !== null;
}
