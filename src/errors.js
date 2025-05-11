export class BaseError extends Error {
  errorCode;
  statusCode;
  data;

  constructor(message, errorCode, statusCode, data = null) {
    super(message);
    this.name = this.constructor.name; // 에러 객체의 이름 설정
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, this.constructor); // 에러가 발생한 위치를 추적
  }
}

export class DuplicateUserEmailError extends BaseError {
  constructor(reason = "이미 존재하는 이메일입니다.", data = null) {
    super(reason, "U001", 409, data);
  }
}

export class NotFoundError extends BaseError {
  constructor(resourceName = "리소스를", reason = `${resourceName} 찾을 수 없습니다.`, data = null) {
    super(reason, "G001", 404, data); // G001 for General Not Found
  }
}

export class AlreadyExistsError extends BaseError {
  constructor(resourceName = "리소스를", reason = `${resourceName} 이미 존재하거나 처리 중입니다.`, data = null) {
    super(reason, "G002", 409, data); // G002 for General Already Exists
  }
}

export class ValidationError extends BaseError {
  constructor(reason = "입력값이 유효하지 않습니다.", data = null) {
    super(reason, "G003", 400, data); // G003 for General Validations
  }
}