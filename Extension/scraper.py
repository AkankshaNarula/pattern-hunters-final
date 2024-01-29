from selenium import webdriver
from selenium.webdriver.common.by import By
import time
driver = webdriver.Chrome()
driver.get("https://amazon.in")
print(driver.find_element(By.ID,"navbar-main").text)
# print(html)
time.sleep(6)
driver.close()