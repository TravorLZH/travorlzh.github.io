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
- Avoid adjacent opening braces such as `{{...}}` in math. Liquid treats them
  as template expressions before KaTeX runs and can delete the enclosed
  exponent. Use one TeX group, for example `2^{k^2\over2}`.
- When an equation is taken from `~/rmt-talk/notes.tex`, preserve its
  mathematical form, notation, factors, ranges, and normalization. Do not
  simplify, reparameterize, or otherwise rewrite it. Make only the minimal
  syntax substitutions required by the rendering rules above.
- Number only equations that are referenced in the prose. Add their numbers
  manually with `\tag{...}` and refer to them as `(1)`, `(2)`, and so on; do
  not rely on automatic equation numbering.

# Citations

Follow the citation conventions used in the older blog posts.

- Use APA citation format as the baseline for bibliography footnotes.
- In prose, join the names of coauthors with `--`, not `and`, for example
  `Keating--Snaith` and `Gonek--Hughes--Keating`.
- Include the publication year when mentioning a cited work unless the year is
  already stated in the surrounding text.
- Put the citation footnote immediately after the parenthesized year, using
  the form `Author (year)[^n]`.
- As a project-specific exception to the generated APA text, make the paper
  title the hyperlink instead of displaying a bare URL or DOI.
- Before looking up a link elsewhere, check the source bibliography for a
  recorded `url`, `doi`, arXiv identifier, or other paper link. If none is
  recorded, prefer a DOI link and use an arXiv paper page as the fallback.
- When one footnote cites multiple papers, format and link each paper
  separately within that footnote.
