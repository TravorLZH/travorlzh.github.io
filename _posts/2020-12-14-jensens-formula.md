---
layout: post
title:  "Jensen's Formula and Its Implications"
date:   2020-12-14
des:    Does maximum modulus tells distribution of roots?
tags: complex-analysis
---

In this note, I am going to outline the knowledge needed to evaluate this integral:

$$
\int_0^1\log \vert f(Re^{2\pi it}) \vert \mathrm dt\tag1
$$

## Blaschke factors

Let's start with the Mobius transform of complex analysis with some parameters being determined:

$$
B_w(z)={R(z-w)\over az+b}
$$

To fit for our purpose, we want this function map $ \vert z \vert =R$ to unit circle, which means whenever $ \vert z \vert =R$ we have

$$
\begin{aligned}
1
&= \vert B_w(z) \vert  \\
&=\left \vert \overline z\over R\right \vert  \vert B(z) \vert  \\
&=\left \vert z\overline z-w\overline z\over az+b\right \vert  \\
&=\left \vert R^2-w\overline z\over az+b\right \vert 
\end{aligned}
$$

Because there the numerator contains linear terms of $\overline z$, a way to make this expression one is to set the denominator to the conjugate of the numerator, meaning $b=R^2$ and $a=-\overline w$, leaving us

$$
B_w(z)={R(z-w)\over R^2-\overline wz}
$$

which is known as the Blaschke factor.

## Evaluating Jensen's integral

Now, if $f(z)$ has no zero on $ \vert z \vert =R$ or $z=0$ and has zeros $z_1,z_2,\dots,z_m$ on $0< \vert z \vert <R$, then it can be written as

$$
f(z)=g(z)\prod_{k=1}^mB_{z_k}(z)\tag2
$$

wherein $g(z)$ is analytic and zeroless in $ \vert z \vert \le R$. If we were to plug this into (1), we have

$$
\begin{aligned}
\int_0^1\log \vert f(Re^{2\pi it}) \vert \mathrm d
&=\int_0^1\log \vert g(Re^{2\pi it}) \vert \mathrm dt \\
&=\Re\oint_{ \vert z \vert =R}{\log g(z)\over z}\mathrm dz \\
&=\log \vert g(0) \vert 
\end{aligned}
$$

Now, by the definition of $g(z)$ in (2), we obtain Jensen's theorem:

**Theorem (Jensen):** Let $f(z)$ be some function analytic in an open set that contains the closed circle $ \vert z \vert \le R$, $f(0)\ne0$, and only has zeros on $0< \vert z \vert <R$. Then if $z_1,z_2,\dots,z_m$ denote the zeros (with multiplicities) of $f(z)$ within $ \vert z \vert \le R$ then

$$
\int_0^1\log \vert f(Re^{2\pi it}) \vert \mathrm dt=\log \vert f(0) \vert +\sum_{k=1}^m\log\left \vert R\over z_m\right \vert \tag3
$$

Now, let $M$ denote the maximum modulus of $f(z)$ on $ \vert z \vert \le R$, then

## From Jensen's formula to Jensen's inequality

$$
\log{M\over \vert f(0) \vert }\ge\sum_{k=1}^m\log\left \vert R\over z_m\right \vert 
$$

If denote the number of zeros of $f(z)$ within $ \vert z \vert \le r$, then we have

$$
\begin{aligned}
\log{M\over \vert f(0) \vert }
&\ge\sum_{ \vert z_k \vert >r}\log\left \vert R\over z_m\right \vert +\sum_{ \vert z_k \vert \le r}\log\left \vert R\over z_m\right \vert  \\
&\ge\sum_{ \vert z_k \vert \le r}\log\left \vert R\over z_m\right \vert \ge n(r)\log\frac Rr
\end{aligned}
$$

As a result, we get an estimate for the number of roots of $f(z)$ within $ \vert z \vert <r$:

$$
n(r)\le{\log(M/ \vert f(0) \vert )\over\log(R/r)}\tag4
$$

## Application of Jensen's inequality - reciprocal sum of entire functions' zeros

**Definition (order):** An entire function $f(z)$ is said to have order $\lambda$ if and only if there exists some $r$ such that for all $ \vert z \vert >r$ and $\varepsilon>0$:

$$
f(z)\le e^{ \vert z \vert ^{\lambda+\varepsilon}}
$$

Alternatively, we can write

$$
\log \vert f(z) \vert \le \vert z \vert ^{\lambda+\varepsilon}
$$

As a result, by (4), if we set $R=2r$, then the number of roots of $f(z)$ has the upper bound as follows:

$$
n(r)\le{(2r)^{\lambda+\varepsilon}-\log \vert f(0) \vert \over\log2}=\mathcal O(r^{\lambda+\varepsilon})
$$

This upper estimate guarantees the convergence of the following series:

$$
\sum_{f(\rho)=0}{1\over \vert \rho \vert ^{\lambda+1}}
$$

If we were to sort $ \vert \rho \vert $ (with multiplicities) in increasing order, then

$$
\begin{aligned}
\sum_{ \vert \rho \vert \le R}{1\over \vert \rho \vert ^{\lambda+1}}
&=\int_\delta^R{\mathrm dn(t)\over t^{\lambda+1}} \\
&={n(R)\over R^{\lambda+1}}+\lambda\int_\delta^R{n(t)\over t^{\lambda+2}}\mathrm dt \\
&=\mathcal O(1)+\mathcal O(R^{\varepsilon-1})+\mathcal O\left(\int_r^R t^{\varepsilon-2}\mathrm dt\right) \\
&=\mathcal O(1)
\end{aligned}
$$

Subsequently, we deduce that the series converges absolutely.

## Conclusion

In essence, we begin our discussion with an integral involving logarithms. Then, we move our focus to deriving Blaschke factors from Mobius transform. Subsequently, we  evaluate (1) with assistance of Blaschke factors and obtain Jensen's formula. After that, we apply (3) to obtain Jensen's inequality for analytic functions. Lastly, we use (4) to determine the convergence of the reciprocal sums of zeros of some entire function of finite order. These efforts will useful since it is the foundation of more indepth and interesting corollaries.