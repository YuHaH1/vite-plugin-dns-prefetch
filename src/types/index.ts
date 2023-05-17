interface IOptions {
  limit: number
  parseFile: '.ts' | '.js'
  addDnsUrl: string[]
  excludeDnsPrefetchUrl: string[]
}
interface IUserOptions extends Partial<IOptions> {

}
export { IOptions, IUserOptions }
