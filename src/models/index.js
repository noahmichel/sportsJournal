// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Logos, Author, Blog, Post, Comment } = initSchema(schema);

export {
  Logos,
  Author,
  Blog,
  Post,
  Comment
};