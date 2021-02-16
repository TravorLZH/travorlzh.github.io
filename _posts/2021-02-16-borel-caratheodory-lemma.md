---
title:  Borel-Caratheodory Lemma and Its Application
tags:   math complex-analysis
des:    Tactical estimation of logarithmic derivatives
---

In this article, we aim to study the properties of analytic function $f(z)$ satisfying $f(0)=0$ and $\Re f(z)\le M$ on $ \vert z \vert =R$.

Since $f(z)$ is analytic and $f(0)=0$ we have that

$$
f(z)=\sum_{n=1}^\infty a_nz^n
$$

wherein by Cauchy's integral formula we have

$$
\begin{aligned}
a_n
&={1\over2\pi i}\oint_{ \vert z \vert =R}{f(z)\over z^{n+1}}\mathrm dz \\
&=\int_0^1f(Re^{2\pi it})R^{-n}e^{-2\pi int}\mathrm dt
\end{aligned}
$$

Because $f(0)=0$ and by Cauchy's integral theorem it directly follows

$$
\int_0^1f(Re^{2\pi it})e^{2\pi int}\mathrm dt=0
$$

whenever $n\in\mathbb N$. Now, let $\theta_n=\arg a_n$ then

$$
{1\over R^n}\int_0^1f(Re^{2\pi it})[1+(e^{2\pi int+i\theta_n}+e^{-(2\pi int+i\theta_n)})/2]=\frac12 \vert a_n \vert 
$$

Reorganizing the terms gives

$$
 \vert a_n \vert ={2\over R^n}\Re\int_0^1f(Re^{2\pi it})[1+\cos(2\pi nt+\theta_n)]\mathrm dt\le{2M\over R^n}
$$

As a result, whenever $ \vert z \vert \le r<R$, we have

$$
 \vert f(z) \vert \le\sum_{n=1}^\infty \vert a_n \vert r^n\le2M\sum_{n=1}^\infty{r^n\over R^n}={2Mr\over R-r}\tag1
$$

If we were to take the derivative, then

$$
 \vert f'(z) \vert \le{2M\over R}\sum_{n=1}^\infty n\left(\frac rR\right)^{n-1}={2MR\over(R-r)^2}\tag2
$$

Since the lemma itself appears to be weird, we'd better have a look at its application.

## Application: partial meromorphic expansion of logarithmic derivatives

When we analyze the real component of certain complex functions, it is very likely that we are dealing with logarithms. Indeed, Borel-Caratheodory lemma is oftentimes applied to logarithm. By (2), we can see that it can establish bound on logarithmic derivatives. As a result, let's consider this situation:

Let $f(z)$ be analytic on some open set containing the disk $ \vert z \vert \le R$, and let $S$ denote set of $f$'s zeros within $ \vert z \vert \le R/2$. Moreover, we let $M$ be some positive number satisfying $ \vert f(z) \vert \le M$ on $ \vert z \vert \le R$. With these conditions, we can define $g(z)$, a nonzero function in $ \vert z \vert \le R$, by

$$
g(z)=f(z)\prod_{\rho\in S}\left(1-\frac z\rho\right)^{-1}\tag3
$$

Trivially, we have $g(0)=f(0)$. In addition, when $ \vert z \vert =R$, we have that $\left \vert 1-\frac z\rho\right \vert \ge1$, so by maximum modulus principle the $ \vert g(z) \vert \le M$ holds for all $ \vert z \vert \le R$. Now taking logarithms on (3), we get

$$
\log{g(z)\over f(0)}=\log{f(z)\over f(0)}-\sum_{\rho\in S}\log\left(1-\frac z\rho\right)\tag4
$$

Certainly the left hand side of (4) satisfies the condition of Borel-Caratheodory lemma, so we can apply (2) with $R/2$ to conclude that for all $ \vert z \vert \le r<R/2$,

$$
\left \vert {g'\over g}(z)\right \vert \le{2\cdot R/2\log M/ \vert f(0) \vert \over(R/2-r)^2}
$$

Consequently, we deduce the following result:

**Theorem:** *Let $f(z)$ be a function analytic on some open set containing the disk $ \vert z \vert \le R$ satisfying $ \vert f(z) \vert \le M$ for $ \vert z \vert \le R$. If $S$ denote set of $f$'s zeros within $ \vert z \vert \le R/2$, then for all $ \vert z \vert \le r<R/2$ we have*

$$
\sup_{ \vert z \vert \le R}\left \vert {f'\over f}(z)-\sum_{\rho\in S}{1\over z-\rho}\right \vert \le{4R\log M/ \vert f(0) \vert \over(R-2r)^2}
$$

## Conclusion

In this article, we begin our journey with the power series expansion of analytic functions, and then by some careful manipulation of integrals we manage to obtain upper bounds of coefficients based on the real components. Later, these results were applied to logarithms to obtain theorems regarding meromorphic expansions.
