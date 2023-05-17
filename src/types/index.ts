interface IOptions {
  limit: number
  parseFile: string[]
  addDnsUrl: string[]
  excludeDnsPrefetchUrl: string[]
}
interface IUserOptions extends Partial<IOptions> {

}
export { IOptions, IUserOptions }
