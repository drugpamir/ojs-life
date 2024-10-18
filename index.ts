import { runApp } from "./ts/app";

const rootElement = document.querySelector(".app");
if (rootElement) {
  runApp(rootElement);
} else {
  throw new Error("Can't found root element");
}
