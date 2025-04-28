import type { InterkomConfig } from "./config";

type Payload = {
  service: keyof InterkomConfig["services"];
  method: NonNullable<InterkomConfig["services"][keyof InterkomConfig["services"]]["methods"]>[number];
  endpoint: string;
  params?: {
    [K in string]: string | number;
  };
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export type { Payload };
