---
layout: post
title:  "On the spectrum of Fredholm integral equations"
date:   2023-12-23
des:    We give an elementary proof that the spectrum of Fredholm integral equations is discrete modulo the origin.
tags:   real-analysis complex-analysis algebra
---

To address phenomena in physics, mathematicians often construct differential equations subjected to certain boundary conditions. For instance, in the study of waves, we arrive at the following problem after the separation of variables:

$$
\begin{cases}
(-\partial^2_{xx}-\lambda)u=0\text{ in }(0,\ell), \\
u(0)=u(\ell)=0.
\end{cases}\tag1
$$

Notice that the general solution is given by $u=A\sin(\lambda^{1/2}x+\varphi)$. Plugging in the boundary conditions, we conclude that the solutions of (1) are given by

$$
u=A\sin\left(n\pi x\over\ell\right),\quad \lambda={n^2\pi^2\over\ell^2},\quad n\in\mathbb Z.\tag2
$$

Observe that $-\partial^2 \_ {xx}$ is a linear operator, so we can regard (1) as an **eigenvalue problem** for $-\partial^2 \_ {xx}$ in the following vector space

$$
U_1=\lbrace u\in C^\infty([0,\ell]):u(0)=u(\ell)=0\rbrace.
$$

Consequently, (2) indicates that the spectrum (i.e. eigenvalues) of $-\partial^2 \_ {xx}$ in $U \_ 1$ is countably infinite and discrete. However, if we look at the eigenvalue problem of $-\partial^2_{xx}$ in the space

$$
U_2=\lbrace u\in C^\infty([0,+\infty))):u(0)=0\wedge u\text{ uniformly bounded}\rbrace
$$

then we arrive at the following solutions:

$$
u=A\sin(\alpha x), \quad \lambda=\alpha^2, \quad \alpha\in\mathbb R.\tag3
$$

This indicates that the spectrum of $-\partial_{xx}$ in $U_2$ is exactly $(0,+\infty)$.

Contrasting (2) and (3), we see that in infinite-dimensional vector spaces, the spectrum of linear operators can possess contrasting topological properties.

Ordinary differential equations arising from physics can often be converted to integral equations via the means of Green's function. Let $L$ be some differential operator and $G$ be its Green's function. Then the eigenvalue problem $Lu=\lambda u$ on some interval $[a,b]$ becomes an integral equation:

$$
Lu=\lambda u\iff u(x)=\lambda\int_a^bG(x,t)u(t)\mathrm ds.\tag4
$$

This is known as **Fredholm's integral equation**. For convenience of investigation, we define the operator:

$$
(Gu)(x)=\int_a^b G(x,t)u(t)\mathrm dt\tag5
$$

## Transformation to a discrete problem

Let $a=x_0<x_1<x_2<\dots<x_n=b$ be a partition satisfying $x_q-x_{q-1}=(b-a)/n:=\delta$ be a partition. Then we $Gu$ should be well approximated by

$$
(G_nu)(x)=\sum_{q=1}^nG(x,x_q)u(x_q)\delta
$$

when $n\to+\infty$. Consequently, we can attack the eigenvalue problem (4) by considering the equation

$$
[(I-\lambda G_n)u](x)=0\tag6
$$

and make $n\to+\infty$. Because (6) needs to be valid for all $x\in[a,b]$, it must also be true when $x=x_p$. Consequently, we transform the eigenvalue problem into a system of linear equations:

$$
u(x_p)-\lambda\delta\sum_{q=1}^nG(x_p,x_q)u(x_q)=0
$$

for $p=1,2,\dots,n$. When $\lambda\ne0$, this equation has a unique solution if and only if the determinant ($G_{p,q}=G(x_p,x_q)$)

$$
D_n(\lambda)=
\begin{vmatrix}
1-\lambda\delta G_{1,1} & -\lambda\delta G_{1,2} & -\lambda\delta G_{1,3} & \dots & -\lambda\delta G_{1,n} \\
-\lambda\delta G_{2,1} & 1-\lambda\delta G_{2,2} & -\lambda\delta G_{2,3} & \dots & -\lambda\delta G_{2,n} \\
-\lambda\delta G_{3,1} & -\lambda\delta G_{3,2} & 1-\lambda\delta G_{3,3} & \dots & -\lambda\delta G_{3,n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
-\lambda\delta G_{n,1} & -\lambda\delta G_{n,2} & -\lambda\delta G_{n,3} & \dots & 1-\lambda\delta G_{n,n}
\end{vmatrix}
$$

vanishes at $\lambda=\lambda^{-1}$. To study how this determinant behaves has $n\to+\infty$, we need to expand it first into a polynomial of $\lambda$:

### Expansion of $D_n(\lambda)$

If $e_{p,q}$ represents the $p,q$'th entry of the identity matrix. Then the Leibniz expansion gives

$$
D_n(\lambda)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{p=1}^n(e_{p,\sigma(p)}-\lambda\delta G_{p,\sigma(p)}).
$$

Observe that

$$
\prod_{p=1}^n(\alpha_p+\beta_p)=\sum_{A\subset\lbrace 1,2,\dots,n\rbrace}\prod_{p\in A}\alpha_p\prod_{q\in A^c}\beta_q,
$$

so (7) becomes

$$
D_n(\lambda)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\sum_A(-\lambda\delta)^{\vert A\vert}\prod_{p\in A}G_{p,\sigma(p)}{\color{blue}\prod_{q\in A^c}e_{q,\sigma(q)}}.
$$

Because the blue term is zero when $\sigma$ does not fix elements of $\lbrace1,2,\dots,n\rbrace$ that is not in $A$, we only need to restrict the domain of $\sigma$ to the permutations $S_A$ of set $A$:

$$
D_n(\lambda)=\sum_A(-\lambda\delta)^{\vert A\vert}\sum_{\sigma\in S_A}\operatorname{sgn}(\sigma)\prod_{p\in A}G_{p,\sigma(p)}=\sum_{m=0}^na_{m,n}\lambda^m,
$$

where

$$
\begin{aligned}
a_{m,n}
&=(-\delta)^m\sum_{\vert A\vert=m}\sum_{\sigma\in S_A}\operatorname{sgn}(\sigma)\prod_{p\in A}G_{p,\sigma(p)} \\
&=(-\delta)^m\sum_{1\le p_1<p_2<\dots<p_m\le n}\sum_{t\in S_m}\operatorname{sgn}(t)\prod_{k=1}^m G_{p_k,\sigma(p_k)} \\
&=(-\delta)^m\sum_{1\le p_1<p_2<\dots<p_m\le n}\det(G_{p_r,p_s})_{1\le r,s\le m} \\
&={(-\delta)^m\over m!}\sum_{\substack{1\le p_1,p_2,\dots,p_m\le n\\p_1,p_2,\dots,p_m\text{ distinct}}}\det(G_{p_r,p_s})_{1\le r,s\le m}
\end{aligned}
$$

Because the determinant is zero when its matrix has identical rows or columns, we can drop the requirement that $p_1,p_2,\dots,p_m$ are distinct, so we have

$$
\begin{aligned}
a_{m,n}
&={(-1)^m\over m!}\sum_{\substack{1\le p_1,p_2,\dots,p_m\le n}}\delta^m\det(G_{p_r,p_s})_{1\le r,s\le m} \\
&={(-1)^m\over m!}\sum_{\substack{1\le p_1,p_2,\dots,p_m\le n}}\delta^m
\begin{vmatrix}
G(x_{p_1},x_{p_1}) & G(x_{p_1},x_{p_2}) & \dots & G(x_{p_1},x_{p_m}) \\
G(x_{p_2},x_{p_1}) & G(x_{p_2},x_{p_2}) & \dots & G(x_{p_2},x_{p_m}) \\
\vdots & \vdots & \ddots & \vdots \\
G(x_{p_m},x_{p_1}) & G(x_{p_m},x_{p_2}) & \dots & G(x_{p_m},x_{p_m})
\end{vmatrix}.
\end{aligned}
$$

### Limit of $D_n(\lambda)$ as $n\to+\infty$

When $n\to+\infty$, $a_{m,n}$ converges pointwise to

$$
a_m={(-1)^m\over m!}\mathop{\int\dots\int}\limits_{a\le t_1,t_2,\dots,t_m\le b}
\begin{vmatrix}
G(t_1,t_1) & G(t_1,t_2) & \dots & G(t_1,t_n) \\
G(t_2,t_1) & G(t_2,t_2) & \dots & G(t_2,t_n) \\
\vdots & \vdots & \ddots & \vdots \\
G(t_n,t_1) & G(t_n,t_2) & \dots & G(t_n,t_n)
\end{vmatrix}
\mathrm dt_1\mathrm dt_2\cdots\mathrm dt_n.
$$

By our assumption, $\vert G(x,y)\vert\le A$ for some fixed $A>0$ throughout $(x,y)\in [a,b]^2$, so Hadamard's inequality gives

$$
\begin{aligned}
\vert m!a_{m,n}\vert
&\le\delta^m\sum_{1\le p_1,p_2,\dots,p_m\le n}\prod_{r=1}^m\left(\sum_{s=1}^m\vert G(x_{p_s},x_{p_r})\vert^2\right)^{1/2} \\
&\le\delta^mn^m\prod_{r=1}^m(m^{1/2}A)=m^{m/2}[(b-a)A]^m
\end{aligned}
$$

From Stirling's approximation $m!\sim\sqrt{2\pi} m^{m+\frac12}e^{-m}$, we see that

$$
\vert a_{m,n}\vert\le Cm^{-m/2}[(b-a)eA]^m,
$$

for some fixed $C>0$ and all $n$ so by the dominated convergence theorem, we conclude that

$$
D_n(\lambda)\to D(\lambda)=\sum_{m\ge0}a_m\lambda^m
$$

uniformly for all $\lambda$ in any compact subset of $\mathbb C$, so $D(\lambda)$ is an entire function.

## The spectrum of $L$

By the nature of determinants, we conclude that $\lambda$ is a solution to the eigenvalue problem (4) if and only if $D(\lambda)=0$. Because an entire function can either have no zeros, finitely many zeros, or countably many zeros accumulating at infinity, we see that the set of eigenvalues $S$ of $L$ can only be distributed in the following manner:

1. $S$ is empty or finite.
2. $S$ is countably infinite and discrete.
3. $S=\mathbb C$.

Conclusively, the fundamental reason for certain differential operators to possess a discrete spectrum is that it is characterized by the isolated zeros of some analytic function.