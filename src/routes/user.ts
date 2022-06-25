import express from 'express'
const user = express.Router()

user.get('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get all route' })
})

user.get('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is get one route' })
})

user.post('/', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is create route' })
})

user.put('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is update route' })
})

user.delete('/:id', (_req: express.Request, res: express.Response) => {
    res.json({ message: 'This is delete route' })
})

export default user