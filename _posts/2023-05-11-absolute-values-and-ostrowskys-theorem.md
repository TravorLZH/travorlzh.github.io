---
layout: post
title:  "Absolute values and Ostrowski's theorem"
date:   2023-05-11
des:    We prove a classification theorem of absolute values on $\mathbb Q$ due to Ostrowski
tags:   algebra p-adic
---

> After final exams, year 1 students at UCL are offered summer-term extra lectures, and the lecture today given by Prof Cecilia Busuioc is on $p$-adic numbers. During the discussion, she mentioned without proof that a theorem of Ostrowski[^ostrowski] indicates that all nontrivial absolute values over $\mathbb Q$ are either equivalent the ordinary one we learn in schools or the $p$-adic absolute values. This is the reason for the present article to exist.

When learning elementary algebra, absolute values $\vert\cdot\vert$ are introduced as a function over $\mathbb R$ such that

$$
\vert x\vert =
\begin{cases}
x & x\ge0, \\
-x & x<0.
\end{cases}\tag1
$$

Using the definition, we immediately obtain

$$
\vert xy\vert =\vert x\vert\cdot\vert y\vert ,\quad\vert x+y\vert\le\vert x\vert +\vert y\vert .\tag2
$$

As a consequence, when working with general fields, mathematicians developed the following set of axioms for absolute values over general fields $K$:

**Definition 1 (absolute value):** Let $K$ be a field with additive identity $0$ and multiplicative identity $1$. Then, a function $f:K\mapsto\mathbb R_{\ge0}$ is said to be an absolute value over $K$ when

1. $f(x)=0$ iff $x=0$ (positive definiteness).
2. $\forall x,y\in K,f(xy)=f(x)f(y)$ (multiplicativity).
3. $f(x+y)\le f(x)+f(y)$ (triangle inequality).

Combining the first two properties, we immediately have

$$
[f(1)]^2=[f(-1)]^2\Rightarrow f(1)=f(-1)=1.\tag3
$$

## Equivalent absolute values

When $f$ is multiplicative, its powers are multiplicative too. Let $g=f^c$, so we see that $g$ becomes an absolute value if $c$ is chosen such that $(u+v)^c\le u^c+v^c$. for all $a,b>0$. Without loss of generality, assume $u+v=1$, so it follows from [Bernoulli's inequality][bernoulli-ineq] that:

$$
u^c+v^c=u+(1-u)^c\ge(1-c)u+1.
$$

Thus, $g$ becomes an absolute value as long as $0\le c\le1$. However, a new absolute value defined in the fashion of $g$ is uninteresting because it is not topologically different from $f$.

>One can check that the definition of convergence and Cauchy's sequences are unchanged if ordinary absolute value $\vert\cdot\vert$ is replaced with $\vert\cdot\vert ^c$ for some $0<c<1$, so the topological completion[^1] of $\mathbb Q$ is still $\mathbb R$ if we work with $\vert\cdot\vert ^c$.

As a result, $f$ and $g$ are said to be equivalent absolute values:

**Definition 2 (equivalent absolute values):** Two absolute values $f$ and $g$ over $K$ are said to be _equivalent_ when $\exists c>0$ such that $f(x)=[g(x)]^c$ holds $\forall x\in K$.

## Absolute values over $\mathbb Q$

As indicated in the last section, we can produce some alternative interesting structures out of $\mathbb Q$ via topological completion if we work with an absolute value that is not equivalent to the ordinary $\vert\cdot\vert$.

Due to the first two properties of absolute values and the fact that every nonzero rational number is a quotient of nonzero integers, it is sufficient for us to define $f$ on $\mathbb N$. Focusing their behaviors on $\mathbb N$, as it will happen, allows us to classify all absolute values over $\mathbb Q$.

## Base-$q$ expansions of $\mathbb N$

For any integers $x,q>1$, we can pick a unique $m\in\mathbb N$ such that $q^{m-1}\le x<q^m$. Then, a unique integer $0\le c_{m-1}<q$ can be chosen such that $c_{m-1}q^{m-1}\le x<(c_{m-1}+1)q^{m-1}$. After that, we can choose another unique integer $0\le c_{m-2}<q$ such that $c_{m-2}q^{m-2}\le x-c_{m-1}q^{m-1}\le(c_{m-2}+1)q^{m-2}$. Continuing this procedure on and on, we will uniquely determine integers $0\le c_{m-3},c_{m-4},\dots,c_1,c_0<q$ such that

$$
x=c_0+c_1q+c_2q^2+\dots+c_{m-1}q^{m-1}=\sum_{0\le k<m}c_kq^k.\tag4
$$

This is known as the **base-$q$ expansion of $x$**. When $f$ is an absolute value, it follows from the triangle inequality that for any $n\in\mathbb N$

$$
f(n)\le\underbrace{f(1)+f(1)+\dots+f(1)}_{n\times f(1)}=n,\tag5
$$

so it follows from (4) that

$$
f(x)\le(q-1)\sum_{0\le k<m}[f(q)]^k\le(q-1)m\cdot\max([f(q)]^{m-1},1).
$$

By definition of $m$, we have $m\le\log_qx+1$, so

$$
f(x)\le(q-1)(\log_qx+1)\cdot\max([f(q)]^{\log_qx},1).\tag6
$$

It should be noted that this inequality is valid for all integers $x,q>1$ and all absolute values $f$ over $\mathbb Q$.

If an integer $x>1$ can be found such that $f(x)>1$, then for every $n\in\mathbb N$ and every integer $q>1$, (6) implies that

$$
[f(x)]^n\le(q-1)(n\log_qx+1)\cdot\max([f(q)]^{n\log_qx},1).\tag7
$$

If $f(q)\le1$, then due to the exponential growth on the left-hand side, (7) will cease to hold when $n$ is sufficiently large, so base-$q$ expansions help us successfully divide absolute values into two inequivalent kinds:

**Lemma 1 (dichotomy):** _For an absolute value $f$ over $\mathbb Q$, exactly one of the following is true:_

1. _$f(x)>1$ for all integers $x>1$._
2. _$f(x)\le1$ for all integers $x>1$._

## Absolute values of the first kind

When $f$ belongs to the first kind in Lemma 1, it follows from (7) that for any integer $x,q>1$ and any $n\in\mathbb N$

$$
f(x)\le(q-1)^{1/n}(n\log_qx+1)^{1/n}[f(q)]^{\log_qx}.
$$

Take the limit as $n\to+\infty$, so we have

$$
f(x)\le[f(q)]^{\log_qx}\Rightarrow{\log f(x)\over\log x}\le{\log f(q)\over\log q}.\tag8
$$

By swapping the positions of $x$ and $q$ in (7), we infer that (8) is virtually an inequality. Because we were choosing $x$ and $q$ arbitrarily, the function $\log f(x)/\log x$ is constant for all integer $x>1$. Therefore, the properties of logarithms, combined with (5), indicate that $\exists c\in(0,1]$ such that $f(x)=x^c$ for all $x\in\mathbb N$. This indicates that $f(x)=\vert x\vert ^c$ for all $x\in\mathbb Q$:

**Lemma 2:** _For any absolute value $f$ over $\mathbb Q$, $f$ is equivalent to $\vert\cdot\vert$ iff there exists some integer $x>1$ such that $f(x)>1$._

## Absolute values of the second kind

When $f(x)=1$ for all integer $x>1$, $f(x)\equiv 1$ for all $x\in\mathbb Q$, which is known as the **trivial absolute value**. When $f$ is a nontrivial absolute value of the second kind, we can choose some integer $x>1$ such that $f(x)<1$, and things become very interesting.

Suppose $y>1$ is another integer satisfying $f(y)<1$, then by Bezout's lemma (or $h,k$ lemma if you took Algebra II at UCL), for all $n\in\mathbb N$ there exists some integer tuple $(\alpha_n,\beta_n)$ such that

$$
\alpha_nx^n+\beta_ny^n=\gcd(x^n,y^n),
$$

so it follows from the triangle inequality and the fact that $f$ is of the second kind that

$$
\begin{aligned}
f(\gcd(x^n,y^n))
&=[f(\gcd(x,y))]^n\le f(\alpha_n)[f(x)]^n+f(\beta_n)[f(y)]^n \\
&\le[f(x)]^n+[f(y)]^n.
\end{aligned}
$$

By taking the limit as $n\to+\infty$, we discover that $f(x)<1$ and $f(y)<1$ implies $f(\gcd(x,y))<1$ as well. Because every integer $x>1$ possesses a prime divisor, we conclude that

**Lemma 3:** _If $f$ is an absolute value of the second kind, then there exists a unique prime number $p$ such that for all $x\in\mathbb N$, $f(x)<1$ iff $p$ divides $x$._

Unlike Lemma 2, Lemma 3 is not phrased by "iff" because we have not established its existence, which requires us to have a brief glance at the $p$-adic world.

### The $p$-adic world

By the unique factorization property in $\mathbb Z$, for every nonzero integer $x$ and prime $p$, there exists a unique integer $m\ge0$ such that $p^{-m}x$ is an integer not divisible by $p$, and the number $m$, denoted by $\nu_p(x)$, is known as the **$p$-adic order** of $x$. When $x=0$, we set $v_p(x)=+\infty$.

The notion of $p$-adic order can be generalized to $\mathbb Q$. For every nonzero $x\in\mathbb Q$, there exist integers $h,k$ such that $x=h/k$. In this case, we define $\nu_p(x)$ to be the difference $\nu_p(h)-\nu_p(k)$ (Check why this is well defined!).

Having generalized $\nu_p(\cdot)$ to $\mathbb Q$, we define the **$p$-adic absolute value** $\vert\cdot\vert_p$ to be

$$
\vert x\vert_p:=p^{-\nu_p(x)}.\tag9
$$

Since $\vert\cdot\vert_p$ is positive definite and multiplicative follows immediately from the definition, it suffices to verify the triangle inequality. For $x,y\in\mathbb Q$, we pick integers $h_1,h_2,k$ such that $x=h_1/k$ and $y=h_2/k$, so that

$$
\vert x+y\vert_p=p^{\nu_p(k)}\vert h_1+h_2\vert_p.
$$

Let $m=\nu_p(\gcd(h_1,h_2))=\min(\nu_p(h_1),\nu_p(h_2))$, so

$$
\vert x+y\vert_p\le p^{\nu_p(k)-m}\vert p^{-m}(h_1+h_2)\vert_p.\tag{10}
$$

By definition, $p^{-m}(h_1+h_2)$ is an integer, so its $p$-adic order must be nonnegative.

When $f$ is an absolute value of the second kind and $p$ is chosen as in Lemma 3, by setting $c=-\log f(p)/\log p$, we see that $c>0$ and $f(x)=\vert x\vert_p^c$ for all $x\in\mathbb Q$. Therefore, Lemma 3 is strengthened to

**Lemma 4:** *For any absolute value $f$ over $\mathbb Q$, $f$ is equivalent to $\vert\cdot\vert_p$ for some prime $p$ iff there exists some integer $x>1$ such that $f(x)<1$.*

$$
\begin{aligned}
\vert x+y\vert_p
&\le p^{\nu_p(k)-m}=\max(p^{\nu_p(k)-\nu_p(h_1)},p^{\nu_p(k)-\nu_p(h_2)}) \\
&\le\max(\vert x\vert_p,\vert y\vert_p),
\end{aligned}
$$

so $\vert\cdot\vert_p$ is a valid absolute value over $\mathbb Q$ for all prime $p$.

> Exercise: Show that for primes $p_1$ and $p_2$, $\vert\cdot\vert_{p_1}$ and $\vert\cdot\vert_{p_2}$ are equivalent iff $p_1=p_2$.

## Ostrowski's theorem

Combining our analyses in the previous sections, we obtain a theorem that classifies all absolute values over $\mathbb Q$:

**Theorem (Ostrowski):** _When $f$ is an absolute value over $\mathbb Q$, exactly one of the following is true:_

1. _$f(x)\equiv1$ for all $x\in\mathbb Q$, which is known as the trivial absolute value._
2. _There exists some $c_1\in(0,1]$ such that $f(x)=\vert x\vert ^c$ for all $x\in\mathbb Q$, where $\vert\cdot\vert$ is the ordinary absolute value defined in (1)._
3. *There exists some prime $p$ and some $c_2\in(0,+\infty)$ such that $f(x)=\vert x\vert_p^c$ for all $x\in\mathbb Q$.*

The theorem is proven by Alexander Ostrowski in 1916[^ostrowski].

## Conclusion

In this article, we began our investigation by creating an axiomatization for absolute values over a general field $K$. Subsequently, by applying absolute values over $\mathbb Q$ to the base-$q$ expansions of $\mathbb N$, we found that these absolute values can be put into two categories. After a further study, we deduced that the absolute values belonging to the first category are equivalent to the ordinary $\vert\cdot\vert$ we learn in schools, and the second kind leads to $p$-adic absolute values. Combining these efforts, we successfully demonstrated the classification theorem of Ostrowski.

In this article, we discovered $p$-adic absolute values due to the motivation to determine all classes of absolute values, but this is not the reason that they were originally introduced. Just like prime numbers, $p$-adic absolute values themselves have an interesting background in number theory, which is worth discussing in a separate article. See you there!

[bernoulli-ineq]: https://en.wikipedia.org/wiki/Bernoulli%27s_inequality
[^ostrowski]: Ostrowski, A. (1916). Über einige Lösungen der Funktionalgleichung $\psi(x)\psi(y)=\psi(xy)$. _Acta Mathematica_, _41_(0), 271–284. [https://doi.org/10.1007/BF0242294](https://doi.org/10.1007/BF0242294)
