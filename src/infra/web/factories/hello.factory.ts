import HelloUseCase from "../../../usecases/hello.usecase";
import { CompareFieldLengthValidator } from "../../../utils/validator/compare-fields-length.validator copy";
import { RequiredFieldValidation } from "../../../utils/validator/require-fields.validator";
import { IValidation, ValidationComposite } from "../../../utils/validator/validator.composite";
import HelloHandler from "../handlers/hello.handler";
import { IController } from "../presentation/interfaces";

export const makeHelloHandler = (): IController => {
    const usecase = new HelloUseCase()
	const addSurveyController = new HelloHandler(usecase, helloValidation());

	return addSurveyController;
};


const helloValidation = (): ValidationComposite => {
	const requiredField = 'name';
	const validationArr: IValidation[] = [];

	validationArr.push(new RequiredFieldValidation(requiredField));
    validationArr.push(new CompareFieldLengthValidator(requiredField, 2));
	return new ValidationComposite(validationArr);
};