var getUrl = require("../index")
require("test").setup();

describe("github url from username/repo", function () {
  it("returns a github url for the username/repo", function () {
    var url = getUrl("visionmedia/express")
    assert.equal("https://github.com/visionmedia/express", url)
  })

  it("returns null if it does not match", function () {
    var url = getUrl("package")
    assert.deepEqual(null, url)
  })

  it("returns null if no repo/user was given", function () {
    var url = getUrl()
    assert.deepEqual(null, url)
  })

  it("works with .", function () {
    var url = getUrl("component/downloader.js")
    assert.equal("https://github.com/component/downloader.js", url)
  })

  it("works with . in the beginning", function () {
    var url = getUrl("component/.downloader.js")
    assert.equal("https://github.com/component/.downloader.js", url)
  })

  it("works with -", function () {
    var url = getUrl("component/-dow-nloader.j-s")
    assert.equal("https://github.com/component/-dow-nloader.j-s", url)
  })
})

require("test").run();
