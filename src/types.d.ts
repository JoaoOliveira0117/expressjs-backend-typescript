interface ResponseData {
  [key: any]: any
}

export interface ApiResponse {
  data?: ResponseData
  error?: string
}
