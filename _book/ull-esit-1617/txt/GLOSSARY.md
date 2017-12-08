## query string

A query string is the part of a uniform resource locator (URL)
containing data that does not fit conveniently into a hierarchical
path structure. The query string commonly includes fields added to
a base URL by a Web browser or other client application, for example
as part of an HTML form

**Example**

If a form is embedded in an HTML page as follows:
```html
<form action="/hello" method="get">
  <input type="text" name="first" />
  <input type="text" name="second" />
  <input type="submit" />
</form>
```

and the user inserts the strings `this is a field` and 
`was it clear (already)?` in the two text fields and presses the `submit` 
button,
the handler of the route `/hello` (the route specified by the `action` 
attribute
of the form element in the above example) will receive the following
query string:

```
first=this+is+a+field&second=was+it+clear+%28already%29%3F.
```

If the form is processed on the server by a CGI script, the script may typically receive the query string as an environment variable named `QUERY_STRING`.

