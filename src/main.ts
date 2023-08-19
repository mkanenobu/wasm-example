import "./style.css";
import { greetWithAlert, greet } from "./wasm";

document.getElementById("say-hello")?.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  (document.getElementById("response") as HTMLDivElement).innerText =
    greet(name);
});

document
  .getElementById("say-hello-with-alert")
  ?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    greetWithAlert(name);
  });
