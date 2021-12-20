class ResultPage {
  get showPageTitle() {
    return $('//div[@class="info-top"]');
  }

  get showTextHighlightning() {
    return $('//a[text()="Bash"]');
  }

  get findRowTextArea() {
    return $('//textarea[@class="textarea"]');
  }

  get findCompleteTextArea() {
    return $('//div[@class="de1"]/child::*');
  }
}

module.exports = ResultPage;
