---
layout: post
title:  "Maier's chain of large gaps between consecutive primes"
date:   2024-11-12
des:    We present Maier's matrix method that generates a chain of consecutive primes with large gaps.
tags:   analysis asymptotics number-theory
---

In 1938, R. A. Rankin [^rankin] showed that when $\log_k X$ is the $k$'th iterated natural logarithm and

$$
h(X)={\log X\cdot\log_2X\cdot\log_4 X\over(\log_3 X)^2},
$$

there exists infinitely many $n$ for which $g_n=p_{n+1}-p_n\gg h(n)$. This was achieved by applying an upper bound on the number of $y$-smooth numbers $\le x$.

In 1981, H. Maier [^maier] showed that Rankin's result can be generalized to produce an arbitrarily long chain of primes. In other words, for any $k\in\mathbb N$, there exists infinitely many $n$ for which $g_n,g_{n+1},\dots,g_{n+k}\gg h(n)$, or

$$
G_k=\limsup_{n\to\infty}{\min(g_n,g_{n+1},\dots,g_{n+k})\over h(n)}>0\tag1
$$

This is done using what is now known as the **matrix method**.

Rather than giving full derivations, we summarize the main ideas leading to Maier's proof of (1). By examining Maier's argument, we also show that $G_k\ge C/k$ for some effectively computable $C>0$.

## The matrix argument

Let $R,U,P$ be some large integers to be determined. Construct the matrix $M=(a_{rs})$ by

$$
a_{rs}=y+s+r\cdot P\quad (1\le r\le R,1\le s\le U),\tag2
$$

where $0<y\le P$ is selected to fulfill some congruence conditions. Each row of $M$ is a short interval of length $U$ and each column of $M$ is an arithmetic progression with common difference $P$.

We are done if $M$ has a row containing a chain of primes of prescribed length with large gap. This is achieved by a counting argument.

Let $B\ge1$ be an undetermined constant. For convenience, we say a pair of consecutive primes is a _bad_ pair if they lie in the same row but the gap is $\le U/B$. Under this new language, our goal is to let $U\gg h(P)$ and establish the existence of some row in $M$ that is free of bad pairs and contains sufficiently many primes.

If $N$ be the total number of primes in the rows of $M$ free of bad pairs, then it follows from the pigeonhole principle that there is at least one row that is free of bad pairs and contains $\ge N/R$.

Consequently, our remaining task is to give a lower bound for $N$.

Let $N_0$ be the total number of primes in $M$ and $N_1$ be the total number of primes in rows containing a bad pair. Then $N=N_0-N_1$, so we need a lower bound for $N_0$ and an upper bound for $N_1$.

## Lower bound for $N_0$

We estimate $N_0$ by counting the number of primes in each column and sum up.

By Dirichlet's theorem on arithmetic progressions, we only look at columns with $\gcd(y+s,P)=1$, the number of those being

$$
\#\{m\in (y,y+U]:\gcd(m,P)=1\}.\tag3
$$

From the sieve-theoretic point of view, this is well estimated when $P$ is just a product of primes less than a given magnitude, so we set

$$
P:=P(x)=\prod_{p<x}p.\tag4
$$

By the prime number theorem, there is $\log P\sim x$, so

$$
h(P)\sim{x\cdot\log x\cdot\log_3 x\over(\log_2 x)^2}.
$$

This means we can reasonably set

$$
U=E\cdot{x\cdot \log x\cdot\log_3x\over(\log_2x)^2},\tag5
$$

where $E>1$ is arbitrary. To estimate (3), Maier developed the following technical lemma:

**Lemma 1 (Lemma 6 of [^maier]):** *For a set $\mathcal A$ of integers, denote by $N(\mathcal A,P)$ the number of elements in $\mathcal A$ coprime to $P$. Then there is some $C_0>0$ such that for each $x$, defining $P, U$ via (4) and (5), there is some $0<y\le P$ such that*

$$
N((y,y+U],P)\sim C_0{Ex\over\log x}.
$$

*In addition, if $I\subset(y,y+U]$ is a subinterval of length $\ge(xU)^{\frac12}$, then*

$$
{N(I,P)\over N((y,y+U],P)}\sim{\vert I\vert\over U}.
$$

The proof of this lemma involves decomposing $P$ into product of small primes and large primes and choosing $y$ via the Chinese remainder theorem to fulfill some congruence conditions. Subsequently, one deduces asymptotics by invoking the fundamental lemma of sieve theory. It should be noted that Bombieri-Vinogradov theorem and upper bounds on the number of smooth numbers are applied to handle the error terms.

Choosing $y$ according to this lemma, we conclude that there are

$$
\gg {Ex\over\log x}\tag6
$$

columns that contain primes. According to (2), the number of primes in each column $(a_{rs})_{1\le r\le R}$ is

$$
\ge\pi(y+s+RP;P,y+s)-3P.\tag7
$$

To continue from here, we need some results concerning the lower bound for $\pi(x;q,a)$.

### Lower bound for $\pi(x;q,a)$

It is known that

$$
\pi(x;q,a)\sim{x\over\varphi(q)\log x}
$$

holds as $x\to+\infty$ when $q$ is fixed an $(a,q)=1$, but due to the presence of exceptional zeros. If $q$ is allowed to vary, current technology only allows us to preserve this asymptotic up to $q\le(\log x)^H$ for fixed $H>0$.

it is very difficult to acquire a similar lower bound for primes $\equiv a\pmod q$ in $(x,x+h]$ via elementary sieve technique. Moreover, due to the presence of exceptional zeros, things become much more complicated.

Fortunately, we have the following result due to P. Gallagher:

**Lemma 2 (Theorem 7 of [^gallager]):** *Let $\psi(x,\chi)=\sum_{n\le x}\Lambda(n)\chi(n)$ and*

$$
\psi'(x,\chi)=
\begin{cases}
\psi(x,\chi)-x & \chi\text{ principal} \\
\psi(x,\chi)+x^\beta/\beta & L(s,\chi)\text{ has exceptional zero }\beta, \\
\psi(x,\chi) & \text{otherwise}.
\end{cases}
$$

*Then for $\sqrt{\log x}\ll\log Q\ll\log x$ there is*

$$
\sum_{\substack{\chi\text{ primitive} \\ \text{with conductor}\le Q}}\vert\psi'(x,\chi)\vert\ll x\exp\left(-c{\log x\over\log Q}\right).
$$

This is derived by plugging in explicit formulas for $\psi'(x,\chi)$ and applying some log-free zero density estimates for Dirichlet $L$-functions.

Applying Lemma 2 and invoking the orthogonality relation for Dirichlet characters, we have

**Lemma 3:** *If $q$ is not an exceptional modulus, $(a,q)=1$, and $x\ge q^D$, then*

$$
\pi(x;q,a)\gg(1-e^{-cD}){x\over\varphi(q)\log x}.
$$

> Choosing $D\gg 1/c$, we can drop the $1-e^{-cD}$ factor.



To apply this to (7), we set $R=P^{D-1}$. In addition, we need to choose $x$ such that $P=P(x)$ is not exceptional.

**Lemma 4 (Lemma 1 of [^maier]):** *For all $x_0$, there exists $x\ge x_0$ such that $P(x)$ is not exceptional.*

<details>
<summary>Proof of Lemma 4</summary>

Page's theorem states that there exists some $C_1>0$ such that for each modulus $q>1$, there is at most one character $\chi$ for which $L(s,\chi)$ having at most one real zero $\beta$ satisfying

$$
1-\beta<{C_1\over\log q},
$$

Suppose $P(x_0)$ is not exceptional, then there is an exceptional zero $\beta$ such that

$$
1-\beta<{C_1\over\log P(x_0)}.
$$

By the property of induced characters, $\beta$ continues to be a zero of $L(s,\chi)$ for some $\chi$ modulo $P(x)$ when $x\ge x_0$, but because $\log P(x)\sim x$, we can find $x\ge x_0$ such that

$$
{C_1/2\over\log P(x)}<1-\beta<{C_1\over\log P(x)}.
$$

By the rightmost inequality and Page's theorem, every real zero $\beta$ of $L(s,\chi)$ for $\chi$ modulo $P(x)$ is such that

$$
1-\beta>{C_1/2\over\log P(x)},
$$

so we conclude that $P(x)$ is not exceptional with respect to the constant $C_1/2$. $\square$

</details>

Therefore, choosing $P=P(x)$ according to Lemma 4 and setting $R=P^{D-1}$, we apply Lemma 3 to (7) so that when $\gcd(y+s,P)=1$, the number of primes in the column $(a_{rs})_{1\le r\le P^{D-1}}$ is

$$
\gg {1\over\varphi(P)}\cdot{P^D\over\log P}=\prod_{p<x}\left(1-\frac1p\right)^{-1}\cdot{P^{D-1}\over\log P}\gg{\log x\over x}\cdot P^{D-1}.
$$

Combining this with (6), we conclude that

$$
N_0\gg{Ex\over\log x}\cdot{\log x\over x}\cdot P^{D-1}\ge C_2EP^{D-1}.\tag8
$$

for some absolute $C_2>0$.

## Upper bound for $N_1$

Let $W$ be a parameter to be optimized. Then we divide the set of bad rows (i.e. containing a bad pair) into two types:

1. Bad rows containing $\le W$ primes.

2. Bad rows containing $>W$ primes.

Let $N_{1,1}$ and $N_{1,2}$ be total the number of primes in these rows respectively.

To estimate them, we quote another technical lemma of Maier:

**Lemma 5 (Lemma 3 of [^maier]):** *Let $i,j$ be integers coprime to $P$ such that $0<i<j\le x^2$. Then the number $T(Z,i,j)$ of pairs of primes of the form $(kP+i,kP+j)$ with $1\le k\le Z$ is*

$$
T(Z,i,j)\ll{Z\over\log^2Z}\cdot(\log x)^2.
$$

This is derived by invoking a standard upper bound sieve such as Brun's and Selberg's.

From this estimate, we can derive an upper bound for the number of bad pairs in the matrix $M$:

For each fixed $i$ coprime to $P$, it follows from Lemma 1 that the number of admissible $j$ satisfying $j-i\le U/B$ is

$$
\ll{U\over B}\cdot{1\over U}\cdot{Ex\over\log x}=\frac EB\cdot{x\over\log x},
$$

and the number of admissible $i$ is $\ll Ex/\log x$, so total number of admissible $i,j$ with $j-i\le U/B$ is

$$
\ll{E^2\over B}\cdot{x^2\over\log^2x}.
$$

Combining this with Lemma 5 (setting $Z=R=P^{D-1}$), we see that the total number of bad pairs is

$$
\ll{E^2\over B}\cdot{x^2\over\log^2x}\cdot{P^{D-1}\over\underbrace{(D-1)^2\log^2P}_{\asymp x^2}}\cdot\log^2x\le C_3E^2B^{-1}P^{D-1}.\tag9
$$

Because the total number of rows containing a bad pair does not exceed the total number of bad pairs, it follows that

$$
N_{1,1}\le C_3WB^{-1}E^2P^{D-1},\tag{10}
$$

### Estimation of $N_{1,2}$

For $K\ge2$, the number of prime pairs with a difference of $>K$ in a row is $\le U/K$, so when a row contains exactly $W'$ primes, the number of pairs with a gap $>2U/W'$ is $\le W'/2$. As a result, when a row contains $>W$ primes, at least half of the primes belong to a prime pair with a gap $\le 2U/W$, so $N_{1,2}$ is twice the number of prime pairs lying in the same row with a gap $\le 2U/W$. Thus, replacing $B$ with $W/2$ in (9), we have

$$
N_{1,2}\le C_4E^2W^{-1}P^{D-1}.\tag{11}
$$

Combining (10) and (11) gives

$$
N_1=N_{1,1}+N_{1,2}\le(C_3WB^{-1}+C_4W^{-1})E^2P^{D-1},
$$

so the optimal choice is $W=B^{\frac12}$, giving us

$$
N_1\le C_5E^2B^{-\frac12}P^{D-1}.\tag{12}
$$

## Lower bound for $N$ and conclusion

According to (8) and (12), we have

$$
N=N_0-N_1\ge (C_2-C_5EB^{-\frac12})EP^{D-1},
$$

so by choosing $B\gg E^2$, we deduce that $N\ge C_7EP^{D-1}$. Because $R=P^{D-1}$, it follows from pigeonhole principle that there exists a row containing a chain of $N/R\ge C_6E$ primes with consecutive difference (see (5))

$$
\frac UB\gg\frac1E\cdot{x\cdot\log x\cdot\log_3 x\over(\log_2 x)^2}\gg\frac1E h(P).
$$

This means that there is some absolute constant $C>0$ for which

$$
G_k=\limsup_{n\to\infty}{\min(g_n,g_{n+1},\dots,g_{n+k})\over h(n)}\ge\frac Ck.
$$

[^maier]: Maier, H. (1981). [Chains of large gaps between consecutive primes](https://doi.org/10.1016/0001-8708(81)90003-7). _Advances in Mathematics_, 39(3), 257–269.

[^rankin]: Rankin, R. A. (1938). [The difference between consecutive prime numbers](https://doi.org/10.1112/jlms/s1-13.4.242). _Journal of the London Mathematical Society_, s1-13(4), 242–247.

[^gallager]: Gallagher, P. X. (1970). [A large sieve density estimate near $\sigma=1$](https://doi.org/10.1007/BF01403187). _Inventiones Mathematicae_, 11(4), 329–339.
