const { Target, Eyes, BrowserType } = require('@applitools/eyes-webdriverio');
const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');
const eyes = new Eyes(); 
const appName = "app";
var testName = "Native Test"; 
describe('firstTest', async () => {
	it ('run test', async () => {
		eyes.setLogHandler(new ConsoleLogHandler(true));
		await eyes.open(browser, appName, testName);
		await eyes.check('Checking window', Target.window()); 
		await eyes.close(); 
	})
})