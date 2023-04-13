---
layout: post
title:  "The foundation of Jacobian theta functions"
date:   2023-04-07
des:    We derive definitions of theta functions from Jacobian elliptic functions.
tags:   complex-analysis elliptic-functions
---

In the [previous article](/2023/04/05/jacobian-elliptic-infinite-products.html), we deduced product representations for Jacobian elliptic functions and their relevant constants in terms of $x=\pi u/2K$ and $q=e^{-\pi K'/K}$:

$$
K=\frac\pi2\prod_{n\ge1}(1+q^{2n-1})^4(1-q^{2n})^2.\tag1
$$


$$
k=4q^{1/2}\prod_{n\ge1}\left(1+q^{2n}\over1+q^{2n-1}\right)^4\tag2
$$

$$
k'=\prod_{n\ge1}\left(1-q^{2n-1}\over1+q^{2n-1}\right)^2.\tag3
$$


$$
\operatorname{sn}(u)={2q^{1/4}\over\sqrt k}\sin(x)\prod_{n\ge1}{1-2q^{2n}\cos(2x)+q^{4n}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}}.\tag4
$$

$$
\operatorname{cn}(u)=2q^{1/4}\sqrt{k'\over k}\cos(x)\prod_{n\ge1}{1+2q^{2n}\cos(2x)+q^{4n}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}},\tag5
$$

$$
\operatorname{dn}(u)=\sqrt{k'}\prod_{n\ge1}{1+2q^{2n-1}\cos(2x)+q^{4n-2}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}}.\tag6
$$

In this article, we will introduce Jacobian theta functions, which will allow us to study these infinite products more conveniently.

## The function $\Theta(u)$

If we look at (4), (5), and (6) carefully, we see all of their denominators contain the following infinite product

$$
\begin{aligned}
g(u)
&=\prod_{n\ge1}(1-2q^{2n-1}\cos(2x)+q^{4n-2}) \\
&=\prod_{n\ge1}(1-q^{2n-1}e^{-2ix})(1-q^{2n-1}e^{2ix}).
\end{aligned}\tag7
$$

In 1829, Jacobi defined his first theta function $\Theta(u)=Gg(u)$, where $G$ is designed so that the series expansion of $\Theta(u)$ is neat. To achieve this, we need to investigate the partial product of $g(u)$.

### Jacobi's triple product identity

Let $F_N(a,q)$ denote the partial product

$$
F_N(w,q)=\prod_{1\le n\le N}(1+q^{2n-1}w)(1+q^{2n-1}w^{-1})\tag8
$$

sso that letting $w=-e^{2ix}$ and $N\to\infty$ gives $g$. Therefore, it is sufficient for us to study the series expansion of $F_N$.

Let $a_{m,N}$ be the coefficient of $w^m$ in the Laurent expansion $F_N(w,q)$. Then the symmetry $F_N(w,q)=F_N(w^{-1},q)$ indicates the symmetry $a_{m,N}=a_{-m,N}$, so it suffices to investigate $a_{m,N}$ when $m\ge0$.

By combinatorial reasoning, the only way for us to form the term $w^N$ is through multiplying all the $q^{2n-1}w$ terms in (8), so we have

$$
a_{N,N}=q^{1+3+\dots+(2N-3)+(2N-1)}=q^{N^2}.\tag9
$$

In addition, by replacing $w$ with $q^2w$, we have

$$
\begin{aligned}
F_N(q^2w,q)
&=\prod_{1\le n\le N}(1+q^{2n+1}w)(1+q^{2n-3}w^{-1}) \\
&={1+q^{-1}w^{-1}\over1+qw}\cdot{1+q^{2N+1}w\over1+q^{2N-1}w^{-1}}F_N(w,q).
\end{aligned}\tag{10}
$$

After some algebraic manipulations, (10) transforms to

$$
(qw+q^{2N})F_N(q^2w,q)=(1+q^{2N+1}w)F_N(w,q)\tag{11}
$$

Comparing coefficients, we have

$$
q^{2m-1}a_{m-1,N}+q^{2N+2m}a_{m,N}=a_{m,N}+q^{2N+1}a_{m-1,N}\tag{12}
$$

Rearranging gives us the recursive formula:

$$
\begin{aligned}
a_{m,N}
&=q^{2m-1}\cdot{1-q^{2N-2m+2}\over1-q^{2N+2m}}a_{m-1,N} \\
&=q^{m^2}\cdot{(1-q^{2N-2m+2})(1-q^{2N-2m+4})\cdots(1-q^{2N})\over(1-q^{2N+2})(1-q^{2N+4})\cdots (1-q^{2N+2m})}a_{0,N}.
\end{aligned}\tag{13}
$$

Combining this with (9), we have

$$
a_{0,N}={(1-q^{2N+2})(1-q^{2N+4})\cdots(1-q^{4N})\over(1-q^2)(1-q^4)\cdots(1-q^{2N})}.\tag{14}
$$

Plugging (14) into (13), we obtain

$$
a_{m,N}=q^{m^2}{(1-q^{2N-2m+2})(1-q^{2N-2m+4})\cdots(1-q^{4N})\over(1-q^2)(1-q^4)\cdots(1-q^{2N+2m-2})(1-q^{2N+2m})}.\tag{15}
$$

For fixed $m$, if we take the pointwise limit, we have

$$
a_m=\lim_{N\to\infty}a_{m,N}=q^{m^2}\prod_{n\ge1}(1-q^{2n})^{-1}.\tag{16}
$$

Observe from (14) that for $\vert q \vert <1$, there exists some constant $C_q>0$ such that $\vert a_{m,N} \vert \le C_q \vert q \vert ^{m^2}$ for all $N$, so it follows from the dominated convergence theorem that

$$
\lim_{N\to\infty}F_N(w,q)=\prod_{n\ge1}(1-q^{2n})^{-1}\cdot\sum_{m\in\mathbb Z}q^{m^2}w^m.\tag{17}
$$

Plugging (8) into (17), we obtain **Jacobi's triple product identity**:

$$
\begin{aligned}
F(w,q)
&=\prod_{n\ge1}(1-q^{2n})(1+q^{2n-1}w)(1+q^{2n-1}w^{-1}) \\
&=\sum_{m\in\mathbb Z}q^{m^2}w^m.
\end{aligned}\tag{18}
$$

This indicates that $G=\prod_{n\ge1}(1-q^{2n})$ would beautify the expansion for $\Theta(u)$:

$$
\begin{aligned}
\Theta(u)
&=\prod_{n\ge1}(1-q^{2n})(1-2q^{2n-1}\cos(2x)+q^{4n-2}) \\
&=\sum_{m\in\mathbb Z}(-1)^mq^{m^2}e^{2mix} \\
&=1+2\sum_{m\ge1}(-1)^mq^{m^2}\cos(2mx).\tag{19}
\end{aligned}
$$

By our study of $g(u)$ in the previous article, we know that _$\Theta(u)$ is a quasi $2K,2iK'$-periodic entire function with multipliers $1,-q^{-1}e^{-2ix}$ and zeros $2mK+(2n-1)iK'$_.

## The function $H(u)$

To simplify the product formula for $\operatorname{sn}(u)$, Jacobi defined

$$
H(u)=2q^{1/4}\sin x\prod_{n\ge1}(1-q^{2n})(1-2q^{2n}\cos(2x)+q^{4n}),\tag{20}
$$

so due to Jacobi's triple product identity, we have

$$
\begin{aligned}
H(u)
&=-iq^{1/4}e^{ix}(1-e^{-2ix}) \\
&\times\prod_{n\ge1}(1-q^{2n})(1-q^{2n-1}qe^{2ix})(1-q^{2n+1}q^{-1}e^{-2ix}) \\
&=-iq^{1/4}e^{ix}F(-qe^{2ix},q)=-iq^{1/4}\sum_{m\in\mathbb Z}q^{m^2}(-q)^me^{2mix} \\
&=-i\sum_{m\in\mathbb Z}(-1)^mq^{(m+\frac12)^2}e^{(2m+1)ix} \\
&=2\sum_{m\ge0}(-1)^mq^{(m+\frac12)^2}\sin(2m+1)x.
\end{aligned}\tag{21}
$$

By the properties of $\operatorname{sn}(u)$ and $\Theta(u)$, we see that _$H(u)$ is a quasi $2K,2iK'$-periodic entire function with multipliers $-1,-q^{-1}e^{-2ix}$ and zeros $2mK+2niK'$_.

### Expressing Jacobian elliptic functions via $\Theta(u)$ and $H(u)$

By definitions, we know immediately from (4) that

$$
\operatorname{sn}(u)={1\over\sqrt k}\cdot{H(u)\over\Theta(u)}.\tag{22}
$$

Note that when shifted by $K$ units, $H(u)$ becomes

$$
\begin{aligned}
H(u+K)
&=2q^{1/4}\cos(x)\prod_{n\ge1}(1-q^{2n})(1+2q^{2n}\cos(2x)+q^{4n}) \\
&=\sum_{m\in\mathbb Z}q^{(m+\frac12)^2}e^{(2m+1)ix} \\
&=2\sum_{m\ge0}q^{(m+\frac12)^2}\cos(2m+1)x.
\end{aligned}\tag{23}
$$

As a result, (5) becomes

$$
\operatorname{cn}(u)=\sqrt{k'\over k}\cdot{H(u+K)\over\Theta(u)}.\tag{24}
$$

If we shift the argument of $\Theta(u)$ by $K$ units, then

$$
\begin{aligned}
\Theta(u+K)
&=\prod_{n\ge1}(1-q^{2n})(1+2q^{2n-1}\cos(2x)+q^{4n-2}) \\
&=\sum_{m\in\mathbb Z}q^{m^2}e^{2mix} \\
&=1+2\sum_{m\ge1}q^{m^2}\cos(2mx).
\end{aligned}\tag{25}
$$

This allows us to simplify (6) into

$$
\operatorname{dn}(u)=\sqrt{k'}\cdot{\Theta(u+K)\over\Theta(u)}.\tag{26}
$$

> The formulas we obtained in this section can be found in equivalent form in §61 of Jacobi's _Fundamenta Nova_.

## The theta functions $\vartheta_r(z)$

The functions $\Theta$ and $H$ were used extensively in Jacobi's _Fundamenta Nova_ but were later discarded (see §21.62 of Whittaker & Watson's _A Course of Modern Analysis_). A more popular set of notation employed by mathematicians today was due to Tannery and Molk. In their 1893 book _Fonctiones Elliptiques_, the following notations were introduced:

$$
\vartheta_1(x)=H(u),\quad\vartheta_2(x)=H(u+K),\tag{27}
$$

$$
\vartheta_3(x)=\Theta(u+2K),\quad\vartheta_4(x)=\Theta(u),\tag{28}
$$

where, as before, $u=2Kx/\pi$. These four functions are referred to as **Jacobian theta functions**. Combining these with (19), (21), (23), and (25), we have the following explicit expressions:

$$
\begin{aligned}
\vartheta_1(z)
&=2q^{1/4}\sin z\prod_{n\ge1}(1-q^{2n})(1-2q^{2n}\cos(2z)+q^{4n}) \\
&=2\sum_{m\ge0}(-1)^mq^{(m+\frac12)^2}\sin(2m+1)z,
\end{aligned}\tag{29}
$$

$$
\begin{aligned}
\vartheta_2(z)
&=2q^{1/4}\cos z\prod_{n\ge1}(1-q^{2n})(1+2q^{2n}\cos(2z)+q^{4n}) \\
&=2\sum_{m\ge0}q^{(m+\frac12)^2}\cos(2m+1)z,
\end{aligned}\tag{30}
$$

$$
\begin{aligned}
\vartheta_3(z)
&=\prod_{n\ge1}(1-q^{2n})(1+2q^{2n-1}\cos(2z)+q^{4n-2}) \\
&=1+2\sum_{m\ge1}q^{m^2}\cos(2mz),
\end{aligned}\tag{31}
$$

$$
\begin{aligned}
\vartheta_4(z)
&=\prod_{n\ge1}(1-q^{2n})(1-2q^{2n-1}\cos(2z)+q^{4n-2}) \\
&=1+2\sum_{m\ge1}(-1)^mq^{m^2}\cos(2mz).
\end{aligned}\tag{32}
$$

Using the convention of $q=e^{i\pi\tau}$ with $\Im(\tau)>0$, we see that the theta functions are functions of $z$ and $\tau$. This is why some works use $\vartheta_r(z,q)$ and $\vartheta(z\vert\tau)$ to emphasize the relationship.

Another benefit of the new definition is that we can discuss theta functions without making any references to quantities of Jacobian elliptic functions. Instead of being quasi $2K,2iK'$-periodic, the theta functions we defined in (29)-(32) are quasi $\pi,\pi\tau$-periodic. From our development of $\Theta(u)$ and $H(u)$, we obtain the following properties for theta functions ($z_1\equiv z_2$ iff $z_1-z_2$ is of the form $m\pi+n\pi\tau$):


| Function | Periodicity factors | Zeros  |
| - | - | - |
| $\vartheta_1(z)$ | $-1,-q^{-1}e^{-2iz}$ | $z\equiv 0$ |
| $\vartheta_2(z)$ | $-1,q^{-1}e^{-2iz}$ | $z\equiv\frac12\pi$ |
| $\vartheta_3(z)$ | $1,q^{-1}e^{-2iz}$ | $z\equiv\frac12\pi+\frac12\pi\tau$ |
| $\vartheta_4(z)$ | $1,-q^{-1}e^{-2iz}$ | $z\equiv\frac12\pi\tau$ |

The four theta functions defined in this section not only get rid of their dependence on the theory of Jacobian elliptic functions but also allow us to reformulate the theory of Jacobian elliptic functions in terms of theta functions.

### Expressing Jacobian elliptic functions via $\vartheta_r(z)$

For brevity, we write $\vartheta_r$ in place of $\vartheta_r(0)$ for $r=2,3,4$. As a result, (1), (2), and (3) become

$$
K=\frac\pi2\vartheta_3^2,\quad k={\vartheta_2^2\over\vartheta_3^2},\quad k'={\vartheta_4^2\over\vartheta_3^2}.\tag{33}
$$

Plugging these results into (22), (24), and (26), we see that Jacobian elliptic functions are expressed as quotients of theta function

$$
\operatorname{sn}(u)={\vartheta_3\over\vartheta_2}\cdot{\vartheta_1(u/\vartheta_3^2)\over\vartheta_4(u/\vartheta_3^2)},\tag{34}
$$

$$
\operatorname{cn}(u)={\vartheta_4\over\vartheta_2}\cdot{\vartheta_2(u/\vartheta_3^2)\over\vartheta_4(u/\vartheta_3^2)},\tag{35}
$$

$$
\operatorname{dn}(u)={\vartheta_4\over\vartheta_3}\cdot{\vartheta_3(u/\vartheta_3^2)\over\vartheta_4(u/\vartheta_3^2)}.\tag{36}
$$

This indicates that identities of Jacobian elliptic functions can be transformed into identities of theta functions. For example, plugging (33) into the relation $k^2+k'^2=1$, we have

$$
\vartheta_2^4+\vartheta_4^4=\vartheta_3^4.\tag{37}
$$

The relation $\operatorname{sn}^2(u)+\operatorname{cn}^2(u)=1$ transforms into

$$
\vartheta_3^2\vartheta_1^2(z)+\vartheta_4^2\vartheta_2^2(z)=\vartheta_2^4\vartheta_4^2(z),\tag{38}
$$

and the relation $k^2\operatorname{sn}^2(u)+\operatorname{dn}^2(u)=1$ corresponds to

$$
\vartheta_2^2\vartheta_1^2(z)+\vartheta_4^2\vartheta_3^2(z)=\vartheta_3^2\vartheta_4^2(z).\tag{39}
$$

> These formulas are to be found in the [§22.2 of Digital Library of Mathematical Functions](https://dlmf.nist.gov/22.2).

## Physical significance of theta functions

Writing $\vartheta_3(z \vert\tau)$'s series in explicit form, we have

$$
\vartheta_3(z \vert\tau)=\sum_{m\in\mathbb Z}e^{i\pi\tau(2m)^2/4+2miz}.\tag{40}
$$

Differentiating with respect to $z$ twice gives

$$
\begin{aligned}
{\partial^2\over\partial^2z}\vartheta_3(z \vert\tau)
&=-\sum_{m\in\mathbb Z}(2m)^2e^{i\pi(2m)^2/4+2miz} \\
&={4i\over\pi}{\partial\over\partial\tau}\vartheta_3(z \vert\tau).\tag{41}
\end{aligned}
$$

This indicates that _$\vartheta_3(z \vert\tau)$ is a special solution_ to

$$
{\pi i\over4}{\partial^2y\over\partial z^2}+{\partial y\over\partial\tau}=0.\tag{42}
$$

It can be verified that the other three theta functions are also solutions to (42). Under the substitution $\tau=it$, the partial differential equation (42) becomes

$$
{\partial y\over\partial t}=\frac\pi4{\partial^2y\over\partial z^2},\tag{43}
$$

which is in fact a **heat equation**. This is why there are texts that introduce theta functions as solutions to the heat equation. We also see that the whole theory, which originated from physics, eventually returned to physics in a surprising way!

## Conclusion

In this article, we began with the infinite product representations for the Jacobian elliptic function and introduced the functions $\Theta(u)$ and $H(u)$, which allow us to deduce the expressions (22), (24), and (26).

After that, we defined the Jacobian theta functions $\vartheta_r(z)$ out of $\Theta(u)$ and $H(u)$, which allow us to redefine Jacobian elliptic functions by theta functions. By differentiating the series expansion, we also indicate the significance of theta functions in physics.

Although Jacobian elliptic functions and theta functions have their roots in physics, we can actually use them to study problems in pure mathematics. In the next article, we will demonstrate how these functions can be applied to the representations of integers as sum of squares.