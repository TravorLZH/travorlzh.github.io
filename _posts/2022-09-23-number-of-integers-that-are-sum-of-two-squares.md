---
layout: post
title:  "Number of integers that are a sum of two squares"
date:   2022-09-23
des:    We investigate a question parallel to Gauss circle problem
tags:   number-theory complex-analysis
---
> This is written during the flight from Hong Kong to Frankfurt.

In the previous articles, we investigate the number of ways to express integers as a sum of two squares, so one would naturally ask _how frequently are integers expressible as a sum of two squares._ In other words, we hope to investigate the asymptotic behavior of the following function:

$$
N(x)=\sum_{\substack{n\le x\\\exists a,b\in\mathbb Z\text{ s.t. }n=a^2+b^2}}1=\sum_{\substack{n\le x\\r(n)>0}}1.\tag1
$$

By the definition of $r(n)$, we see that the Dirichlet series associated with $N(x)$ can be expressed as a product of primes as follows

$$
F(s)=\sum_{\substack{n\ge1\\r(n)>0}}{1\over n^s}=\prod_{p\equiv1(4)}\left(1-{1\over p^s}\right)^{-1}\prod_{p\equiv3(4)}\left(1-{1\over p^{2s}}\right)^{-1}.\tag2
$$

Typically, we hope to associate $F(s)$ with $\zeta(s)$ or $L(s,\chi)$ as in the previous article so that we perform contour integration tricks on the estimation of $N(x)$.

## Basic properties of $F(s)$

If we were to square both sides, then we see that

$$
\begin{aligned}
F^2(s)
&=\prod_{p\equiv1(4)}\left(1-{1\over p^s}\right)^{-1}\prod_{p\equiv3(4)}\left(1+{1\over p^s}\right)^{-1} \\
&\times\prod_{p\equiv1(4)}\left(1-{1\over p^s}\right)^{-1}\prod_{p\equiv3(4)}\left(1-{1\over p^s}\right)^{-1}\prod_{p\equiv3(4)}\left(1-{1\over p^{2s}}\right)^{-1} \\
&=\zeta(s)L(s,\chi_4)\left(1-{1\over2^s}\right)\prod_{p\equiv3(4)}\left(1-{1\over p^{2s}}\right).
\end{aligned}
$$

Obviously, we see that the last product converges absolutely on $\Re(s)>\frac12$. In order to obtain bounds for $F(s)$ helpful for contour integration, we need to take a detour to $\log\zeta(s)$ and $\log L(s,\chi_4)$.

## De la Vallée Poussin's region

Although logarithm is multi-valued, $\log\zeta(s)$ and $\log L(s,\chi_4)$ are well-defined whenever $s$ lies in their zero-free region within the right half plane. In fact, de la Vallée Poussin had proven in 1896 that

_There exists a constant $c>0$ such that $\zeta(s)$ and $L(s,\chi_4)$ are free of zeros in_

$$
\sigma\ge\max\left(\frac12+\delta,1-{c\over\log\tau}\right),\quad\tau=\max(\vert t\vert ,4).\tag3
$$

In 1913, Gronwall showed that when $s$ lies in the region described by (3), the following estimate

$$
\vert \log\zeta(s)\vert \le\log\log\tau+O(1).\tag4
$$

is valid when $s$ is away from 1. As shown in Montgomery & Vaughan's _Multiplicative Number Theory I: Classical theory_, (4) is also valid when $\zeta(s)$ is replaced by $L(s,\chi_4)$, which indicates that whenever $s$ lies in the same region as (3), $F(s)$ satisfies

$$
\vert F(s)\vert\le e^{2\log\log\tau+O(1)}\prod_{p\equiv3(4)}\left(1-{1\over p^{1+2\delta}}\right)^{-1/2}=O(\log^2\tau).\tag5
$$

The bound (5) is sufficient for us to estimate contour integrals over $F(s)$ along line segments lying within (3). Therefore, let's bring in Perron's formula.

## Contour integration and error estimates

Using Perron's formula, we see that whenever $a=1+(\log x)^{-1}$ and $4\le T\le x$ there is

$$
N(x)={1\over2\pi i}\int_{a-iT}^{a+iT}F(s){x^s\over s}\mathrm ds+O\left(x\log x\over T\right)\tag6
$$

Because $F(s)$ behaves like $(s-1)^{-1/2}$ when $s$ approaches one, we cannot handle the integral via residue theorem. Instead, we deform the path $[a-iT,a+iT]$ into

$$
\int_{a-iT}^{a+iT}=\int_{a-iT}^{1-k-iT}+\int_{1-k-iT}^{1-k-i\varepsilon}+\int_C+\int_{1-k+i\varepsilon}^{1-k+iT}+\int_{1-k+iT}^{a+iT},
$$

where $k=c(\log T)^{-1}$ and $C$ denote some path that begins from $1-k-i\varepsilon$, surrounds $s=1$ counter-clockwise, and finally goes to $1-k+i\varepsilon$. For integrals other than $C$, plugging (5) in gives

$$
\int_{a-iT}^{1-k-iT}+\int_{1-k+iT}^{a+iT}\ll{x\log^2T\over T}\le{x\log^2x\over T}\tag7
$$

and

$$
\int_{1-k-iT}^{1-k-i\varepsilon}+\int_{1-k+i\varepsilon}^{1-k+iT}\ll x^{1-k}(\log T)^3\le x^{1-k}(\log x)^3.\tag8
$$

Setting $\log T=\sqrt{\log x}$ and combining (6), (7), and (8), we see that there exists some $c_0>0$ such that

$$
N(x)={x\over2\pi i}\underbrace{\int_CF(s){x^{s-1}\over s}\mathrm dx}_I+O(xe^{-c_0\sqrt{\log x}}).\tag9
$$

Thus, the remaining task is to compute the integral along the path $C$, which presumably becomes the main term of $N(x)$.

## The main term of $N(x)$

Let $C_1$ denote the path $C$ shifted one unit to the left. Then we have

$$
I=\int_{C_1}u^{-1/2}x^uh(u+1)\mathrm du,
$$

where it is evident that $h(u+1)=u^{1/2}F(u+1)/(u+1)$ is obivously analytic in and on $C$. To calculate $I$ further, we deform $C_1$ into a truncated **Hankel contour**:

$$
I=\int_{e^{-i\pi}k-i\varepsilon}^{-i\varepsilon}+\int_\gamma+\int_{i\varepsilon}^{e^{\pi is}k+i\varepsilon},\tag{10}
$$

where $\gamma$ denotes a counterclockwise arc connecting $-i\varepsilon$ and $i\varepsilon$, so letting $\varepsilon\to0^+$, (10) becomes

$$
I=(e^{\pi i/2}-e^{-\pi i/2})\int_0^kv^{-1/2}x^{-v}h(1-v)\mathrm dv.\tag{11}
$$

Due to the analyticity of $h(1-v)$ near $v=0$, we see that it admits an asymptotic expansion:

$$
h(1-v)=a_0+a_1v+a_2v^2+\dots+a_{N-1}v^{N-1}+O(\vert v\vert ^N),
$$

so (11) becomes

$$
\begin{aligned}
I
&=2i\sum_{0\le n<N}a_n\int_0^kv^{n-1/2}x^{-v}\mathrm dv+O\left(\int_0^\infty v^{N-\frac12}x^{-u}\mathrm du\right) \\
&=2i\sum_{0\le n\le N}{a_n\over(\log x)^{n+1/2}}\int_0^{c\sqrt{\log x}}y^{n-1/2}e^{-y}\mathrm dy+O\left(1\over\log^{N+1/2}x\right).
\end{aligned}\tag{12}
$$

This suggests that the main term of $N(x)$ is in fact expressed as some asymptotic series. Plugging (12) back into (9), we conclude that there exists a sequence $b_n=a_n\Gamma(n+\frac12)/\pi$ such that

$$
N(x)\sim{Kx\over\sqrt{\log x}}\left(1+{b_1\over\log x}+{b_2\over\log^2x}+{b_3\over\log^3x}+\dots\right),\tag{13}
$$

where $K=a_0/\sqrt\pi$ is called the **Landau-Ramanujan constant**. This indicates that the density of integers expressible as a sum of two squares is zero, but these types of integers are not so rare as primes (PNT gives $\sim x/\log x$). In the remaining part of this article, we develop analytical expressions for $K$.

## The value of Landau-Ramanujan constant

By definition, we know that $a_0=h(1)$ is exactly the limit of $(s-1)^{1/2}F(s)$ as $s\to1$, which means

$$
a_0=\sqrt{L(1,\chi_4)\over2}\prod_{p\equiv3(4)}\left(1-{1\over p^2}\right)^{-1/2},
$$

so it follows from the fact that $L(1,\chi_4)=\pi/4$ there is

$$
K={1\over2\sqrt2}\prod_{p\equiv3(4)}\left(1-{1\over p^2}\right)^{-1/2}.\tag{14}
$$

Using the properties of $L(s,\chi_4)$, we see that

$$
\begin{aligned}
\prod_{p\equiv3(4)}\left(1-{1\over p^{2s}}\right)^{-1}
&=L(s,\chi_4)\prod_{p\equiv1(4)}\left(1-{1\over p^s}\right)\prod_{p\equiv3(4)}\left(1-{1\over p^s}\right)^{-1} \\
&=L(s,\chi_4)\prod_{p>2}{1-(1+\chi_4(p))/2p^s\over1-(1-\chi_4(p))/2p^s}.
\end{aligned}
$$

Consequently, we obtain another expression for $K$:

$$
K={\pi\over4\sqrt2}\prod_{p>2}{p-(1+\chi_4(p))/2\over p-(1-\chi_4(p))/2}.\tag{15}
$$

## Conclusion

In this article, we investigated the distribution of numbers that are a sum of two squares using the contour integration method. However, the case we study today is fundamentally different from those we have researched in the past.

Instead of calculating a residue integral as in the past, we see that the main term of $N(x)$ is obtained by calculating a certain integral over a truncated Hankel contour.

## Notes

In this article, the analytic continuation of $F(s)$ is achieved by factoring a square root of $\zeta(s)$. In the 1950s, mathematicians Selberg and Delange developed ambitious generalizations of the method mentioned in this article. Particularly, they show that _if there exists some complex $z$ such that $[\zeta(s)]^{-z}F(s)$ is analytic and $O(\tau^{1-\delta})$ in the region described in (3), then there exists a sequence $\ell_n$ such that the summatory function of the coefficients of $F(s)$ is asymptotic to_

$$
\sim x(\log x)^{z-1}\left\{\ell_0+{\ell_1\over\log x}+{\ell_2\over\log^2x}+{\ell_3\over\log^3x}\right\}.
$$

For a detailed account of this result, consult §II.5.3 of Tenenbaum's _Introduction to Analytic and Probabilistic Number Theory_.