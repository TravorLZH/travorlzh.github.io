---
layout: post
title:  "On Legendre's differential equation"
date:   2024-01-16
des:    We prove that the eigenvalues of the Legendre differential operator are exactly $\ell(\ell+1)$ for $\ell\in\mathbb Z$ and derive expressions for the eigenfunctions.
tags:   real-analysis complex-analysis algebra
---

Legendre differential equation arises from the study of axisymmetric solutions of Laplace's equation in $\mathbb R^3$. Specifically, let the spherical coordinate be configured as

$$
x=\rho\sin\theta\cos\phi,\quad y=\rho\sin\theta\sin\phi,\quad z=\rho\cos\theta.
$$

Then Laplace's equation $\Delta u=0$ becomes

$$
\rho^{-2}\partial_\rho(\rho^2 u_\rho)+\rho^{-2}\csc^2\theta u_{\phi\phi}+\rho^{-2}\csc\theta\partial_\theta(\sin\theta u_\theta)=0.\tag1
$$

Let $u$ be symmetric about the $z$-axis, so it does not depend on $\phi$, which means we should investigate (1) by the separation of variables $u=f(\rho)g(\theta)$:

$$
g\rho^{-2}\partial_\rho(\rho^2 f_\rho)+f\rho^{-2}\csc\theta\partial_\theta(\sin\theta g_\theta)=0.
$$

Rearranging the terms gives

$$
{\partial_\rho(\rho^2 f_\rho)\over f}=-{\csc\theta\partial_\theta(\sin\theta g_\theta)\over g}.\tag2
$$

Because the left-hand side does not depend on $\theta$ and the right-hand side does not depend on $\rho$, both sides of (2) should be equal to some constant $\lambda$. As a result, we convert Laplace's equation into two ordinary differential equations:

$$
\rho^2f_{\rho\rho}+2\rho f_\rho=\lambda f,\tag3
$$

$$
-\csc\theta\partial_\theta(\sin\theta g_\theta)=\lambda g.\tag4
$$

The radial equation (3) is a Cauchy-Euler equation, whose general solution is given by $f=A\rho^m+B\rho^{-m-1}$, where $m\in[0,+\infty)$ is chosen to satisfy $\lambda=m(m+1)$. Because the solution needs to be regular at the origin, we must have $B=0$, so $f=A\rho^m$.

More interesting is the polar equation (4). By making the substitution $\mu=\cos\theta$, we have $\partial_\theta=-\sin\theta\partial_\mu$, so (4) becomes

$$
Lg:=-{\mathrm d\over\mathrm d\mu}\left[(1-\mu^2){\mathrm dg\over\mathrm d\mu}\right]=\lambda g,\tag5
$$

which is known as the **Legendre differential equation**. Because $g(\theta)$ needs to be $2\pi$-periodic and continuous on $[0,2\pi]$, $g(\mu)$ needs to be continuous on $[-1,1]$. In this article, we prove that under these conditions, the admissible eigenvalues $\lambda$ of the operator $L$ in (5) are of the form $\ell(\ell+1)$ with $\ell\in\mathbb Z$.

## Application of the Frobenius method

Let $a_n$ be a sequence of numbers defined on non-negative integers and assume $g(\mu)$ to be in the form of

$$
g(\mu)=\sum_{n\ge0}a_n\mu^{n+\alpha}.\tag6
$$

Then we have

$$
\begin{aligned}
{\mathrm dg\over\mathrm d\mu}
&=\sum_{n\ge0}(n+\alpha)a_n\mu^{n+\alpha-1} \\
&=\alpha a_0\mu^{\alpha-1}+(\alpha+1)a_1\mu^\alpha+\sum_{n\ge0}(n+\alpha+2)a_{n+2}\mu^{n+\alpha+1}.
\end{aligned}
$$

Consequently, (5) becomes

$$
\begin{aligned}
&\alpha(\alpha-1)a_0\mu^{\alpha-2}+\alpha(\alpha+1)a_1\mu^{\alpha-1} \\
&+\sum_{n\ge0}[(n+\alpha+1)(n+\alpha+2)a_{n+2}-(n+\alpha+1)(n+\alpha)a_n+\lambda]\mu^{n+\alpha}=0.
\end{aligned}
$$

Comparing coefficients gives $\alpha=0$, so we obtain a recursive relation for $a_n$:

$$
a_{n+2}={n(n+1)-\lambda\over(n+1)(n+2)}a_n.\tag7
$$

## Asymptotic analysis of $a_n$

Let $\nu\in\lbrace 0,1\rbrace$, so substituting $n=2k+\nu-2$ into (7) gives

$$
\begin{aligned}
a_{2k+\nu}
&=\left\lbrace 1-{2\over2k+\nu}+O\left(1\over k^2\right)\right\rbrace a_{2(k-1)+\nu} \\
&=\left\lbrace 1-\frac1k+O\left(1\over k^2\right)\right\rbrace a_{2(k-1)+\nu}.
\end{aligned}
$$

Because $\log(1+z)=z+O(z^2)$ for small $z$, there exists some $k_0$ such that whenever $k>k_0$,

$$
1-\frac1k+O\left(1\over k^2\right)=\exp\left\lbrace-\frac1k+O\left(1\over k^2\right)\right\rbrace.
$$

Consequently, we obtain

$$
\begin{aligned}
a_{2k+\nu}
&=\exp\left\lbrace-\sum_{k_0<r\le k}\frac1r+O\left(\sum_{k_0<r\le k}{1\over r^2}\right)\right\rbrace a_{2k_0+\nu} \\
&=\exp\lbrace-\log k+O(1)\rbrace a_{2k_0+\nu}.
\end{aligned}
$$

This indicates that if $a_{2k_0+\nu\ne0}$, then there exists some constant $A>0$ such that

$$
{e^{-A}\over k}<{a_{2k+\nu}\over a_{2k_0+\nu}}<{e^A\over k}.\tag8
$$

Setting $\alpha=0$ in (6), we have

$$
g(\mu)=\sum_{k\ge0}a_{2k}\mu^{2k}+\sum_{k\ge0}a_{2k+1}\mu^{2k+1}.\tag9
$$

Because $a_{2k+\nu}$ is a multiple of $a_\nu$, we conclude that the odd and even components in (9) are exactly the fundamental solutions of (5), and we can adjust the values of $a_0$ and $a_1$ to represent all general solutions.

## The spectrum of the Legendre differential operator

According to (8) and the comparison test, $g(\mu)$ is regular when $-1<\mu<1$. When $\mu=\pm1$, we see that the fundamental solution

$$
\sum_{k\ge0}a_{2k+\nu}\mu^{2k+\nu}
$$

will diverge if $a_{2k+\nu}$ is nonzero for all sufficiently large $k$. Consequently, for (5) to have meaningful solutions, at least of the sequences $a_{2k}, a_{2k+1}$ needs to vanish at all large $k$.

From the properties of the recursive relation (7), this is possible if and only if $\lambda=\ell(\ell+1)$ for some integer $\ell$. In this situation, the meaningful solutions are exactly the constant multiples of one fundamental solution satisfying $\nu\equiv\ell\pmod2$.

## Legendre polynomials

Let $\lambda=\ell(\ell+1)$ for some non-negative integer $\ell$ and $\nu\in\lbrace 0,1\rbrace$ be such that $\ell-\nu$ is even, so the sequence $a_{2k+\nu}$ becomes zero after $2k+\nu>\ell$, so it follows from (7) that for $0\le m\le(\ell-\nu)/2$, there is

$$
\begin{aligned}
a_{\ell-2m}
&={(\ell-2m+1)(\ell-2m+2)\over(\ell-2m)(\ell-2m+2)-\ell(\ell+1)}a_{\ell-2m+2} \\
&={(\ell-2m+1)(\ell-2m+2)\over(\ell-2m)(-2m)+(-2m)(\ell+1)}a_{\ell-2m+2} \\
&={(\ell-2m+1)(\ell-2m+2)\over(2\ell+1-2m)(-2m)}a_{\ell-2m+2} \\
&={(-1)^m\over(2m)!!}\cdot{(\ell-2m+1)(\ell-2m+2)\cdots(\ell-1)\ell a_\ell\over(2\ell+1-2m)(2\ell+3-2m)\cdots(2\ell-1)} \\
&={(-1)^m\over(2m)!!}\cdot{(2\ell-2m-1)!!\over(\ell-2m)!}\cdot{\ell!a_\ell\over(2\ell-1)!!} \\
&={(-1)^m\over(2m)!!}\cdot{(2\ell-2m)!\over(\ell-2m)!(2\ell-2m)!!}\cdot{\ell!a_\ell\over(2\ell-1)!!} \\
&={(-1)^m\over2^\ell m!}\cdot{(2\ell-2m)!\over(\ell-m)!(\ell-2m)!}\cdot{\ell!a_\ell\over(2\ell-1)!!}.
\end{aligned}
$$

Setting $a_\ell=(2\ell-1)!!/\ell!$ gives the **Legendre polynomial** $P_\ell(\mu)$ of order $\ell$:

$$
P_\ell(\mu)=\sum_{0\le m\le\ell/2}{(-1)^m\over2^\ell m!}{(2\ell-2m)!\over(\ell-m)!(\ell-2m)!}\mu^{\ell-2m}.\tag{10}
$$

Notice that

$$
{(2\ell-2m)!\over(\ell-2m)!}={\mathrm d^\ell\over\mathrm d\mu^\ell}(\mu^{2\ell-2m}),
$$

so we have

$$
\begin{aligned}
P_\ell(\mu)
&={\mathrm d^\ell\over\mathrm d\mu^\ell}\sum_{0\le m\le\ell/2}{(-1)^m\over 2^\ell m!(\ell-m)!}\mu^{2\ell-2m} \\
&={1\over2^\ell\ell!}{\mathrm d^\ell\over\mathrm d\mu^\ell}\sum_{m=0}^\ell\binom\ell m(-1)^m(\mu^2)^{\ell-m}.
\end{aligned}
$$

Finally, applying the binomial theorem, we obtain a neat expression for $P_\ell(\mu)$:

$$
P_\ell(\mu)={1\over 2^\ell\ell!}{\mathrm d^\ell\over\mathrm d\mu^\ell}[(\mu^2-1)^\ell].\tag{11}
$$

This is known as **Rodrigues' formula** for Legendre polynomials.

## Conclusion

In this article, we began our discussion by seeking axisymmetric solutions from Laplace's equation. By the separation of variables, we introduced Legendre's differential equation. Subsequently, we used the Frobenius method and some asymptotic analysis to demonstrate that the eigenvalues $\lambda$ of the Legendre differential operator $L$ are exactly in the form of $\ell(\ell+1)$ for $\ell\in\mathbb Z$. Finally, we derived expressions for the solutions to Legendre's differential equation when $\lambda=\ell(\ell+1)$.