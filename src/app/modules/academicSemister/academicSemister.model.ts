import { Model, Schema, model } from 'mongoose'
import status from 'http-status'
import { IAcademicSemister } from './academicSemister.interface'
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitle,
} from './academicSemister.constent'
import ApiError from '../../../errors/ApiError'

type AcademicSemisterModel = Model<IAcademicSemister, object>

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemisterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
  },
  {
    timestamps: true,
  }
)

// Checking if the academic year has duplicate entry with prehook
academicSemisterSchema.pre('save', async function (next) {
  const doesExist = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  })
  if (doesExist) {
    throw new ApiError(status.CONFLICT, 'Academic semister is already exists')
  }
  next()
})

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemisterSchema
)
