import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Academy TCG API")
    .setDescription("Documentação da API Pokémon TCG do Academy")
    .setVersion("1.0")
    .addTag("Kickops Academy")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, documentFactory());

  app.enableCors();

  await app.listen(3000);
}

bootstrap();
