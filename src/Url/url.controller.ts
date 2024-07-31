import { UrlService } from "./url.service";
import { Application, Request, Response } from "express";

export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  configureApp(app: Application) {
    app.post("/api/url/create", this.CreateUrlController.bind(this));
    app.get("/api/url/getUrl/:urlId", this.GetUrlController.bind(this));
  }

  async CreateUrlController(req: Request, res: Response) {
    try {
      const data = req.body;
      const url = await this.urlService.CreateUrlService(data);
      return res.status(201).json(url);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async GetUrlController(req: Request, res: Response) {
    try {
      const { urlId } = req.params;
      const url = await this.urlService.GetUrlService(urlId);
      return res.status(200).json(url);
    } catch (error) {
      return res.status(501).json({ message: error });
    }
  }
}
