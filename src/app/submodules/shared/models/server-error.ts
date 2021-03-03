export class ServerError {
	code!: number;
	message!: string;
	details!: string[];

	constructor(code: number, message: string, details: string[]) {
		this.code = code;
		this.message = message;
		this.details = details;
	}
}
