## HTTP access control (CORS)

See [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).


A resource makes a cross-origin HTTP request when it requests a resource from a different domain than the one which the first resource itself serves. For example, an HTML page served from `http://domain-a.com` makes an `<img> src` request for `http://domain-b.com/image.jpg`. Many pages on the web today load resources like CSS stylesheets, images and scripts from separate domains.

For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.  For example, `XMLHttpRequest` follows the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). So, a web application using `XMLHttpRequest` could only make HTTP requests to its own domain. To improve web applications, developers asked browser vendors to allow `XMLHttpRequest` to make cross-domain requests.


