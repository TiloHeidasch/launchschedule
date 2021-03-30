let scrollIntoView = function(element) {
  arguments[0].scrollIntoView();
};
export function clickElement(browser, element) {
  browser.executeScript(scrollIntoView, element);
  element.click();
}
