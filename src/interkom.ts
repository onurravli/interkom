import type { InterkomConfig } from "./types/config";
import type { Payload } from "./types/payload";
import { _sendMessage } from "./lib/utils";

class Interkom {
  private config: InterkomConfig;
  constructor(config: InterkomConfig) {
    this.config = config;
  }
  getConfig() {
    return this.config;
  }
  async sendMessage(payload: Payload) {
    return _sendMessage(payload, this.config);
  }
}

export default Interkom;
