import multer from 'multer'
import mime from "mime-types"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.${mime.extension(file.mimetype)}`)
    },

})

export class ConfigUplaodFile {

    static get data(): any {
        multer({ dest: 'uploads/' });
        return multer({ storage })
    }
}
