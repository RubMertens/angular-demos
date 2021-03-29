import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display 3 items", async () => {
    await page.navigateTo();
    const count = await page.expenses.count();
    expect(count).toBe(3);
  })

  it("should add to form when entered", async () => {
    await page.navigateTo();
    await page.description.sendKeys("test");
    await page.amount.sendKeys("100");
    await page.date.sendKeys("01/01/2020");
    await page.submit.click();

    const count = await page.expenses.count();
    expect(count).toBe(4);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
