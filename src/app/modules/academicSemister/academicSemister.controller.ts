import { RequestHandler } from 'express'
import { AcademicSemisterService } from './academicSemister.services'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicSemister } from './academicSemister.interface'

const createAcademicSemister: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const result = await AcademicSemisterService.createSemister(req.body)
    sendResponse<IAcademicSemister>(res, {
      success: true,
      statusCode: 200,
      message: 'Academic semister created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AcademicSemisterController = {
  createAcademicSemister,
}
