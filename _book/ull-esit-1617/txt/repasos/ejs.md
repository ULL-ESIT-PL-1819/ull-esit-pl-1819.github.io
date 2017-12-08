## Preguntas de Repaso de EJS

1.  Véase [Getting Started with EJS](http://www.embeddedjs.com/getting_started.html)

2.  Mejore este template


```html
<li>
    <a href='supplies/<%= supplies[i] %>'>
        <%= supplies[i] %>
    </a>
</li>
```


usando un helper proveído por EJS

```
% <li>
%    <%= link_to(supplies[i], 'supplies/'+supplies[i]) %>
% </li>
```

