import loadComponent from "/src/helpers/loadComponent.js";
import { smoothScroll } from "/src/helpers/smoothScroll.js";
import { url } from "/src/helpers/urlConfig.js";
import fetchRegister from "/src/pages/register/fetchreg.js";

export async function main() {
  const promise = loadComponent("", url.pages.register + "register.html");

  promise
    .then(() => {
      smoothScroll();
      fetchRegister();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
