import { Schema, model, Document } from 'mongoose';

// Define the interface for the contentMessage document
export interface ContentMessage extends Document {
  role: string;
  content: string;
}

// Define the contentMessage schema
export const ContentMessageSchema = new Schema<ContentMessage>({
  role: { type: String, required: true },
  content: { type: String, required: true },
});

// Define the interface for the contentMessages document with a collection of contentMessage objects
export interface ContentMessagesDocument extends Document {
  contentMessages: ContentMessage[];
}

// Create and export the Mongoose model
export const ContentMessagesModel = model<ContentMessagesDocument>('ContentMessages', new Schema({
  contentMessages: [ContentMessageSchema],
}));
