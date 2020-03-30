import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

/**
 * Exception Filters are called after the route handler and after the interceptors.
 * They are the last place to make changes before a response goes out.
 */
@Catch ()
export class CatchAllFilter implements ExceptionFilter<HttpException> {


	catch (exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp () // Or WebSockets / RPC
		const response = ctx.getResponse <Response> ()
		const request = ctx.getRequest <Request> ()
		console.log('hello from exception: ', exception.message)
		response.status(200).send('Hello World!')
	}
}
