import { FiltersEngine } from '@cliqz/adblocker'
import { Request } from '@cliqz/adblocker'
import fs from 'fs'

const engine = FiltersEngine.parse(
  fs.readFileSync('built-filterlist.txt', 'utf-8')
)

console.log('finished loading file')

console.time('matching engine')
const { match } = engine.match(
  Request.fromRawDetails({
    url: 'http://8boobs.com',
  })
)
console.timeEnd('matching engine')
