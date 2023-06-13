import { z } from 'zod'
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitle,
} from './academicSemister.constent'

const academicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemisterTitle] as [string, ...string[]], {
      required_error: 'Titel is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum([...academicSemisterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: 'Month is required',
    }),
    endMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: 'End omonth is required',
    }),
  }),
})

export const AcademicSemisterValidation = academicSemisterZodSchema
