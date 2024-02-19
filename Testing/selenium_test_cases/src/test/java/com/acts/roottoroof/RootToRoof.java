package com.acts.roottoroof;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.acts.utils.Utils;


public class RootToRoof {
    private WebDriver driver;

    String url = "http://localhost:5173/";

    @BeforeClass
    public void setUp() {
        driver = Utils.getWebDriver();
    }

    @Test
    public void launchChrome() {
        
        driver.get(url);
        
        driver.manage().window().maximize();
        
        System.out.println(driver.getTitle());
        System.out.println(driver.getCurrentUrl());
        
    }


    @Test
    public void verifyPageTittle() throws InterruptedException {

        driver.get(url);

        // Mazimize current window
        driver.manage().window().maximize();

        // Delay execution for 5 seconds to view the maximize operation
        Thread.sleep(5000);

        // driver.navigate().to(url);
        String title = driver.getTitle();
        Assert.assertEquals(title, "RootToRoofOrganics");
    }

    @Test
    public void verifySignUpLink() throws InterruptedException {
        driver.get(url);
        driver.manage().window().maximize();
        

        WebElement webElement = driver.findElement(By.linkText("Sign up"));

        webElement.click();
        Thread.sleep(3000);

        String title = driver.getTitle();
        Assert.assertEquals(title, "RootToRoofOrganics");
    }
	  
    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}