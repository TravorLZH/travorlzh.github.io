---
layout: post
title:  "The distribution of cyclic numbers"
date:   2024-05-02
des:    We show that the number of cyclic numbers $\le x$ is asymptotic to $e^{-\gamma}x/\log\log\log x$.
tags:   algebra asymptotics number-theory
---

A number $n$ is cyclic if and only if every group of order $n$ is a cyclic group. In the present article, we will show that when $N$ denotes the set of cyclic numbers and $N_x=N\cap[2,x]$, then

$$
\vert N_x\vert\sim{e^{-\gamma}x\over\log\log\log x}\tag1
$$

as $x\to+\infty$.

In the [previous article][cyc], we showed that $n$ is cyclic if and only if $n$ is squarefree and coprime to $\varphi(n)$, which is the key property that leads to the proof of (1).

> This result is due to Paul Erdös[^1].

## Least prime divisor and sieving

In sieve theory, it is common that asymptotic formulas emerge when we count numbers free of small prime divisors. In the case of $N_x$, the main term does come from the contribution of cyclic numbers whose least prime divisor is $>y$ for some carefully chosen large $y$.

Let $N_{x,y}$ be defined as follows:

$$
N_{x,y}=\lbrace n\in N_x:p\vert n\Rightarrow p\ge y\rbrace.
$$

We claim that the cardinality of $N_{x,y}$ can be estimated by that of

$$
S_{x,y}=\lbrace n\le x: p\vert n\Rightarrow p\ge y\rbrace.
$$

Notice that the complement $S_{x,y}\setminus N_{x,y}$ contains $n\in S_{x,y}$ that is not cyclic, which means at least one of the following is true

1. $n$ is not squarefree: There exists some prime $p\in(y,x]$ such that $p^2\vert n$
2. $n$ is squarefree and $\gcd(\varphi(n),n)>1$: There exists prime divisors $p,q\in(y,x]$ such that $q\equiv1\pmod p$.

Consequently, we deduce that

$$
\begin{aligned}
\vert S_{x,y}\setminus N_{x,y}\vert
&\le\sum_{y<p\le x}\#\lbrace n\in S_{x,y}:p^2\vert n\rbrace+\sum_{y<p\le x}\sum_{\substack{y<q\le x\\q\equiv1(p)}}\#\lbrace n\in S_{x,y}:pq\vert n\rbrace \\
&\le\sum_{y<p\le x}\left\lfloor x\over p^2\right\rfloor+\sum_{y<p\le x}\sum_{\substack{y<q\le x\\q\equiv1(p)}}\left\lfloor x\over pq\right\rfloor=S_1+S_2.
\end{aligned}\tag2
$$

The first term $S_1$ can be trivially bounded by

$$
\sum_{y<p\le x}{x\over p^2}<\sum_{n>y}{x\over n^2}=O(xy^{-1}).
$$

For the second term, we need an easy upper bound on the number of primes $q\le x$ that is $\equiv1\pmod p$ valid uniformly for all $p$. Luckily, we have **Brun-Titchmarsh inequality** (see Theorem 4 of our article on [Brun's sieve][brun]):

$$
Q(x)=\sum_{\substack{q\le x\\q\equiv1(p)}}1\ll{x\over p\log(x/p)}\quad (x\ge2p).
$$

Consequently, by partial summation, there is

$$
\begin{aligned}
\sum_{\substack{y<p\le x\\q\equiv1(p)}}\frac1q
&\le\sum_{\substack{q\le 2p\\q\equiv1(p)}}\frac1q+\int_{2p}^x{\mathrm dQ(t)\over t} \\
&\le{1\over p+1}+{Q(x)\over x}
+\int_{2p}^x{Q(t)\over t^2}\mathrm dt \\
&\ll\frac1p+\int_{2p}^x{\mathrm dt\over t\log(t/p)}\ll{\log\log x\over p},
\end{aligned}
$$

so we have

$$
S_2\ll x\sum_{y<p\le x}{\log\log x\over p^2}\ll{x\log\log x\over y}.
$$

Plugging these into (2) gives

$$
\vert S_{x,y}\setminus N_{x,y}\vert\ll{x\log\log x\over y}.\tag3
$$

Hence, we turn our focus to $S_{x,y}$. Since it is trivial that $\vert N_x\vert\le x$, (3) is not useful unless $y\gg\log\log x$.

## Asymptotic main term

> The method used in this section originated from §5.3 of Cojocaru & Murty[^2].

Let $P$ denote the product of primes $<y$, so $S_{x,y}$ contains precisely the integers $n\le x$ coprime to $P$:

$$
\begin{aligned}
\vert S_{x,y}\vert
&=\sum_{\substack{n\le x\\(n,P)=1}}1=\sum_{\substack{d\vert P\\d\le x}}\mu(d)\left\lfloor\frac xd\right\rfloor \\
&=x\sum_{d\vert P}{\mu(d)\over d}-x\sum_{\substack{d\vert P\\ d>x}}{\mu(d)\over d}+\sum_{\substack{d\vert P\\d\le x}}\mu(d)\left(\left\lfloor\frac xd\right\rfloor-\frac xd\right). \\
&=x\prod_{p<y}\left(1-\frac1p\right)-xE_2+E_1.
\end{aligned}\tag4
$$

To bound $E_1$, notice that $x/d\ge1$ when $d\le x$, so for all $\alpha>0$,

$$
\begin{aligned}
\vert E_1\vert
&\le\sum_{\substack{d\vert P\\d\le x}}1\le\sum_{d\vert P}\left(\frac xd\right)^\alpha=x^\alpha\prod_{p<y}\left(1+{1\over p^\alpha}\right) \\
&\le x^\alpha\exp\left\lbrace\sum_{p<y}{1\over p^\alpha}\right\rbrace.
\end{aligned}
$$

Since this upper bound is meaningless when $\alpha\ge1$, so we set $\alpha=1-s$ for some $0<s<1$. Notice that for real $u$, $1-u\le e^{-u}$, so $e^u\le1+ue^u$. This means

$$
\begin{aligned}
\sum_{p<y}{p^s\over p}
&\le\sum_{p<y}\frac1p+s\sum_{p<y}{p^s\log p\over p}\le\sum_{p<y}\frac1p+sy^s\sum_{p<y}{\log p\over p} \\
&\le\log\log y+O(1)+O(sy^s\log y).
\end{aligned}
$$

Let $s=1/\log y$, so the above quantity becomes $\le\log\log y+O(1)$ and

$$
E_1\ll x^{1-s}(\log y)\ll x(\log y)\exp\left(-{\log x\over\log y}\right).
$$

Similarly, there is

$$
\begin{aligned}
\vert E_2\vert
&\le\sum_{\substack{d\vert P\\d>x}}\frac1d\le\sum_{d\vert P}\frac1d\left(\frac dx\right)^s=x^{-s}\prod_{p<y}\left(1+{1\over p^{1-s}}\right) \\
&\le x^{-s}\exp\left\lbrace\sum_{p<y}{p^s\over p}\right\rbrace\ll(\log y)\exp\left(-{\log x\over\log y}\right).
\end{aligned}
$$

This indicates that when $y\le e^{\sqrt{\log x}}$, there is some $c>0$ such that

$$
E_1\ll xe^{-c\sqrt{\log x}},\quad E_2\ll e^{-c\sqrt{\log x}}.\tag5
$$

Plugging (5) into (4) gives

$$
\vert S_{x,y}\vert=x\prod_{p<y}\left(1-\frac1p\right)+O(xe^{-c_0\sqrt{\log x}}).
$$

By Mertens' theorem, this means

$$
\vert S_{x,y}\vert={e^{-\gamma}x\over\log y}+O\left(x\over\log^2y\right),
$$

so we have

$$
\vert N_{x,y}\vert={e^{-\gamma}x\over\log y}+O\left(x\over\log^2y\right)+O\left(x\log\log x\over y\right).\tag6
$$

Now, we turn our focus on estimating the size of $N_x\setminus N_{x,y}$.

## Upper bounds for error terms

Let $N_x^p$ denote the elements of $N_x$ whose least prime divisor is $p$. Then clearly

$$
\vert N_x\setminus N_{x,y}\vert\le\sum_{p<y}\vert N_x^p\vert.\tag7
$$

Because $(p-1)\vert\varphi(n)$ for all $n\in N_x^p$, when $\mathcal P$ is the collection of primes $\equiv1\pmod p$, $\vert N_x^p\vert$ is bounded by the number of integers $n$ such that $pn\le x$ and $n$ whose prime divisors do not belong to $\mathcal P$.

Consequently, by the fundamental lemma (Theorem 3 of the [Brun's sieve article][brun]), there exists some large $B\ge1$ such that when $z=x^{1/2B}\le(xe^{-\sqrt{\log x}})^{1/B}\le (x/p)^{1/B}$, we have

$$
\vert N_x^p\vert\ll\frac xp\prod_{\substack{q<z\\q\equiv1(p)}}\left(1-\frac1p\right)\le\frac xp\exp\left(-\sum_{\substack{q<z\\q\equiv1(p)}}\frac1q\right).\tag8
$$

To estimate the reciprocal sum from below, we quote **Siegel-Walfisz theorem**:

$$
Q(x)=\sum_{\substack{q\le x\\q\equiv1(p)}}1={1\over p-1}\int_2^x{\mathrm dt\over\log t}+O\left(x\over\log^2x\right),
$$

so by partial summation, there is

$$
\sum_{\substack{q<z\\q\equiv1(p)}}\frac1q={\log\log z\over p-1}+O(1)>{c\log\log x\over p}
$$

for some absolute constant $c>0$. Plugging this back into (8), we obtain

$$
\vert N_x^p\vert\ll\frac xp\exp\left(-{c\log\log x\over p}\right).\tag9
$$

Nevertheless, (9) is only useful when $p\le\log\log x$, so for large $p$, we shall estimate $\vert N_x^p\vert$ by using the fact that $p$ is the least divisor:

$$
\vert N_x^p\vert\le\sum_{\substack{pn\le x\\q\vert n\Rightarrow q\ge p}}1=\sum_{\substack{n\le x/p\\q\vert n\Rightarrow q\ge p}}1\ll\frac xp\prod_{q<p}\left(1-\frac1q\right)\ll{x\over p\log p},\tag{10}
$$

where the first $\ll$ follows from the fundamental lemma and the fact that $p\le y\le x^{1/B}$.

Therefore, when $0<\delta\le\frac12$, set $w=(\log\log x)^{1-\delta}$, so plugging (9) and (10) into (7) gives

$$
\begin{aligned}
\vert N_x\setminus N_{x,y}\vert
&\ll\sum_{p\le w}\frac xp e^{-(\log\log x)^\delta}+{x\over\log w}\sum_{w<p\le y}\frac1p \\
&\ll x(\log\log w)e^{-(\log\log x)^\delta}+{x\over\log w}\log{\log y\over\log w}.
\end{aligned}
$$

Setting $y=(\log\log x)^{1+\delta}$, so $\log{\log y\over\log w}=\log{1+\delta\over1-\delta}\ll\delta$ and

$$
\vert N_x\setminus N_{x,y}\vert\ll x(\log\log w)e^{-(\log\log x)^\delta}+{\delta x\over\log w}.\tag{11}
$$

## Completion of the proof

Combining (6) and (11), we obtain

$$
\begin{aligned}
\vert N_x\vert
&=\vert S_{x,y}\vert-\vert S_{x,y}\setminus N_{x,y}\vert+\vert N_x\setminus N_{x,y}\vert \\
&={e^{-\gamma}x\over\log y}+O\left(x\over\log^2y\right)+O\left\lbrace x(\log\log w)e^{-(\log\log x)^\delta}\right\rbrace+O\left(\delta x\over\log w\right) \\
&={(1+\delta)^{-1}e^{-\gamma}x\over\log\log\log x}+O\left\lbrace x\over(\log\log\log x)^2\right\rbrace \\
&+O\left\lbrace x(\log\log\log\log x)e^{-(\log\log x)^\delta}\right\rbrace+O\left(\delta x\over\log\log\log x\right). \\
\end{aligned}
$$

This indicates that there is some constant $A>0$ such that for all $0<\delta\le\frac12$,

$$
\limsup_{x\to+\infty}\left\vert\vert N_x\vert-e^{-\gamma}x/\log\log\log x\over e^{-\gamma}x/\log\log\log x\right\vert\le A\delta.
$$

Since $\delta>0$ can be made arbitrarily small, we conclude the right-hand side is zero, completing the proof of (1).

## Conclusion

In this article, we gave a motivated account of Erdös's original method of studying the distribution of cyclic numbers. In essence, he decomposed $N_x$ according to the size of the least prime divisor and obtained the asymptotic main term from counting the cyclic numbers with prime divisors $\gg\log\log x$.

By making a more delicate decomposition, Paul Pollack[^3] improved (1) to an asymptotic series:

$$
\vert N_x\vert\sim{e^{-\gamma}x\over\log\log\log x}\left(1-{\gamma\over\log\log\log x}+{\gamma^2+{1\over12}\pi^2\over(\log\log\log x)^2}+\dots\right),
$$

which completely resolved the mystery of the distribution of cyclic numbers.

[brun]: /2024/02/25/bruns-sieve.html
[cyc]: /2024/04/17/cyclic-numbers.html
[^1]: Erdös, P. (1948). Some asymptotic formulas in number theory. _J. Indian Math. Soc._, 12, 75–78.
[^2]: Cojocaru, A., & Murty, M. R. (2005). _An introduction to sieve methods and their applications_. Cambridge University Press.
[^3]: Pollack, P. (2021). [Numbers which are orders only of cyclic groups](https://doi.org/10.1090/proc/15658). _Proc. Amer. Math. Soc._, 150(02), 515–524.