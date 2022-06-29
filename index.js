const puppeteer = require("puppeteer");
const hebrewToArabicInHebrewText = async (word) => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: {
			width: 1920,
			height: 1080,
		},
	});
	const page = await browser.newPage();
	await page.goto(`https://rothfarb.info/ronen/arabic/?searchString=${word}`);
	const grabWord = await page.evaluate(() => {
		const tag = document.querySelector(".result .arb.keter");
		return tag.innerText;
	});
	console.log(grabWord.split("").reverse().join(""));
	await browser.close();
};
hebrewToArabicInHebrewText("בית");
