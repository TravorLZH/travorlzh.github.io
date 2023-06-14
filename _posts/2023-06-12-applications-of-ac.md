---
layout: post
title:  "Applications of the axiom of choice"
date:   2023-06-12
des:    We discuss several important applications of the axiom of choice in analysis and algebra.
tags:   algebra set-theory
---

In the [previous article][wot], we developed the theory of well-ordered sets and introduced the axiom of choice (AC). In the present article, we will discuss some applications of this axiom in different areas of mathematics.

## Limits of functions

When learning real analysis, AC is often invoked implicitly during proofs. For instance, a classical result in the study of limits states that

*Let $f$ be a real-valued function defined on $[a,b]$ for some $a<b$ and $c\in[a,b]$. Then $\lim_{x\to c}f(x)=L$ iff $\lim_{n\to\infty}f(x_n)=L$ for every sequence $\lbrace x_n\rbrace$ that tends to $c$ as $n\to\infty$.*

The proof of the $\Rightarrow$ direction is straightforward, but the converse requires a weaker form of AC. We show that if $\lim_{x\to c}f(x)\ne L$, then there exists some sequence $\lbrace x_n\rbrace$ such that $x_n\to c$ but $f(x_n)\not\to L$.

By the definition of limits for functions, we know that $\lim_{x\to c}f(x)\ne L$ is equivalent to the statement that there exists a fixed $\varepsilon>0$ such that the set

$$
S_\delta=\lbrace x\in[a,b]:\vert x-c\vert <\delta\wedge\vert f(x)-L\vert\ge\varepsilon\rbrace
$$

is nonempty for every $\delta>0$, so

$$
\mathscr F=\lbrace S_{1/n}:n\in\mathbb N\rbrace\tag1
$$

is a family of nonempty sets. By AC, there exists a sequence $\lbrace x_n\rbrace$ such that $x_n\in S_{1/n}$ for all $n\in\mathbb N$. Because

$$
\forall\delta>0\space\forall n\in\mathbb N\space n>\delta^{-1}\Rightarrow(\vert x_n-c\vert<\delta\wedge\vert f(x_n)-L\vert\ge\varepsilon),
$$

we conclude that $x_n$ is a sequence such that $x_n\to c$ but $f(x_n)\not\to L$.

> We let $\mathbb N$ denote the set of positive integers and $\omega$ denote the set of nonnegative integers.

Because in many cases the required family $\mathscr F$ of nonempty sets turns out to be countable, a weaker form of AC is introduced:

**Axiom of countable choice:** *Every countable family of nonempty sets has a choice function.*

## Vitali set

Roughly speaking, **Lebesgue measure** $\lambda$ is the unique function that associates each measurable subset of $\mathbb R$ to some real number having the following useful properties:

- Non-negativity: $\lambda(E)\ge0$ for all measurable $E\subset\mathbb R$.
- Empty set has measure zero: $\lambda(\empty)=0$.
- Countable additivity: $\lambda(E)=\sum_n\lambda(E_n)$ when $E$ is a countable union of sets $E_n$ that are disjoint.
- Interval length: $\lambda([a,b])=b-a$ for any $b\ge a$.
- Translation invariance: $\lambda(\lbrace x+y:x\in E\rbrace)=\lambda(E)$ for any measurable $E$ and any $y\in\mathbb R$.
- Completeness: If $\lambda(E)=0$, then $\lambda(S)=0$ for all $S\subset E$.

Because every open set of real numbers is a countable union of disjoint open intervals, it follows from countable additivity that every open set is measurable. However, this is not the case for every set.

For $x,y\in\mathbb R$, we say $x\sim y$ iff $x-y\in\mathbb Q$. Because $\mathbb Q$ is dense in $\mathbb R$, we conclude that every equivalence class
$$
S_x=\lbrace x+q:q\in\mathbb Q\rbrace
$$

is also dense in $\mathbb R$. Therefore,

$$
\mathscr F=\lbrace S_x\cap[0,1]:x\in[0,1]\rbrace
$$

is a family of nonempty sets. By AC, there exists some function $f:[0,1]\to[0,1]$ such that $f(x)\in S_x\cap[0,1]$. Subsequently, we define the **Vitali set** $V$ as the aggregates of all values of $f$:

$$
V=\lbrace f(x):x\in[0,1]\rbrace.
$$

Because $\vert f(x)-x\rvert\le1$ for all $x\in[0,1]$, we see that when $\lbrace q_n\rbrace$ is an enumeration of rational numbers in $[-1,1]$ and

$$
V_n=\lbrace x+q_n:x\in V\rbrace
$$

are translations of $V$, we obtain

$$
[0,1]\subset\bigcup_{n\in\mathbb N}V_n.\tag2
$$

In addition, because $V_n\subset[-1,1]$ for all $n\in\mathbb N$, we also have

$$
\bigcup_{n\in\mathbb N}V_n\subset[-1,2],\tag3
$$

so it follows from countable additivity and translation invariance that

$$
\lambda([0,1])\le\sum_{n\in\mathbb N}\lambda(V_n)=\sum_{n\in\mathbb N}\lambda(V)\le\lambda([-1,2]).
$$

Because $\lambda([-1,2])$ is finite, we must have $\lambda(V)=0$, but $\lambda([0,1])=1>0$, so there is no way to assign a valid measure to $V$. As a result, we conclude that the set $V$ is not measurable.

## Two practical forms of AC

AC can also be applied in algebra, but it is convenient for us to first develop some useful versions of AC that are more applicable.

### Zorn's lemma

In the [previous article][wot], we demonstrated that AC allows us to well order a set, but this result might not be useful to directly study sets that are already equipped with an order. Consequently, we present Zorn's lemma:

**Zorn's lemma:** *Let $(A,\prec)$ be partially ordered. If every chain (nonempty totally ordered subset) of $A$ has an upper bound, then $A$ has a maximal element.*

When $C\subset A$ is a chain and $x\in A$ is an upper bound of $S$, we mean that $y\preceq x$ for all $y\in S$. By $x\in A$ being a maximal element, we mean that $y\succ x$ is false for every $y\in S$. It should be noted that a set can possess multiple maximal elements. For example, when $A=\mathbb N\setminus\lbrace1\rbrace$ and $a\prec b$ iff $b$ divides $a$, the maximal elements of $A$ are exactly the prime numbers.

_Proof of Zorn's lemma._ Let $\mathscr F=2^A\setminus\lbrace\empty\rbrace$ and $c:\mathscr F\to\cup\mathscr F$ be its choice function. Suppose $A$ has no maximal elements. Define $F(\alpha)$ by transfinite recursion via:

- $F(\alpha)=c(\lbrace x\in A:x\succ F(\beta)\rbrace)$ if $\alpha$ is the successor of $\beta$.
- When $\alpha$ is a limit ordinal, because $\lbrace F(\beta):\beta<\alpha\rbrace$ is a chain of $A$ without maximal elements, it must have an upper bound in $B=\lbrace x\in A:\beta<\alpha\Rightarrow x\succ F(\beta)\rbrace$, so, in this case, set $F(\alpha)=c(B)$.

Because $A$ has no maximal elements, we can continue this recursion on and on until we inject all ordinals into $A$, which contradicts the fact that the collection of ordinals does not form a set. Consequently, $A$ must possess a maximal element.

### Tukey's lemma

We can convert Zorn's lemma into an even friendlier form that does not require us to define any partial orders.

A family of sets $\mathscr F$ is said to be of **finite characteristic** when $A\in\mathscr F$ iff every finite subset of $A$ belongs to $\mathscr F$, an Tukey's lemma guarantees the existence of a maximal set inside $\mathscr F$.

**Tukey's lemma:** *Let $\mathscr F$ be a family of sets of finite characteristic. Then there exists some set $A\in\mathscr F$ that cannot be contained in any other element of $\mathscr F$*.

_Proof._ For $A,B\in\mathscr F$, we say $A\prec B$ iff $A\subsetneq B$. Then $(\mathscr F,\prec)$ is partially ordered. For any chain $\mathscr C\subset\mathscr F$. Let $S=\cup\mathscr C$ and $T\subset S$ be any of its finite subset. Then there exists $C_1, C_2,\dots,C_n\in\mathscr C$ such that every element of $T$ must lie in one of $C_1, C_2,\dots, C_n$. Because $\mathscr C$ is totally ordered, we can find some $1\le j\le n$ such that $C_k\subset C_j$ for all $k\ne j$, so $T\subset C_k$ and $T\in\mathscr F$. This indicates that every finite subset of $S$ is contained in $\mathscr F$, so $S\in\mathscr F$. In addition, because $C\preceq S$ for all $C\in\mathscr C$, we conclude that every chain $\mathscr C$ of $\mathscr F$ has an upper bound in $\mathscr F$, so Zorn's lemma guarantees the existence of a maximal element, which is exactly the set $A\in\mathscr F$ that is not contained in any other element of $\mathscr F$.

In fact, Zorn's lemma and Tukey's lemma are equivalent to AC over ZF:

_Proof of AC from Tukey's lemma._ Let $\mathscr F$ be a family of nonempty sets. Let $\mathscr C$ be the set of choice functions for all subsets of $\mathscr F$. Because functions are regarded as set of ordered pairs in set theory, every subset $f'$ of $f\in\mathscr C$ is a choice function for some subset of $\operatorname{dom}(f)$, the set $\mathscr F$ is of finite characteristic. Consequently, Tukey's lemma guarantees the existence of a maximal function $c\in\mathscr C$.

Suppose $\operatorname{dom}(c)\ne\mathscr F$. Then choose $A\in\mathscr F\setminus\operatorname{dom}(f)$ and $x\in A$, so $c\cup\lbrace(A,x)\rbrace$ is a choice function strictly greater than $c$, which contradicts the maximality of $c$. Therefore, $c$ is a choice function for $\mathscr F$.

## Infinite-dimensional vector space

Before talking about infinite-dimensional vector spaces, we recall some concepts from Linear Algebra.

A vector space $V$ is said to be **finitely generated** iff there exists some finite set $S=\lbrace v_1,v_2,\dots,v_n\rbrace\subset V$ such that

$$
V=\operatorname{span}S=\lbrace x_1v_1+x_2v_2+\dots+x_nv_n:x_1,x_2,\dots,x_n\in\mathbb F\rbrace.
$$

By basis extension lemma and [Steinitz exchange lemma](), proof by induction tells us that there exists a subset $B\subset S$ such that all elements in $B$ are linearly independent over $\mathbb F$ and $V=\operatorname{span}B$. In other words, $B$ is a **basis** for $V$, and _a vector space is finitely generated iff it is finite-dimensional._

Suppose $B$ and $B'$ are bases for $V$. Then applying Steinitz exchange lemma twice indicates that $B$ and $B'$ have the same size, so this size is called the **dimension** of $V$ (denoted by $\dim V$).

Summarizing the previous paragraphs, we deduce that *If $V$ is spanned by a nonempty finite set $S$ of nonzero vectors, then $S$ contains a basis for $V$.*

A natural question arising from this result is whether this is still the case if $S$ is infinite:

1. When $S=\lbrace1,x,x^2,\dots\rbrace$ and $\mathbb F=\mathbb Q$, $V$ is the space of polynomials with rational coefficients. Because the construction of $V$ is explicit and comprehensive, we see that $S$ is itself a basis for $V$.

2. When $V=\mathbb R$ and $\mathbb F=\mathbb Q$, it can be verified that $V$ is a vector space spanned by itself, but we can't construct a basis for $V$ immediately from these properties.

Because the vector space axioms only guarantee the closure of finite additions of vectors, the span of an infinite set $S$ only contains finite linear combinations:

$$
V=\operatorname{span}S=\bigcup_{n\in\mathbb N}\left\lbrace\sum_{1\le i\le n}x_iv_i:x_1,\dots,x_n\in\mathbb F,v_1,\dots,v_n\in S\right\rbrace.
$$

This is why power series are not included in the first example. Similar to how we generalize span, we can also generalize the concept of linear independence to infinite sets. A finite set $L=\lbrace u_1,u_2,\dots,u_n\rbrace$ is said to be linearly independent iff the equation

$$
x_1u_1+x_2u_2+\dots+x_nu_n=0
$$

is satisfied iff $x_1=x_2=\dots=x_n=0$. When $L$ is infinite, we say it is linearly independent iff every finite subset of $L$ is linearly independent. This allows us to naturally generalize the notion of basis to vector spaces that are not finitely generated.

To establish the existence of basis for vector spaces whose spanning sets are infinite, we need to invoke AC. Specifically, we prove

**Basis existence theorem:** *If a vector space $V$ is spanned by a nonempty set $S$ of nonzero vectors, then $S$ contains a basis for $V$.*

Because a vector space always spans itself, a direct corollary is that _every nonzero vector space contains a basis_.

_Proof of basis existence theorem._ Let $\mathscr F$ be the family of linearly independent subsets of $S$. It follows from the definition that $\mathscr F$ is of finite characteristic, so Tukey's lemma guarantees the existence of a maximal linearly independent set $B\in\mathscr F$.

We are done if every vector in $S$ is a finite linear combination of vectors in $B$. Suppose otherwise, let $u\in S$ be an exception. Pick any $v_1,v_2,\dots,v_n\in B$ and consider the equation

$$
x_1v_1+x_2v_2+\dots+x_nv_n+\lambda u=0.
$$

Because $u\notin\operatorname{span}B$, $\lambda=0$. In addition, as $B$ is linearly independent, we also have $x_1=x_2=\dots=x_n=0$. However, this indicates that every finite subset of $B'=B\cup\lbrace u\rbrace$ is linearly independent, so $B'\in\mathscr F$ and $B\subsetneq B'$, which contradicts the maximality of $B$. Therefore, we conclude that $B\subset S$ is a basis for $V$.

> Exercise: Generalize basis extension lemma to infinite dimensional vector spaces.

### Additive functions on $\mathbb R$

A function $f:\mathbb R\to\mathbb R$ is said to be additive iff it satisfies **Cauchy's functional equation**:

$$
\forall x,y\in\mathbb R\space f(x+y)=f(x)+f(y).\tag4
$$

It is generally believed that the only functions that satisfies (4) over $\mathbb R$ are linear functions with zero constant coefficients. However, AC allows us to explicitly construct a nonlinear function still satisfying (4).

It follows immediately from (4) that $qf(x)=f(qx)$ for all rational $q$, $f$ is essentially a linear map in some vector space over $\mathbb Q$.

Similar to finite-dimensional cases, the behavior of a linear map is completely determined by how it transforms basis vectors. By the basis existence theorem, we can pick some $B\subset\mathbb R$ that is linearly independent and spans $\mathbb R$. Because $\mathbb R$ is uncountable, $B$ cannot be finite (in fact uncountable too), so we can pick two distinct $\alpha,\beta\in B$. After these preparations, for $x\in B$, we define $f$ by

$$
f(x)=
\begin{cases}
\beta & x=\alpha, \\
\alpha & x=\beta, \\
x & x\in B\setminus\lbrace\alpha,\beta\rbrace,
\end{cases}\tag5
$$

so $f(\alpha)/\alpha=\beta/\alpha$ but $f(\beta)/\beta=\alpha/\beta$. If $f$ is linear, then $\alpha^2=\beta^2$, so we have $\alpha\pm\beta=0$, which contradicts the fact that $B$ is linearly independent. Consequently, (5) is a solution to (4) that is nonlinear.

> Because there are infinitely many ways to pick $\alpha$ and $\beta$, we effectively demonstrated that (4) has infinitely many nonlinear solutions.

## Conclusion

In ths article, we explored various examples in mathematics where AC is applied. We began by looking at a classical result in real analysis and introduced a weaker form of AC: axiom of countable choice. Subsequently, we present Zorn's lemma and Tukey's lemma, which are equivalent to AC and useful to study infinite dimensional vector spaces. Using these ideas, we demonstrate that AC can be applied to construct nonlinear solution to Cauchy's functional equation.

The current article has not fully revealed the connections between AC and vector spaces. The basis existence theorem is virtually equivalent to AC over ZF. As this is a fruitful topic for another day, it is reasonable to end our discussion here.

[wot]: /2023/05/27/well-ordered-sets-and-ac.html
[steinitz]: https://en.wikipedia.org/wiki/Steinitz_exchange_lemma