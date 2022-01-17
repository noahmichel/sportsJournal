// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, Blog, Post, Comment } = initSchema(schema);

export {
  Author,
  Blog,
  Post,
  Comment
};