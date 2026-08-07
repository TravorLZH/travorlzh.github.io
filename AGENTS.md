# LaTeX rendering

When using the user's `format-latex-equations` skill in this project, also apply
the following project-specific rules. This site renders Markdown with Kramdown
before KaTeX processes mathematical delimiters, so Markdown syntax can corrupt
otherwise valid LaTeX before KaTeX sees it.

- Use `\vert` or `\left\vert ... \right\vert` for mathematical vertical bars.
  Do not use literal `|` characters inside math, because they can interfere with
  Markdown table parsing.
- Use `^\ast` for adjoints and conjugate transposes. Do not use `^*` in inline
  math, because Kramdown can interpret asterisks across math spans as Markdown
  emphasis and generate malformed `<em>` elements.
