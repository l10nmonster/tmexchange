import expect from 'expect.js'
import fixtures from './fixtures/index.js'
import * as lib from '../index.js'

function test (what, t) {
  describe(what, () => {
    it('index', t(lib[what]))
  })
}

describe('single', () => {
  test('js2tmx', (fn) => (done) => {
    fn(fixtures.example.js, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example.tmx)
      done()
    })
  })

  test('tmx2js', (fn) => (done) => {
    fn(fixtures.example.tmx, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example.js)
      done()
    })
  })

  describe('promise', () => {
    test('js2tmx', (fn) => (done) => {
      fn(fixtures.example.js).then((res) => {
        expect(res).to.eql(fixtures.example.tmx)
        done()
      })
    })

    test('tmx2js', (fn) => (done) => {
      fn(fixtures.example.tmx).then((res) => {
        expect(res).to.eql(fixtures.example.js)
        done()
      })
    })
  })
})

describe('no namespace', () => {
  test('js2tmx', (fn) => (done) => {
    fn(fixtures.example_no_ns.js, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_no_ns.tmx)
      done()
    })
  })

  test('tmx2js', (fn) => (done) => {
    fn(fixtures.example_no_ns.tmx, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_no_ns.js)
      done()
    })
  })
})

describe('multi', () => {
  test('js2tmx', (fn) => (done) => {
    fn(fixtures.example_multi.js, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_multi.tmx)
      done()
    })
  })

  test('tmx2js', (fn) => (done) => {
    fn(fixtures.example_multi.tmx, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_multi.js)
      done()
    })
  })
})

describe('sdl', () => {
  test('js2tmx', (fn) => (done) => {
    fn(fixtures.example_sdl_tm8_format.js, { headless: false }, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_sdl_tm8_format.tmx)
      done()
    })
  })

  test('tmx2js', (fn) => (done) => {
    fn(fixtures.example_sdl_tm8_format.tmx, (err, res) => {
      expect(err).not.to.be.ok()
      expect(res).to.eql(fixtures.example_sdl_tm8_format.js)
      done()
    })
  })
})
