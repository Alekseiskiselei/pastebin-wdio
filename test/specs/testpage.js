const { expect } = require('chai');

const StartPage = require('../pageobjects/startPage');
const ResultPage = require('../pageobjects/resultPage');

describe('Testing functionality of web application', async function () {
  const startPage = new StartPage();
  const resultPage = new ResultPage();

  const newPasteText = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;
  const pasteNameText = 'how to gain dominance among developers';

  before(async function () {
    

    await startPage.open();
    await browser.maximizeWindow();
    await startPage.findTextArea.addValue(newPasteText);
    await startPage.chooseHighlightningBtn.click();
    await startPage.selectBashBtn.click();
    await startPage.toggleSyntaxHighlightning.click();
    await startPage.choosePasteExpirationBtn.click();
    await startPage.select10MinutesExporationBtn.click();
    await startPage.findPasteNameArea.addValue(pasteNameText);
    await startPage.findPasteNameArea.keys('Enter');
  });

  it('should browser`s page name matches Paste`s name', async function () {
    const title = await resultPage.showPageTitle.getText();
    expect(title).to.be.equal('how to gain dominance among developers');
  });

  it('should the syntax be highlighted for Bash', async function () {
    const highlightedSyntax = await resultPage.showTextHighlightning.getText();
    expect(highlightedSyntax).to.be.equal('Bash');
  });

  it('should final code conform initial code', async function () {
    const initialText = await resultPage.findRowTextArea.getText();
    const finalText = await resultPage.findCompleteTextArea.getText();
    expect(initialText).to.be.include(finalText);
  });
});
