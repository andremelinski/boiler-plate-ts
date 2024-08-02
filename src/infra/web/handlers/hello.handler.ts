import { IHelloUseCase } from "../../../usecases/hello.usecase";
import { badRequest, noContent, ok, serverError } from "../../../utils/http/http-client";
import { IValidation } from "../../../utils/validator/validator.composite";
import { HttpResponse, HttpRequest, IController } from "../presentation/interfaces";

export default class HelloHandler implements IController {
	constructor(private readonly usecase: IHelloUseCase, private readonly validation: IValidation) {}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest?.body);

			if (error) {
				return badRequest(error);
			}
			const { name } = httpRequest.body;
			// const addSurvey: IAddSurveyDto = { question, answers, date: new Date() };

			const resp = this.usecase.hello(name);
			
			return resp? ok(name) : noContent();
		} catch (error) {
			return serverError(error);
		}
	}
}