import { JasmineAdapter } from '../lib/adapter'

const specs = [__dirname + '/fixtures/tests.spec.js']
const NOOP = () => {}

const WebdriverIO = class {}
WebdriverIO.prototype = {
    pause: (ms = 500) => new Promise((r) => {
        setTimeout(() => r(), ms)
    })
}

process.send = NOOP

describe('JasmineAdapter executes specs syncronous', () => {
    before(async () => {
        global.browser = new WebdriverIO()
        const adapter = new JasmineAdapter(0, {}, specs, {})
        await adapter.run()
    })

    it('should run async commands in beforeEach blocks', () => {
        global._____wdio.beforeEach.should.be.greaterThan(499)
    })

    it('should run async commands in beforeAll blocks', () => {
        global._____wdio.beforeAll.should.be.greaterThan(499)
    })

    it('should run async commands in it blocks', () => {
        global._____wdio.it.should.be.greaterThan(499)
    })

    it('should run async commands in nested it blocks', () => {
        global._____wdio.nestedit.should.be.greaterThan(499)
    })

    it('should run async commands in afterAll blocks', () => {
        global._____wdio.afterAll.should.be.greaterThan(499)
    })

    it('should run async commands in afterEach blocks', () => {
        global._____wdio.afterEach.should.be.greaterThan(499)
    })
})
