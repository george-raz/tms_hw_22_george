import { expect, type Locator, type Page } from '@playwright/test';
import ForgotPasswordPage from "./forgot.page.js";
import HomePage from "./home.page.js";
import BasePage from "./base.page.js";


export default class PageFactory {
  readonly page: Page;
  constructor(page:Page) {
    this.page = page
  }
  getPage(pageName:string) {
    switch (pageName) {
      case "HomePage":
        return new HomePage(this.page);
      case "ForgotPasswordPage":
        return new ForgotPasswordPage(this.page);
    }
  }
}