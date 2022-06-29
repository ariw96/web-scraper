const puppeteer = require("puppeteer");
(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: {
			width: 1920,
			height: 1080,
		},
	});
	const page = await browser.newPage();
	await page.goto("https://rothfarb.info/ronen/arabic/?searchString=דלת");
	const grabPage = await page.evaluate(() => {
		const pgTag = document.querySelector(".result .arb.keter");
		return pgTag.innerText;
	});
	console.log(grabPage);
	await browser.close();
})();
