---
layout: post
title:  "When theta functions meet Dirichlet characters"
date:   2023-09-08
des:    We study theta functions twisted by Dirichlet characters and present their applications to Dirichlet $L$-functions.
tags:   complex-analysis elliptic-functions special-functions number-theory
---

> Because I was going for a self-driving tour on [China National Highway 318](https://en.wikipedia.org/wiki/China_National_Highway_318) in August, there were no updates since then.

The functional equation for the Riemann zeta function is essentially an application of [Jacobi's imaginary transformation][transformation] of $\vartheta_3(z\vert\tau)$:

$$
\vartheta_3(z\vert\tau)=(-i\tau)^{-\frac12}\exp\left(z^2\over i\pi\tau\right)\vartheta_3\left(-\frac z\tau\left\vert-\frac1\tau\right.\right).\tag1
$$

In this article, we study a generalization of $\vartheta_3(z\vert\tau)$ to Dirichlet characters that allows us to deduce the functional equation for Dirichlet $L$-functions.

## Theta function twisted by a Dirichlet character

Let $\chi$ be a primitive character modulo $k>1$. We define the $\chi$-theta function by

$$
\Theta(z\vert\tau,\chi)=\sum_{n\in\mathbb Z}\chi(n)e^{(2\pi inz+\pi in^2\tau)/k}.\tag2
$$

Although the summation in (2) is over all integers, we can use the multiplicative property of $\chi$ and the fact that $\chi(0)=0$ to reduce the summation to be over natural numbers. Specifically, we have

$$
\Theta(z\vert\tau,\chi)=2\sum_{n\ge1}\chi(n)\cos\left(2\pi nz\over k\right)e^{\pi in^2\tau/k}\tag3
$$

when $\chi(-1)=1$ and

$$
\Theta(z\vert\tau,\chi)=2i\sum_{n\ge1}\chi(n)\sin\left(2\pi nz\over k\right)e^{\pi in^2\tau/k}\tag4
$$

when $\chi(-1)=-1$.

### Transformation formula

For the sake of convenience, we define

$$
\theta_3(z\vert\tau)=\vartheta_3(\pi z\vert\tau)=\sum_{n\in\mathbb Z}e^{2\pi inz+\pi in^2\tau},
$$

so that (1) becomes

$$
\theta_3(z\vert\tau)=(-i\tau)^{-\frac12}e^{\pi iz^2\tau'}\theta_3(z\tau'\vert\tau'),\quad\tau'=-\frac1\tau\tag5
$$

Let $G(n,\chi)$ denote the character sum

$$
G(n,\chi)=\sum_{h\pmod k}\chi(h)e^{2\pi inh/k}.
$$

When $\chi$ is primitive, we have $G(n,\chi)=\overline\chi(n)G(1,\chi)$ for all $n$, so that

$$
\begin{aligned}
G(1,\overline\chi)\Theta(z\vert\tau,\chi)
&=\sum_{h\pmod k}\overline\chi(h)\sum_{n\in\mathbb Z}e^{2\pi in(h+z)/k+\pi in^2\tau/k} \\
&=\sum_{h\pmod k}\overline\chi(h)\theta_3\left({(h+z)\over k}\left\vert\frac\tau k\right.\right).
\end{aligned}
$$

Let $\tau'=-1/\tau$, so $(\tau/k)'=k\tau'$ Then it follows from (5) that

$$
\begin{aligned}
G(1,\overline\chi)\Theta(z\vert\tau,\chi)
&=k^{\frac12}(-i\tau)^{-\frac12}\sum_{h\pmod k}\overline\chi(h)e^{\pi i(h+z)^2\tau'/k}\theta_3((h+z)\tau'\vert k\tau') \\
&=k^{\frac12}(-i\tau)^{-\frac12}\sum_{h\pmod k}\overline\chi(h)\sum_{n\in\mathbb Z}e^{\pi i\tau'[(h+z)^2+2nk(h+z)+n^2k^2]/k} \\
&=k^{\frac12}(-i\tau)^{-\frac12}\sum_{h\pmod k}\overline\chi(h)\sum_{n\in\mathbb Z}e^{\pi i\tau'(nk+h+z)^2/k} \\
&=k^{\frac12}(-i\tau)^{-\frac12}\sum_{m\in\mathbb Z}\overline\chi(m)e^{\pi i\tau'(m+z)^2/k}.
\end{aligned}
$$

Finally, by expanding $(m+z)^2$ and applying (2), we obtain the transformation formula for $\Theta(z\vert\tau,\chi)$:

$$
\Theta(z\vert\tau,\chi)={k^{\frac12}\over G(1,\overline\chi)}(-i\tau)^{-\frac12}e^{\pi i\tau'z^2/k}\Theta(z\tau'\vert\tau',\overline\chi).\tag6
$$

Having obtained the transformation formula for $\Theta(z\vert\tau,\chi)$, we now apply it to study the Dirichlet $L$-functions.

## Functional equation for Dirichlet $L$-functions

When $\beta>0$ and $\Re(\alpha)>0$, it is known that

$$
\int_0^\infty x^{\alpha-1}e^{-\beta x}\mathrm dx=\Gamma(\alpha)\beta^{-\alpha},
$$

so we have

$$
k^{\frac s2}\pi^{-\frac s2}\Gamma\left(\frac s2\right)L(s,\chi)=\int_0^\infty
x^{\frac s2-1}\left(\sum_{n\ge1}\chi(n)e^{-n^2\pi x/k}\right)\mathrm dx.\tag7
$$

Comparing (3) and (4), we found that (7) can be connected to $\Theta(z\vert\tau,\chi)$ when $\chi(-1)=1$, so we proceed with this assumption first and discuss the case where $\chi(-1)=-1$ later.

### The case where $\chi(-1)=1$

Plugging $z=0$ into (3), we have

$$
k^{\frac s2}\pi^{-\frac s2}\Gamma\left(\frac s2\right)L(s,\chi)=\frac12\int_0^\infty x^{\frac s2-1}\Theta(0\vert ix,\chi)\mathrm dx.\tag8
$$

Similar to how $\zeta(s)$ was handled, we divide the interval of integration into $[0,1)$ and $[1,+\infty)$ and apply the $z=0$ case of (6) to $[0,1)$:

$$
\begin{aligned}
\int_0^1 x^{\frac s2-1}\Theta(0\vert ix,\chi)\mathrm dx
&={k^{\frac12}\over G(1,\overline\chi)}\int_0^1 x^{ {s-1\over2}-1}\Theta(0\vert ix^{-1},\overline\chi)\mathrm dx \\
&={k^{\frac12}\over G(1,\overline\chi)}\int_1^\infty x^{ {1-s\over2}-1}\Theta(0\vert ix,\overline\chi)\mathrm dx.
\end{aligned}
$$

Therefore, (8) becomes

$$
\begin{aligned}
k^{\frac s2}\pi^{-\frac s2}\Gamma\left(\frac s2\right)L(s,\chi)
&={k^{\frac12}\over2G(1,\overline\chi)}\int_1^\infty x^{ {1-s\over2}-1}\Theta(0\vert ix,\overline\chi)\mathrm dx \\
&+\frac12\int_1^\infty x^{\frac s2-1}\Theta(0\vert ix,\chi)\mathrm dx.
\end{aligned}\tag9
$$

Notice that

$$
G(1,\overline\chi)=\chi(-1)\overline{G(1,\chi)}.\tag{10}
$$

and $\vert G(1,\chi)\vert=k^{\frac12}$, so when $\chi(-1)=1$, there is

$$
\begin{aligned}
{k^{\frac12}\over G(1,\chi)}k^{\frac s2}\pi^{-\frac s2}\Gamma\left(\frac s2\right)L(s,\chi)
&=\frac12\int_1^\infty x^{ {1-s\over2}-1}\Theta(0\vert ix,\overline\chi)\mathrm dx \\
&+{k^{\frac12}\over2 G(1,\chi)}\int_1^\infty x^{\frac s2-1}\Theta(0\vert ix,\chi)\mathrm dx.
\end{aligned}
$$

Comparing the right-hand side with (9), we obtain the functional equation for $L(s,\chi)$ when $\chi(-1)=1$:

$$
k^{1-s\over2}\pi^{-{1-s\over2}}\Gamma\left(1-s\over2\right)L(1-s,\overline\chi)={k^{\frac12}\over G(1,\chi)}k^{\frac s2}\pi^{-\frac s2}\Gamma\left(\frac s2\right)L(s,\chi).\tag{11}
$$

Having completed the case for $\chi(-1)=1$, we now look at how the $\chi(-1)=-1$ case is handled.

### The case where $\chi(-1)=-1$

Because (4) is used instead of (3) when $\chi(-1)=-1$, we find that $\Theta(0\vert\tau,\chi)=0$, so we cannot proceed from (7) like how we did in the previous section.

Since the vanishing is due to the fact that $\Theta(z\vert\tau,\chi)$ is an odd function of $z$ when $\chi(-1)=-1$, so its $z$-derivative $\Theta'(z\vert\tau,\chi)$ will not vanish at $z=0$:

$$
\Theta'(z\vert\tau,\chi)={4\pi i\over k}\sum_{n\ge1}\chi(n)\cos\left(2\pi nz\over k\right)ne^{\pi in^2\tau/k}.
$$

Differentiating (6) at $z=0$, we have

$$
\Theta'(0\vert\tau,\chi)={ik^{\frac12}\over G(1,\overline\chi)}(-i\tau)^{-\frac32}\Theta'(0\vert\tau,\chi).\tag{12}
$$

Similar to how (11) is proven via the $z=0$ case of (6), we use (12) to deduce the following:

$$
\begin{aligned}
k^{s+1\over2}\pi^{-{s+1\over2}}
&\Gamma\left(s+1\over2\right)L(s,\chi)
={k\over4\pi i}\int_0^\infty x^{ {s+1\over2}-1}\Theta'(0\vert ix,\chi)\mathrm dx \\
&={ik^{\frac12}\over G(1,\overline\chi)}{k\over4\pi i}\int_1^\infty x^{ {(1-s)+1\over2}-1}\Theta'(0\vert ix,\chi)\mathrm dx \\
&+{k\over4\pi i}\int_1^\infty x^{ {s+1\over2}-1}\Theta'(0\vert ix,\chi)\mathrm dx.
\end{aligned}
$$

Finally, observe that (10) becomes $G(1,\overline\chi)=-\overline{G(1,\chi)}$ when $\chi(-1)=-1$, so we obtain the functional equation for $L(s,\chi)$ when $\chi(-1)=-1$:

$$
k^{2-s\over2}\pi^{-{2-s\over2}}\Gamma\left(2-s\over2\right)L(1-s,\overline\chi)={ik^{\frac12}\over G(1,\chi)}k^{s+1\over2}\pi^{-{s+1\over2}}\Gamma\left(s+1\over2\right)L(s,\chi).\tag{13}
$$

### Unification

Remembering two functional equations according to the values of $\chi(-1)$ would be inconvenient when we wish to study the properties of $L(s,\chi)$ in general, so we define a variable

$$
a={1-\chi(-1)\over2}=
\begin{cases}
0 & \chi(-1)=1, \\
1 & \chi(-1)=-1
\end{cases}
$$

and a function

$$
\xi(s,\chi)=k^{ {s+a\over2}}\pi^{-{s+a\over2}}\Gamma\left(s+a\over2\right)L(s,\chi),
$$

so (11) and (13) can be written as

$$
\xi(1-s,\overline\chi)={i^ak^{\frac12}\over G(1,\chi)}\xi(s,\chi).\tag{14}
$$

This is consistent with (14) in §9 of Davenport's _Multiplicative Number Theory_.

### Alternative form

Although (14) is a symmetric form of the functional equation, due to the presence of Gamma factors on both sides, it is inconvenient for us to connect the asymptotic behavior of $L(s,\chi)$ and $L(1-s,\overline\chi)$. Thus, to achieve this purpose, we isolate $L(1-s,\overline\chi)$ in (14):

$$
\begin{aligned}
L(1-s,\overline\chi)
&={i^ak^{\frac12}\over G(1,\chi)}k^{2s-1\over2}\pi^{-{2s-1\over2}}{\Gamma\left(s+a\over2\right)\over\Gamma\left(1-s+a\over2\right)}L(s,\chi) \\
&={i^a\over G(1,\chi)}k^s\pi^{\frac12-s}{\Gamma\left(s+a\over2\right)\over\Gamma\left(1-{1-a+s\over2}\right)}L(s,\chi).
\end{aligned}\tag{15}
$$

To simplify the Gamma functions, we use Euler's reflection formula:

$$
\Gamma(z)\Gamma(1-z)={\pi\over\sin(\pi z)}
$$

and Legendre's duplication formula:

$$
\Gamma(z)\Gamma\left(z+\frac12\right)=2^{1-2z}\pi^{\frac12}\Gamma(2z),
$$

so we have

$$
\begin{aligned}
{\Gamma\left(s+a\over2\right)\over\Gamma\left(1-{1-a+s\over2}\right)}
&={\Gamma\left(s+a\over2\right)\Gamma\left(1-a+s\over2\right)\over\pi}\sin
\left(\pi(1-a+s)\over2\right) \\
&=\pi^{-1}{\Gamma\left(\frac s2\right)\Gamma\left(\frac s2+\frac12\right)}\sin
\left(\pi(1-a+s)\over2\right) \\
&=\pi^{-\frac12}2^{-s}\Gamma(s)2\sin
\left(\pi(1-a+s)\over2\right).
\end{aligned}
$$

Furthermore, because

$$
\begin{aligned}
2\sin
\left(\pi(1-a+s)\over2\right)
&={i^{1-a}e^{\pi is/2}-i^{a-1}e^{-\pi is}\over i} \\
&=i^{-a}e^{\pi is/2}+i^ae^{-\pi is/2},
\end{aligned}
$$

we can transform (15) into

$$
L(1-s,\overline\chi)={k^s\Gamma(s)\over(2\pi)^s}(e^{\pi is/2}+i^{2a}e^{-\pi is/2}){L(s,\chi)\over G(1,\chi)}.
$$

Now, combining (10) and the fact that $i^{2a}=\chi(-1)$, we obtain

$$
L(1-s,\overline\chi)={k^{s-1}\Gamma(s)\over(2\pi)^s}(e^{\pi is/2}+\chi(-1)e^{-\pi is/2})\chi(-1)G(1,\overline\chi)L(s,\chi).
$$

Simplifying and swapping the positions of $\chi$ and $\overline\chi$, we obtain a convenient form of the functional equation

$$
L(1-s,\chi)={k^{s-1}\Gamma(s)\over(2\pi)^s}(e^{-\pi is/2}+\chi(-1)e^{\pi is/2})G(1,\chi)L(s,\overline\chi),\tag{16}
$$

which is consistent with Theorem 12.11 of Apostol's _Introduction to Analytic Number Theory_.

## Notes

The transformation identities (6) and (12) can be proven directly using Poisson summation formula. This is often the approach adopted in textbooks (e.g. Apostol, Davenport, and Montgomery & Vaughan) as it requires no use of theta functions, but introducing $\Theta(z\vert\tau,\chi)$ reveals more motivations behind the derivation of the functional equations.

Although we deduce it from the symmetric form (14), the standard proof of (16) uses a transformation formula of the Hurwitz zeta function defined by

$$
\zeta(s,a)=\sum_{n\ge0}{1\over(n+a)^s}.
$$

Details of this approach are found in §12 of Apostol.

[transformation]: /2023/07/25/elliptic-functions-transformations-intro.html