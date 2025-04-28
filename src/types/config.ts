import type { Endpoint } from "./endpoint";

type InterkomConfig = {
  gateway: {
    port: number;
    host: string;
    protocol: string;
  };
  services: {
    [key: string]: {
      port?: number;
      host?: string;
      protocol?: string;
      methods?: ("GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS")[];
      endpoints?: Endpoint[];
    };
  };
};

export type { InterkomConfig };
