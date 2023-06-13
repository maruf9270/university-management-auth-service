import { Model, Schema, model } from 'mongoose'
import { IAcademicSemister } from './academicSemister.interface'
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitle,
} from './academicSemister.constent'

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

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemisterSchema
)
