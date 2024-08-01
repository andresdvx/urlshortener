import { PrismaService } from "../common/Prisma.service";
import { Url } from "@prisma/client";

export class UrlService {
  constructor(private readonly prismaService: PrismaService) {}

  async CreateUrlService(data: Url): Promise<Url> {
    return this.prismaService.url.create({
      data,
    });
  }

  async GetUrlService(urlId: string): Promise<Url | null> {
    return this.prismaService.url.findUnique({
      where: {
        urlId,
      },
    });
  }

  async GetAllUrlsService(): Promise<Url[]> {
    return this.prismaService.url.findMany();
  }

  async EditUrlService(urlId: string, data: Partial<Url>): Promise<Url> {
    return this.prismaService.url.update({
      where: {
        urlId,
      },
      data,
    });
  }

  async DeleteUrlService(urlId: string): Promise<Url> {
    return this.prismaService.url.delete({
      where: {
        urlId,
      },
    });
  }
}
