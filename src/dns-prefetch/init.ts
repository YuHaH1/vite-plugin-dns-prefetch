import type { IOptions, IUserOptions } from '../types'
import { DEFAULTOPTIONS } from '../utils/constant'
const init = (UserOptions: IUserOptions): IOptions => {
  const options = Object.assign(DEFAULTOPTIONS, UserOptions)
  return options
}

export { init }
