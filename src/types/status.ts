export enum HttpStatus {
  // Informational responses
  CONTINUE = 100, // The server has received the request headers, and the client should proceed to send the request body.
  SWITCHING_PROTOCOLS = 101, // The requester has asked the server to switch protocols and the server has agreed to do so.

  // Successful responses
  OK = 200, // The request was successful.
  CREATED = 201, // The request has been fulfilled and a new resource has been created.
  ACCEPTED = 202, // The request has been accepted for processing, but the processing is not complete.
  NON_AUTHORITATIVE_INFORMATION = 203, // The server successfully processed the request, but is returning information that may be from another source.
  NO_CONTENT = 204, // The server successfully processed the request, but is not returning any content.
  RESET_CONTENT = 205, // The server successfully processed the request, but is not returning any content, and requires the requester to reset the document view.
  PARTIAL_CONTENT = 206, // The server is delivering only part of the resource due to a range header sent by the client.

  // Redirection messages
  MULTIPLE_CHOICES = 300, // Indicates multiple options for the resource from which the client may choose.
  MOVED_PERMANENTLY = 301, // This and all future requests should be directed to the given URI.
  FOUND = 302, // Tells the client to look at (browse to) another URL.
  SEE_OTHER = 303, // The response to the request can be found under another URI using a GET method.
  NOT_MODIFIED = 304, // Indicates that the resource has not been modified since the version specified by the request headers.
  USE_PROXY = 305, // The requested resource is available only through a proxy, whose address is provided in the response.
  TEMPORARY_REDIRECT = 307, // In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
  PERMANENT_REDIRECT = 308, // The request and all future requests should be repeated using another URI.

  // Client error responses
  BAD_REQUEST = 400, // The server could not understand the request due to invalid syntax.
  UNAUTHORIZED = 401, // Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
  PAYMENT_REQUIRED = 402, // Reserved for future use.
  FORBIDDEN = 403, // The client does not have access rights to the content.
  NOT_FOUND = 404, // The server can not find the requested resource.
  METHOD_NOT_ALLOWED = 405, // The request method is known by the server but is not supported by the target resource.
  NOT_ACCEPTABLE = 406, // The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
  PROXY_AUTHENTICATION_REQUIRED = 407, // Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
  REQUEST_TIMEOUT = 408, // The server would like to shut down this unused connection.
  CONFLICT = 409, // This response is sent when a request conflicts with the current state of the server.
  GONE = 410, // This response is sent when the requested content has been permanently deleted from the server, with no forwarding address.
  LENGTH_REQUIRED = 411, // The server rejected the request because the Content-Length header field is not defined and the server requires it.
  PRECONDITION_FAILED = 412, // The client has indicated preconditions in its headers which the server does not meet.
  PAYLOAD_TOO_LARGE = 413, // Request entity is larger than limits defined by server.
  URI_TOO_LONG = 414, // The URI requested by the client is longer than the server is willing to interpret.
  UNSUPPORTED_MEDIA_TYPE = 415, // The media format of the requested data is not supported by the server.
  RANGE_NOT_SATISFIABLE = 416, // The range specified by the Range header field in the request can't be fulfilled.
  EXPECTATION_FAILED = 417, // The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
  I_AM_A_TEAPOT = 418, // The server refuses the attempt to brew coffee with a teapot.
  MISDIRECTED_REQUEST = 421, // The request was directed at a server that is not able to produce a response.
  UNPROCESSABLE_ENTITY = 422, // The request was well-formed but was unable to be followed due to semantic errors.
  LOCKED = 423, // The resource that is being accessed is locked.
  FAILED_DEPENDENCY = 424, // The request failed due to failure of a previous request.
  TOO_EARLY = 425, // Indicates that the server is unwilling to risk processing a request that might be replayed.
  UPGRADE_REQUIRED = 426, // The client should switch to a different protocol.
  PRECONDITION_REQUIRED = 428, // The origin server requires the request to be conditional.
  TOO_MANY_REQUESTS = 429, // The user has sent too many requests in a given amount of time ("rate limiting").
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431, // The server is unwilling to process the request because its header fields are too large.
  UNAVAILABLE_FOR_LEGAL_REASONS = 451, // The user requests an illegal resource, such as a web page censored by a government.

  // Server error responses
  INTERNAL_SERVER_ERROR = 500, // The server has encountered a situation it does not know how to handle.
  NOT_IMPLEMENTED = 501, // The request method is not supported by the server and cannot be handled.
  BAD_GATEWAY = 502, // The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
  SERVICE_UNAVAILABLE = 503, // The server is not ready to handle the request.
  GATEWAY_TIMEOUT = 504, // The server is acting as a gateway or proxy and did not get a response from the upstream server.
  HTTP_VERSION_NOT_SUPPORTED = 505, // The HTTP version used in the request is not supported by the server.
  VARIANT_ALSO_NEGOTIATES = 506, // The server has an internal configuration error.
  INSUFFICIENT_STORAGE = 507, // The server is unable to store the representation needed to complete the request.
  LOOP_DETECTED = 508, // The server detected an infinite loop while processing a request.
  NOT_EXTENDED = 510, // Further extensions to the request are required for the server to fulfill it.
  NETWORK_AUTHENTICATION_REQUIRED = 511, // The client needs to authenticate to gain network access.
}
