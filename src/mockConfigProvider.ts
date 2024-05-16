import { ConfigProvider, Effect, Layer } from "effect";
import * as App from "./app"

const mockConfiogProvider = ConfigProvider.fromMap(
    new Map([
        ["HOST", "localhost"],
        ["PORT", "8089"],
        
    ])
)

const layer = Layer.setConfigProvider(mockConfiogProvider)

Effect.runSync(Effect.provide(App.program,layer))
