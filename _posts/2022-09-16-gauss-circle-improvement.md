---
layout: post
title:  "Improvement on Gauss Circle Problem"
date:   2022-09-16
des:    We improve the error term in the asymptotic expansion of $S(x)$ from the last article
tags:   number-theory complex-analysis
---
Let $S(x)$ denote the number of integer points lying within and on the circle centering origin with radius $\sqrt x$. In the last article, we proved that

$$
S(x)=\pi x+O(\sqrt x)\tag1
$$

when $x$ grows large. However, the error term in (1) is not optimal, and the task of improving the remainder is called **Gauss circle problem**. In this article, we apply complex-analytic tool to give an improved version of (1):

$$
S(x)=\pi x+O(x^{1/3+\varepsilon}),\tag2
$$

in which the O-constant depends on $\varepsilon$.

## Application of Perron's formula

Let $r(n)$ denote the number of integer solutions to the equation $n=a^2+b^2$. Then it follows from [the last article](/2022/08/30/sum-of-two-squares.html) that it is expressed as four times the convolution of $\chi_4(n)$ with one, meaning its Dirichlet series is a product of a Riemann zeta function and a Dirichlet L function associated with $\chi_4(n)$:

$$
F(s)=\sum_{n\ge1}{r(n)\over n^s}=\sum_{m\ge1}{4\over m^s}\sum_{n\ge1}{\chi_4(n)\over n^s}=4\zeta(s)L(s,\chi_4).\tag3
$$

Obviously $r(n)<n^\varepsilon$ when $n>n_0(\varepsilon)$ for all $\varepsilon>0$, so applying Perron's formula to (3) allows us to convert the task of estimating $S(x)$ to computing a complex integral. Specifically, when $c=1+\varepsilon$ and $2\le T\le x$ there is

$$
S(x)={1\over2\pi i}\int_{c-iT}^{c+iT}F(s){x^s\over s}\mathrm ds+O\left(x^{1+\varepsilon}\over T\right).\tag4
$$

## Contour integration setup

Since the only pole of $F(s)$ is at $s=1$, we can move the path of integration, so that Cauchy's residue theorem converts (3) into

$$
\begin{aligned}
S(x)
&=\pi x+O\left(x^{1+\varepsilon}\over T\right) \\
&+{1\over2\pi i}\left(\int_{c-iT}^{-a+iT}+\int_{-a-iT}^{-a+iT}+\int_{-a+iT}^{c+iT}\right)F(s){x^s\over s}\mathrm ds,
\end{aligned}\tag5
$$

where $a>0$ is some fixed number to be determined in the future. From (5), it is evident that it is sufficient for us to give upper estimates for the remaining integrals. To implement this, we need to study further properties of $F(s)$.

## Analytic properties of $F(s)$

If we let $f(s)=\zeta(s)/\zeta(1-s)$, then it is well known (see Chapter IV of Titchmarsh's _The theory of the Riemann zeta function_) that

$$
f(\sigma+it)=\left(t\over2\pi\right)^{1/2-\sigma-it}e^{i(t+\pi/4)}\left\{1+O\left(\frac1t\right)\right\}.\tag6
$$

as $t\to+\infty$ when $\sigma$ is some fixed real number.

Now, we establish a similar result for $L(s,\chi_4)$. Because $\chi_4$ is a real primitive character modulo 4, we see that when $g(s)=L(s,\chi_4)/L(1-s,\chi_4)$, it follows from the functional equation for $L(s,\chi)$ (see Theorem 12.11 of Apostol's _Introduction to Analytic Number Theory_) that

$$
\begin{aligned}
\log g(s)
&=s\log2\pi+(1-s)\log4+\log\Gamma(s) \\
&-\log(e^{-\pi is/2}-e^{\pi is/2})-\log(2i).
\end{aligned}
$$

When $s=\sigma+it$ and $t\to+\infty$, we know that Stirling's formula gives

$$
\log\Gamma(\sigma+it)=\left(\sigma+it-\frac12\right)\log(it)-it+\frac12\log2\pi+O\left(\frac1t\right),
$$

so combining this with the fact that $\vert e^{\pi is}\vert=e^{-\pi t}$ we obtain

$$
g(\sigma+it)=\left(2t\over\pi\right)^{1/2-\sigma-it}e^{i(t-\pi/4)}\left\{1+O\left(\frac1t\right)\right\}.\tag7
$$

Now, if we define $h(s)=F(s)/F(1-s)=f(s)g(s)$ then (6) and (7) gives

$$
\begin{aligned}
h(\sigma+it)
&=\pi^{\sigma+it-1/2}t^{1-2\sigma-2it}e^{2it}\left\{1+O\left(\frac1t\right)\right\} \\
&=\pi^{\sigma-1/2}t^{1-2\sigma}e^{i[(2-\log\pi)t-2t\log t]}\left\{1+O\left(\frac1t\right)\right\}.
\end{aligned}\tag8
$$

With everything ready, we now begin estimating the integrals over line segments.

## The vertical segment

From (5) we see that

$$
\begin{aligned}
{1\over2\pi i}\int_{-a-iT}^{-a+iT}F(s){x^s\over s}\mathrm ds
&={1\over2\pi i}\int_{-a-iT}^{-a+iT}h(s)F(1-s){x^s\over s}\mathrm ds \\
&={x^{-a}\pi^{a-\frac12}\over2\pi}\sum_{n\ge1}{r(n)\over n^{1+a}}\underbrace{\int_{-T}^T h(-a+it){(nx)^{it}\over-a+it}\mathrm dt}_{I_n}.
\end{aligned}
$$

By symmetry, we know that

$$
I_n\le2\left\vert \int_1^Th(-a+it){e^{it\log(nx)}\over-a+it}\mathrm dt\right\vert +O(1),
$$

and combining (8) with the fact that

$$
{1\over-a+it}={1\over it}\left\{1+O\left(\frac1t\right)\right\},
$$

we can transform $I_n$ into

$$
I_n\le2\left\vert \int_1^T t^{2a}e^{iF_1(t)}\mathrm dt\right\vert +O(T^{2a}),
$$

where $F_1(t)=\left(2+\log{nx\over\pi}\right)t-2t\log t$. To continue our estimation, we quote Lemma 4.5 of Titchmarsh:

_Let $F(t),G(t)$ be a real function, twice differentiable, such that $F''(t)\ge r>0$ or $F''(t)\le-r<0$ in the interval $[a,b]$. If $\vert G(t)\vert\le M$ and $G(t)/F'(t)$ is monotonic, then_

$$
\left\vert \int_a^b G(t)e^{iF(t)}\mathrm dt\right\vert \le{8M\over\sqrt r}.
$$

Since $F_1''(t)=-2/t\le-2/T<0$, we conclude from this lemma that $I_n=O(T^{2a+1/2})$, meaning

$$
{1\over2\pi i}\int_{-a-iT}^{-a+iT}F(s){x^s\over s}\mathrm ds=O(x^{-a}T^{2a+1/2}).\tag9
$$

Therefore, the remaining task is to estimate the integrals over the horizontal segments.

## The horizontal segments

By symmetry, it suffices to establish an upper bound for $F(\sigma+iT)$ valid in $-a\le\sigma\le c$. To fulfill this goal, we quote a well known result from complex analysis:

**Phragmén-Lindelöf principle:** _Suppose $\phi(\sigma+it)$ is regular and $O(e^{\varepsilon\vert t\vert })$ for all $\varepsilon>0$ in $a\le\sigma\le b$ such that_

$$
\phi(a+it)=O(\vert t\vert ^\alpha),\quad\phi(b+it)=O(\vert t\vert ^\beta),
$$

then $\phi(\sigma+it)=O(\vert t\vert ^{\ell(\sigma)})$ in $a\le\sigma\le b$, where $\ell(\sigma)$ is a linear function satisfying $\ell(a)=\alpha,\ell(b)=\beta$.

Combining this principle with (8), we see that for $-a\le\sigma\le c$ there is $F(\sigma+it)=O(\vert t\vert ^{\ell(\sigma)})$ with

$$
\ell(\sigma)={1+2a\over a+c}(c-\sigma).
$$

when $a=-\varepsilon$. This indicates that

$$
\left\vert\int_{c-iT}^{-a-iT}+\int_{-c+iT}^{-a+iT}\right\vert\ll x^{-a}T^{2a}+{x^c\over T}=O\left(x^{1+\varepsilon}\over T\right).\tag{10}
$$

We have now completed the estimation of all integrals in (5), and the next step is to synthesize everything to obtain the final error term.

## Completion

Plugging (9) and (10) into (5), we see that when $T=x^\theta$ there is

$$
\begin{aligned}
|S(x)-\pi x|\ll{x^{1+\varepsilon}\over T}+x^{-a}T^{2a+1/2}\ll x^{(1-\theta)+\varepsilon}+x^{\theta/2+\varepsilon}.
\end{aligned}
$$

To optimize the right hand side, we set some $\theta$ that merges the two terms. Solving the equation $1-\theta=\theta/2$, we get $\theta=2/3$, allowing the right hand side to become $O(x^{1/3+\varepsilon})$. Therefore, we completed the derivation of (2).

## Remarks

In this article, we study an arithmetical problem using contour integration, and the error term $O(x^{1/3+\varepsilon})$ is obtained by employing classical analytic properties of $\zeta(s)$ and $L(s,\chi)$.

In fact, our result (2) is not optimal either. Suppose

$$
S(x)=\pi x+O(x^\eta).
$$

Then it follows from Hardy & Landau (1915) and Huxley (2002) that

$$
\frac14<\eta\le{131\over416}.
$$