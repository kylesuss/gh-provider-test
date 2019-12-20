import { document, console } from "global";
import { storiesOf } from "@storybook/html";

const VIEWPORT_XSMALL = 400;
const VIEWPORT_SMALL = 768;
const VIEWPORT_MEDIUM = 1280;

export default {
  title: "Demo",
  parameters: {
    chromatic: { viewports: [VIEWPORT_XSMALL, VIEWPORT_SMALL, VIEWPORT_MEDIUM] }
  }
};

export const HeadingLevel1 = () => "<h1>Hello World</h1>";

HeadingLevel1.story = {
  name: "heading level 1"
};

export const HeadingLevel2 = () => "<h2>Hello World</h2>";

HeadingLevel2.story = {
  name: "heading level 2"
};

export const HeadingLevel3 = () => "<h3>Hello World</h3>";

HeadingLevel3.story = {
  name: "heading level 3"
};

export const HeadingLevel4 = () => "<h4>Hello World</h4>";

HeadingLevel4.story = {
  name: "heading level 4"
};

export const HeadingLevel5 = () => "<h5>Hello World</h5>";

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
  button.innerText = "Hello Buttonz";
  button.addEventListener("click", e => console.log(e));
  return button;
};

Button.story = {
  name: "button",
  parameters: {
    chromatic: { viewports: [VIEWPORT_SMALL, VIEWPORT_MEDIUM] }
  }
};

storiesOf("Design System|Atoms/Demo", module).add(
  "test",
  () => "<div>Atom Demo</div>"
);

storiesOf("App|Atoms/Demo", module).add("test", () => "<div>App Demo</div>");
