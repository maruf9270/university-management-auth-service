import config from '../../../config'
import { Iuser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: Iuser): Promise<Iuser | null> => {
  // Need to use a auto incremental id and a default password

  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  return createdUser
}
export const UserServices = {
  createUser,
}
