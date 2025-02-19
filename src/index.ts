import { server } from './server/server';

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
