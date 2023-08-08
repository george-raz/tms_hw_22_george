import { expect, type Locator, type Page } from '@playwright/test';
import BasePage from "./base.page.js";

export default class ForgotPasswordPage extends BasePage {
  public readonly url: string = "https://account.envato.com/reset_password?to=audiojungle";

  get userNameErrorMsg () {
    return this.page.locator("//div[@data-testid='username-error']");
  }
  get emailErrorMsg () {
    return this.page.locator("//div[@data-testid='email-error']");
  }

  get btnSubmit () {
    return this.page.locator("//button[@data-testid='submitButton']")
  }

  get inputEmail () {
    return this.page.locator("//input[@id='email']")
  }

  get title () {
    return this.page.locator("//div[@data-testid='requestResetFormTitle']");
  }
  get description () {
    return this.page.locator("//div[@class='sc-gEvEer Xzwsn sc-fPXMVe sc-bmzYkS jAwgXy jMJQjw']");
  }

  async open () {
    return await super.open(this.url)
  }
}