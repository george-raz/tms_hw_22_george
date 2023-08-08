import { test, expect } from "@playwright/test"
import PageFactory from "../pages/factory.page.js";
import ForgotPasswordPage from "../pages/forgot.page.js";
import HomePage from "../pages/home.page.js";

test.describe("Forgot password page checks", () => {
    let forgotPassword: any;
    test.beforeEach(async({page}) => {
        forgotPassword = new ForgotPasswordPage(page) as ForgotPasswordPage;
        await forgotPassword.open();  
    })
    
    test("Page content is accurate", async ({ page }) => {
        let title = "Forgot password?"
        let description = "Enter your details below to request an Envato account password reset.";
        expect(await forgotPassword.title.textContent()).toStrictEqual(title);
        expect(await forgotPassword.description.textContent()).toStrictEqual(description);
    })

    test("User name and email inputs are required", async ({ page }) => {
        let usernameError = "Username is required"
        let emailError = "Email is required";
        // await forgotPassword.clickElem(await forgotPassword.btnSubmit); 
        // await page.locator(await forgotPassword.btnSubmit).click()
        await page.getByText('Submit').click();
        expect(await forgotPassword.userNameErrorMsg.textContent()).toStrictEqual(usernameError);
        expect(await forgotPassword.emailErrorMsg.textContent()).toStrictEqual(emailError);
    })
    test("Invalid email format is validated", async ({ page }) => {
        let emailError = "Email is invalid";
        await page.getByTestId("email").type("invalid");
        await page.getByText('Submit').click();
        expect(await forgotPassword.emailErrorMsg.textContent()).toStrictEqual(emailError);
    })
    test("Invalid email error message disappears after format is changed to valid", async ({ page }) => {
        await page.getByTestId("email").type("invalid");
        await page.getByText('Submit').click();
        await page.getByTestId("email").type("test@gmail.com");
        expect(page.locator("//div[@data-testid='email-error']").all()).toMatchObject({});
    })
    test("Error messages disappear after page refresh", async ({ page }) => {
        await page.getByText('Submit').click();
        await page.waitForSelector("//div[@data-testid='email-error']")
        await forgotPassword.refresh()
        expect(await page.locator("//div[@data-testid='email-error']").all()).toMatchObject({});
        expect(await page.locator("//div[@data-testid='user-error']").all()).toMatchObject({});
    })
})



