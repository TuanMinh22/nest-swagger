/* eslint-disable prettier/prettier */
export enum ExceptionDescription {
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  NOT_ACCEPTABLE = 'Not Acceptable',
  REQUEST_TIMEOUT = 'Request Timeout',
  CONFLICT = 'Conflict',
  GONE = 'Gone',
  PRECONDITION_FAILED = 'Precondition Failed',
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  I_AM_A_TEAPOT = "I'm a teapot",
  MISDIRECTED = 'Misdirected',
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  NOT_IMPLEMENTED = 'Not Implemented',
  BAD_GATEWAY = 'Bad Gateway',
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
}

export enum ExceptionDescription_FA {
  BAD_REQUEST = 'Yêu cầu sai',
  UNAUTHORIZED = 'Không được xác thực',
  FORBIDDEN = 'Bị cấm',
  NOT_FOUND = 'Không tìm thấy gì',
  METHOD_NOT_ALLOWED = 'Phương thức HTTP mong muốn không được phép',
  NOT_ACCEPTABLE = 'Không được chấp nhận',
  REQUEST_TIMEOUT = 'Thời gian chờ yêu cầu quá lâu',
  CONFLICT = 'Nhập',
  GONE = 'Đi',
  PRECONDITION_FAILED = 'Điều kiện ban đầu chưa được thiết lập',
  PAYLOAD_TOO_LARGE = 'Kích thước nội dung quá lớn',
  UNSUPPORTED_MEDIA_TYPE = 'Loại nội dung không được hỗ trợ',
  I_AM_A_TEAPOT = 'Tôi là TEAPOT',
  MISDIRECTED = 'Sai hướng',
  UNPROCESSABLE_ENTITY = 'Không thể xử lý mục nhập',
  INTERNAL_SERVER_ERROR = 'Sự cố máy chủ nội bộ',
  NOT_IMPLEMENTED = 'Không được triển khai',
  BAD_GATEWAY = 'Cổng trái phép',
  SERVICE_UNAVAILABLE = 'Hệ thống không thể cung cấp dịch vụ',
  GATEWAY_TIMEOUT = 'Thời gian chờ của cổng',
  HTTP_VERSION_NOT_SUPPORTED = 'Phiên bản HTTP không được hỗ trợ',
}
