---
layout: post
title:  "Explicit formula for Gauss circle problem"
date:   2022-09-26
des:    We express the error term of the Gauss circle problem in terms of Bessel functions
tags:   number-theory complex-analysis
---
In [one of the previous articles](/2022/09/16/gauss-circle-improvement.html), we used an effective version of Perron's formula to deduce an improved error term for the Gauss circle problem. In this article, we are going to deduce an explicit formula for the number $S(x)$, which is also known as **Hardy's identity**:

$$
S(x)=\sum_{n\le x}r(n)=\pi x-\frac12r(x)+\sum_{n\ge1}r(n)\sqrt\frac xnJ_1(2\pi\sqrt{nx}),\tag1
$$

where $r(n)$ denotes the number of integer solutions to $a^2+b^2=n$ and $J_m(z)$ denotes the Bessel function of the first kind.

## Contour integration process

To avoid tackling convergence problems emerging from the traditional Perron's, we study the weighted analog of $S(x)$

$$
S_m(x)={1\over\Gamma(m)}\sum_{n\le x}\left(1-\frac nx\right)^{m-1}r(n).\tag2
$$

and derived an explicit expression valid when $\Re(m)$ is large, and then justify it at $m=1$ via the principle of analytic continuation. Using the Mellin inversion formula, we see that (2) becomes an integral over some vertical segment in the complex plane:

$$
S_m(x)={1\over2\pi i}\int_{2-i\infty}^{2+i\infty}x^sF(s){\Gamma(s)\over\Gamma(s+m)}\mathrm ds,\tag3
$$

where $F(s)=4\zeta(s)L(s,\chi_4)$ is the Dirichlet series associated to $r(n)$. By Stirling's formula, we know that when $m$ is fixed there is

$$
{\Gamma(s)\over\Gamma(s+m)}=s^{-m}\left\{1+O\left(1\over\vert s\vert \right)\right\}.\tag4
$$

Combining this with the Phragmén-Lindelöf bound that $\vert F(s)\vert =O(\vert t\vert ^{1+2a})$ for $\Re(s)\ge-a$, we see that the path of integration in (3) can be safely moved to $\sigma=-a>-\frac12$ when $\Re(m)\ge3$:

$$
S_m(x)={\pi x\over\Gamma(m)}+\underbrace{ {1\over2\pi i}\int_{-a-i\infty}^{-a+i\infty}x^sF(s){\Gamma(s)\over\Gamma(s+m)}\mathrm ds}_{E(x)}.\tag5
$$

From (5), it is evident that the series of Bessel functions will emerge from the evaluation of $E(x)$. This series is obtained by expanding $F(1-s)$ into Dirichlet series, and the ratio $h(s)=F(s)/F(1-s)$ can be expressed in terms of Gamma and trigonometric functions.

## Functional equation for $F(s)$

Let $f(s)=\zeta(s)/\zeta(1-s)$ and $g(s)=L(s,\chi_4)/L(1-s,\chi_4)$, then the classical theory tells us that

$$
\begin{aligned}
f(s)
&=2^s\pi^{s-1}\sin\left(\pi s\over2\right)\Gamma(1-s) \\
&=(2\pi)^s{\sin(\pi s)\over\pi}\Gamma(1-s){1\over2\cos\left(\pi s\over2\right)} \\
&=(2\pi)^s/2\cos\left(\pi s\over2\right)\Gamma(s).
\end{aligned}
$$

$$
\begin{aligned}
h(s)
&=(2\pi)^s4^{1-s}/\Gamma(s)\left[-2i\sin\left(\pi is\over2\right)(2i)\right]\\
&=(2\pi)^s4^{-s}/\Gamma(s)\sin\left(\pi s\over2\right)
\end{aligned}
$$

Obivously, $h(s)=f(s)g(s)$, so we see that

$$
h(s)={\pi^{2s}\over\Gamma^2(s)\sin(\pi s)}.\tag6
$$

Plugging (6) back into (5), we have

$$
\begin{aligned}
E(x)
&={1\over2\pi i}\int_{-a-i\infty}^{-a+i\infty}h(s)F(1-s)x^s{\Gamma(s)\over\Gamma(s+m)}\mathrm ds \\
&=\sum_{n\ge1}{r(n)\over2\pi in}\int_{-a-i\infty}^{-a+i\infty}{(\pi\sqrt{nx})^{2s}\over\Gamma(s)\Gamma(s+m)\sin(\pi s)}\mathrm ds.
\end{aligned}
$$

For brevity, set $y=\pi\sqrt{nx}$, so the task turns into evaluating the integral

$$
I={1\over2\pi i}\int_{-a-i\infty}^{-a+i\infty}{y^{2s}\over\Gamma(s)\Gamma(s+m)\sin(\pi s)}\mathrm ds.
$$

## Evaluation of $I$

Since the integrand is analytic at $s=0$, we can move the path of integration to the imaginary axis with ease:

$$
I={1\over2\pi i}\int_{-i\infty}^{+i\infty}{y^{2s}\over\Gamma(s)\Gamma(s+m)\sin(\pi s)}\mathrm ds
$$

To determine how we should deform the path of integration further, we study the asymptotics of the integrand $k(s)$:

$$
k(s)={y^{2s}\over\Gamma(s)\Gamma(s+m)\sin(\pi s)}.
$$

### Estimation of the integrand

Using (4), we have

$$
\log k(s)=2s\log y-2\Gamma(s)-\log\sin(\pi s)+O\left(1\over\vert s\vert \right),
$$

and plugging in Stirling's formula there is

$$
\log k(s)=2s\log y-(2s-1)\log s+2s-\log[2\pi\sin(\pi s)]+O\left(1\over\vert s\vert \right)
$$

Taking real parts on both sides, we see that when $s=\sigma+it$ there is

$$
\begin{aligned}
\log\vert k(s)\vert 
&=2\sigma\log y-(2\sigma-1)\log\vert s\vert +(2t-1)\arg s \\
&+2\sigma-\log\pi-\pi\vert t\vert +O\left(1\over\vert s\vert \right).
\end{aligned}
$$

This indicates that when $s$ lies on the right half plane, there is

$$
\vert k(s)\vert \ll\vert s\vert \left(ey\over\vert s\vert \right)^{2\sigma}.\tag7
$$

This estimate indicates that $k(s)$ vanishes very quickly when $\vert s\vert \to\infty$ in the right half plane, which means that deforming the path of integration rightward is the way to go.

### The final computation

When $r$ is some positive integer, it follows from

$$
\lim_{s\to r}{s-r\over\sin(\pi s)}={(-1)^r\over\pi}
$$


that the residue of $k(s)$ at $s=r$ is

$$
\lim_{s\to r}(s-r)k(s)={(-1)^ry^{2r}\over\pi\Gamma(r)\Gamma(r+m)}.
$$

This indicates that if we deform the imaginary axis into some circular arc of radius infinity on the right half plane, $I$ is exactly the negative of the sum of all residues of $k(s)$ on the right half plane:

$$
I=-\sum_{r\ge1}{(-1)^ry^{2r}\over\pi\Gamma(r)\Gamma(r+m)}=\frac1\pi\sum_{r\ge0}{(-1)^ry^{2r+2}\over r!\Gamma(r+m+1)}.
$$

For complex $m$, Bessel function of the first kind $J_m(z)$ obeys the series expansion

$$
J_m(z)=\sum_{r\ge0}{(-1)^r\over r!\Gamma(r+m+1)}\left(\frac z2\right)^{m+2r},
$$

so $I$ becomes

$$
I={y^{2-m}\over\pi}J_m(2y)=\pi^{1-m}(nx)^{1-m/2}J_m(2\pi\sqrt{nx}).\tag8
$$

Finally, plugging (8) into (5) indicates that

$$
S_m(x)={\pi x\over\Gamma(m)}+\pi^{1-m}x^{1-m/2}\sum_{n\ge1}{r(n)\over n^{m/2}}J_m(2\pi\sqrt{nx})\tag9
$$

is valid for all $\Re(m)\ge3$. As long as we can show that the right-hand side converges at $m=1$, (1) becomes true under the principle of analytic continuation.

## A convergence problem


When $z\to+\infty$, $J_m(z)$ satisfies the asymptotic relation (see page 195 of G. N. Watson's _Theory of Bessel Functions_) that

$$
J_m(z)=\left(2\over\pi z\right)^{1/2}\cos\left(z-{m\pi\over2}-\frac\pi4\right)+O\left(1\over z^{3/2}\right).
$$

which indicates that

$$
n^{-m/2}J_m(2\pi\sqrt{nx})={x^{-1/4}\over\pi n^{\frac m2+\frac14}}\cos\left(2\pi\sqrt{nx}-{m\pi\over2}-\frac\pi4\right)+O\left(x^{-3/4}\over n^{ {\Re(m)\over2}+\frac34}\right)
$$

Since ${\Re(m)\over2}+\frac34>1$ when $\Re(m)\ge1$, the investigation of the convergence of (9) at $m=1$ reduces to studying the convergence of a particular Dirichlet series

$$
\sum_n n^{-3/4}e^{2\pi i\sqrt{nx}}\tag{10}
$$

at $m=1$. This is a hybrid exponential sum, so we quote Lemma 4.10 of Titchmarsh's _The theory of the Riemann zeta function_ to estimate it:

_Let $f(t)$ be a real function with such that $f'(t)$ is monotonic and $\vert f'(t)\vert\le\theta<1$ in $(a,b)$. Let $g(t)$ be a real positive decreasing function with continuous derivative $g'(t)$, and let $\vert g'(t)\vert $ be steadily decreasing. Then_

$$
\sum_{a<n\le b}g(n)e^{2\pi if(n)}=\int_a^bg(t)e^{2\pi if(t)}\mathrm dt+O\{\vert g'(a)\vert \}+O\{g(a)\}.
$$

In the situation of (10), we set $g(n)=n^{-3/4}$ and $f(t)=\sqrt{xt}$, so that when $a$ is sufficiently large there is

$$
\sum_{a<n\le b}n^{-3/4}e^{2\pi i\sqrt{nx}}=\int_a^bt^{-3/4}e^{2\pi i\sqrt{xt}}\mathrm dt+O(a^{-3/4}).
$$

For the remaining, integration by parts gives

$$
\int_a^bt^{-3/4}e^{2\pi i\sqrt{xt}}\mathrm dt={1\over\pi i\sqrt x}\int_a^b t^{-1/4}\mathrm d(e^{2\pi i\sqrt{tx}})=O(x^{-1/2}a^{-1/4}).
$$

Therefore, it follows from Cauchy's criterion that the series (10) converges when $m=1$. Hence, the proof of (1) is now completed.

## Conclusion

In this article, we applied Cauchy's theorem several times to deduce an explicit formula for $S_m(x)$ valid for $\Re(m)\ge3$. Then, using well-known results from the theory of exponential sums, we see that the series (10) converges for any fixed $x$. Combining this with the principle of continuation, we successfully extended the validity of (10) to $m=1$, thereby proving Hardy's identity.

Not only are Bessel functions connected to circles in the arithmetical sense, but they also appear in arithmetical problems associated with hyperbolas. Specifically, it was proven by M. G. Voronoï in 1904 that if $N(x)$ denotes the number of positive integer pairs $(a,b)$ such that $ab\le x$, then

$$
\begin{aligned}
\frac12[N(x-0)+N(x+0)]
&=x\log x+(2\gamma-1)x+\frac14 \\
&-\frac2\pi\sum_{n\ge1}\tau(n)\sqrt{\frac xn}\left(K_1(4\pi\sqrt{nx})+\frac12\pi Y_1(4\pi\sqrt{nx})\right)
\end{aligned}
$$

where $Y_m(z)$ is the Bessel function of the second kind, $K_m(z)$ the modified Bessel function of the second kind, and $\tau(n)$ denotes the number of positive divisors of $n$.