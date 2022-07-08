import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'
import { test } from '@japa/runner'

test.group('Auth logout', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('api exists', async ({ client }) => {
    const response = await client.post('api/auth/logout')
    response.assertStatus(401)
    response.assertBody({
      errors: [
        {
          message: 'E_UNAUTHORIZED_ACCESS: Unauthorized access',
        },
      ],
    })
  })

  test('revoke user', async ({ client }) => {
    const user: User = await UserFactory.create()
    const response = await client.post('api/auth/logout').loginAs(user)
    response.assertStatus(200)
    response.assertBody({ revoked: true })
  })
})
