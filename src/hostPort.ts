import { Config } from "effect";

export class HostPort {
    constructor(
        readonly host:string,
        readonly port:number
    ){}

    get url(){
        return `${this.host}: ${this.port}`
    }
}

const both = Config.all([Config.string("HOST"), Config.number("PORT")])

export const HostPortConfig = Config.map(
    both,
    ([host, number]) => new HostPort(host,number)
)
























// import { Config } from "effect";

// export class HostPort {
//   constructor(readonly host: string, readonly port: number) {}

//   get url() {
//     return `${this.host}:${this.port}`;
//   }
// }

// const both = Config.all([Config.string("HOST"), Config.number("PORT")])

// export const config = Config.map(
//     both,
//     ([host,port]) => new HostPort(host,port)
// )