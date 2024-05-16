import { Config } from "effect";
import * as HostPort from "./hostPort";

class ServiceConfig {
  constructor(readonly hostPort: HostPort.HostPort, readonly timeout: number) {}
}

export const config = Config.map(
  Config.all([HostPort.HostPortConfig, Config.number("TIMEOUT")]),
  ([hostPort, timeout]) => new ServiceConfig(hostPort, timeout)
);
