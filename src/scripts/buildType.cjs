const fs = require('fs/promises')
const Path = require('path')

const indexPath = Path.resolve(__dirname, '../../dist/index.d.ts')

const main = () => {
  const template = `import "./env"`
  fs.appendFile(indexPath, template, 'utf8')
}

main()
