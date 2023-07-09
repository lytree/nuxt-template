import { resolve } from 'node:path'
import { generateApi } from 'swagger-typescript-api'

// const fs = require('fs')

const apis = [
  {
    output: resolve(__dirname, '../server/api/admin'),
    url: 'http://localhost:8000/admin/swagger/admin/swagger.json',
  },
]

apis?.forEach((api, index) => {
  setTimeout(() => {
    generateApi({
      output: api.output,
      templates: resolve(__dirname, './templates'),
      url: api.url,
      httpClientType: 'fetch',
      modular: true,
      cleanOutput: false,
      moduleNameIndex: 2, // 0 api, 1 api htt-client data-contracts, 2 apis htt-client data-contracts
      moduleNameFirstTag: true, // apis htt-client data-contracts
      unwrapResponseData: true,
      generateUnionEnums: true,
      defaultResponseType: 'AxiosResponse',
      // hooks: {
      //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {

      //   },
      // }
    })
      .then((r) => {
        // files.forEach(({ content, name }) => {
        //   fs.writeFile(path, content);
        // });
      })
      .catch(e => console.error(e))
  }, index * 1500)
})
