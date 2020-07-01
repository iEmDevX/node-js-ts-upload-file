import { EnvModel } from './model.env'

export class ProdENV {
    static data: EnvModel = {
        PORT: 8080,
        ENV: 'production',
    }
}
