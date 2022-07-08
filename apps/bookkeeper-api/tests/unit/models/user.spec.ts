import Database from '@ioc:Adonis/Lucid/Database'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'
import { test } from '@japa/runner'

test.group('User model', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    Hash.restore()

    return async () => {
      Hash.fake()
      await Database.rollbackGlobalTransaction()
    }
  })

  test('authenticate user', async ({ assert }) => {
    const password = 'secret'
    const user: User = await UserFactory.merge({ password }).create()

    assert.isTrue(user.password.includes('argon2'))
  })
})
