const open = require('open')
/**
 * @param {String} url
 * @param {Number} delay
 * @param {String} browser
 */
class OpenBrowser {
  constructor ({url, delay = 0, browser} = options) {
    this.url = url
    this.delay = delay
    this.browser = browser
  }
  apply (compiler) {
    let stat = false
    compiler.hooks.watchRun.tap('watch-run', (compiler) => {
      stat = true
    })
    compiler.hooks.done.tapPromise('done', async (stats) => {
      await this.sleep(this.delay)
      if (stat && this.url) {
        open(this.url, this.browser)
      }
    })
  }
  sleep (ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }
}

module.exports = OpenBrowser
