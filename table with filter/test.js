const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const expect = chai.expect;
chai.use(chaiHttp);
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const { Builder, By, Key, until, WebDriver } = require("selenium-webdriver"),
    chrome = require("selenium-webdriver/chrome");
var driver;
let above, below, between, subjects, filter, opt1, opt2, opt3, opt4, clear, mark, maxMark;

const options = new chrome.Options();
options.addArguments("headless");

describe("Filter app \n", function () {
    this.timeout(100000);

    before(function (done) {
        driver = new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();
        driver.get("http://localhost:8001").then(() => {
            done();
        });
    });

    after(function () {
        driver.quit();
    });

    beforeEach(async function () {
        driver.navigate().refresh();
        above = await driver.findElement(By.id("above"));
        below = await driver.findElement(By.id("below"));
        between = await driver.findElement(By.id("between"));
        subjects = await driver.findElement(By.id("subjects"));
        filter = await driver.findElement(By.id("filter"));
        clear = await driver.findElement(By.id("clear"));
        mark = await driver.findElement(By.id("mark"));
        maxMark = await driver.findElement(By.id("maxMark"));
        opt1 = await driver.findElement(By.id("opt1"));
        opt2 = await driver.findElement(By.id("opt2"));
        opt3 = await driver.findElement(By.id("opt3"));
        opt4 = await driver.findElement(By.id("opt4"));
    });

    it("OnLoad", async function () {
        const tbody = "document.querySelectorAll('table tbody')[0]";
        const expectedOutput = await driver.executeScript(`return document.querySelectorAll('table tbody tr').length === 5 &&
        ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Janu" && ${tbody}.children[0].children[2].innerText === "50" && ${tbody}.children[0].children[3].innerText === "86" && ${tbody}.children[0].children[4].innerText === "77" &&
        ${tbody}.children[0].children[5].innerText === "88"  && ${tbody}.children[1].children[0].innerText === "2" && ${tbody}.children[1].children[1].innerText === "Thanu" && ${tbody}.children[1].children[2].innerText === "75" &&  ${tbody}.children[1].children[3].innerText === "96"&&
        ${tbody}.children[1].children[4].innerText === "67" && ${tbody}.children[1].children[5].innerText === "91"&& ${tbody}.children[2].children[0].innerText === "3"&& ${tbody}.children[2].children[1].innerText === "Tara" && ${tbody}.children[2].children[2].innerText === "90"
        && ${tbody}.children[2].children[3].innerText === "35"&& ${tbody}.children[2].children[4].innerText === "86"&& ${tbody}.children[2].children[5].innerText === "100"
        && ${tbody}.children[3].children[0].innerText === "4"&& ${tbody}.children[3].children[1].innerText === "Glen"&& ${tbody}.children[3].children[2].innerText === "79"
        && ${tbody}.children[3].children[3].innerText === "68"&& ${tbody}.children[3].children[4].innerText === "77"&& ${tbody}.children[3].children[5].innerText === "78"
        && ${tbody}.children[4].children[0].innerText === "5"&& ${tbody}.children[4].children[1].innerText === "Zara"&& ${tbody}.children[4].children[2].innerText === "80"
        && ${tbody}.children[4].children[3].innerText === "85"&& ${tbody}.children[4].children[4].innerText === "96"&& ${tbody}.children[4].children[5].innerText === "68"`);
        expect(expectedOutput).to.be.true;
    });
    it("above", async function () {
        let messageDisplay = await subjects.getAttribute("value");
        expect(messageDisplay).to.equal("");
        opt2.click()
        let messageDisplay1 = await subjects.getAttribute("value");
        expect(messageDisplay1).to.equal("Maths");
        mark.sendKeys(70)
        filter.click()
        const tbody = "document.querySelectorAll('table tbody')[0]";
        const expectedOutput = await driver.executeScript(
            `return document.querySelectorAll('table tbody tr').length === 3 &&
            ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Janu" && ${tbody}.children[0].children[2].innerText === "50" &&
            ${tbody}.children[0].children[3].innerText === "86" && ${tbody}.children[0].children[4].innerText === "77" && ${tbody}.children[0].children[5].innerText === "88" &&
            ${tbody}.children[1].children[0].innerText === "2" && ${tbody}.children[1].children[1].innerText === "Thanu" && ${tbody}.children[1].children[2].innerText === "75" &&
            ${tbody}.children[1].children[3].innerText === "96"&&${tbody}.children[1].children[4].innerText === "67" && ${tbody}.children[1].children[5].innerText === "91"
            && ${tbody}.children[2].children[0].innerText === "3"&& ${tbody}.children[2].children[1].innerText === "Zara"&& ${tbody}.children[2].children[2].innerText === "80"
        && ${tbody}.children[2].children[3].innerText === "85"&& ${tbody}.children[2].children[4].innerText === "96"&& ${tbody}.children[2].children[5].innerText === "68"`
        );
        expect(expectedOutput).to.be.true;
    });
    it("below", async function () {
        let messageDisplay = await subjects.getAttribute("value");
        expect(messageDisplay).to.equal("");
        opt3.click()
        let messageDisplay1 = await subjects.getAttribute("value");
        expect(messageDisplay1).to.equal("Science");
        below.click()
        mark.sendKeys(80)
        filter.click()
        const tbody = "document.querySelectorAll('table tbody')[0]";
        const expectedOutput = await driver.executeScript(
            `return document.querySelectorAll('table tbody tr').length === 3 &&
            ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Janu" && ${tbody}.children[0].children[2].innerText === "50" &&
            ${tbody}.children[0].children[3].innerText === "86" && ${tbody}.children[0].children[4].innerText === "77" && ${tbody}.children[0].children[5].innerText === "88" &&
            ${tbody}.children[1].children[0].innerText === "2" && ${tbody}.children[1].children[1].innerText === "Thanu" && ${tbody}.children[1].children[2].innerText === "75" &&
            ${tbody}.children[1].children[3].innerText === "96"&&${tbody}.children[1].children[4].innerText === "67" && ${tbody}.children[1].children[5].innerText === "91"
            && ${tbody}.children[2].children[0].innerText === "3"&& ${tbody}.children[2].children[1].innerText === "Glen"&& ${tbody}.children[2].children[2].innerText === "79"
        && ${tbody}.children[2].children[3].innerText === "68"&& ${tbody}.children[2].children[4].innerText === "77"&& ${tbody}.children[2].children[5].innerText === "78"`
        );
        expect(expectedOutput).to.be.true;
    });
    it("between", async function () {
        opt1.click()
        let messageDisplay1 = await subjects.getAttribute("value");
        expect(messageDisplay1).to.equal("English");
        between.click()
        mark.sendKeys(75)
        maxMark.sendKeys(100)
        filter.click()
        const tbody = "document.querySelectorAll('table tbody')[0]";
        const expectedOutput = await driver.executeScript(
            `return document.querySelectorAll('table tbody tr').length === 3 &&
            ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Tara" && ${tbody}.children[0].children[2].innerText === "90" &&
            ${tbody}.children[0].children[3].innerText === "35" && ${tbody}.children[0].children[4].innerText === "86" && ${tbody}.children[0].children[5].innerText === "100" &&
            ${tbody}.children[1].children[0].innerText === "2" && ${tbody}.children[1].children[1].innerText === "Glen" && ${tbody}.children[1].children[2].innerText === "79" &&
            ${tbody}.children[1].children[3].innerText === "68"&&${tbody}.children[1].children[4].innerText === "77" && ${tbody}.children[1].children[5].innerText === "78"
            && ${tbody}.children[2].children[0].innerText === "3"&& ${tbody}.children[2].children[1].innerText === "Zara"&& ${tbody}.children[2].children[2].innerText === "80"
        && ${tbody}.children[2].children[3].innerText === "85"&& ${tbody}.children[2].children[4].innerText === "96"&& ${tbody}.children[2].children[5].innerText === "68"`
        );
        expect(expectedOutput).to.be.true;
    });
    it("on clicking clear button", async function () {
        let messageDisplay = await subjects.getAttribute("value");
        expect(messageDisplay).to.equal("");
        opt4.click()
        let messageDisplay1 = await subjects.getAttribute("value");
        expect(messageDisplay1).to.equal("SocialScience");
        mark.sendKeys(90)
        filter.click()
        const tbody = "document.querySelectorAll('table tbody')[0]";
        const expectedOutput = await driver.executeScript(
            `return document.querySelectorAll('table tbody tr').length === 2 &&
            ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Thanu" && ${tbody}.children[0].children[2].innerText === "75" &&
            ${tbody}.children[0].children[3].innerText === "96"&&${tbody}.children[0].children[4].innerText === "67" && ${tbody}.children[0].children[5].innerText === "91"
            && ${tbody}.children[1].children[0].innerText === "2"&& ${tbody}.children[1].children[1].innerText === "Tara"&& ${tbody}.children[1].children[2].innerText === "90"
        && ${tbody}.children[1].children[3].innerText === "35"&& ${tbody}.children[1].children[4].innerText === "86"&& ${tbody}.children[1].children[5].innerText === "100"`
        );
        expect(expectedOutput).to.be.true;
        clear.click()
        const expectedOutput1 = await driver.executeScript(`return document.querySelectorAll('table tbody tr').length === 5 &&
        ${tbody}.children[0].children[0].innerText === "1" && ${tbody}.children[0].children[1].innerText === "Janu" && ${tbody}.children[0].children[2].innerText === "50"
        && ${tbody}.children[0].children[3].innerText === "86" && ${tbody}.children[0].children[4].innerText === "77" && ${tbody}.children[0].children[5].innerText === "88"
        && ${tbody}.children[4].children[0].innerText === "5"&& ${tbody}.children[4].children[1].innerText === "Zara"&& ${tbody}.children[4].children[2].innerText === "80"
        && ${tbody}.children[4].children[3].innerText === "85"&& ${tbody}.children[4].children[4].innerText === "96"&& ${tbody}.children[4].children[5].innerText === "68"`);
        expect(expectedOutput1).to.be.true;
    });
    it("on Empty field", async function () {
        let messageDisplay = await subjects.getAttribute("value");
        expect(messageDisplay).to.equal("");
        mark.sendKeys(70)
        filter.click()
        const expectedOutput = await driver.executeScript(
            `return document.querySelectorAll('table tbody tr').length === 5`
        );
        expect(expectedOutput).to.be.true;
    });
});
