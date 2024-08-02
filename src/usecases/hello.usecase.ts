export interface IHelloUseCase {
	hello(name: string): boolean
}

export default class HelloUseCase implements IHelloUseCase {
    hello(name: string): boolean {
        return name.length > 2
    }
}
