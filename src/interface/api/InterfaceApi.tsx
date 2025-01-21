export type ApiError = {
    message: string;
    errors: {
      field: string;
      message: string;
    }[];
  };