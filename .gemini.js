module.exports = {
	rootUrl: 'https://vladosiv.github.io',
	gridUrl: 'http://127.0.0.1:4444/wd/hub',
	compositeImage: true,

	browsers: {
			chrome: {
					desiredCapabilities: {
							browserName: 'chrome'
					}
			}
	}
};