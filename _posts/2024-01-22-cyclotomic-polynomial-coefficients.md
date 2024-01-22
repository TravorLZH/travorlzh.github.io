---
layout: post
title:  "On the coefficients of cyclotomic polynomials"
date:   2024-01-22
des:    We prove that when $n$ only has two distinct odd prime divisors, the expansion of the $n$'th cyclotomic polynomial $\Phi_n(x)$ only contains terms of the form $\pm x^k$.
tags:   algebra number-theory special-functions
---

The $n$'th cyclotomic polynomial $\Phi_n(x)$ is formed by collecting all the linear factors $x-\zeta$ such that $\zeta$ is the $n$'th primitive root of unity, so we can explicitly define it via

$$
\Phi_n(x)=\prod_{\substack{1\le k\le n\\(k,n)=1}}(x-e^{2\pi ik/n}).\tag1
$$

Because every $n$'th root of unity is always a $d$'th root of unity for some $d\vert n$, so we can always factor $x^n-1$ into cyclotomic polynomials:

$$
x^n-1=\prod_{d\vert n}\Phi_d(x).\tag2
$$

From (2), one immediately concludes that $\Phi_1(x)=x-1$ and for all prime $p$, its corresponding cyclotomic polynomial $\Phi_p(x)$ satisfies

$$
\Phi_p(x)={x^p-1\over x-1}=x^{p-1}+x^{p-2}+\dots+x+1.\tag3
$$

Although we can find the expansions of all cyclotomic polynomials by using (2) repeatedly, this method is very inefficient. In this article, we use some tricks from number theory to reduce the difficulty of the computation of $\Phi_n(x)$ and eventually show that in a wide class of $n$, the expansion of $\Phi_n(x)$ only contains terms of the form $\pm x^k$.

## Application of Möbius inversion

Let $\mu(n)$ be the Möbius function. Then from the formula

$$
\sum_{d\vert n}\mu(d)=
\begin{cases}
1 & n=1, \\
0 & n>1,
\end{cases}\tag4
$$

we can convert $\Phi_n(x)$ into

$$
\begin{aligned}
\Phi_n(x)
&=\prod_{1\le k\le n}(x-e^{2\pi ik/n})^{\sum_{d\vert (k,n)}\mu(d)} =\prod_{1\le k\le n}\prod_{d\vert (k,n)}(x-e^{2\pi ik/n})^{\mu(d)} \\
&=\prod_{d\vert n}\prod_{\substack{1\le k\le n\\d\vert k}}(x-e^{2\pi ik/n})^{\mu(d)}
=\prod_{d\vert n}\left[\prod_{1\le r\le n/d}(x-e^{2\pi ir/(n/d)})\right]^{\mu(d)}.
\end{aligned}
$$

Observe that $e^{2\pi ir/(n/d)}$ iterates through all the $n/d$'th roots of unity when $r=1,2,\dots,n/d$, so we deduce that

$$
\Phi_n(x)=\prod_{d\vert n}(x^{n/d}-1)^{\mu(d)}.\tag5
$$

Because the Möbius function is supported on squarefree integers (i.e. not divisible by any square of a prime), we can effectively restrict our focus to cyclotomic polynomials $\Phi_n(x)$ with squarefree $n$. Specifically, there is

**Theorem 1:** *If $n=p_1^{k_1}p_2^{k_2}\cdots p_s^{k_s}$ and $m=p_1p_2\cdots p_s$, then*

$$
\Phi_n(x)=\prod_{d\vert m}(x^{\frac nm\cdot\frac md}-1)^{\mu(d)}=\Phi_m(x^{n/m}).\tag6
$$

## Reduction to odd squarefree $n$

If $n$ is an even squarefree number, write $m=n/2$, so we can break $d\vert n$ into two disjoint cases:

1. $d$ is even, so $d=2\delta$ for some $\delta\vert m$.
2. $d$ is odd, so $d\vert m$.

Thus, (5) becomes

$$
\begin{aligned}
\Phi_{2m}(x)
&=\prod_{\delta\vert m}(x^{m/\delta}-1)^{\mu(2\delta)}\prod_{d\vert m}(x^{2m/d}-1)^{\mu(d)} \\
&=\prod_{\delta\vert m}(x^{m/\delta}-1)^{-\mu(\delta)}\prod_{d\vert m}(x^{2m/d}-1)^{\mu(d)} \\
&=\prod_{\delta\vert m}\left(x^{2m/\delta}-1\over x^{m/\delta}-1\right)^{\mu(\delta)}=\prod_{\delta\vert m}(x^{m/\delta}+1)^{\mu(\delta)}.
\end{aligned}
$$

Because of $x^{m/d}+1=(-1)[(-x)^{m/d}-1]$ and (4), we deduce that

**Theorem 2:** *If $m>1$ is odd, then*

$$
\Phi_{2m}(x)=\Phi_m(-x).\tag7
$$

Thus, to compute the expansions of cyclotomic polynomial $\Phi_n(x)$, we only need to focus on the situations when $n$ is a product of distinct odd primes, and other cases can be treated via (6) and (7).

## The case where $n=pq$

Equation (3) accounts for the case when $n$ is a prime. In this section, we prove that when $n=pq$ for odd primes $p$ and $q$, the expansion of $\Phi_{pq}(x)$ only consists of terms of the form $\pm x^k$.

Plugging $n=pq$ and (3) into (2) gives

$$
x^{pq}-1=(x-1)\cdot{x^p-1\over x-1}\cdot{x^q-1\over x-1}\Phi_{pq}(x),
$$

so we have

$$
\Phi_{pq}(x)={(x-1)(x^{pq}-1)\over(x^p-1)(x^q-1)}.
$$

Multiplying both sides by $x^{pq}-1$ and using (3) two more times, we arrive at the formula

$$
(x^{pq}-1)\Phi_{pq}(x)=\Phi_p(x^q)\Phi_q(x^p)(x-1).\tag8
$$

### Patterns in the coefficients

Because the Diophantine equation $\mu q+\nu p=k$ has at most one solution $(\mu,\nu)$ satisfying $0\le\mu<p$ and $0\le\nu<q$, the expansion of $\Phi_p(x^q)\Phi_q(x^p)$ only contains terms of the form $x^k$. Multiplying by $x-1$ indicates that the right-hand side only contains terms of the form $\pm x^k$.

Since $\deg\Phi_{pq}=(p-1)(q-1)<pq$, the terms of $x^{pq}\Phi_{pq}(x)$ and $-\Phi_{pq}(x)$ do not merge. Collecting all the terms of degree $\le(p-1)(q-1)$ on the right-hand side produces the expansion of $-\Phi_{pq}(x)$. Therefore, we conclude that $\Phi_{pq}(x)$ only contains terms of the form $\pm x^k$.

Combining this with Theorem 1 and 2, we deduce our main result:

**Theorem 3 (Migotti 1883[^1]):** *Let $n$ be divisible by at most two different odd primes. Then the expansion of $\Phi_n(x)$ only contains terms of the form $\pm x^k$.*

## Conclusion

In this article, we apply number-theoretic methods and demonstrate that knowing the expansions of $\Phi_n(x)$ for squarefree odd $n$ is sufficient to compute all other cyclotomic polynomials (Theorem 1 and 2). Finally, by investigating the situation when $n$ is a product of two distinct odd primes, we acquire a sufficient condition for cyclotomic polynomials to only possess terms of the form $\pm x^k$ in their expansions (Theorem 3).

Theorem 3 is equivalent to saying that if $\Phi_n(x)$ were to contain terms other than $\pm x^k$, $n$ must be divisible by at least 3 distinct odd primes. Indeed, $105=3\times5\times7$ is such an example:

$$
\begin{aligned}
\Phi_{105}(x)
&=x^{48} + x^{47} + x^{46} - x^{43} - x^{42} - 2 x^{41} - x^{40} - x^{39}  \\
&+ x^{36} + x^{35} + x^{34} + x^{33} + x^{32} + x^{31} - x^{28} - x^{26}  \\
& - x^{24} - x^{22} - x^{20} + x^{17} + x^{16} + x^{15} + x^{14} + x^{13} \\
&+ x^{12} - x^9 - x^8 - 2 x^7 - x^6 - x^5 + x^2 + x + 1.
\end{aligned}
$$

Since 105 is the smallest integer divisible by 3 distinct odd primes, Theorem 3 also indicates that the expansion of $\Phi_n(x)$ contains terms of the form $\pm x^k$ for all $n\le104$.

[^1]: Brookfield, G. (2016). [The Coefficients of Cyclotomic Polynomials](https://doi.org/10.4169/math.mag.89.3.179). *Mathematics Magazine*, 89(3), 179–188.