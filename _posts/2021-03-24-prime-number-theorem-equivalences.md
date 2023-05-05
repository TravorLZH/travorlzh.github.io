---
title:  The Prime Number Theorem and Its Equivalences
des:    Demystifying the counting function $\pi(x)$
tags:   number-theory
---

The study on the distribution of prime numbers had been on since Euclid, who proved that there are infinitely many primes. In the 19th century, Russian mathematician Chebyshev studied the distribution of prime numbers using these two functions

$$
\vartheta(x)=\sum_{p\le x}\log p
$$

$$
\psi(x)=\sum_{n\le x}\Lambda(n)
$$

> $\Lambda(n)$ is the von Mangoldt function, which $\log p$ if $n=p^k$ and zero otherwise

By partial summation, we can extract some elementary properties from these functions:

## Upper bounds for $\psi(x)$ and $\vartheta(x)$

Using the identity that

$$
\log n=\sum_{d|n}\Lambda(d)
$$

we have

$$
\begin{aligned}
T(x)
&=\sum_{n\le x}\log n=\sum_{qd\le x}\Lambda(d) \\
&=\sum_{d\le x}\Lambda(d)\sum_{q\le x/d}1=\sum_{d\le x}\Lambda(d)\left\lfloor\frac xd\right\rfloor
\end{aligned}
$$

However, by Euler-Maclaurin formula, $T(x)$ satisfies

$$
\begin{aligned}
T(x)
&=\int_1^x\log t\mathrm dt+\frac12\log x+\int_1^x{\overline B_1(t)\over t}\mathrm dt \\
&=[t\log t-t]_1^x+\frac12\log x+\mathcal O\left(\int_1^x{\mathrm dt\over t}\right) \\
&=x\log x-x+\mathcal O(\log x)
\end{aligned}
$$

so a substraction gives

$$
T(x)-2T\left(\frac x2\right)=x\log2+\mathcal O(\log x)
$$

In addition, by the other identity for $T(x)$, we have

$$
\begin{aligned}
T(x)-2T\left(\frac x2\right)
&=\sum_{x/2<n\le x}\Lambda(n)\left\lfloor\frac xn\right\rfloor \\
&+\sum_{n\le x/2}\Lambda(n)\left(\left\lfloor\frac xn\right\rfloor-2\left\lfloor x\over2n\right\rfloor\right) \\
&\ge\sum_{x/2<n\le x}\Lambda(n)
\end{aligned}
$$

This implies that there exists a positive constant $K>0$ such that

$$
\psi(x)-\psi\left(\frac x2\right)\le Kx
$$

Repetitively applying this inequality, we have

$$
\begin{aligned}
\psi(x)
&\le Kx+\psi\left(\frac x2\right)-\psi\left(\frac x4\right)+\psi\left(\frac x4\right)-\psi\left(\frac x8\right)\cdots \\
&\le Kx\left(1+\frac12+\frac14+\frac18+\cdots\right)=2Kx
\end{aligned}
$$

Since $\vartheta(x)\le\psi(x)$ for all positive $x$, we see that $\vartheta(x)=\mathcal O(x)$. In fact, a more precise relation can be established between these two functions:

$$
\begin{aligned}
\psi(x)
&=\sum_{p^k\le x}\log p=\sum_{k\le\log_2x}\sum_{p\le\sqrt[k]x}\log p \\
&=\vartheta(x)+\mathcal O\left(\sum_{2\le k\le\log_2x}\vartheta(\sqrt x)\right) \\
&=\vartheta(x)+\mathcal O(\sqrt x\log x)
\end{aligned}
$$

## $\vartheta(x)$ and $\psi(x)$ as $x\to\infty$

The upper bounds of $\psi(x)$ allows us to extract more precise information. Let's turn our focus back to $T(x)$. Due to the property that $\lfloor y\rfloor=y+\mathcal O(1)$, we have

$$
\begin{aligned}
T(x)
&=\sum_{n\le x}\Lambda(n)\frac xn+\mathcal O\left(\sum_{n\le x}\Lambda(n)\right) \\
x\log x+\mathcal O(x)&=x\sum_{n\le x}{\Lambda(n)\over n}+\mathcal O(\psi(x)) \\
\end{aligned}
$$

Rearranging the terms gives us

$$
U(x)=\sum_{n\le x}{\Lambda(n)\over n}=\log x+\mathcal O(1)
$$

By partial summation, we can re-express $U(x)$ by $\psi(x)$:

$$
\begin{aligned}
U(x)-U(x_0)
&=\int_{x_0}^x{\mathrm d\psi(t)\over t}
\end{aligned}
$$

If we were to define

$$
\ell=\liminf_{x\to\infty}{\psi(x)\over x}
$$

$$
L=\limsup_{x\to\infty}{\psi(x)\over x}
$$

then we choose large enough $x_0$ such that for all $x>x_0$

$$
(\ell-\varepsilon)x<\psi(x)<(L+\varepsilon)x
$$

Applying this to $U(x)$, we have

$$
(\ell-\varepsilon)\log{x\over x_0}<\log{x\over x_0}+\mathcal O(1)<(L+\varepsilon)\log{x\over x_0}
$$

Because $\varepsilon>0$ is arbitrary, we have $\ell\le1\le L$. In other words,

$$
\liminf_{x\to\infty}{\psi(x)\over x}\le1\le\limsup_{x\to\infty}{\psi(x)\over x}
$$

This inequality clearly allows us to hypothesize that:

$$
\psi(x)\sim x
$$

Under this assumption, we have $\vartheta(x)\sim x$, which ultimately leads to the prime number theorem:

$$
\begin{aligned}
\pi(x)
&={\vartheta(x)\over\log x}+\int_2^x{\vartheta(t)\over t\log^2t}\mathrm dt \\
&={\vartheta(x)\over\log x}+\mathcal O\left(\int_2^x{\mathrm dt\over\log^2t}\right)
\end{aligned}
$$

By splitting the interval of integration, we have

$$
\begin{aligned}
\int_2^x{\mathrm dt\over\log^2t}
&=\int_2^{\sqrt x}{\mathrm dt\over\log^2t}+\int_{\sqrt x}^x{\mathrm dt\over\log^2t} \\
&\le\int_2^{\sqrt x}{\mathrm dt\over\log^22}+\int_{\sqrt x}^x{\mathrm dt\over\log^2\sqrt x} \\
&\le{\sqrt x\over\log^22}+{x\over\log^2\sqrt x}\ll{x\over\log^2x}
\end{aligned}
$$

Now, using the assumption that $\vartheta(x)\sim x$, we obtain the prime number theorem:

$$
\pi(x)\sim{x\over\log x}
$$

With these calculations, we see that $\psi(x)\sim x$ implies the PNT. In fact, we can even show that the converse is true:

$$
\begin{aligned}
\vartheta(x)
&=\int_{2^-}^x\log t\mathrm d\pi(t)=\pi(x)\log x-\int_2^x{\pi(t)\over t}\mathrm dt \\
&=\pi(x)\log x+\mathcal O\left(\int_2^x{\mathrm dt\over\log t}\right) \\
&=\pi(x)\log x+\mathcal O\left({x\over\log x}\right)+\mathcal O\left(\int_2^x{\mathrm dt\over\log^2t}\right) \\
&=\pi(x)\log x+\mathcal O\left({x\over\log x}\right)\sim x
\end{aligned}
$$

Consequently, we see that the prime number theorem is actually _equivalent_ to the statement that

$$
\lim_{x\to\infty}{\psi(x)\over x}=1
$$

From an elementary perspective, $\psi(x)$ is convenient to work with because it has a beautiful connection to factorial. In fact, this convenience is even more apparent when we move to the domain of complex analysis, which we will cover in the next article.