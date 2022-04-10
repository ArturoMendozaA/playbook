const logger = require('./logger.js')

//Ya se puede usar directamente el objetoinstanciado en el módulo logger
logger.log('This is a informational message')

/*También puede instanciar uno nuevo de esta manera:
    const customLogger =  new logger.constructor('CUSTOM')
    customLogger.log('This is an informational message')
    */