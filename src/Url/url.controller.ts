import { UrlService } from "./url.service";
import { Application, Request, Response } from "express";

export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  configureApp(app: Application) {
    app.post("/api/url/create", this.CreateUrlController.bind(this));
    app.get("/api/url/getUrl/:urlId", this.GetUrlController.bind(this));
    app.get("/api/url/getAllUrls", this.GetAllUrlsController.bind(this));
    app.put("/api/url/editUrl/:urlId", this.EditUrlController.bind(this));
    app.delete(
      "/api/url/deleteUrl/:urlId",
      this.DeleteUrlController.bind(this)
    );
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

  async GetAllUrlsController(req: Request, res: Response) {
    try {
      const urls = await this.urlService.GetAllUrlsService();
      return res.status(200).json(urls);
    } catch (error) {
      return res.status(501).json({ message: error });
    }
  }

  async EditUrlController(req: Request, res: Response) {
    try {
      const { urlId } = req.params;
      const data = req.body;
      const url = await this.urlService.EditUrlService(urlId, data);
      return res.status(200).json(url);
    } catch (error) {
      return res.status(501).json({ message: error });
    }
  }
  async DeleteUrlController(req: Request, res: Response) {
    try {
      const { urlId } = req.params;
      const url = await this.urlService.DeleteUrlService(urlId);
      return res.status(200).json(url);
    } catch (error) {
      return res.status(501).json({ message: error });
    }
  }
}
