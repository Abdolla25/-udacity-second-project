import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test user endpoint response', () => {
  it('test get all endpoint', async () => {
    const response = await request.get('/user')
    expect(response.status).toBe(200)
  })
  it('test get one endpoint', async () => {
    const response = await request.get('/user/1')
    expect(response.status).toBe(200)
  })
  it('test create endpoint', async () => {
    const response = await request.post('/user')
    expect(response.status).toBe(200)
  })
  it('test update endpoint', async () => {
    const response = await request.put('/user/1')
    expect(response.status).toBe(200)
  })
  it('test delete endpoint', async () => {
    const response = await request.delete('/user/1')
    expect(response.status).toBe(200)
  })
})

describe('Test product endpoint response', () => {
    it('test get all endpoint', async () => {
      const response = await request.get('/product')
      expect(response.status).toBe(200)
    })
    it('test get one endpoint', async () => {
      const response = await request.get('/product/1')
      expect(response.status).toBe(200)
    })
    it('test create endpoint', async () => {
      const response = await request.post('/product')
      expect(response.status).toBe(200)
    })
    it('test update endpoint', async () => {
      const response = await request.put('/product/1')
      expect(response.status).toBe(200)
    })
    it('test delete endpoint', async () => {
      const response = await request.delete('/product/1')
      expect(response.status).toBe(200)
    })
})

describe('Test order endpoint response', () => {
    it('test get all endpoint', async () => {
      const response = await request.get('/order')
      expect(response.status).toBe(200)
    })
    it('test get one endpoint', async () => {
      const response = await request.get('/order/1')
      expect(response.status).toBe(200)
    })
    it('test create endpoint', async () => {
      const response = await request.post('/order')
      expect(response.status).toBe(200)
    })
    it('test update endpoint', async () => {
      const response = await request.put('/order/1')
      expect(response.status).toBe(200)
    })
    it('test delete endpoint', async () => {
      const response = await request.delete('/order/1')
      expect(response.status).toBe(200)
    })
})
