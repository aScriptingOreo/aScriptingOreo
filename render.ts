import path from 'path'
import { Liquid } from 'liquidjs'
import { writeFileSync } from 'fs'

export async function main() {
  let scope = {};

  const engine = new Liquid({
    root: path.resolve(__dirname, 'src/'),
    extname: '.liquid'
  });

  engine.renderFile('README', scope).then((content) => {
    writeFileSync(path.join(__dirname, 'README.md'), content, {flag: 'w'});
  });
}

main();