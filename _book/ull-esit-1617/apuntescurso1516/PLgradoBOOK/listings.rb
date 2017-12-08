require "erb"
require 'simplabs/highlight'

# Create template.

def listing(contenido)
  template = %q{
  \begin{latexonly}
    \begin{lstlisting}
<%= contenido %>
    \end{lstlisting}
  \end{latexonly}
    \begin{rawhtml}
    <pre>
<%= Simplabs::Highlight.highlight(:ruby, contenido) %>
    </pre>
    \end{rawhtml}
  }

  t = ERB.new(template)
  texto = t.result(binding)
end


def jlisting(contenido)
  template = %q{
  \begin{latexonly}
    \begin{verbatim}
<%= contenido %>
    \end{verbatim}
  \end{latexonly}
    \begin{rawhtml}
    <pre>
<%= Simplabs::Highlight.highlight(:javascript, contenido) %>
    </pre>
    \end{rawhtml}
  }

  t = ERB.new(template)
  texto = t.result(binding)
end

def hlisting(contenido)
  template = %q{
  \begin{latexonly}
    \begin{verbatim}
<%= contenido %>
    \end{verbatim}
  \end{latexonly}
    \begin{rawhtml}
    <pre>
<%= Simplabs::Highlight.highlight(:html, contenido) %>
    </pre>
    \end{rawhtml}
  }

  t = ERB.new(template)
  texto = t.result(binding)
end

def clisting(contenido)
  template = %q{
  \begin{latexonly}
    \begin{verbatim}
<%= contenido %>
    \end{verbatim}
  \end{latexonly}
    \begin{rawhtml}
    <pre>
<%= Simplabs::Highlight.highlight(:css, contenido) %>
    </pre>
    \end{rawhtml}
  }

  t = ERB.new(template)
  texto = t.result(binding)
end

def figure(file, options)
  width = options[:width] || "12cm"
  htmlwidth = options[:htmlwidth] || "100%"
  height = options[:height] || "100%"
  label = options[:label] || file
  caption = options[:caption] || file
  template = %q{
    \begin{latexonly}
      \begin{figure}[htb]
      \begin{center}
        \centerline{\epsfig{file=<%file%>.eps, width=<%=width%>}}
      \end{center}
      \end{figure}
    \end{latexonly}

    \begin{rawhtml}
      <div align="center"><a name=<%=label%>></a>
        <table>
          <caption align="bottom"><strong>Figura:</strong>
            <%=caption%>
          </caption>
          <tr>
            <td>
             <img width="<%=htmlwidth%>" 
                  height="<%=height%>" border="0"
                  src="<%=file%>.png"
                  alt="<%=file%>"
            </td>
           </tr>
        </table>
      </div>
    \end{rawhtml}
  }
#    \begin{rawhtml}
#      <DIV ALIGN="CENTER"><A NAME="<%=label%>"></A>
#      <TABLE>
#      <CAPTION ALIGN="BOTTOM"><STRONG>Figura:</STRONG>
#      <%=caption%>
#      </CAPTION>
#      <TR><TD><IMG WIDTH="<%=htmlwidth%>" HEIGHT="<%=height%>" BORDER="0"
#       SRC="<%=file%>.png"
#       ALT="<%=file%>"
#    \end{rawhtml}
#  }

  t = ERB.new(template)
  texto = t.result(binding)
end
