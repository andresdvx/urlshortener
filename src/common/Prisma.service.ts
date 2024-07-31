import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  connect() {
    this.$connect();
  }

  disconect() {
    this.$disconnect();
  }
}
