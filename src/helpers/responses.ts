import { Response } from 'express'
import { ApiResponse } from '../types'

function success (res: Response, data: any, status = 200): Response<ApiResponse> {
  return res.status(status).json({
    data
  })
}

function error (res: Response, error: any, status = 400): Response<ApiResponse> {
  return res.status(status).json({
    error
  })
}

export { success, error }
