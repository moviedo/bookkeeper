import { BaseCommand, args } from '@adonisjs/core/build/standalone'

export default class CreateDb extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'create:db'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create database'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  @args.string({ description: 'Name of the database to create' })
  public name: string

  public async run() {
    const { default: Database } = await import('@ioc:Adonis/Lucid/Database')
    if (this.name !== undefined && this.name !== null) {
      await Database.rawQuery(`CREATE DATABASE ${this.name}`)
    }
  }
}
