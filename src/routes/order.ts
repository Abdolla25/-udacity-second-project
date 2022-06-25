import express from 'express'
const order = express.Router()

order.get('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get all route' })
})

order.get('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get one route' })
})

order.post('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is create route' })
})

order.put('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is update route' })
})

order.delete('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is delete route' })
})

export default order