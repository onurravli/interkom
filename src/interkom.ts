import type { InterkomConfig } from "./types/config";
import type { Payload } from "./types/payload";
import { _getInterkomConfig, _sendMessage } from "./lib/utils";
import deepmerge from "deepmerge";

class Interkom {
  private config: InterkomConfig;
  constructor(config?: InterkomConfig) {
    this.config = deepmerge(_getInterkomConfig(), config || {});
  }
  getConfig() {
    return this.config;
  }
  async sendMessage(payload: Payload) {
    return _sendMessage(payload, this.config);
  }
}

export default Interkom;
