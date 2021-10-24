import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka/spa-demo-header",
  app: () => System.import("@sofka/spa-demo-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka/spa-demo-test-page",
  app: () => System.import("@sofka/spa-demo-test-page"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka/spa-demo-home",
  app: () => System.import("@sofka/spa-demo-home"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
