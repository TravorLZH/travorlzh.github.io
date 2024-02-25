---
layout: post
title:  "Brun's sieve and its applications"
date:   2024-02-25
des:    We derive Brun's sieve and show that every large even integer is a sum of two integers, each having at most 9 prime factors.
tags:   analysis number-theory
---

Let $\mathcal A\subset\mathbb Z$ and $\mathcal P$ be some subset of primes. A **sieve method** is used to estimate the size of the following quantity:

$$
S(\mathcal A,\mathcal P,z)=\#\lbrace n\in\mathcal A:p\in\mathcal P\cap[2,z)\Rightarrow p\nmid n\rbrace.\tag1
$$

If $p_1<p_2$ are consecutive primes in $\mathcal P$, then

$$
S(\mathcal A,\mathcal P,p_1)-S(\mathcal A,\mathcal P,p_2)=\#\lbrace n\in\mathcal A:p_1\vert n\wedge p\in\mathcal P\cap[2,p_1)\Rightarrow p\nmid n\rbrace.
$$

For convenience, let $\mathcal A_d$ be the set of $d$-multiples in $\mathcal A$, so this relation becomes

$$
S(\mathcal A,\mathcal P,p_1)-S(\mathcal A,\mathcal P,p_2)=S(\mathcal A_{p_1},\mathcal P,p_1).
$$

Using this identity repeatedly, we obtain the general formula:

$$
S(\mathcal A,\mathcal P,z)=S(\mathcal A,\mathcal P,w)-\sum_{w\le p<z}S(\mathcal A_p,\mathcal P,p).\tag2
$$

This is known as the **Buchstab identity**. In particular, when $w=2$, (2) becomes

$$
S(\mathcal A,\mathcal P,z)=\vert\mathcal A\vert-\sum_{p<z}S(\mathcal A_p,\mathcal P,p).\tag3
$$

It is this identity that allows us to derive strong lower bounds and upper bounds for $S(\mathcal A,\mathcal P,z)$.

## Brun's pure sieve

Applying (3) $k-1$ more times gives

$$
\begin{aligned}
S(\mathcal A,\mathcal P,z)
&=\vert\mathcal A\vert-\sum_{p<z}\vert\mathcal A_p\vert+\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2}S(\mathcal A_{p_1p_2},\mathcal P,p_2) \\
&=\vert\mathcal A\vert-\sum_{p<z}\vert\mathcal A_p\vert+\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2}\vert\mathcal A_{p_1p_2}\vert-\dots \\
&+\dots+(-1)^k\mathop{\sum_{p_1<z}\sum_{p_2<z}\dots\sum_{p_k<z}}\limits_{p_1>p_2>\dots>p_k}S(\mathcal A_{p_1p_2\dots p_k},\mathcal P,p_k).
\end{aligned}
$$

Notice that $S(\mathcal A_{p_1p_2\dots p_k},\mathcal P,p_k)\le\vert\mathcal A_{p_1p_2\dots p_k}\vert$, so when

$$
\begin{aligned}
S_k(\mathcal A,\mathcal P,z)
&=\vert\mathcal A\vert-\sum_{p<z}\vert\mathcal A_p\vert+\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2}\vert\mathcal A_{p_1p_2}\vert-\dots \\
&+\dots+(-1)^k\mathop{\sum_{p_1<z}\sum_{p_2<z}\dots\sum_{p_k<z}}\limits_{p_1>p_2>\dots>p_k}S(\mathcal A_{p_1p_2\dots p_k},\mathcal P,p_k),
\end{aligned}
$$

we have $S(\mathcal A,\mathcal P,z)\le S_k(\mathcal A,\mathcal P,z)$ when $k$ is even and $S(\mathcal A,\mathcal P,z)\ge S_k(\mathcal A,\mathcal P,z)$ when $k$ is odd. As the principle was initially proposed by Viggo Brun, it is now known as **Brun's pure sieve**. By investigating the asymptotic properties of $S_k(\mathcal A,\mathcal P,z)$, Brun proved that the number of twin primes (i.e. prime $p$ such that $p+2$ is also prime) in $[2,x]$ is bounded by a constant multiple of $x(\log\log x)^2(\log x)^{-2}$, which allows him to conclude that the reciprocal sum of twin primes converges.

Because there are plentiful accounts of Brun's pure sieve available and it is not our main focus, we will not be discussing it further in this article.

## Brun's main sieve

Although the pure sieve is capable of deriving lower bounds for $S(\mathcal A,\mathcal P,z)$, its error term is not sufficient for our purpose if we want to detect almost primes (i.e. numbers with a bounded number of prime divisors). As a result, in 1920[^1], Brun presented a modified principle that allowed him to conclude the following:

**Theorem 1:** *There exist infinitely many integers $n$ such that $n$ and $n+2$ are products of at most 9 primes.*

**Theorem 2:** *Every sufficiently large even integer is a sum of two integers, each being a product of at most 9 primes.*

Theorem 1 is an approximation to the twin prime conjecture, and Theorem 2 is an approximation to the Goldbach conjecture.

Brun's modified principle is explained in the books of Cojocaru & Murty [^2] and Halberstam & Richert [^3], but after reading Brun's original paper and found the original text more motivating than these accounts from the books. Throughout the remaining sections of the article, we will derive Brun's main sieve in Brun's original spirit and apply it to prove Theorem 1 and Theorem 2.

### A lower-bound sieve

When $z_1\le z$, it follows from (3) that

$$
\begin{aligned}
S(\mathcal A,\mathcal P,z)
&= \vert \mathcal A \vert -\sum_{p_1<z} \vert \mathcal A_{p_1} \vert +\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2}S(\mathcal A_{p_1p_2},\mathcal P,p_2) \\
&\ge \vert \mathcal A \vert -\sum_{p_1<z} \vert \mathcal A_{p_1} \vert +\mathop{\sum_{p_1<z}\sum_{p_2<{\color{red}z_1}}}\limits_{p_1>p_2}S(\mathcal A_{p_1p_2},\mathcal P,p_2),
\end{aligned}
$$

Therefore, when $z\ge z_1\ge z_2\ge\dots\ge z_n$, repeated use of this inequality gives

$$
\begin{aligned}
&S(\mathcal A,\mathcal P,z)
\ge \vert \mathcal A \vert -\sum_{p_1<z} \vert \mathcal A_{p_1} \vert +\mathop{\sum_{p_1<z}\sum_{p_2<z_1}}\limits_{p_1>p_2} \vert \mathcal A_{p_1p_2} \vert  \\
&-\mathop{\sum_{p_1<z}\sum_{p_2<z_1}\sum_{p_3<z_1}}\limits_{p_1>p_2>p_3} \vert \mathcal A_{p_1p_2p_3} \vert 
+\cdots+\mathop{\sum_{p_1<z}\sum_{p_2<z_1}\cdots\sum_{p_{2n}<z_n}}\limits_{p_1>p_2>\cdots>p_{2n}} \vert \mathcal A_{p_1p_2\cdots p_{2n}} \vert  \\
&-\mathop{\sum_{p_1<z}\sum_{p_2<z_1}\cdots\sum_{p_{2n}<z_n}\sum_{p_{2n+1}<z_n}}\limits_{p_1>p_2>\cdots>p_{2n}>p_{2n+1}}\vert\mathcal A_{p_1p_2\cdots p_{2n}p_{2n+1}}\vert=\sum_{\substack{d \vert P(z)\\d\in\mathcal D^-}}\mu(d) \vert \mathcal A_d \vert ,
\end{aligned}
$$

where $P(z)$ is the product of all primes in $\mathcal P\cap[2,z)$, $\mu(d)$ is the Möbius function, and $\mathcal D^-$ is the set of integers $d$ satisfying

$$
d=p_1p_2\cdots p_m,p_1>p_2>\cdots>p_m,p_{2k}<z_k,1\le k\le\frac m2.\tag4
$$

### An upper-bound sieve

Similar principle allows us to derive an upper bound for $S(\mathcal A,\mathcal P,z)$:

$$
\begin{aligned}
S(\mathcal A,\mathcal P,z)
&\le \vert \mathcal A \vert -\sum_{p_1<z} \vert \mathcal A_{p_1} \vert +\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2} \vert \mathcal A_{p_1p_2} \vert  \\
&-\mathop{\sum_{p_1<z}\sum_{p_2<z}\sum_{p_3<z_1}}\limits_{p_1>p_2>p_3}S(\mathcal A_{p_1p_2p_3},\mathcal P,p_3).
\end{aligned}
$$

Applying this inequality iteratively, we arrive at

$$
\begin{aligned}
&S(\mathcal A,\mathcal P,z)
\le \vert \mathcal A \vert -\sum_{p_1<z} \vert \mathcal A_{p_1} \vert +\mathop{\sum_{p_1<z}\sum_{p_2<z}}\limits_{p_1>p_2} \vert \mathcal A_{p_1p_2} \vert  \\
&-\mathop{\sum_{p_1<z}\sum_{p_2<z}\sum_{p_3<z_1}}\limits_{p_1>p_2>p_3} \vert \mathcal A_{p_1p_2p_3} \vert 
+\cdots-\mathop{\sum_{p_1<z}\sum_{p_2<z}\cdots\sum_{p_{2n+1}<z_n}}\limits_{p_1>p_2>\cdots>p_{2n-1}} \vert \mathcal A_{p_1p_2\cdots p_{2n+1}} \vert  \\
&+\mathop{\sum_{p_1<z}\sum_{p_2<z}\cdots\sum_{p_{2n+1}<z_n}\sum_{p_{2n+2}<z_n}}\limits_{p_1>p_2>\cdots>p_{2n}>p_{2n+2}}\vert A_{p_1p_2\cdots p_{2n}p_{2n+1}}\vert=\sum_{\substack{d \vert P(z)\\d\in\mathcal D^+}}\mu(d) \vert \mathcal A_d \vert ,
\end{aligned}
$$

where $\mathcal D^+$ is an aggregate of integers $d$ satisfying

$$
d=p_1p_2\cdots p_m,p_1>p_2>\cdots>p_m,p_{2k+1}<z_k,1\le k\le{m-1\over2}\tag5
$$

### Unification of lower-bound and upper-bound sieves

For convenience, let $\chi_0$ and $\chi_1$ be the characteristic functions for $\mathcal D^+$ and $\mathcal D^-$ respectively, so $\chi_v(d)=1$ if and only if

$$
d=p_1\cdots p_m,p_1>\cdots>p_m,p_{2k+v}<z_k,1\le k\le\min\left(n,{m-v\over2}\right).\tag6
$$

As a result, when defining

$$
S_v(\mathcal A,\mathcal P,z)=\sum_{d \vert P(z)}\mu(d)\chi_v(d) \vert \mathcal A_d \vert ,\tag7
$$

we obtain the relation

$$
S_0(\mathcal A,\mathcal P,z)\le S(\mathcal A,\mathcal P,z)\le S_1(\mathcal A,\mathcal P,z).\tag8
$$

In fact, by slightly modifying the inequalities in the last two sections, one sees that the left-most inequality in (7) will still hold when 0 is replaced with any even values, and the right-most inequality will continue to be valid when 1 is replaced with any odd values.

From now on, we study the properties of $S_v(\mathcal A,\mathcal P,z)$.

### Estimation of $S_v(\mathcal A,\mathcal P,z)$

In typical sieve problems, there exists some real number $X\ge1$ and some multiplicative function $g(d)$ such that

$$
\vert\mathcal A_d\vert=g(d)X+r(d),\tag9
$$

where $r(d)$ is some error term. Moreover, we assume $0\le g(p)<1$ for all prime $p$ and $g(p)=0$ whenever $p\not\in\mathcal P$. Plugging (9) into (7) gives

$$
S_v(\mathcal A,\mathcal P,z)=X\underbrace{\sum_{d \vert P(z)}\mu(d)\chi_v(d)g(d)}_{Q_v(z)}+\theta\underbrace{\sum_{d \vert P(z)}\chi_v(d) \vert r(d) \vert }_{R_v(z)},
$$

where $-1\le\theta\le1$. We will see in the next few sections that $Q_v(z)$ will become the main term and $R_v(z)$ will become the error term for $S_v(\mathcal A,\mathcal P,z)$.

#### Preliminary treatments for $Q_v(z)$

We expect $Q_v(z)$ to behave as if $\chi=1$ for all $d\vert P(z)$. That is to say, we expect it to be closed to

$$
V(z)=\sum_{d\vert P(z)}\mu(d)g(d)=\prod_{p<z}(1-g(p)).
$$

To proceed, we introduce $V(z)$ into the expression for $Q_v(z)$:

$$
Q_v(z)=V(z)-\sum_{d \vert P(z)}\mu(d)[1-\chi_v(d)]g(d).\tag{10}
$$

Notice that $1-\chi_v(d)$ is the characteristic function for the complement of $\mathcal D_v$, so it follows from (6) that

$$
\begin{aligned}
\sum_{d \vert P(z)}\mu(d)[1-\chi_v(d)]g(d)
&=\sum_{1\le k\le n}\sum_{\substack{p_1>\cdots>p_{2k+v}\ge z_k \\z_k>p_{2k+v+1}>\cdots>p_m\\p_{2\ell+v}<z_\ell,1\le \ell\le k}}\mu(p_1\cdots p_m)g(p_1\cdots p_m) \\
&=\sum_{1\le k\le n}\sum_{\substack{p_1>\cdots>p_{2k+v}\ge z_k\\p_{2\ell+v}<z_\ell,1\le\ell<k}}\mu(p_1\cdots p_{2k+v})g(p_1\cdots p_{2k+v})\sum_{\delta \vert P(z_k)}\mu(\delta)g(\delta) \\
&=(-1)^v\sum_{1\le k\le n}V(z_k)\sum_{\substack{p_1>\cdots>p_{2k+v}\ge z_k\\p_{2\ell+v}<z_\ell,1\le\ell<k}}g(p_1\cdots p_{2k+v}) \\
&=(-1)^vV(z)\Delta_v(z),
\end{aligned}
$$

where, by combinatorial arguments, $\Delta_v(z)$ satisfies

$$
\Delta_v(z)\le\sum_{1\le k\le n}{V(z_k)\over V(z)}{1\over(2k+v)!}\left( \sum_{z_k\le p<z}g(p) \right)^{2k+v}.
$$

When $0\le y<1$, there is

$$
y\le y+{y^2\over2}+{y^3\over3}+\cdots=\log(1-y)^{-1},
$$

so setting $L_k=\log[V(z_k)/V(z)]$ gives

$$
\Delta_v(z)\le\sum_{1\le m\le n}{e^{L_m}L_m^{2m+v}\over(2m+v)!}.\tag{11}
$$

#### Hypothesis $\Omega(\kappa)$ and the choice of $z_m$

To estimate $L_m$, we need information concerning $V(z)$. Motivated by Mertens' theorem, we assume there exists some $A>0$ such that

$$
\prod_{w\le p<z}(1-g(p))^{-1}\le\left( \log z\over\log w \right)^\kappa\left( 1+{A\over\log z} \right),\tag{$\Omega(\kappa)$}
$$

for all $z>w\ge2$. Hence, there is

$$
L_m\le\kappa\log{\log z\over\log z_m}+{A\over\log z_m}.\tag{12}
$$

To establish an upper bound that does not depend on $z$, Brun configured $z_m$ to be

$$
\log z_m=e^{-m\Lambda}\log z,\quad m=1,2,\dots,n,\tag{13}
$$

where $\Lambda$ is some fixed positive number. On the other hand, we require $n$ to be sufficiently large so that $z_n\le 2<z_{n-1}$. In other words,

$$
e^{(n-1)\Lambda}<{\log z\over\log2}\le e^{n\Lambda}.\tag{14}
$$

#### Expansion of $Q_v(z)$

Plugging (13) into (12) gives

$$
\begin{aligned}
L_m
&\le m\Lambda\kappa+{Ae^{m\Lambda}\over\log z} \\
&=m\Lambda\kappa\left( 1+{e^{m\Lambda}-1\over m\Lambda}{A\over\kappa\log z} \right)+{A\over\log z}.
\end{aligned}
$$

Observe that $(e^y-1)/y$ is an increasing function, so by (14) there is

$$
\begin{aligned}
L_m
&\le m\Lambda\kappa\left( 1+{e^{n\Lambda}-1\over n\Lambda}{A\over\kappa\log z} \right)+{A\over\log z} \\
&< m\Lambda\kappa\left( 1+{e^{(n-1)\Lambda}\over n\Lambda}{Ae^\Lambda\over\kappa\log z} \right)+{A\over\log z} \\
&<m\Lambda\kappa\left( 1+{A_1\over\log\log z} \right)+{A\over\log z}.
\end{aligned}
$$

Conclusively, for all $\varepsilon>0$ there exists some $Z>0$ such that whenever $z>Z$, there is

$$
L_m<m\underbrace{\Lambda\kappa(1+\varepsilon)}_{\tau}+{A\over\log z}.\tag{15}
$$

Plugging this back into (11) gives

$$
\begin{aligned}
\Delta_v(z)
&<\sum_{1\le m\le n}{e^{m\tau}\over(2m+v)!}\left(m\tau+{A\over\log z}\right)^{2m+v}e^{A/\log z} \\
&=\sum_{1\le m\le n}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}\left( 1+{A\over m\tau\log z} \right)^{2m+v}e^{A/\log z} \\
&<\sum_{1\le m\le n}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}\exp\left\{ {2m+v\over m}{A\over\tau\log z}+{A\over\log z} \right\} \\
&\le\sum_{1\le m\le n}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}\left\{ 1+O\left(1\over\log z\right) \right\}.
\end{aligned}
$$

When $r_m$ is the ratio between the $m+1$'th term and the $m$'th term, there is

$$
r_m\sim{e^\tau\over4m^2}\left\{ {(m+1)\tau\over m\tau} \right\}^{2m}[(m+1)\tau]^2\sim{\tau^2\over4}e^{2+\tau},
$$

so it follows from the ratio test that whenever $\tau^2e^{2+\tau}<4$ and $z$ is sufficiently large

$$
\begin{aligned}
\Delta_v(z)<\sum_{1\le m\le n}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}+O\left(1\over\log z\right)<\sum_{m\ge1}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}.
\end{aligned}
$$

Combining everything, we obtain the expansion for $Q_v(z)$:

**Lemma 1:** *When $v$ is a non-negative integer and $z$ is sufficiently large, there exists a number $0\le\theta\le1$ such that*

$$
{Q_v(z)\over V(z)}=1+(-1)^v\theta\sum_{m\ge1}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!},
$$

*where $\tau>0$ is such that $\tau^2e^{2+\tau}<4$.*

Finishing the estimation of $Q_v(z)$, we now begin treating $R_v(z)$.

### Upper bound for $R_v(z)$

For the sake of flexibility, we do not impose conditions on $r(d)$ as we did on $g(d)$ but instead estimate the following quantity:

$$
M_v(z;f)=\sum_{d \vert P(z)}\chi_v(d)f(d),\tag{16}
$$

where $f(d)$ is some non-negative multiplicative function. It follows from (6) that

$$
M_v(z;f)\le\left( 1+\sum_{p<z}f(p) \right)^{1+v}\prod_{1\le m<n}\left( 1+\sum_{p<z_m}f(p) \right)^2.
$$

Since $f(p)$ is bounded in most application situations, we assume there exists $B>0$ such that for all $y\ge2$:

$$
1+\sum_{p<y}f(p)\le{By\over\log y}.\tag{17}
$$

Plugging this condition into (16) gives

$$
\begin{aligned}
M_v(z;f)
&<z^{1+v}\prod_{1\le m<n}\left( Bz_m\over\log z_m \right)^2 \\
&<z^{1+v+2(e^{-\Lambda}+e^{-2\Lambda}+\cdots)}\prod_{1\le m<n}\left( Be^{m\Lambda}\over\log z \right)^2 \\
&=z^{1+v+{2\over e^\Lambda-1}}e^{n(n-1)\Lambda}\prod_{1\le m<n}\left( B\over\log z \right)^2 \\
&=z^{1+v+{2\over e^\Lambda-1}}\left( Be^{n\Lambda/2}\over\log z \right)^{2(n-1)}.
\end{aligned}\tag{18}
$$

By (14), there is

$$
{e^{n\Lambda/2}\over\log z}<{e^{\Lambda/2}\over\sqrt{\log z\log2}}.
$$

Because of (15), there exists some $\varepsilon'>0$ that can be made arbitrarily small and satisfies

$$
{2\over e^\Lambda-1}={2\over e^{\tau/\kappa}-1}+\varepsilon'.
$$

Plugging these results into (18) gives

**Lemma 2:** *If $f(d)$ is a non-negative multiplicative function satisfying (17), then for all $\varepsilon>0$ and all sufficiently large $z$, there is*

$$
M_v(z;f)=\sum_{d \vert P(z)}\chi_v(d)f(d)<z^{1+v+{2\over e^{\tau/\kappa}-1}+\varepsilon}.
$$

### The main statement

Combining everything we derived above, we obtain **Brun's main sieve**:

**Theorem 3:** *Let $\chi_v$ be the characteristic function of the set described in (6) and*

$$
R_v(z)=\sum_{d \vert P(z)}\chi_v(d) \vert r(d) \vert ,
$$

$$
\eta_v(\tau)=\sum_{m\ge1}{e^{m\tau}(m\tau)^{2m+v}\over(2m+v)!}.
$$

*Then whenever $\mathcal A\subset\mathbb Z$ satisfies the hypotheses of (9) and $\Omega(\kappa)$, $\tau>0$ is such that $0<\tau^2e^{2+\tau}<4$, $v_1$ is non-negative odd, and $v_2$ is non-negative even, the inequalities*

$$
S(\mathcal A,\mathcal P,z)<XV(z)[1+\eta_{v_1}(\tau)]+R_{v_2}(z),
$$

$$
S(\mathcal A,\mathcal P,z)>XV(z)[1-\eta_{v_2}(\tau)]-R_{v_2}(z)
$$

*are valid for all sufficiently large $z$.*

## Proof of Theorem 1

If $n=p_1p_2\dots p_m\le x$ is such that each (not necessarily distinct) prime divisor $p_i>z$, then $n>x^{m/r}$, so $n$ is a product of at most $r-1$ primes when it is free of prime divisors $\le x^{1/r}$.

Using similar reasoning, we see that when $n\le x$ is such that $n(n-2)$ is free of prime divisors $\le x^{1/r}$, both $n$ and $n-2$ are products of at most $r-1$ primes. Consequently, when $\mathcal A=\lbrace n(n-2):n\le x\rbrace$, $\mathcal P$ is the set of all primes, there is

$$
\begin{aligned}
\#\lbrace n\le x:&n,n-2\text{ are products of }\le u\text{ primes}\rbrace \\
&>S(\mathcal A,\mathcal P,x^{1\over u+1})-O(x^{1-{1\over u+1}}),
\end{aligned}\tag{19}
$$

where the O-term is to take the potential prime $=x^{1\over u+1}$ into account. To apply Brun's main sieve, we need expressions for $g(d)$. Let $b(d)$ be the number of solutions to the congruence

$$
n(n-2)\equiv0\pmod d.
$$

Then it follows from the Chinese remainder theorem that this is multiplicative, so we have $X=x$, $g(d)=b(d)/d$, and $\vert r(d)\vert\le b(d)$ in (9). Notice that $b(2)=1$ and $b(p)=2$ for all $p>2$, so it follows from Merten's theorem that

$$
\begin{aligned}
V(z)
&=\prod_{p<z}(1-g(p))=\frac12\prod_{2<p<z}\left(1-\frac2p\right) \\
&=2\prod_{2<p<z}{1-\frac2p\over\left(1-\frac1p\right)^2}\cdot\prod_{p<z}\left(1-\frac1p\right)^2 \\
&={c\over(\log z)^2}\left\{1+O\left(1\over\log z\right)\right\},
\end{aligned}
$$

where $c>0$ is an infinite product given by

$$
c=2e^{-2\gamma}\prod_{p>2}{1-\frac2p\over\left(1-\frac1p\right)^2}=2e^{-2\gamma}\prod_{p>2}\left(1-{1\over(p-1)^2}\right).\tag{20}
$$

This indicates that our construction of $\mathcal A$ satisfies $\Omega(\kappa)$ with $\kappa=2$. By numerical calculation, it can be shown that when $\tau=0.5027$, there is

$$
\eta_2(\tau)<0.019,
\quad
{2\over e^{\tau/2}-1}<6.999.
$$

Because $b(p)\le2$, we can use Lemma 2 to conclude that for large $z$,

$$
R_2(z)=\sum_{d\vert P(z)}\chi_2(d)\vert r(d)\vert<z^{9.999}.
$$

Plugging these results into Theorem 1, we have

$$
\begin{aligned}
S(\mathcal A,\mathcal P,x^{1\over u+1})
&>xV(x^{1\over u+1})(1-\eta_2(\tau))-x^{9.999\over u+1} \\
&=(1-\eta_2(\tau)){(u+1)^2cx\over\log^2x}+O\left(x\over\log^3x\right)-x^{9.999\over u+1}.
\end{aligned}
$$

When $u=9$, $x^{9.999\over u+1}$ grows slower than $x/\log^2x$, so plugging this lower bound into (9), we conclude that

$$
\#\lbrace n\le x:n,n-2\text{ are products of }\le 10\text{ primes}\rbrace>{98cx\over\log^2x},\tag{21}
$$

where $c>0$ is defined as in (20).

> Brun himself proved a much worse lower bound. The lower bound in (21) is a consequence of Rademacher's refinement of Brun's work [^4].

## Proof of Theorem 2

Let $x$ be a large even integer and $\mathcal A=\lbrace n(x-n):n\le x\rbrace$. Then under reasoning similar to that during the proof of Theorem 1, we see that

$$
\begin{aligned}
\#\lbrace n\le x:&n,x-n\text{ are products of }\le u\text{ primes}\rbrace \\
&>S(\mathcal A,\mathcal P,x^{1\over u+1})-O(x^{1-{1\over u+1}})
\end{aligned}
$$

and by analyzing the congruence $n(x-n)\equiv0\pmod p$, we see that $g(p)=1/p$ when $p\vert x$ and $g(p)=2/p$ when $p\nmid x$, so when $z$ is a fixed power of $x$,

$$
V(z)={c_x\over(\log z)^2}\left\lbrace 1+O\left(1\over\log z\right)\right\rbrace,
$$

where

$$
c_x=2e^{-2\gamma}\prod_{\substack{p\vert x\\p>2}}{p-1\over p-2}\prod_{p>2}\left(1-{1\over(p-1)^2}\right).\tag{22}
$$

Since $g(p)\le2/p$ for all $p>2$, we also find that $\mathcal A$ satisfies $\Omega(\kappa)$ at $\kappa=2$, so we can reuse our calculations above to conclude that when $x$ is a large even integer,

$$
\#\lbrace n\le x:n,x-n\text{ are products of }\le 10\text{ primes}\rbrace>{98c_xx\over\log^2x}>0,
$$

where $c_x>0$ is defined by (22).

## Conclusion

In this article, we began our discussion by deriving Buchstab's identity in sieve theory. Subsequently, we applied this identity iteratively to deduce Brun's pure sieve, which enables him to establish the convergence of the reciprocal sum of twin primes. After that, we introduced Brun's main sieve and used it to derive approximations to the twin primes conjecture (Theorem 1) and the Goldbach conjecture (Theorem 2).

[^1]: Brun, V. (1920). Le crible d’Eratosthene et le theoreme de Goldbach. *Skr. Norske Vid. Akad*, 3, 1–36.

[^2]: Cojocaru, A., & Murty, M. R. (2005). *An introduction to sieve methods and their applications*. Cambridge University Press.

[^3]: Halberstam, H., & Richert, H.-E. (1974). *Sieve methods*. Academic Press.

[^4]: Rademacher, H. (1924). [Beiträge zur viggo brunschen methode in der zahlentheorie](https://doi.org/10.1007/BF02954614). *Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg*, 3(1), 12–30.
