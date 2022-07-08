import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'
import { test } from '@japa/runner'

test.group('Auth login', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('api exists', async ({ client }) => {
    const response = await client.post('api/auth/login').form({
      username: 'test101',
      password: 'secret',
    })
    response.assertStatus(401)
    response.assertBody({
      errors: [
        {
          message: 'E_INVALID_AUTH_UID: Invalid credentials',
        },
      ],
    })
  })

  test('authenticate user', async ({ client }) => {
    const user: User = await UserFactory.create()

    const response = await client.post('api/auth/login').form({
      username: user.username,
      password: user.password,
    })
    response.assertStatus(200)
    response.assert?.properties(response.body(), ['token', 'type'])
  })
})
