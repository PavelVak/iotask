import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop({ unique: true })
  public email: string;

  @Prop()
  public name: string;

  @Prop()
  public password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
