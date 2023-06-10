import { IResultOperation } from "../models/Interfaces/IResultOperations";
import { FastifyRequest, FastifyReply, FastifyError } from "fastify";
const errorHandler = (
	error: FastifyError,
	request: FastifyRequest,
	reply: FastifyReply
) => {
	const statusCode = error.statusCode || 500;
	const errorMessage = error.message || "Internal Server Error";

	reply.code(statusCode).send({
		isSuccessful: false,
		data: errorMessage,
		message: error.message,
	} as IResultOperation);
};
export { errorHandler as customInternalHandler };
