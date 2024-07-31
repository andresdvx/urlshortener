import { UrlController } from "./url.controller";
import { UrlService } from "./url.service";
import { PrismaService } from "../common/Prisma.service";
import { Application } from "express";

export class UrlModule {
  private urlController: UrlController;
  private urlService: UrlService;
  private prismaService: PrismaService;

  constructor() {
    this.prismaService = new PrismaService();
    this.urlService = new UrlService(this.prismaService);
    this.urlController = new UrlController(this.urlService);
  }

  configureApp(app: Application) {
    this.prismaService
      .$connect()
      .then((res) => console.log("db connected"))
      .catch((res) => console.log(res));
    this.urlController.configureApp(app);
  }
}
