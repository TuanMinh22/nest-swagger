/* eslint-disable prettier/prettier */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  ExceptionDescription,
  ExceptionDescription_FA,
} from './exception-description';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    return response.status(status).json({
      status,
      message:
        ExceptionDescription[HttpStatus[status]] === exception.message
          ? ExceptionDescription_FA[HttpStatus[status]] ?? 'Có một lỗi'
          : exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
