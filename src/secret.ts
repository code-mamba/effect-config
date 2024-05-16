import { Config, ConfigProvider, Console, Effect, Layer, Secret } from "effect";


const program = Config.secret("API_KEY").pipe(
    Effect.tap((secret)=>Console.log(`logging secret: ${secret}`)),
    Effect.tap((secret)=> Console.log(`logging secret value: ${Secret.value(secret)}`))
)

Effect.runSync(
    program.pipe(
        Effect.provide(
            Layer.setConfigProvider(
                ConfigProvider.fromMap(new Map([
                    ["API_KEY", "jhgfdsrtyuiuytrek"]
                ]))
            )
        )
    )
)