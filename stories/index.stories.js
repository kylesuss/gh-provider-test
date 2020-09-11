import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("heading level 1", () => "<h1>Hello World</h1>")
  .add("heading level 2", () => "<h2>Hello World</h2>")
  .add("heading level 3", () => "<h3>Hello World</h3>")
  .add("heading level 4", () => "<h4>Hello World</h4>")
  .add("heading level 5", () => "<h5>Hello World</h5>")
  .add("paragraph", () => "The quick brown fox jumped over the lazy dog.")
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.style = "color:blue;";
    button.innerText = "Derp";
    button.addEventListener("click", (e) => console.log(e));
    return button;
  });
