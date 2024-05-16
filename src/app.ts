import { Effect } from "effect";
import { config } from "./serviceConfig";

export const program = Effect.gen(function* () {
  const process = yield* config;
  console.log(
    `the application running in ${process.hostPort.host}: ${process.hostPort.port} Time out ${process.timeout} `
  );
});

Effect.runSync(program);
