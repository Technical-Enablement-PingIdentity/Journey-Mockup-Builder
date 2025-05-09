import * as path from 'path';
import { fileURLToPath } from 'url';
import Fastify from 'fastify';
import FastifyStatic from '@fastify/static';
import cors from '@fastify/cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });
await fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH'],
});

fastify.register(FastifyStatic, {
  root: path.join(__dirname, 'dist'),
});

fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html', path.join(__dirname, '/dist'));
});

fastify.get('/api/proxy-image', async (request, reply) => {
  const { url } = request.query;
  if (!url) {
    return reply.status(400).send({ error: 'URL is required' });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return reply.status(500).send({ error: 'Failed to fetch image' });
    }

    const contentType =
      response.headers.get('content-type') || 'application/octet-stream';

    const buffer = Buffer.from(await response.arrayBuffer());
    reply.type(contentType).send(buffer);
  } catch (error) {
    fastify.log.error(error);
    return reply.status(500).send({ error: 'Failed to fetch image' });
  }
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
