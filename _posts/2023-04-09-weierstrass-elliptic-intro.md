---
layout: post
title:  "Introduction to Weierstrass elliptic functions"
date:   2023-04-09
des:    We develop Weierstrass's theory of elliptic functions
tags:   complex-analysis elliptic-functions
---

Let $P$ denote a fundamental parallelogram of some elliptic function $f$. Then it follows from the double periodicity that

$$
\oint_{\partial P}f(z)\mathrm dz=0.\tag1
$$

If $f$ has no poles, it follows from Liouville's theorem that $f$ must be constant. If $f$ only has a simple pole, then it follows from the residue theorem that the integral in (1) should be nonzero. As a result, we deduce the theorem of Liouville that _a nonconstant elliptic function must possess at least two poles inside its fundamental parallelogram._ Moreover, because $f'/f$ is also an elliptic function, we see also that _a nonconstant elliptic function has the same number of zeros and poles._

From our analysis in [this article][jacobi-intro], the functions $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ constructed by Jacobi are elliptic functions with two simple zeros and two simple poles. In contrast, when developing his theory of elliptic functions, Weierstrass was motivated by Liouville's theorem and constructed $\wp$ as an elliptic function with one double pole inside any of its fundamental parallelograms. Specifically, let $\omega_1$, $\omega_2$ be two complex numbers such that $\omega_1/\omega_2\notin\mathbb R$ and $L$ denote the _lattice_ set

$$
L=\{2m\omega_1+2n\omega_2:(m,n)\in\mathbb Z^2\}.\tag2
$$

Then $\wp$ is defined as

$$
\wp(z;L)={1\over z^2}+\sum_{w\in L\setminus\{0\}}\left({1\over(z-w)^2}-{1\over w^2}\right).\tag3
$$

The series converges absolutely and uniformly in any compact subset of $\mathbb C\setminus L$, so (3) defines a meromorphic function. Moreover, by rearranging the order of summation properly, we see that $\wp$ is a $2\omega_1,2\omega_2$-periodic function with poles at $z\equiv0\pmod L$. The numbers $\omega_1,\omega_2$ are known as **half periods**.

> Some authors (e.g. Apostol, Lang, and Serre) use $\omega_1$ and $\omega_2$ to denote full periods instead of half periods. The notation employed here is consistent with Whittaker & Watson's _A Course in Modern Analysis_ and [DLMF](https://dlmf.nist.gov/23).

## Universal property of $\wp$


It follows from (3) that $\wp$ is even, and this allows us to use $\wp$ to represent all even elliptic functions $f$ with periods $2\omega_1$ and $2\omega_2$.

It suffices to use $\wp$ to construct $f_1$  so that $f_1$ has the same zeros and poles (with the same multiplicities) as $f$ because Liouville's theorem suggests that $f/f_1$ is constant. Since $f$ is even, we see that if $f(z)$ has a zero of order $r$ at $z=a$, then it will also have a zero of order $r$ at $z=-a$. Because $f'$ is odd, we see that when $a\equiv-a\pmod L$, the zero at $z=a$ will be of order at least 2. By analyzing $1/f$, we see that the poles of $f$ also exhibit similar properties.

In the case of $\wp$, due to its double poles, we see that $\wp(z)-\wp(a)$ has a zero of order 2 when $a\equiv-a\not\equiv0\pmod L$ and has two simple zeros when $a\not\equiv-a\pmod L$. Therefore, let $z_1,z_2,\dots,z_n$ be a subset of zeros/poles of $f$ in one of its fundamental parallelograms arranged in the fashion such that $z_j\not\equiv-z_k\not\equiv0\pmod L$ and all other zeros/poles are either $\equiv0\pmod L$ or $\equiv\pm z_j\pmod L$. Let $m_j$ be the order of $z_j$. Then we see that if

$$
s_j=
\begin{cases}
m_j & z_j\not\equiv-z_j\pmod L \\
m_j/2 & z_j\equiv-z_j\pmod L
\end{cases}
$$

and $2s_0$ be the order of $f(z)$ at $z=0$, then the function

$$
f_1(z)=[\wp(z)]^{-2s_0}\prod_{1\le j\le n}[\wp(z)-\wp(z_j)]^{s_j}\tag4
$$

is exactly what we desired. Therefore, we see that _every even elliptic function is a rational function of $\wp$_. In addition, because every odd elliptic function is a product of $\wp'$ and an even elliptic function and every function can be split into odd and even components, we conclude that _every elliptic function is a rational function of $\wp$ and $\wp'$._

## Laurent expansion and Eisenstein series

From (2), we see immediately that $L$ is a discrete set, so when $\vert z\vert$ is sufficiently small, the series

$$
{1\over(z-w)^2}={1\over w^2}+\sum_{n\ge1}{(n+1)z^n\over w^{n+2}}
$$

converges absolutely for all $w\in L\setminus\\{0\\}$. Plugging this into (3), we have

$$
\begin{aligned}
\wp(z)
&={1\over z^2}+\sum_{w\in L\setminus\{0\}}\sum_{n\ge1}{(n+1)z^n\over w^{n+2}} \\
&={1\over z^2}+\sum_{n\ge1}(n+1)G_{n+2}z^n.
\end{aligned}\tag5
$$

Here, $G_k$ is known as the **Eisenstein series** of order $k$:

$$
G_k=G_k(L)=\sum_{w\in L\setminus\{0\}}{1\over w^k}.\tag6
$$

It can be verified that (6) converges absolutely for $k>2$, so $G_k$ is well defined when $k\ge3$. In addition, because $\wp$ is even, $G_k=0$ for all odd $k$. Furthermore, we will show in a moment that we can determine the values of all $G_k$ as long as $G_4$ and $G_6$ are known.

## Differential equation and Eisenstein invariants

Because $(\wp')^2$ is even and has no poles besides $z\equiv0\pmod L$, it follows from (4) that $(\wp')^2$ must be a polynomial of $\wp$. From our analysis of the zeros of $\wp$, we also know that the zeros of $\wp'(a)=0$ iff $a\not\equiv0\pmod L$ and $a\equiv-a\pmod L$. This indicates that $a$ must be in the form $m\omega_1+n\omega_2$ for odd integer $m$ and $n$. In the orthodox notation, let $\omega_3$ be defined as

$$
\omega_3=-\omega_1-\omega_2\tag7
$$

and the number $e_j$ be defined by

$$
e_j=e_j(L)=\wp(\omega_j;L).\tag8
$$

Therefore, let $\phi(\wp)=(\wp-e_1)(\wp-e_2)(\wp-e_3)$. Then $(\wp')^2/\phi$ is constant. Moreover, because of (5), $(\wp')^2\sim4z^{-6}$ and $\phi\sim z^{-6}$ as $z\to0$, we conclude that $\wp$ solves the differential equation

$$
(\wp')^2=4(\wp-e_1)(\wp-e_2)(\wp-e_3).\tag9
$$

Because $\wp'$ has a pole of third order at $z\equiv0\pmod L$, (9) indicates that $e_1$, $e_2$, and $e_3$ are necessarily distinct. To determine the exact coefficients of the expanded polynomial, we write out the first few terms of (5):

$$
\wp={1\over z^2}+3G_4z^2+5G_6z^4+O(|z|^6),\tag{10}
$$

$$
\wp'={-2\over z^3}+6G_4z+20G_6z^3+O(|z|^5).
$$

This indicates that

$$
(\wp')^2={4\over z^6}-{24G_4\over z^2}-80G_6+O(|z|),\tag{11}
$$

$$
\wp^3={1\over z^6}+{9G_4\over z^2}+15G_6+O(|z|^2).\tag{12}
$$

Subtracting an appropriate multiple of (12) from (11) gives

$$
(\wp')^2-4\wp^3=-{60G_4\over z^2}-140G_6+O(|z|).
$$

Combining this with (10), we see that

$$
(\wp')^2-4\wp^3+60G_4\wp=-140G_6+O(|z|)
$$

is an elliptic function with no poles hence constant by Liouville's theorem. Consequently, the differential equation (9) may also be written in the form of

$$
(\wp')^2=4\wp^3-g_2\wp-g_3,\tag{13}
$$

where $g_2=60G_4$ and $g_3=140G_6$ are known as the **Eisenstein invariants**. As a result, it follows from Vieta's theorem that $e_1+e_2+e_3=0$.

Differentiating (13) once more gives

$$
2\wp''=12\wp^2-g_2,
$$

and comparing coefficients produces a recursive formula for the Eisenstein series:

$$
\begin{aligned}
(2m+1)
&(m-3)(2m-3)G_{2m} \\
&=3\sum_{2\le k\le m-2}(3k-1)(2m-2k-1)G_{2k}G_{2m-2k}.
\end{aligned}\tag{14}
$$

A full proof of (14) is available in Apostol's _Modular functions and Dirichlet series in Number Theory_.

## $\wp$ and Jacobian elliptic functions

Let $\lambda$ be some nonzero complex number. Then by [the properties][jacobi-intro] of $\operatorname{sn}$, we see that

$$
y(z)=A+{\lambda^2\over\operatorname{sn}^2(\lambda z|\tau)}.\tag{15}
$$

is an elliptic function with double poles at $\lambda z\equiv2mK+2niK'$. Let the values of $\omega_1,\omega_2,\omega_3$ be permuted such that $\omega_3/\omega_1$ is on the upper half plane so we have

$$
\omega_1={K\over\lambda},\quad\omega_3={iK'\over\lambda},\quad\tau={\omega_3\over\omega_1}.\tag{16}
$$

This indicates that there exists some $A$ such that $\wp(z)=y(z)$. As a result, by combining (8) with the special values

$$
\operatorname{sn}(K)=1,\quad\operatorname{sn}(-K-iK')=k^{-1},\quad\operatorname{sn}^{-1}(iK')=0,
$$

we have the following

$$
e_1=A+\lambda^2,\quad e_2=A+k^2\lambda^2,\quad e_3=A.\tag{17}
$$

Plugging (17) into (15), we have

$$
\wp(z)=e_3+{e_1-e_3\over\operatorname{sn}^2(\lambda z;k)},\tag{18}
$$

where the numbers $\lambda$ and $k$ are chosen such that

$$
\lambda^2=e_1-e_3,\quad k^2={e_2-e_3\over e_1-e_3}.\tag{19}
$$

> Because $K$, $K'$, and $k$ are functions of $\tau$, the expression (18) works for any pairs of $\omega_1$ and $\omega_3$ such that $\Im(\omega_3/\omega_1)>0$.

### Expressions for $e_1$, $e_2$, and $e_3$

Because $e_1+e_2+e_3=0$, it follows from (16) and (17) that

$$
e_3=-{\lambda^2\over3}(1+k^2)=-{K^2\over3\omega_1^2}(1+k^2).\tag{20}
$$

Plugging this back into (17), we also deduce expressions for $e_1$ and $e_2$:

$$
e_1={K^2\over3\omega_1^2}(3-1-k^2)={K^2\over3\omega_1^2}(1+k'^2),\tag{21}
$$

$$
e_2={K^2\over3\omega_1^2}(3k^2-1-k^2)={K^2\over3\omega_1^2}(k^2-k'^2),\tag{22}
$$

in which $k'^2=1-k^2$.

### Expressions of $\wp$ via theta functions

Because we know that quantities related to Jacobian elliptic functions are expressible by theta functions, we may use these identities to express Weierstrass elliptic functions as well.

From [this article][theta], we know that

$$
K=\frac\pi2\vartheta_3^2,\quad k={\vartheta_2^3\over\vartheta_3^2},\quad k'={\vartheta_4^2\over\vartheta_3^2},
$$

so (20) (21), and (22) become

$$
e_1={\pi^2\over12\omega_1^2}(\vartheta_3^4+\vartheta_4^4),\tag{23}
$$

$$
e_2={\pi^2\over12\omega_1^2}(\vartheta_2^4-\vartheta_4^4),\tag{24}
$$

$$
e_3=-{\pi^2\over12\omega_1^2}(\vartheta_2^4+\vartheta_3^4).\tag{25}
$$

Moreover, because of

$$
\lambda={\pi\vartheta_3^2\over2\omega_1},\quad\operatorname{sn}(u)={\vartheta_3\over\vartheta_2}\cdot{\vartheta_1(u/\vartheta_3^2)\over\vartheta_4(u/\vartheta_3^2)},
$$

we see that (18) becomes

$$
\wp(z)-e_3=\left({\pi\vartheta_2\vartheta_3\over2\omega_1}\cdot{\vartheta_4(\pi z/2\omega_1)\over\vartheta_1(\pi z/2\omega_1)}\right)^2.\tag{26}
$$

## Conclusion

In this article, we defined the Weierstrass elliptic function $\wp(z)$ as a consequence of an attempt to develop the simplest possible elliptic function. Subsequently, by analyzing the Laurent expansion and differential equation of $\wp$, we defined the Eisenstein series, the invariants $g_2,g_3$, and the important special values $e_1,e_2,e_3$. After that, by analyzing the relationships between $\wp$ and Jacobian elliptic functions, we successfully reformulated $\wp$ using Jacobian theta functions as we have done for Jacobian elliptic functions [before][theta].

[jacobi-intro]: /2023/04/02/jacobian-elliptic-functions-intro.html
[theta]: /2023/04/07/jacobian-theta-functions-foundation.html