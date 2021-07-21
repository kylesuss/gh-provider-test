import { document } from "global";

export default {
  title: 'Test'
}

export const HeadingLevel1 = () => "<h1>Hello World</h1>"

export const Paragraph = () => "<p>The quick brown fox jumped over the lazy dog.</p>"
Paragraph.story = {
  parameters: {
    chromatic: { viewports: [600, 1200] }
  }
}
export const Button = () => {
  const div = document.createElement("div");
  div.style = "display:inline-block;";

  const button = document.createElement("button");
  button.type = "button";
  button.style = "color:purple;";
  button.innerText = "I am buttonz!!";
  button.addEventListener("click", (e) => console.log(e));

  const ignored = document.createElement("div");
  ignored.textContent = "Ignore";
  ignored.classList.add('chromatic-ignore');

  div.appendChild(button);
  div.appendChild(ignored);

  return div;
}
Button.story = {
  parameters: {
    chromatic: { viewports: [600, 1200] }
  }
}

export const TallThing = () => {
  const div = document.createElement("div");
  div.style = "width: 400px; height: 2000px; background: red;";
  return div;
}