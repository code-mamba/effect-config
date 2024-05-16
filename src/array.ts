import { Effect, Config } from "effect";

const program = Effect.gen(function*(){
    const configArray = yield* Config.array(Config.string(), "MY_ARRAY")
    console.log(configArray)
})

Effect.runSync(program)