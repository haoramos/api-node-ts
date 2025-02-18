import {server} from './server/server'

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Running on port: ${port}`);
})