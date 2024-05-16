import { Effect, Config, Console } from "effect";

const program = Effect.all([
  Config.string("HOST"),
  Config.number("PORT").pipe(Config.withDefault(8080)),
]).pipe(
  Effect.andThen(([host, port]) =>
    Console.log(`Application runnin ${host}:${port}`)
  )
);

Effect.runSync(program);
