import { HttpResponse } from '../../infra/web/presentation/interfaces';
import { ServerError, UnauthorizedError } from './errors';

export const badRequest = (error: Error): HttpResponse => {
	return {
		statusCode: 400,
		body: error,
	};
};

export const unauthorized = (): HttpResponse => {
	return {
		statusCode: 401,
		body:  new UnauthorizedError(),
	};
};

export const forbidden = (error: Error): HttpResponse => {
	return {
		statusCode: 403,
		body: error,
	};
};

export const serverError = (error: Error): HttpResponse => {
	return {
		statusCode: 500,
		body: new ServerError(error?.stack || error.message),
	};
};

export const ok = (data: any): HttpResponse => {
	return {
		statusCode: 200,
		body: data,
	};
};
export const noContent = (): HttpResponse => {
	return {
		statusCode: 204,
		body: null,
	};
};