import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test index endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
