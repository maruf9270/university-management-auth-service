import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'

import academicSemisterCodeMapper from './academicSemister.constent'
import { IAcademicSemister } from './academicSemister.interface'
import { AcademicSemister } from './academicSemister.model'

const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Semister code did not match')
  }
  const result = await AcademicSemister.create(payload)
  return result
}

export const AcademicSemisterService = {
  createSemister,
}
