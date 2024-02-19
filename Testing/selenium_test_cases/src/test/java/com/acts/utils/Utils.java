package com.acts.utils;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Utils {
    // get webdriver instance
    public static WebDriver getWebDriver() {
        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        return driver;
    }

    // // checkbox
    // public static void selectCheckBox(WebDriver driver, By locator, String value) {
    //     List<WebElement> checkBoxes = driver.findElements(locator);

    //     for (WebElement checkBox : checkBoxes) {
    //         if (checkBox.getAttribute("id").equalsIgnoreCase(value)) {
    //             checkBox.click();
    //         }
    //     }
    // }

  
    // // select by value
    // public static void selectSelectByValue(WebDriver driver, By locator, String value) {
    //     WebElement menu = driver.findElement(locator);

    //     Select select = new Select(menu);

    //     List<WebElement> options = select.getOptions();

    //     for (WebElement webElement : options) {
    //         if (webElement.getAttribute("value").equalsIgnoreCase(value)) {
    //             select.selectByValue(value);
    //         }
    //     }
    // }

    // // select by text
    // public static void selectSelectByText(WebDriver driver, By locator, String text) {
    //     WebElement menu = driver.findElement(locator);

    //     Select select = new Select(menu);

    //     List<WebElement> options = select.getOptions();

    //     for (WebElement webElement : options) {
    //         if (webElement.getText().equalsIgnoreCase(text)) {
    //             select.selectByVisibleText(text);
    //         }
    //     }
    // }


}
