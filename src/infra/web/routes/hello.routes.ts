import { Router } from 'express';
import { adaptRoute } from '../presentation/express-route.adapter';
import { makeHelloHandler } from '../factories/hello.factory';


export default (router: Router): void => {
	router.post('/hello', adaptRoute(makeHelloHandler()));
};