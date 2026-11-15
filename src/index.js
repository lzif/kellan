export const BOT_NAME = "kellan";
export const VERSION = "0.0.1";

/**
 * Create a minimal bot identity configuration.
 * @param {{ name?: string }} [options]
 */
export function createIdentity(options = {}) {
  return {
    name: options.name ?? BOT_NAME,
    version: VERSION,
  };
}
