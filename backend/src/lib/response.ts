export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export const response = {
  success<T>(message: string, data?: T): ApiResponse<T> {
    return {
      success: true,
      message,
      data,
    };
  },

  error(message: string, errors?: any[]): ApiResponse {
    return {
      success: false,
      message,
      errors,
    };
  },
};
