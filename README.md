> [!WARNING]  
> Still in development, not ready for production use.

# Interkom

A lightweight TypeScript library for easy communication between microservices.

## Features

- Simple and intuitive API for inter-service communication
- Type-safe configuration and payload handling
- Support for multiple HTTP methods (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
- Configurable service endpoints and methods
- Built with TypeScript for better developer experience

## Installation

```bash
npm install interkom
# or
yarn add interkom
# or
pnpm add interkom
```

## Usage

### Basic Setup

```typescript
import Interkom from "interkom";

// Initialize with configuration
const interkom = new Interkom({
  gateway: {
    port: 3000,
    host: "localhost",
    protocol: "http",
  },
  services: {
    userService: {
      port: 3001,
      host: "localhost",
      protocol: "http",
      methods: ["GET", "POST"],
      endpoints: [
        {
          method: "GET",
          path: "/users/:id",
          params: { id: "string" },
        },
      ],
    },
  },
});
```

### Sending Messages

```typescript
// Send a message to a service
const response = await interkom.sendMessage({
  service: "userService",
  method: "GET",
  endpoint: "/users/123",
  params: { id: "123" },
  headers: {
    Authorization: "Bearer token",
  },
});
```

## Configuration

### Gateway Configuration

The gateway configuration defines the central communication point:

```typescript
{
  gateway: {
    port: number;
    host: string;
    protocol: string;
  }
}
```

### Service Configuration

Each service can be configured with its own settings:

```typescript
{
  services: {
    [serviceName: string]: {
      port?: number;
      host?: string;
      protocol?: string;
      methods?: ("GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS")[];
      endpoints?: Endpoint[];
    }
  }
}
```

### Endpoint Configuration

Endpoints define the available routes and their parameters:

```typescript
{
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  path: string;
  params?: Record<string, string>;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Watch mode for development
pnpm build:dev
```

## License

MIT - See [LICENSE.md](LICENSE.md) for more information.

## Author

Onur Ravli - [onurravli.com](https://onurravli.com)
