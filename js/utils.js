export const createHtmlElement = (tagName, className) => {
  const el = document.createElement(tagName);
  if(className) {
    el.classList.add(className);
  }

  return el;
}