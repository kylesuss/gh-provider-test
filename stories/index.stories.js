import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("Test|Atoms/Demo/heading level 1", () => "<h1>Hello World</h1>")
  .add("Test|Atoms/Demo/heading level 2", () => "<h2>Hello World</h2>")
  .add("Test|Atoms/Demo/heading level 3", () => "<h3>Hello World</h3>")
  .add("Test|Atoms/Demo/heading level 4", () => "<h4>Hello World</h4>")
  .add("Test|Atoms/Demo/heading level 5", () => "<h5>Hello World</h5>")
  .add(
    "Test|Atoms/Demo/paragraph",
    () => "The quick brown fox jumped over the lazy dog."
  )
  .add("Test|Atoms/Demo/button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.style = "color:green;";
    button.innerText = "Hello Buttonz";
    button.addEventListener("click", e => console.log(e));
    return button;
  });
