export declare const BOT_NAME = "kellan";
export declare const VERSION = "0.0.1";

export interface BotIdentity {
  name: string;
  version: string;
}

export declare function createIdentity(options?: { name?: string }): BotIdentity;
