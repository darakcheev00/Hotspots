import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { LocationSchema } from './location.model';


@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://darakcheev360:AS3kLLeZLGi2vcF5@cluster0.bacyir1.mongodb.net/?retryWrites=true&w=majority"
    ),
    MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }]), // Register LocationSchema
  ],
  providers: [DatabaseService]
})
export class AppModule {}
