---
layout: post
title:  "Infinity, axiom of choice, and continuity"
date:   2024-11-12
des:    We compare two notions of infinity and relate it to the axiom of choice and the continuity of functions on the real line.
tags:   analysis real-analysis set-theory
---

In this article, we compare two notions of infinity and relate it to the axiom of choice and the continuity of functions on the real line.

## Infinite sets

> A great deal of modern mathematics is interacting with infinity. To play safely with infinity, we need to make things rigorous.

In Zermelo-Fraenkel set theory (ZF), a set $A$ is **finite** if $A=\varnothing$ or there exists some $n\in\mathbb N$ such that there is a bijection from $\lbrace 1,2,\dots,n\rbrace$ to $A$ and is infinite if it is not finite, or

**Definition 1:** $A$ is **infinite** if for every $n\in\mathbb N$ and every function $f:\lbrace 1,2,\dots,n\rbrace\to A$, there exists $x\in A$ outside the image of $f$.

Before this modern definition, there has been another definition due to Dedekind in 1888:

**Definition 2:** A set $A$ is **Dedekind infinite** if there exists an injection $f:A\to A$ that is not surjection.

For example, $\mathbb N$ is Dedekind infinite as $n\mapsto n+1$ defines an injection into a proper subset. It should be noted that Definition 2 does not rely on the construction of natural numbers.

## Equivalence of the definitions

Because every injection from a finite set into itself is surjective, Dedekind infinite sets are infinite sets. To justify the other direction, we first relate Dedekind infinite sets to natural numbers:

**Theorem 1:** *A set is Dedekind infinite if and only if it contains a countably infinite subset.*

*Proof.* To get a countably infinite set, let $f:A\to A$ be an injection such that $x$ lies outside the image. Clearly, we have $f(x)\ne x$. More generally, let $f^n$ be the $n$'th iterate of $f$. Then by the fact that $f$ is injective, for any $k\ge0$,

$$
f^{n+k}(x)=f^n(x)\iff f^k(x)=x\iff k=0,
$$

so $\lbrace x,f(x),f^2(x),\dots\rbrace$ is a countably infinite subset contained in $A$.

Conversely, if a set $A$ contains a countably infinite $B=\lbrace{x_1,x_2,\dots\rbrace}$, define

$$
f(x)=
\begin{cases}
x_{n+1} & x=x_n\in B \\
x & x\notin B.
\end{cases}
$$

Then $f:A\to A$ is clearly an injection whose image does not contains $x_1$. $\square$

Now, we complete our justification by proving the following:

**Theorem 2:** *Every infinite set contains a countably infinite subset.*

Let $A$ be infinite. Then by definition, for every $n\in\mathbb N$, the following collection is non-empty:

$$
S_n=\lbrace B\in 2^A:\operatorname{card}(B)=n\rbrace.
$$

Because $\lbrace S_n\rbrace_{n\in\mathbb N}$ is a family of non-empty sets, it follows from the axiom of choice (AC) that one can pick an element $B_n$ from each $S_n$. Because each $B_n$ is finite, $\cup_n B_n$ is a desired subset that is countably infinite. $\square$

> Since we are only choosing from a countably infinite collection, we can replace AC with the [axiom of countable choice][cac] instead.

## Relationship with AC

When confronted with a proof involving AC, one often responds by looking for a method that avoids it. However, it turns out that AC is necessary.

To explain this necessity, we make a detour to mathematical logic.

### Proofs and consistency

When we have a set $G$ and a binary operation $ * :G\times G\to G$, we say $(G,*)$ is a group when the following are satisfied

1. Associativity: $\forall a,b,c\quad(a * b) * c=a * (b * c),$
2. Identity: $\exists e\forall a\quad a *e=e * a=a,$
3. Inverse: $\forall a\exists b\quad a * b=b * a=e.$

Denote the collection of these axioms by $\Sigma$. When we can use these axioms to deduce some proposition $P$, we say $P$ is **provable** from $\Sigma$. We say $\Sigma$ is **consistent** if one can not deduce contradictions (i.e. $P\wedge\neg P$).

To show that $\Sigma$ is consistent, we argue in this manner: Suppose $\Sigma$ is inconsistent, then no sets and binary operations can satisfy $\Sigma$. However, $\mathbb Z$ under additions does satisfy the axioms $\Sigma$, which is a contradiction.

Instead of examining the axioms themselves, the proof argues by relating $\Sigma$ to an external structure whose construction does not rely on $\Sigma$. This is a very useful perspective in logic and the external structure is known as a **model** for $\Sigma$.

Consistency is an important tool as we can show that certain things are provable by establishing consistency. Specifically, $P$ is provable from $\Sigma$ if and only if $\Sigma\cup\lbrace\neg P\rbrace$ is inconsistent.

We should desmontrate the use of these concepts by showing that commutativity $C:a * b=b * a$ is neither provable nor disprovable from $\Sigma$:

- Since $\mathbb Z$ is a model of commutative group, $\Sigma\cup\lbrace C\rbrace$ is consistent, $\neg C$ is not provable, which means commutativity cannot be disproved.
- As $S_3$ is a model for $\Sigma\cup\lbrace \neg C\rbrace$, commutativity is not provable either.

With these languages in mind, we go back to Dedekind infinite sets.

### Dedekind infiniteness and AC

In the 1960s, Paul Cohen [^1] proved that there exists a model (i.e. a collection of objects identified as sets) for the ZF set theory such that AC is false and, among other things, that there exists an infinite set that is not Dedekind infinite. Moreover, we can embed such a pathological set into the real numbers.

**Theorem 3:** *There is a model of ZF (set theory without AC) in which $\mathbb R$ contains an infinite subset $D$ that has no countably infinite subset.*

In other words, the equivalence of Definition 1 and Definition 2 is not provable from ZF but provable from ZFC (set theory with AC).

Since $D$ lies inside $\mathbb R$, we can use it to investigate the interaction between Dedekind infiniteness and real analysis.

## Continuity

In the development of real analysis, there are two ways to characterize continuity of functions:

**Definition 3:** $f:\mathbb R\to\mathbb R$ is **sequentially continuous** at $x$ if for all sequence $x_n\to x$, $f(x_n)\to x$.

**Definition 4:** $f:\mathbb R\to\mathbb R$ is **continuous** at $x$ if

$$
\forall\varepsilon>0\exists\delta>0\forall y\quad\vert y-x\vert<\delta\implies \vert f(y)-f(x)\vert<\varepsilon.
$$

The implication from continuity to sequential continuity is straightforward. For the other direction, the proof proceeds in the following manner:

Suppose $f$ is not continuous at $x$. Then there is some $\varepsilon>0$ such that for every $n\in\mathbb N$, the set

$$
F_n=\left\lbrace y\in\left(x-\frac1n,x+\frac1n\right):\vert f(y)-f(x)\vert\ge\varepsilon\right\rbrace
$$

is non-empty. By AC, there is a function $x_\bullet:\mathbb N\to \cup_n F_n$ satisfying $x_n\in F_n$ for all $n$. As a result, $x_n\to x$ but $f(x_n)\not\to f(x)$, which means $f$ is not sequentially continuous either.

We will see that the use of AC in the formation of the exceptional sequence is essential by showing the following:

**Theorem 4:** *There is a model of ZF in which there exists some $f:\mathbb R\to\mathbb R$ that is sequentially continuous at $p\in\mathbb R$ but not continuous at $p$.*

Such $f$ is constructed using Theorem 3.

### Topology on $D$

Because continuity is studied via limits, we need to understand how $D$ behaves topologically in $\mathbb R$.

We know that $\mathbb Q$ is dense in $\mathbb R$ while every finite subset of $\mathbb R$ consists only of isolated points, so we infer that the topology of $D$ is in some sense between these two extrema:

**Theorem 5:** *$D$ contains a limit point. i.e.*

$$
\exists p\in D\forall\varepsilon>0\quad((p-\varepsilon,p+\varepsilon)-\lbrace p\rbrace)\cap D\ne\empty.
$$

*Proof.* Suppose otherwise. Then every point is isolated. i.e.

$$
\forall x\in D\exists\varepsilon>0\quad (x-\varepsilon,x+\varepsilon)\cap D=\lbrace x\rbrace.
$$

This means when $\mathscr C$ is the collection of intervals with rational endpoints. For each $x\in D$, there is some $I\in\mathscr C$ such that $I\cap D=\lbrace x\rbrace$. Because $\mathbb Q$ is countably infinite, we can index each interval of $\mathscr C$ using natural numbers. i.e. $\mathscr C=\lbrace I_n\rbrace_{n\in\mathbb N}$. As a result, we can define $f:D\to\mathbb N$ by

$$
f(x)=\min\lbrace n\in\mathbb N:I_n\cap D=\lbrace x\rbrace\rbrace,
$$

whose inverse is given by $n\mapsto$ the unique element of $I_n\cap D$, so $f$ is a bijection between $D$ and $\mathbb N$. This means $D$ is countably infinite, which is a contradiction. $\square$

Denote such a limit point by $p\in D$. We study sequences in $S=D-\lbrace p\rbrace$:

**Theorem 6:** *If $x_n\in S$ converges to some $x\in\mathbb R$, then $x_n$ is eventually constant.*

*Proof.* Suppose $x_n\to x$ is an exceptional sequence. Then we can construct subsequence $y_n$ recursively by $y_1=x_1$ and for $n\ge2$

$$
y_n=x_{n'},\quad n'=\min\lbrace k\in\mathbb N:\lvert x_k-x\rvert<\vert y_{n-1}-x\vert \rbrace.
$$

This is well defined because the $\varepsilon-N$ definition of sequential limit implies the rightmost set is empty. Moreover, because $\vert y_n-x\vert$ is strictly decreasing, $\lbrace y_1,y_2,\dots\rbrace$ forms a countably infinite subset of $S$, which is a contradiction. $\square$

> In the proof of Theorem 6, we are also choosing points from an infinite collection of sets, but because we have explicitly constructed the choice function via $\min\lbrace\dots\rbrace$, AC is not invoked.

Hence, every convergent sequence in $S$ has a limit equal to the eventual constant, so every convergent sequence has its limit inside $S$, which means

**Theorem 7:** *No sequence in $S$ converges to $p$.*

Now, we have prepared everything needed by Theorem 4.

### Proof of Theorem 4

Let $S$ be defined as above and $f:\mathbb R\to\mathbb R$ be

$$
f(x)=
\begin{cases}
1 & x\in S, \\
0 & x\notin S.
\end{cases}
$$

Because for each $\varepsilon>0$, $(p-\varepsilon,p+\varepsilon)$ intersects both $S$ and $\mathbb R-S$, $f$ is not continuous at $p$. In contrast, $f$ is sequentially continuous at $p$. To see this, take a sequence of real numbers $x_n\to p$. By Theorem 7, we cannot extract a subsequence of $x_n$ lying entirely inside $S$, so $x_n\notin S$ for all sufficiently large $n$, which means

$$
\lim_{n\to\infty}f(x_n)=0=f(p),
$$

so $f$ is indeed sequentially continuous at $p$. $\square$

## Conclusion

In this blog, we began our discussion by relating definitions of infinite sets. Then, axiom of choice is introduced when attempting to demonstrate the equivalence of these two definitions. Finally, in the absence of AC, we destroy real analysis by constructing a function that violates the equivalence of $\varepsilon$-$\delta$ continuity and sequential continuity.

[cac]: https://en.wikipedia.org/wiki/Axiom_of_countable_choice
[^1]: Jech, Thomas J. *The Axiom of Choice.* Dover Publ, 2008.