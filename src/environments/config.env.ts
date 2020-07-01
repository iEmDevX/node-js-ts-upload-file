import { EnvModel } from './model.env'
import { DevENV } from './dev'
import { ProdENV } from './prod'

export class ConfigENV {
    static getValue(): EnvModel {
        if (ProfileEnv.development === process.env.NODE_ENV) {
            return DevENV.data
        } else if (ProfileEnv.production === process.env.NODE_ENV) {
            return ProdENV.data
        }
        return ProdENV.data
    }
}

enum ProfileEnv {
    development = 'development',
    production = 'production',
}
