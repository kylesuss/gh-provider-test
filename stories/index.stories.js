import { document, console } from "global";

export default {
  title: "Demo"
};

export const HeadingLevel1 = () => "<h1>Heading Level 1</h1>";

HeadingLevel1.story = {
  name: "heading level 1"
};

export const HeadingLevel3 = () => "<h3>Heading Level 3</h3>";

HeadingLevel3.story = {
  name: "heading level 3"
};

export const HeadingLevel4 = () => "<h4>Heading Level 4</h4>";

HeadingLevel4.story = {
  name: "heading level 4"
};

export const HeadingLevel5 = () => "<h5>Heading Level 5</h5>";

HeadingLevel5.story = {
  name: "heading level 5"
};

export const Paragraph = () => "The quick brown fox jumped over the lazy dog.";

Paragraph.story = {
  name: "paragraph"
};

export const Button = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.style = "color:green;";
  button.innerText = "Hello Button";
  button.addEventListener("click", e => console.log(e));
  return button;
};

Button.story = {
  name: "button"
};
