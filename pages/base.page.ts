import { expect, type Locator, type Page } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async open(path:string) {
    await this.page.goto(path);
  }

  async refresh() {
    await this.page.reload();
  }


  async fillInput(elem:string, value:string) {
    await this.page.locator(elem).type(value);
  }

  async clickElem(elem:string) {
    await this.page.locator(elem).click();
  }

  // async isEnabled(elem:By) {
  //   await this.driver.findElement(elem).isEnabled()
  // }

  
  // async close() {
  //   return await this.driver.quit()
  // }
}