import { Effect, Config } from "effect";

const program = Effect.gen(function*(){
    const name = yield* Config.string("NAME").pipe(
        Config.validate({
            message: "string length should be greater than 4",
            validation:(s) => s.length > 4
        })
    )
    console.log(name)
})

Effect.runSync(program)