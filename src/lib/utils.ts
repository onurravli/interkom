import { InterkomConfig } from "../types/config";
import { Payload } from "../types/payload";

async function _sendMessage(payload: Payload, config: InterkomConfig) {
  const { service, method, endpoint, params, body, headers } = payload;
  const serviceConfig = config.services[service];
  const host = serviceConfig.host || config.gateway.host;
  const protocol = serviceConfig.protocol || config.gateway.protocol;
  const port = serviceConfig.port || config.gateway.port;
  let processedEndpoint = endpoint;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      processedEndpoint = processedEndpoint.replace(`{${key}}`, String(value));
    });
  }
  let url = new URL(`${protocol}://${host}:${port}${processedEndpoint}`);
  const response = await fetch(url.toString(), {
    method,
    body: !["GET", "HEAD", "OPTIONS"].includes(method) && body ? JSON.stringify(body) : undefined,
    headers: headers || {},
  });
  return response.json();
}

export { _sendMessage };
