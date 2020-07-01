import { EnvModel } from './model.env'

export class ProdENV {
    static data: EnvModel = {
        PORT: 80,
        ENV: 'production',
    }
}
