import { readFileSync } from 'fs'

const parseJSON = fname => JSON.parse(readFileSync(new URL(fname, import.meta.url)))
const parseXML = fname => readFileSync(new URL(fname, import.meta.url)).toString().replace(/\n$/, '')

export default {
  example: {
    js: parseJSON('./example.json'),
    tmx: parseXML('example.tmx')
  },
  example_no_ns: {
    js: parseJSON('./example_no_ns.json'),
    tmx: parseXML('example_no_ns.tmx')
  },
  example_multi: {
    js: parseJSON('./example_multi.json'),
    tmx: parseXML('example_multi.tmx')
  },
  example_sdl_tm8_format: {
    js: parseJSON('./example_sdl_tm8_format.json'),
    tmx: parseXML('example_sdl_tm8_format.tmx')
  }
}
