export class FormValidationError {
	constructor(key: string, keyError: string, controlError: any) {
		this.control = key;
		this.error = keyError;
		this.value = controlError;
	}

	control!: string;
	error!: string;
	value!: any;
}
