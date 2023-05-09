import { Request, Response } from 'express';
import { ContentMessagesModel, ContentMessagesDocument, ContentMessage } from '../models/ContentMessageModel';

// Add an array of contentMessage objects to the current collection
export const addContentMessages = async (req: Request, res: Response) => {
  try {
    const { contentMessages }: { contentMessages: ContentMessage[] } = req.body;

    // Find the existing contentMessages document or create a new one if it doesn't exist
    let contentMessagesDocument: ContentMessagesDocument | null = await ContentMessagesModel.findOne();

    if (!contentMessagesDocument) {
      contentMessagesDocument = new ContentMessagesModel();
    }

    // Add the new contentMessages to the current collection
    contentMessagesDocument.contentMessages.push(...contentMessages);

    // Save the updated contentMessages document
    await contentMessagesDocument.save();

    res.status(200).json(contentMessagesDocument);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
