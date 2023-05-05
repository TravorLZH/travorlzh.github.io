---
title: "Analytic Continuation of the Riemann Zeta Function"
des: "Finally, we can catch a glimpse of the million-dollar math puzzle."
tags: special-functions complex-analysis
---

> This post is also available at [HFI Programming Club's blog](https://hfi.me/2020/11/zeta-continuation/) and [Zhihu](https://zhuanlan.zhihu.com/p/310465968).

In the study of analytic number theory, the Riemann zeta function $\zeta(s)$ is a frequently used tool to study number-theoretic objects. Originally, $\zeta(s)$ is defined as

$$
\zeta(s)=\sum_{n=1}^\infty{1\over n^s}\tag1
$$

To determine its convergence, let's consider Riemann-Stieltjes integration:

$$
\begin{aligned}
\zeta_N(s)
&=\sum_{n=1}^N{1\over n^s}=\int_{1-\varepsilon}^\infty{\mathrm d\lfloor t\rfloor\over  t^s} \\
&=\left.{\lfloor t\rfloor\over t^s}\right|_{1-\varepsilon}^N+s\int_1^N{\lfloor t\rfloor\over t^{s+1}}\mathrm dt \\
&=N^{1-s}+s\int_1^N{\lfloor t\rfloor\over t^{s+1}}\mathrm dt
\end{aligned}
$$

It can be easily verified that this expression converges absolutely and uniformly when $\Re(s)>1$, allowing us to make some manipulations with it. Let's have a look

## An Identity Due to Poisson's Summation Formula

Define

$$
\psi(x)=\sum_{n=1}^\infty e^{-n^2\pi x}
$$

Then by **Poisson's summation formula**, we have

$$
2\psi(x)+1=\sum_{n\in\mathbb Z}e^{-n^2\pi x}={1\over\sqrt x}\sum_{n\in\mathbb Z}e^{-n^2\pi/x}
$$

which leads to

$$
\psi(x)={1\over\sqrt x}\psi\left(\frac1x\right)+{1\over2\sqrt x}-\frac12\tag2
$$

## Integral Representation for $\zeta(s)$

Let's perform Mellin transform on this function so that

$$
\begin{aligned}
\int_0^\infty x^{s/2-1}\psi(x)\mathrm dx
&=\int_0^\infty x^{s/2-1}\sum_{n=1}^\infty e^{-n^2\pi x}\mathrm dx \\
&=\pi^{-s/2}\Gamma\left(\frac s2\right)\sum_{n=1}^\infty{1\over n^s}
\end{aligned}
$$

Now, by (1) we obtain this identity:

$$
\int_0^\infty x^{s/2-1}\psi(x)\mathrm dx=\pi^{-s/2}\Gamma\left(\frac s2\right)\zeta(s)\tag3
$$

As a result, we can study the properties of the Riemann zeta function by digging deeper into the integral on the left-hand side.

## Analytic Continuation of the Integral

First, let's split the integral into two parts

$$
\int_0^\infty x^{s/2-1}\psi(x)\mathrm dx=\int_0^1x^{s/2-1}\psi(x)\mathrm dx+\int_1^\infty x^{s/2-1}\psi(x)\mathrm dx
$$

Then, applying (2) to $\int_0^1$ side gives

$$
\begin{aligned}
\int_0^1x^{s/2-1}\psi(x)\mathrm dx
&=\int_0^1x^{s/2-1}\left[{1\over\sqrt x}\psi\left(\frac1x\right)+{1\over2\sqrt x}-\frac12\right]\mathrm dx \\
&=\underbrace{\int_0^1x^{(s-1)/2-1}\psi\left(\frac1x\right)\mathrm dx}_{t=x^{-1}} \\
&+\frac12\int_0^1x^{(s-1)/2-1}\mathrm dx-\frac12\int_0^1x^{s/2-1}\mathrm dx \\
&=\int_1^\infty t^{(1-s)/2-1}\psi(t)\mathrm dt+{1\over s(s-1)}
\end{aligned}
$$

Now, plugging this result to the original equation gives

$$
\int_0^\infty x^{s/2-1}\psi(x)\mathrm dx={1\over s(s-1)}+\int_1^\infty[x^{s/2}+x^{(1-s)/2}]\psi(x){\mathrm dx\over x}
$$

As we can observe the right-hand side does not change when we replace $s$ with $1-s$. Hence, by (3) we have

$$
\pi^{-s/2}\Gamma\left(\frac s2\right)\zeta(s)
=\pi^{(s-1)/2}\Gamma\left({1-s\over2}\right)\zeta(1-s)
$$

Now, in order to achieve the best simplification, we multiply both side by $\Gamma\left(1-\frac s2\right)$:

$$
\Gamma\left(\frac s2\right)\Gamma\left(1-\frac s2\right)\zeta(s)=\pi^{s-1/2}\Gamma\left({1-s\over2}\right)\Gamma\left({1-s\over2}+\frac12\right)\zeta(s)
$$

By **Euler's reflection formula**, we have

$$
\Gamma\left(\frac s2\right)\Gamma\left(1-\frac s2\right)=\pi\csc\left(\pi s\over2\right)
$$

and by **Legendre's Duplication formula**, we deduce

$$
\Gamma\left({1-s\over2}\right)\Gamma\left({1-s\over2}+\frac12\right)=2^s\pi^{1/2}\Gamma(1-s)
$$

Plugging these results back gives us

$$
\pi\csc\left(\pi s\over2\right)\zeta(s)=2^s\pi^s\Gamma(1-s)\zeta(1-s)
$$

Now, if we were to perform more manipulations, we get

$$
\zeta(s)=2^s\pi^{s-1}\sin\left(\pi s\over2\right)\Gamma(1-s)\zeta(1-s)
$$

which is known as the **functional equation** for $\zeta(s)$.

## Conclusion

In this blog, we begin with the Dirichlet series definition of $\zeta(s)$, and then we try to connect zeta function with an integral representation. Subsequently, we use Poisson's summation formula to obtain its analytic continuation. However, this analytic continuation has other impacts. If we look back at the functional equation

$$
\zeta(s)=2^s\pi^{s-1}\sin\left(\pi s\over2\right)\Gamma(1-s)\zeta(1-s)
$$

We can observe that for $\Re(s)<0$ the right-hand side becomes zero whenever $s=-2k\ne0$. Hence, we call such $s$'s as the **trivial zeros** of $\zeta(s)$. However, there are also other occasions that made the right-hand side zero, and we call that kind of zeros the **nontrivial zeros** of $\zeta(s)$. With these definitions ready, we can now be able to understand the Riemann hypothesis:

> **Riemann hypothesis:** All nontrivial zeros of $\zeta(s)$ lie on the line $\Re(s)=\frac12$.