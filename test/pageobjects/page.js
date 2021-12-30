class Page {
  async open(path) {
    await browser.url(path);
    await browser.maximizeWindow();
  }

  async enterText(element, text) {
    await element.waitForExist();
    await element.addValue(text);
    await element.keys('Enter');
  }

  async selectDropDownList(openDropDown, changeItem) {
    await openDropDown.click();
    await changeItem.waitForClickable();
    await changeItem.click();
  }

  async click(element) {
    await element.click();
  }
  async findTextToCompare(element) {
    await element.getText();
  }
}

module.exports = Page;
