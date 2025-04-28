type Endpoint = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  path: string;
  params?: Record<string, string>;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export type { Endpoint };
