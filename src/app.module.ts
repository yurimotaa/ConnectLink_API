import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ClientModule } from './modules/client/client.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [UsersModule, ClientModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
