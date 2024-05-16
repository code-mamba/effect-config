import { Effect, Config } from "effect";

const program = Effect.gen(function*(){
    const host = yield* Config.string("HOST")
    const port = yield* Config.number("PORT")
    console.log(`Server running in host ${host}:${port}`)

})

Effect.runSync(program)