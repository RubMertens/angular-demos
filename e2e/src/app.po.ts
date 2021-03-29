import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  get description(): ElementFinder {
    return element(by.id("description"))
  }
  get amount(): ElementFinder {
    return element(by.id("amount"))
  }

  get date(): ElementFinder {
    return element(by.id("date"))
  }

  get submit(): ElementFinder {
    return element(by.css("button[type='submit']"));
  }

  get expenses(): ElementArrayFinder {
    return element.all(by.css("tbody tr"))
  }
}
