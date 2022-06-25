import express from 'express'
const product = express.Router()

product.get('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get all route' })
})

product.get('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get one route' })
})

product.post('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is create route' })
})

product.put('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is update route' })
})

product.delete('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is delete route' })
})

export default product