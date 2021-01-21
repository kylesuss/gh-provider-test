import { document } from "global";

export default {
  title: 'Test'
}

export const HeadingLevel1 = () => "<h1>Hello World</h1>"
export const HeadingLevel2 = () => "<h2>Hello World</h2>"
export const HeadingLevel3 = () => "<h3>Hello World</h3>"
export const HeadingLevel4 = () => "<h4>Hello World</h4>"
export const HeadingLevel5 = () => "<h5>Hello World</h5>"
export const Paragraph = () => "<p>The quick brown fox jumped over the lazy dog.</p>"
export const Button = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.style = "color:green;";
  button.innerText = "Last chance baby!!";
  button.addEventListener("click", (e) => console.log(e));
  return button;
}
