import { test } from '@japa/runner'

test.group('Auth login', () => {
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
})
