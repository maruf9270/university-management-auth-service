import { RequestHandler } from 'express'
import { AcademicSemisterService } from './academicSemister.services'

const createAcademicSemister: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const result = await AcademicSemisterService.createSemister(req.body)
    res.status(200).json({
      success: true,
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
