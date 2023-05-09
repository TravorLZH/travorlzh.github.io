---
layout: post
title:  "On the discriminant of polynomials"
date:   2023-05-09
des:    We explore connections between polynomial discriminants and polynomial coefficients and apply them to study the elliptic discriminant.
tags:   algebra special-functions elliptic-functions
---

For a monic polynomial of degree $n$,

$$
f(x)=(x-x_1)(x-x_2)\cdots(x-x_n),\tag1
$$

its discriminant $D$ is a quantity that allows us to determine whether all roots of $F(x)$ are simple or not. Specifically, $D=0$ iff there exists some $1\le i<j\le n$ such that $x_i=x_j$. Therefore, we naturally require $D$ to be divisible by

$$
V(x_1,x_2,\dots,x_n)=\prod_{1\le i<j\le n}(x_j-x_i).\tag2
$$

Because permuting the labels of $x_1,x_2,\dots,x_n$ may change the sign of $V$, we define $D$ as $V^2$ so that its value will not depend on how we label the roots of $f$:

$$
D=V^2=\prod_{1\le i<j\le n}(x_j-x_i)^2=(-1)^{n(n-1)/2}\prod_{\substack{1\le i,j\le n\\i\ne j}}(x_i-x_j).\tag3
$$

By the fundamental theorem of algebra, we know that the roots of $f$ are completely determined by its coefficients, so we naturally conjecture the following:

**Proposition 1:** _For a monic polynomial $f(x)$ of degree $n$, let $a_k$ denote the coefficients of $x^k$ for $0\le k<n$. Then its discriminant $D$ a polynomial in $a_0,a_1,a_2,\dots,a_{n-1}$._

> Although defining $D$ as the absolute value of $V$ also works, but this would destroys its beautiful algebraic structure.
> 
When $n=2$, by Vieta's formulae, we have

$$
-a_1=x_1+x_2,\quad a_2=x_1x_2,
$$

so by elementary algebra, $D$ is transformed into

$$
D=(x_1+x_2)^2-4x_1x_2=a_1^2-4a_2,
$$

Therefore, Proposition 1 is verified for $n=2$. By expanding out (3) and applying Vieta formulae to gather terms, we can verify it for $n\ge3$, but the computation will become more and more exhausting, so it is reasonable to introduce some advanced tools before proceeding to the actual proof.

## $D$ and the Vandermonde determinant

Let matrix $A$ be defined as

$$
A(x_1,x_2,\dots,x_n)=
\begin{pmatrix}
1 & 1 & 1 & \dots & 1 \\
x_1 & x_2 & x_3 & \dots & x_n \\
x_1^2 & x_2^2 & x_3^2 & \dots & x_n^2 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & \dots & x_n^{n-1}
\end{pmatrix}.\tag4
$$

By the properties of determinants, we see that $\det A=0$ whenever there exists $1\le i<j\le n$ such that $x_i=x_j$. As a consequence, $\det A$ must be divisible by $V$. Because multiplying each of $x_1,x_2,\dots,x_n$ by $\lambda\ne0$ causes $\det A$ to be multiplied by

$$
\lambda^{1+2+3+\dots+(n-2)+(n-1)}=\lambda^{n(n-1)/2}.\tag5
$$

We conclude that $\det A$ is a homogenous polynomial of degree $n(n-1)/2$.

In addition, because there are exactly $n(n-1)/2$ ways to choose 2 distinct items from $n$ objects, we see that $V$ is a homogenous polynomial of degree $n(n-1)/2$ as well. Consequently, we deduce that $\det A$ is a constant multiple of $V$. By [Leibniz formula for determinants](https://en.wikipedia.org/wiki/Leibniz_formula_for_determinants), we see that the term

$$
x_2^1x_3^2x_4^3x_5^4\cdots x_{n-1}^{n-2}x_n^{n-1}\tag6
$$

appears in the expansion of $\det A$ with coefficient $+1$. Additionally, because the only way to obtain (6) in $V$ is to pick all the $x_j$'s in the product (2), we conclude that the coefficient of (6) is $+1$ as well in the expansion of $V$. Thus, we conclude that

$$
\det A(x_1,x_2,\dots,x_n)=V(x_1,x_2,\dots,x_n).\tag7
$$

As this result was due to A.-T. Vandermonde, $A$ and $V$ are known as the **Vandermonde matrix** and the **Vandermonde determinant** in literature.

By the multiplicative property of determinants, we find that $D$ can be written as

$$
\begin{aligned}
D
&=\det(A)^2=\det(A)\det(A^\top)=\det(AA\top ) \\
&=\begin{vmatrix}
n & p_1 & p_2 & \dots & p_{n-1} \\
p_1 & p_2 & p_3 & \dots & p_n \\
p_2 & p_3 & p_4 & \dots & p_{n+1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
p_{n-1} & p_n & p_{n+1} & \dots & p_{2n-2}
\end{vmatrix},
\end{aligned}\tag8
$$

where $p_k$ denotes the sum of $k$'th power of all the roots of $f$:

$$
p_k=x_1^k+x_2^k+\dots+x_n^k.\tag9
$$

Therefore, to prove Proposition 1, it suffices to find expressions of $p_k$ in terms of $a_0,a_1,\dots,a_{n-1}$.

## Elementary symmetric polynomials

Let $\sigma_k$ be defined by

$$
\sigma_k=\sum_{\substack{1\le i_1,i_2,\dots,i_k\le n\\i_1<i_2<\dots<i_k}}x_{i_1}x_{i_2}\cdots x_{i_k}\tag{10}
$$

and $\sigma_k=0$ for all $k>n$. Then it follows from Vieta's formulae that for $1\le k\le n$,

$$
\sigma_k=(-1)^{n-k}a_{n-k}.\tag{11}
$$

Hence, Proposition 1 is proven if we can express $p_k$ in terms of $\sigma_1,\sigma_2,\dots,\sigma_n$. In this section, we explore two approaches to obtaining these expressions.

## Newton's identities

Although the structure of $p_k$ and $\sigma_k$ appear to be very unrelated by only looking at the definition, magic happens if we look at their power series generating functions instead. Using combinatorial principles, it is evident that

$$
F(z)=1+\sum_{k\ge1}\sigma_kz^k=\prod_{1\le k\le n}(1+x_kz).\tag{12}
$$

By differentiating the logarithm of the product on the right-hand side, we see that

$$
\begin{aligned}
{F'\over F}(z)
&=\sum_{1\le k\le n}{x_k\over1+x_kz}=\sum_{1\le k\le n}x_k\sum_{m\ge1}(-x_kz)^{m-1} \\
&=\sum_{m\ge1}(-z)^{m-1}\sum_{1\le k\le n}x_k^m=\sum_{m\ge1}(-1)^{m-1}p_mz^{m-1}.
\end{aligned}\tag{13}
$$

By differentiating the power series in (12) directly, we see that (13) implies

$$
F'(z)=\sum_{k\ge1}k\sigma_kz^{k-1}=F(z)\sum_{m\ge1}(-1)^{m-1}p_mz^{m-1}.\tag{14}
$$

Finally, by comparing coefficients on both sides of (14), we obtain a recursive formula connecting $\sigma_k$ and $p_k$ (let $\sigma_0=1$):

$$
k\sigma_k=\sum_{1\le i\le k}(-1)^{i-1}p_i\sigma_{k-i}.\tag{15}
$$

This result, proven by Newton in the 1660s, is known as **Newton's identities**. By starting with the fact that $\sigma_1=p_1$, we can apply (15) repeatedly to find polynomial expressions of $p_k$ in terms of $\sigma_k$ or the other way around. Therefore, Proposition 1 is proven by connecting (15) with (8) and (11).

## A direct method

If we just take the logarithm of (12) without differentiating, it follows from the power series expansion of $\log(1+y)$ that

$$
\log F(z)=\sum_{1\le k\le n}\log(1+x_kz)=\sum_{k\ge1}{(-1)^{k-1}p_kz^k\over k}.\tag{16}
$$

The left-hand side can be expanded via powers of $G(z)=F(z)-1$ by applying the power series expansion of $\log(1+y)$ in a different way. Hence, it suffices to compute the expansion of $[G(z)]^s$ for $s\ge1$.

Using some combinatorial reasoning, we easily find

$$
[G(z)]^s=\sum_{m\ge1}z^m\color{green}{\sum_{\substack{k_1,k_2,\dots,k_s\ge1\\k_1+k_2+\dots+k_s=m}}}\color{blue}{\prod_{1\le i\le s}\sigma_{k_i}}.\tag{17}
$$

We see that the blue product is unchanged when the values of $k_1,k_2,\dots,k_s$ are permuted. Therefore, we can modify the green summation so that the like terms in (17) are combined.

### Decompositions and partitions

A tuple $\boldsymbol k=(k_1,k_2,\dots,k_s)$ included in the green summation of (18) is called an $s$-decomposition of $m$. For each $s$-decomposition of $m$, we define $\boldsymbol r=(r_1,r_2,\dots,r_m)$ by letting $r_j$ denote the number of repetition of $1\le j\le m$ in the decomposition tuple, so we have

$$
\begin{cases}
r_1+2r_2+3r_3+\dots+mr_m=m, \\
r_1+r_2+r_3+\dots+r_m=s.
\end{cases}\tag{18}
$$

We call $\boldsymbol r$ an $s$-partition of $m$ when $r_1,r_2,\dots,r_m\ge0$ and satisfy (18).

For two $s$-decomposition tuples $\boldsymbol k,\boldsymbol k'$, we write $\boldsymbol k\sim\boldsymbol k'$ of $m$ when they are associated with the same $s$-partition of $m$. The relation $\sim$ is easily verified to be reflexive, symmetric, and transitive, thus being an equivalence relation defined on $B$, all $s$-decomposition of $m$.

Let $B_{\boldsymbol r}$ denote the sets of $s$-decomposition of $m$ that are associated with the partition $\boldsymbol r$. Then by the properties of the equivalence relation $\sim$, we see that $B$ is a disjoint union of $B_{\boldsymbol r}$. Moreover, $B_{\boldsymbol r}$ and $B_{\boldsymbol r'}$ are equal to each other iff $\boldsymbol r=\boldsymbol r'$, and the number of $s$-decompositions in each $B_{\boldsymbol r}$ is given by

$$
{s!\over r_1!r_2!r_3!\cdots r_m!},
$$

so we see that (17) is transformed into

$$
[G(z)]^s=\sum_{m\ge1}z^m\sum_{\substack{r_1,r_2,\dots,r_m\ge0\\r_1+2r_2+\dots+mr_m=m\\r_1+r_2+\dots+r_m=s}}{s!\over r_1!r_2!\cdots r_m!}\prod_{1\le j\le m}\sigma_j^{r_j}.\tag{19}
$$

Plugging (19) into the left-hand side of (16), we have

$$
\begin{aligned}
\log F(z)
&=\sum_{s\ge1}{(-1)^{s-1}[G(z)]^s\over s} \\
&=\sum_{m\ge1}z^m\sum_{s\ge0}\sum_{\substack{r_1,r_2,\dots,r_m\ge0\\r_1+2r_2+\dots+mr_m=m\\r_1+r_2+\dots+r_m=s}}{(-1)^{s-1}(s-1)!\over r_1!r_2!\cdots r_m!}\prod_{1\le j\le m}\sigma_j^{r_j}. \\
&=-\sum_{m\ge1}z^m\sum_{\substack{r_1,r_2,\dots,r_m\ge0\\r_1+2r_2+\dots+mr_m=m}}{(r_1+r_2+\dots+r_m-1)!\over r_1!r_2!\cdots r_m!}\prod_{1\le j\le m}(-\sigma_j)^{r_j}.
\end{aligned}
$$

Combining this with the right-hand side of (16), we see that $p_k$ can be directly expressed by $\sigma_k$ via

$$
p_m=(-1)^mm\sum_{\substack{r_1,r_2,\dots,r_m\ge0\\r_1+2r_2+3r_3+\dots+mr_m}}{(r_1+r_2+\dots+r_m)!\over r_1!r_2!\cdots r_m!}\prod_{1\le j\le m}(-\sigma_j)^{r_j}.\tag{20}
$$

Consequently, (20) proves Proposition 1 directly.

### Formulae for $p_2$, $p_3$, and $p_4$

Note that the numbers $2$, $3$, and $4$ can only be partitioned in the following ways:

$$
2=2=1+1,\quad 3=3=1+2=1+1+1,
$$

$$
\quad4=4=1+3=2+2=1+1+2=1+1+1+1,
$$

so we have the following formulae for $p_2$, $p_3$, and $p_4$:

$$
\begin{aligned}
p_2 &=(-1)^22\left[{(0+1-1)!\over0!1!}(-\sigma_2)+{(2+0-1)!\over2!0!}(-\sigma_1)^2\right] \\
&=2\left(-\sigma_2+\frac12\sigma_1^2\right)=\sigma_1^2-2\sigma_2,
\end{aligned}
\tag{21}
$$

$$
\begin{aligned}
p_3
&=(-1)^33\left[(-\sigma_3)+(-\sigma_1)(-\sigma_2)+\frac23(-\sigma_1)^3\right] \\
&=-3\left(-\sigma_3+\sigma_1^2\sigma_2-\frac32\sigma_1^3\right)=\sigma_1^3-3\sigma_1^2\sigma_2+3\sigma_3,
\end{aligned}
\tag{22}
$$

$$
\begin{aligned}
p_4 &=4\left(-\sigma_4+\sigma_1\sigma_3+\frac12\sigma_2^2-\sigma_1^2\sigma_2+\frac14\sigma_1^4\right) \\
&=\sigma_1^4-4\sigma_1^2\sigma_2+4\sigma_1\sigma_3+2\sigma_2^2-4\sigma_4 \end{aligned}
\tag{23}
$$

## Discriminant of a cubic

By making appropriate substitutions, every cubic can be transformed into a **depressed cubic**:

$$
f(x)=x^3+Ax+B.\tag{24}
$$

Hence, it follows from Vieta's formulae (11) that

$$
\sigma_1=0,\quad\sigma_2=A,\quad\sigma_3=-B.
$$

Combining this with the fact that $p_1=\sigma_1$ and $\sigma_4=0$, we see that (21), (22), and (23) are transformed into

$$
p_2=-2A,\quad p_3=-3B,\quad p_4=-2A^2.\tag{25}
$$

Therefore, the discriminant $D$ for (24) is given by

$$
D=\begin{vmatrix} 3 & 0 & p_2 \\ 0 & p_2 & p_3 \\ p_2 &p_3 & p_4 \end{vmatrix}=3(p_2p_4-p_3^2)-p_2^3.
$$

Plugging (25) in, so that we have

$$
D=-4A^3-27B^2.\tag{26}
$$


## Elliptic discriminant

From [this article][wp], we know that when $x=\wp(z)$ and $y=\wp'(z)$, there are numbers $g_2,g_3$:

$$
y^2=4x^3-g_2x-g_3.\tag{27}
$$

Plugging $A=-g_2/4$ and $B=-g_3/4$, we see that the discriminant of the normalized form of (27) is given by

$$
D={1\over16}(g_2^3-27g_3^2).
$$

To work with a simpler expression, we **elliptic discriminant** define

$$
\Delta:=16D=g_2^3-27g_3^2.\tag{28}
$$

In standard notations, the roots of the right-hand side of (27) are given by $e_1$, $e_2$, and $e_3$, so we see that

$$
\Delta=16(e_1-e_2)^2(e_1-e_3)^2(e_2-e_3)^2.\tag{29}
$$

According to (23), (24), and (25) of [this article][wp], we know that when the lattice generators $2\omega_1$ and $2\omega_3$ are chosen such that $\tau=\omega_3/\omega_1$ lies on the upper half plane, there is

$$
e_1-e_2={\pi^2\over4\omega_1^2}[\vartheta_4(0 \vert \tau)]^4,
$$

$$
e_1-e_3={\pi^2\over4\omega_1^2}[\vartheta_3(0 \vert \tau)]^4,
$$

$$
e_2-e_3={\pi^2\over4\omega_1^2}[\vartheta_2(0 \vert \tau)]^4.
$$

Consequently, we can transform (29) into

$$
\Delta={16\pi^{12}\over(2\omega_1)^{12}}[\vartheta_2(0 \vert \tau)\vartheta_3(0 \vert \tau)\vartheta_4(0 \vert \tau)]^8.\tag{30}
$$

By (29) and (40) of [this article][th], we have

$$
\vartheta_2(0 \vert \tau)\vartheta_3(0 \vert \tau)\vartheta_4(0 \vert \tau)=\vartheta_1'(0 \vert \tau)=2q^{1/4}\prod_{n\ge1}(1-q^{2n})^3,
$$

so we see that (30) becomes an infinite product:

$$
\left(\omega_1\over\pi\right)^{12}\Delta=q^2\prod_{n\ge1}(1-q^{2n})^{24}=e^{2\pi i\tau}\prod_{n\ge1}(1-e^{2\pi i\tau})^{24}.\tag{31}
$$

Therefore, we see that the numbers $e_1,e_2,e_3$ are always distinct when $0<\Im(\tau)<+\infty$.

## Conclusion

In this article, we began our investigation by proving Proposition 1. In particular, we prove it by introducing two methods to obtain expressions of power-sum polynomials $p_k$ in terms of elementary symmetric polynomials $e_k$.

After proving Proposition 1, we compute $p_2$, $p_3$, and $p_4$, which allows us to obtain an explicit expression for the cubic discriminant in terms of coefficients. This, combined with our investigation of Weierstrass elliptic functions and Jacobian theta functions, allows us to introduce the elliptic discriminant $\Delta$ and obtain its product representation.

[wp]: /2023/04/09/weierstrass-elliptic-intro.html
[th]: /2023/04/07/jacobian-theta-functions-foundation.html