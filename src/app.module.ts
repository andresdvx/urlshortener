import { Application } from "express";
import { UrlModule } from "./Url/url.module";

export class AppModule {
  private modules = [new UrlModule()];
  constructor() {}

  configureApp(app: Application) {
    this.modules.forEach((module) => {
      module.configureApp(app);
    });
  }
}
