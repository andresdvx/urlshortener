import { PrismaService } from "../common/Prisma.service";
import { Url } from "@prisma/client";
export class UrlService {
  constructor(private readonly prismaService: PrismaService) {}

  async CreateUrlService(data: Url): Promise<Url> {
    return await this.prismaService.url.create({
      data,
    });
  }

  async GetUrlService(urlId: string): Promise<Url | null> {
    return await this.prismaService.url.findUnique({
      where: {
        urlId,
      },
    });
  }
}
