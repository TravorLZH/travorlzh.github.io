---
layout: post
title:  "Well-ordered sets and the axiom of choice"
date:   2023-05-27
des:    We launch a systematic investigation into well-ordered sets.
tags:   algebra set-theory
---

In this article, we are going to discuss the properties of well-ordered sets and introduce the axiom of choice, which will eventually allow us to study sets just like how we study natural numbers.

The set-theoretic results in this article are primarily taken from Kunen[^kunen], but this article inserts more motivations into the derivations.

## From induction to well-ordering

To show that a certain proposition $P(x)$ holds for all natural numbers $\omega:=\mathbb Z_{\ge0}$, we often proceed by first verifying $P(0)$ and then prove $P(k)\Rightarrow P(k+1)$ for every $k\in\omega$. The principle is conveniently expressed as follows using formal logic:

$$
[P(0)\wedge(\forall k\in\omega\space P(k)\Rightarrow P(k+1))]\Rightarrow\forall x\in\omega\space P(x),\tag1
$$

which is known as the principle of **weak induction**. In occasions such as proving every integer $>1$ is a product of primes, weak induction is not sufficient, so we replace the second step with $P(0)\wedge P(1)\wedge\dots\wedge P(k)\Rightarrow P(k+1)$ instead of $P(k)\Rightarrow P(k+1)$:

$$
[P(0)\wedge[\forall x\in\omega\setminus\lbrace1\rbrace\space\forall y\in\omega\space(y<x\Rightarrow P(y))\Rightarrow P(x)]]\Rightarrow\forall x\in\omega\space P(x).\tag2
$$

We do not have to consider the base case $P(0)$ separately during the proof. Using propositional calculus, we obtain

$$
\forall y\in\omega\space(y<0\Rightarrow P(y))\equiv\forall y\in\omega\space(y\ge0\vee P(y)),
$$

which is a tautology as $y\ge0$ is always true when $y\in\omega$. This indicates that

$$
P(0)\equiv[\forall y\space(y<0\Rightarrow P(y))]\Rightarrow P(0),
$$

so we conclude that (2) can be simplified into

$$
[\forall x,y\in\omega\space(y<x\Rightarrow P(y))\Rightarrow P(x)]\Rightarrow\forall x\in\omega\space P(x).\tag3
$$

This is known as the principle of **strong induction**. Employing the technique of [_modus ponens_][mp] inductively, one finds that these two principles are equivalent to each other.

A key difference between strong induction from the weak one is that the former is phrased using the ordering property of $\omega$. This is an advantage because it allows one to generalize this device to sets that do not possess arithmetic operations.

We can phrase (3) in a more set-theoretic way:

$$
\forall S\subset\omega\space S\ne\empty\Rightarrow(\exists x\in S\space\forall y\in S\space y\ge x).\tag4
$$

This is known as the **well-ordering principle** of natural numbers.

To prove that (4) is implied by induction, suppose $S\subset\omega$ has no minimal element. Then for every $y\in S$ there exists some $x\in S$ such that $x<y$. This suggests that $0\notin S$. Suppose $x\in\omega\setminus\lbrace 1\rbrace$ and $y\notin S$ for all $y<x$. If $x\in S$, then $x$ must be a minimal element, so $x\notin S$. Therefore, we conclude from the principle of strong induction that $S=\empty$ when $S\subset\omega$ has no minimal element. This also demonstrates that although the statement of strong induction does not involve the base case, we still proceed with (2) in practice.

To prove the converse, set $S=\lbrace y\in A:\neg P(y)\rbrace$. If $S\ne\empty$, let $x=\min S$, so $P(y)$ holds for all $y<x$. Now, it follows from (3) that $P(x)$ is true, which leads to a contradiction. Hence, the principle of induction is equivalent to the well-ordering principle.

Having converted mathematical induction, a number-theoretic statement, into the well-ordering principle, a set-theoretic statement, we can now start discussing the idea of well-ordering in a general setting.

## Well-ordered sets and order ideal

A binary relation $R$ on set $A$ is said to be a **strict partial order** iff

- Irreflexivity: $\forall x\in S\space\neg(xRx)$.
- Antisymmetry: $\forall x,y\in S\space\neg(xRy\wedge yRx)$.
- Transitivity: $\forall x,y,z\in S\space(xRy\wedge yRz)\Rightarrow xRz$.

In addition, we say $R$ is a total order iff we can compare any two elements of $A$ using $R$:

- Total: $\forall x,y\in S\space(xRy\vee yRx\vee x=y)$

Finally, we say $(A,R)$ is well ordered when every nonempty subset of $A$ contains a minimal element:

- Well order: $\forall S\subset A\space S\ne\empty\Rightarrow(\exists x\in S\space\forall y\in S\space y=x\vee xRy).$

It is clear from (4) that $(\omega,<)$ is a well-ordered set, where $<$ is the ordinary comparison symbol for real numbers. Additionally, the transitivity of $\subset$ indicates that every subset of a well-ordered set is also well-ordered.

Similar to how we use ideals to study rings, we use order ideals to study well-ordered sets:

**Order ideal:** A subset $S$ of a well-ordered set $(A,<)$ is said to be an order ideal iff $\forall y\in S\space\forall z\in A\space(z<y\Rightarrow z\in S)$.

When $S\ne A$, the well-ordering property allows us to pick $x=\min A\setminus B$, so $S$ must be the aggregate of elements of $A$ that are less than $x$:

$$
S=A_x:=\lbrace y\in A:y<x\rbrace.\tag5
$$

This allows us to prove a fundamental result on the classification of order ideals:

**Lemma 1:** *An order ideal of a well-ordered set $(A,<)$ is either $A$ itself or its **initial segment** $A_x$ for some $x\in A$.*

> $\empty$ is also an order ideal because it is exactly $A_x$ when $x=\min A$.

## Order isomorphisms and trichotomy

For well-ordered sets $(A,<_A)$ and $(B,<_B)$, we say they are **isomorphic** iff there exists some bijection $f:A\to B$ such that

$$
\forall x,y\in A\space(x<_Ay)\Rightarrow(f(x)<_Bf(y)).\tag6
$$

Just like how monotonic functions possess good properties in real analysis, order isomorphisms also behave nicely in the study of well-ordered sets.

### Uniqueness

Suppose there are two isomorphisms $f$ and $g$ from $(A,<_A)$ to $(B,<_B)$. Let

$$
S=\lbrace x\in A:f(x)\ne g(x)\rbrace.\tag7
$$

If $S$ is nonempty, then pick $z=\min S$ and assume $f(z)>_Bg(z)$ without loss of generality. Since $g(z)\in B$, we can choose a unique $z'\in A$ such that $g(z)=f(z')$, so $z'<_Az$ and $f(z')\ne g(z')$, which imply $z'<z$ and $z'\in B$, which is a contradiction. Therefore, we conclude

**Lemma 2:** *If $(A,<_A)$ and $(B,<_B)$ are isomorphic well-ordered sets, then the isomorphism function $f:A\to B$ is unique.*

Similar to isomorphisms between groups, we write $(A,<_A)\cong(B,<_B)$ when they are isomorphic well-ordered sets.

### Non-degenerateness

Using the construction in (7), we can prove that an order isomorphism cannot shrink a well-ordered set $(A,<)$ into any of its initial segments.

**Lemma 3:** *If $(A,<)$ is well-ordered, then $(A,<)\not\cong(A_x,<)$ for any $x\in A$.*

_Proof._ Suppose otherwise, there exists some $x\in A$ and some isomorphism $f:A\to A_x$. Define

$$
S=\{y\in A:f(y)\ne y\}.
$$

If $S$ is nonempty, choose $z=\min S$. If $f(z)<z$, then $f(f(z))<f(z)$, so $f(z)\in S$, which suggests $z>\min S$, a contradiction. If $f(z)>z$, then $z<x$, so there is a unique $z'$ such that $z=f(z')$. Thus, we have $z'<z$ and $f(z')>z'$, which also suggests $z>\min S$. Therefore, $S$ must be empty and $f(y)=y$ for all $y\in A$. In particular, $f(x)=x$, which contradicts the fact that $f$ is an isomorphism from $A$ to $A_{<x}$.

### Trichotomy

When $(A,<_A)$ and $(B,<_B)$ are any two well-ordered sets. We can create a mapping $f:A\to B$ by letting $f(\min A)=\min B$, and when $f(y)$ are defined for all $y<_Ax$, let

$$
f(x)=\min(B\setminus\lbrace f(y):y<_Ax\rbrace),\tag8
$$

and we stop the recursion when at least one of the following happens:

1. $B\setminus\lbrace f(y):y<_Ax\rbrace=\empty$.
2. $f(x)$ is defined for all $x\in A$.

Intuitively, when both events occur simultaneously, $f$ is an order isomorphism from $A$ to $B$. When only the first event happens, $f$ is an order isomorphism from $A$ onto some initial segment of $B$, and when only the second event happens, $f$ is an order isomorphism from some initial segment of $A$ onto $B$. This allows us to reasonably formulate the trichotomy law for well-ordered sets:

**Theorem 1:** *For well-ordered sets $(A,<_A)$ and $(A,<_B)$, exactly one of the following happens:*

1. *$(A,<_A)\cong(B,<_B)$.*
2. *$(A_x,<_A)\cong(B,<_B)$ for some $x\in A$.*
3. *$(A,<_A)\cong(B_y,<_B)$ for some $y\in B$.*

Because we have not developed the theory of recursion on well-ordered sets yet, the actual proof constructs $f$ in a quite different way.

_Proof._ Let $f$ be defined by

$$
f=\lbrace(x,y)\in A\times B:(A_x,<_A)\cong(B_y,<_B)\rbrace.
$$

By Lemma 3, we know that when $(x,y),(x',y')\in f$, $x=x'$ iff $y=y'$, so $f$ is a one-to-one mapping.

Suppose $(x,y)\in f$ and $x'<_ Ax$. Let $g$ be the isomorphism from $A_x$ to $B_y$ and $h$ be the restriction of $g$ on $A_{x'}$. Then $h$ is an order isomorphism from $A_{x'}$ to $B_{g(x')}$, so $A_{x'}\cong B_{g(x')}$. This indicates that $(x',y')\in f$ for any $x'<_Ax$ and $y'=g(x')<y$. Therefore, $f$ is an order-preserving one-to-one mapping from its domain to its image, which are order ideals of $(A,<_A)$ and $(B,<_B)$ respectively.

By Lemma 1, the function $f$ we defined above can be classified into four types:

1. $\operatorname{dom}(f)=A$ and $\operatorname{im}(f)=B$.
2. $\operatorname{dom}(f)=A_x$ and $\operatorname{im}(f)=B$ for some $x\in A$.
3. $\operatorname{dom}(f)=A$ and $\operatorname{im}(f)=B_y$ for some $y\in B$.
4. $\operatorname{dom}(f)=A_x$ and $\operatorname{im}(f)=B_y$ for some $x\in A$ and $y\in B$.

When $f$ is to the fourth type, we must have $(x,y)\notin f$. However, because the definition of $f$ suggests that $(A_x,<_A)\cong(B_y,<_B)$, we have $(x,y)\in f$, which is a contradiction. Therefore, $f$ must belong to exactly one of the first three types, which corresponds to the three situations stated in the theorem.

## Ordinals and natural numbers

Order isomorphisms allow us to divide well-ordered sets into isomorphism classes, and to facilitate the study of each class, we hope to choose a representative that has the most convenient structure.

When $(A,<)$ is well-ordered, there is a bijection between its elements $x$ and its initial segments $A_x$. This motivated von Neumann to define ordinals as well-ordered sets such that their elements are simultaneously their initial segments. Here are some examples:

$$
\empty,\lbrace\empty\rbrace,\lbrace\empty,\lbrace\empty\rbrace\rbrace,\lbrace\empty,\lbrace\empty\rbrace,\lbrace\empty,\lbrace\empty\rbrace\rbrace\rbrace,\dots
$$

In modern set theory, we define an ordinal as follows:

**Ordinal:** A set $\alpha$ is said to be an ordinal iff

1. $\forall x\space(x\in\alpha\Rightarrow x\subset\alpha).$
2. $(\alpha,<)$ is well-ordered by $x<y$ iff $x\in y.$

> From now on, greek letters $\alpha,\beta,\dots$ always denote ordinals.

Let $x\in\alpha$ be arbitrary. Then $\forall y\space(y\in\alpha_x\iff y\in x)$, so by the [axiom of extensionality][extensionality], $x=\alpha_x$. Therefore, our axiomatic definition of ordinals indeed satisfies von Neumann's requirements. Because $\alpha_y\subset\alpha_x$ when $x,y\in\alpha$ and $y\in x$, the above arguments tell us $y\subset x$, so $\alpha$ is not only itself an ordinal but also a set of ordinals.

When $\beta\subset\alpha$ is an ordinal, let $\gamma\in\beta$ and $\delta\in\alpha$ be arbitrary. If $\delta<\gamma$, then the transitive property of ordering indicates that $\delta\in\beta$, so $\beta$ is an order ideal of $\alpha$. Thus, we infer from Lemma 1 that $\beta\in\alpha$ or $\beta=\alpha$.

When $C$ is a set of ordinals, we can always choose a minimal element from it. This is made possible by choosing $\min(\alpha\cap C)$ when $\alpha\in C$ is not the minimum.

Summarizing these properties, we conclude that

**Lemma 4**: *Let $\alpha$ and $\beta$ be ordinals. Then*

1. *$\forall\beta\in\alpha\space\beta=\lbrace x\in\alpha:x<\beta\rbrace$.*
2. *$\beta\subsetneq\alpha\Rightarrow\beta\in\alpha$.*
3. *When $C$ is a set of ordinals, $\exists\alpha\in C\space\forall\beta\in C\space\beta\ge\alpha$.*

### Trichotomy

By adapting the proof of Lemma 3, we find that two ordinals are isomorphic to each other iff they are the same, so we deduce the following law of trichotomy for ordinals from Theorem 1:

**Theorem 2:** *When $\alpha$ and $\beta$ are ordinals, $\alpha\cong\beta\Rightarrow\alpha=\beta$, and exactly one of these relationships hold: $\alpha=\beta$, $\alpha\in\beta$, or $\beta\in\alpha$.*

### Ordinals and well-ordered sets

Ordinals are perfect representatives of isomorphism classes of well-ordered sets:

**Theorem 3:** *For every well-ordered set $(A,<)$, there exists a unique ordinal $\alpha$ such that $(A,<)\cong\alpha$.*

> Because we only work with the set membership ordering of ordinals, writing $\alpha$ in place of $(\alpha,\in)$ causes no ambiguity.

_Proof._ Let

$$
A'=\lbrace x\in A:\exists!\alpha\space(A_x,<)\cong\alpha\rbrace.
$$

By the [axiom schema of replacement][replacement], we deduce that the following collection of ordinals forms a set:

$$
B=\lbrace\alpha:\exists!x\in A\space(A_x,<)\cong\alpha\rbrace.
$$

The uniqueness of $x$ for each $\alpha$ is justified by Lemma 3. According to the arguments used in the proof of Theorem 1, we gather that $A'$ is an order ideal and for any ordinals $\gamma,\delta$, we have $(\gamma\in B\wedge\delta<\gamma)\Rightarrow\delta\in B$. By Lemma 4, $B$ is also well-ordered, so $B$ is itself an ordinal too.

If $A'=A_x$ for some $x\in A$. Then $(A_x,<)\cong\alpha$, so $x\in A'$, which is a contradiction, so $A'=A$ and $(A,<)\cong B$. The uniqueness of $B$ is guaranteed by Theorem 2.

### Successor ordinals

When $\beta>\alpha$, it follows from the definition that $\alpha\in\beta$, so $\lbrace\alpha\rbrace\subset\beta$ and $\alpha\subset\beta$, which indicate that $\alpha\cup\lbrace\alpha\rbrace\subset\beta$, so $\beta>\alpha\iff\beta\ge S(\alpha)$, where

$$
S(\alpha)=\alpha\cup\lbrace\alpha\rbrace\tag9
$$

is known as the **successor ordinal** of $\alpha$.

### Natural numbers

If we let $0=\empty$ and $n+1:=S(n)$. Then we effectively create all the natural numbers by induction:

$$
1=\lbrace0\rbrace,2=\lbrace0,1\rbrace,\dots,n=\lbrace0,1,\dots,n-1\rbrace,\dots
$$

A natural number can also be defined using strong induction:

**Natural number:** $\alpha$ is a natural number iff $\forall\beta\le\alpha\space(\beta=0\vee\beta\text{ is a successor})$.

To ensure that the collection of natural numbers indeed forms a set, we introduce the axiom of infinity:

**Axiom of Infinity:** $\exists\omega\space0\in\omega\wedge(\forall x\in\omega\space S(x)\in\omega)$.

## Transfinite procedures

By applying successor operations repetitively, we obtain all the natural numbers, which are ordinals to characterize well-ordered sets that are finite. However, successor operations are not sufficient for us to obtain all the ordinals that arise in the study of well-ordered sets. In this section, we will introduce the notion of limit ordinals, which would allow us to perform induction and recursions outside the realm of natural numbers.

### Limit ordinals

When $C$ is a set of ordinals, the arguments in proving Lemma 4 indicates that $\min C=\cap C$[^cap]. This naturally lets us consider the properties of $D=\cup C$.

Let $\alpha\in D$ and $\beta\in\alpha$ be arbitrary. Then it follows from the definition that $\exists\gamma\in C\space\alpha\in\gamma$, so the transitivity of $\in$ in ordinals implies that $\beta\in\gamma$, so $\beta\in C$. Therefore, $\alpha\in D\Rightarrow\alpha\subset D$. This, combined with Lemma 4, indicates that $D$ is itself an ordinal that serves as an upper bound for $C$. In addition, because $\forall\alpha<D\space\exists\beta\in C\space\alpha<\beta$, we conclude that $D$ is also the least upper bound, so $\sup C=\cup C$.

For an ordinal $\alpha$, it is clear that $\sup\alpha\le\alpha$. In particular, we say $\alpha$ is a **limit ordinal** iff $\sup\alpha=\alpha$. Because $\beta\in S(\alpha)\iff\beta\le\alpha$, we deduce that $\sup S(\alpha)=\alpha$, so a successor ordinal cannot be a limit ordinal.

On the other hand, when $\beta=\sup\alpha<\alpha$, we have $\alpha\ge S(\beta)$. If $\alpha>S(\beta)$, then pick $\gamma=\min(\alpha\setminus S(\beta))$, so $\gamma\ge S(\beta)>\beta$, which is a contradiction. Therefore, we conclude that

**Lemma 5:** *For any ordinal $\alpha$, $\sup\alpha<\alpha$ iff $\alpha$ is the successor of $\sup\alpha$.*

It should be noted that $0=\empty$ is also a limit ordinal.

### Classes and class mapping

The axiom of infinity guarantees the collection of natural numbers forms a set, but this is not the case if we gather all the ordinals. Suppose $C$ is a set containing all the ordinals. Then it follows from Lemma 4 that it must be well-ordered. On the other hand, we also know that $\alpha\in C\Rightarrow\alpha\subset C$, so $C$ must be itself an ordinal as well, but this means $C\in C$, which is a contradiction as an ordinal cannot be less than itself.

**Theorem 4:** *There are no sets containing all the ordinals.*

For a proposition $P(\alpha)$, if we can show that the collection of ordinals for which $\neg P(\alpha)$ is true forms a set, then this theorem guarantees the existence of an ordinal $\alpha$ such that $P(\alpha)$ holds.

In set theory, a collection of objects that satisfies a common property (i.e. a proposition) is called a **class**, and a class that are not sets are known as proper classes. These concepts are not formally defined in Zermelo-Fraenkel set theory, so in this article we only consider them as abbreviations of propositions.

In the next few sections, we use $V$ to denote the universe of all objects (aka. von Neumann universe) and $ON$ to denote the proper class of all ordinals:

$$
V=\lbrace x:x=x\rbrace,
$$

$$
ON=\lbrace x:[\forall y\space(y\in x\Rightarrow y\subset x)]\wedge(x,\in)\text{ is well-ordered}\rbrace.
$$

The notion of functions can also be generalized to classes. When we say $F:C_1\to C_2$ is a mapping from the class $C_1$ to the class $C_2$, we mean $F$ is a binary proposition such that

$$
\forall x\space C_1(x)\Rightarrow(\exists! y\space C_2(y)\wedge F(x,y)).
$$

### Transfinite induction

Since the principle of mathematical induction in number theory is equivalent to the well-ordering property of $\omega$, we can develop the theory of transfinite induction (i.e. induction on the class of ordinals) by starting from investigating the well-ordering property of $ON$.

We have only defined the notion of well-ordering on sets, but for a class the definition is similar. That is to say, for every nonempty subclass $C$ (i.e. some proposition $C(x)$ such that $\exists x\space C(x)$ holds), there is an element $y$ such that $\forall x\space(C(x)\Rightarrow x\ge y)$.

In the context of $ON$, suppose $C$ is a subclass and $\alpha$ is an ordinal such that $C(\alpha)$ holds. Then we can choose the minimal element by picking the minimal element of the set

$$
\lbrace\beta\in\alpha:C(\beta)\rbrace\subset\alpha
$$

when $\alpha$ is not the minimum. Therefore, the arguments used in our discussion of (4) allow us to formulate the principle of **transfinite induction** on the class of ordinals:

**Theorem 5:** *Let $P(x)$ be a proposition defined on ordinals and $\alpha,\beta$ denote ordinals. Then*

$$
\space[\forall\alpha,\beta\space(\beta<\alpha\Rightarrow P(\beta))\Rightarrow P(\alpha)]\Rightarrow(\forall\alpha\space P(\alpha)).\tag{10}
$$

By comparing (3) and (10), we see that Theorem 5 is a direct generalization of strong induction to the class of all ordinals. Although the statement of transfinite induction is very concise, we often proceed by considering the successor case (similar to the inductive step in weak induction) and the limit case separately.

### Transfinite recursion

Mathematical induction on natural numbers is powerful to study functions that are defined recursively over natural numbers. As a result, we also generalize the notion of recursion to the class of all ordinals.

In our ordinary discussion of recursive functions, we refer to some mapping $f:\omega\to V$ such that the value of $f(n)$ is completely determined by $f(m)$ for $m<n$. That is to say,

$$
f(n)=G(f\vert_{\lbrace0,1,\dots,n-1\rbrace})
$$

for some $G:V\to V$. Using this compact notation, we state the principle of **transfinite recursion**:

**Theorem 6:** *For each class mapping $G:V\to V$, there is exactly one function $F:ON\to V$ such that*

$$
\forall\alpha\space F(\alpha)=G(F\vert_\alpha)=G(F\vert_{\lbrace\beta:\beta<\alpha\rbrace}).
$$

_Proof._ The trick is to approximate $F$ by some function defined on some ordinal $\delta>\alpha$. For each ordinal $\delta$, a function $f_\delta:ON\to V$ is said to be an approximant for $F$ iff

$$
\forall\alpha\in\delta\space f_\delta(\alpha)=G(f_\delta\vert_\alpha).\tag{11}
$$

For two approximants $f_{\delta_1}$ and $f_{\delta_2}$ such that $\delta_1\le\delta_2$. It follows from transfinite induction that the two functions agree whenever $\alpha\in\delta_1$. Therefore, it remains to establish the existence of approximants for all $\delta$.

Suppose approximants $f_{\delta'}$ exists for all $\delta'<\delta$. Then let

$$
f=\bigcup_{\delta'<\delta}f_{\delta'},
$$

so it follows from the previous paragraph that $f$ is a function defined on

$$
\bigcup_{\delta'<\delta}\delta'=\cup\delta=\sup\delta
$$

such that $f(\alpha)=G(f\vert_\alpha)$ for all $\alpha\in\sup\delta$. When $\delta$ is a limit ordinal, $f_\delta=f$ is itself an approximant defined on $\delta$. When $\delta$ is not a limit ordinal, it follows from Lemma 5 that $\delta=\sup\delta\cup\lbrace\sup\delta\rbrace$, so

$$
f_\delta=f\cup\lbrace(\sup\delta,G(f))\rbrace
$$

is an approximant defined on $\delta$ in this case. Consequently, the principle of transfinite induction tells us that $\delta$-approximant to $F$ exists for any ordinal $\delta$.

Therefore, we can create a unique $F$ satisfying (11) by setting $F(\alpha)=f_{S(\alpha)}(\alpha)$ for any ordinal $\alpha$.

## The axiom of choice

Throughout the previous sections of the article, we have demonstrated how much we can do on a well-ordered set. To apply these tools to arbitrary sets, we hope that every set in existence can be well-ordered.

**Well-ordering theorem:** *For every set $A$, there exists some relation $R\subset A\times A$ for which $(A,R)$ is well-ordered.*

To ensure this theorem can be proven from the axioms of set theory, Ernst Zermelo introduced the axiom of choice in 1904:

**Axiom of choice:** *For each family $\mathscr F$ of nonempty sets, there exists a choice function $c:\mathscr F\to\cup\mathscr F$ such that $c(X)\in X$ for every set $X\in\mathscr F$.*

To prove that the axiom of choice implies the well-ordering theorem, it is sufficient for us to create a one-to-one mapping from an initial segment of ordinals onto $A$. Let $\mathscr F=2^A\setminus\lbrace\empty\rbrace$ be the collection of nonempty subsets of $A$ and $c$ be its choice function. Let $F(\alpha)$ be defined recursively such that

$$
F(\alpha)=c(A\setminus\lbrace F(\beta):\beta<\alpha\rbrace)\tag{12}
$$

when $A\setminus\lbrace F(\beta):\beta<\alpha\rbrace$ is nonempty and $F(\beta)$ is defined for all $\beta<\alpha$.

Suppose $F$ is defined for all ordinals. Then there is a one-to-one mapping from $ON$ onto some subset of $A$. Because $A$ is a set, it follows from the axiom schema of replacement that $ON$ is also a set, which contradicts Theorem 4. As a result, the recursion in (12) must terminate at some point.

Let $\alpha$ be the smallest ordinal for which $F$ is undefined. Then $F(\beta)$ is undefined for all $\beta\ge\alpha$ and defined for all $\beta<\alpha$, so we have

$$
A=\lbrace F(\beta):\beta<\alpha\rbrace,
$$

which indicates that $A$ is well-ordered by

$$
\forall x,y\in A\space x<y\iff F^{-1}(x)\in F^{-1}(y).
$$

The introduction of the axiom of choice is essential to the well-ordering theorem as the former is also implied by the latter. Assuming the truth of the well-ordering theorem, let $A=\cup\mathscr F$ and choose $R\subset A\times A$ such that $(A,R)$ well-ordered, so $\min(x)$ will be a valid choice function as every $x\in\mathscr F$ is a nonempty subset of $A$.

Because the axiom of choice is one of the most controversial concepts in mathematics, mathematicians often emphasize whether they work with the axiom of choice or not. The Zermelo-Fraenkel axioms for set theory that does not include choice is abbreviated as ZF, and the set theory that includes ZF axioms and choice is known as the ZFC set theory. What we have proven in this section is that the axiom of choice is equivalent to the well-ordering theorem under ZF.

## Conclusion

In this article, we began our investigation by relating the principle of mathematical induction to the well-ordering property of natural numbers. Subsequently, we formulated the concept of well-ordering on general sets. Through subtle use of order ideals and order isomorphisms, we prove theorems that allow us to compare two arbitrary well-ordered sets (Theorem 1).

After that, we present ordinals, which are special types of well-ordered sets such that their elements coincide with their intial segments and possess nice properties (e.g. Theorem 3 indicates there is exactly one ordinal in each isomorphism class of well-ordered sets). The simplicity of their structure allows us to define natural numbers using sets.

Ordinals can also be thought as generalization of natural numbers to study general sets that are well-ordered. As a result, we also develop the transfinite analogs of the ordinary induction and recursions over natural numbers.

Finally, after exploring all these amazing properties of well-ordered sets, we proposed the axiom of choice, whose introduction is essential if we want all sets to be well-orderable.

Well-ordering theorem is one of the earliest known implication of the axiom of choice. In the next article, we will dive deeper into this axiom and deduce more implications.

[mp]: https://en.wikipedia.org/wiki/Modus_ponens
[extensionality]: https://en.wikipedia.org/wiki/Axiom_of_extensionality
[replacement]: https://en.wikipedia.org/wiki/Axiom_schema_of_replacement
[^kunen]: Kunen, K. (1980). _Set Theory: An Introduction to Independence Proofs_. Elsevier Science Publishers.
[^cap]: The intersection of all sets inside $C$. $\cup C$ is defined similarly.