import { Response } from "express";
import { response_status_codes } from "../model";

export function successResponse(message: string, data: any, res: Response) {
  res.status(response_status_codes.success).json({
    status: "SUCCESS",
    message: message,
    data,
  });
}

export function failureResponse(message: string, data: any, res: Response) {
  res.status(response_status_codes.success).json({
    status: "FAILURE",
    message: message,
    data,
  });
}

export function insufficientParameters(res: Response) {
  res.status(response_status_codes.bad_request).json({
    STATUS: "FAILURE",
    MESSAGE: "Insufficient parameters",
    DATA: {},
  });
}

export function mongoError(err: any, res: Response) {
  res.status(response_status_codes.internal_server_error).json({
    STATUS: "FAILURE",
    MESSAGE: "MongoDB error",
    DATA: err,
  });
}
