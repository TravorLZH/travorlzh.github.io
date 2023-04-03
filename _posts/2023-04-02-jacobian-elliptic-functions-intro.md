---
layout: post
title:  "A modern introduction to Jacobian elliptic functions"
date:   2023-04-02
des:    We introduce the classical Jacobian elliptic functions from a modern perspective.
tags:   complex-analysis elliptic-functions
---

The $\eta(\tau)$ mentioned in the [previous article](/2023/03/19/euler-pentagonal-and-dedekind-eta.html) arose in the theory of elliptic functions. In this article, we introduce elliptic functions following the path of [Carl Gustav Jacob Jacobi](https://en.wikipedia.org/wiki/Carl_Gustav_Jacob_Jacobi) using modern tools.

Jacobi originally studies these functions using merely elementary algebra, but the derivations can be much more simpler and motivated if we apply the methods of complex analysis. For readers preferring the original hardcore approach, consult Jacobi's Latin text _Fundamenta nova theoriae functionum ellipticarum_ or the [blogs](https://paramanands.blogspot.com/2011/01/elliptic-functions-introduction.html) of Paramanand Singh in English.

The book _A Course of Modern Analysis_ by Whittaker and Watson developed the theory of elliptic functions using complex analysis. However, they achieved this goal by introducing theta functions before presenting Jacobian elliptic functions.

As a result, I decide to write a short series of blog post to introduce Jacobian elliptic functions and theta functions in a fashion that is both modern and logical.

## Elliptic integrals and Jacobian elliptic functions

The term elliptic integral originates from calculating the circumference of an ellipse. Later, elliptic integral is used to describe a general class of integrals in the form of

$$
\int R(x,\sqrt{f(x)})\mathrm dx\tag1
$$

for some polynomial $f$ and some rational function $R$. When solving the pendulum equation, one encounters the task of _inverting_ an elliptic integral. In particular, one wishes to invert the **elliptic integral of the first kind** defined by

$$
u=F(\phi;k)=\int_0^\phi{\mathrm d\theta\over\sqrt{1-k^2\sin^2\theta}},\quad0<k<1\tag2
$$

Since the integrand is nonnegative, $F$ is strictly increasing with respect to $\phi$. As a result, we have no problem to invert this quantity when working in real domain. Consequently, Jacobi defined the following quantities

$$
\operatorname{sn}(u;k)=\sin\phi,\quad\operatorname{cn}(u;k)=\cos\phi,\quad\operatorname{dn}(u;k)={\mathrm d\phi\over\mathrm du}.\tag3
$$

By the properties of trigonometric functions and the fundamental theorem of calculus, we obtain

$$
\operatorname{sn}^2(u)+\operatorname{cn}^2(u)=1,\quad k^2\operatorname{sn}^2(u)+\operatorname{dn}^2(u)=1.\tag4
$$

## The constant $K$ and the real period

Let the constant $K$ be defined by

$$
K(k)=F\left(\frac\pi2;k\right)=\int_0^1{\mathrm dt\over\sqrt{1-t^2}\sqrt{1-k^2t^2}}.\tag5
$$

Because $\sin^2\theta$ is $\pi$-periodic, we see that

$$
F(\phi+\pi)=F(\phi)+2K.\tag6
$$

This indicates that $\operatorname{sn}$ and $\operatorname{cn}$ are $4K$-periodic, whereas $\operatorname{dn}$ is $2K$-periodic. Furthermore, $\operatorname{sn}$, $\operatorname{cn}$ obey the following transformation laws when $\phi$ is shifted by $2K$

$$
\operatorname{sn}(u+2K)=-\operatorname{sn}(u),\quad\operatorname{cn}(u+2K)=-\operatorname{cn}(u).\tag7
$$

so we also say that $\operatorname{sn}$ and $\operatorname{cn}$ are _quasi $2K$-periodic with periodicity factor $-1$._ This also indicates that the real zeros of $\operatorname{sn}$ and $\operatorname{cn}$ are in the form of $2m K$ and $(2m-1)K$ for some $m\in\mathbb Z$ respectively. Because $0<k<1$, it follows from (4) that $\operatorname{dn}$ do not possess real zeros.

Having done the analysis of Jacobian elliptic functions on the real line, let's turn our focus to the complex plane.

## Elliptic integral in the complex plane

Because $x^2=(-x)^2$, $z^{1/2}$ is a many-value function, so is

$$
f(z)={1\over\sqrt{1-z^2}\sqrt{1-k^2z^2}}\tag8
$$

In order for $f$ to behave like the ordinary real-variable function on $(-1,1)$, we strip $(-\infty,-1]$ and $[1,\infty)$ from the complex plane so that $f$ is analytic and one-valued in the cut plane (we enforce $f(0)=1$ as well). This allows the elliptic integral

$$
u=F(z)=\int_0^zf(t)\mathrm dt\tag9
$$

to behave well on the cut plane too.

Note that $F$ maps $[-1,1]$ of $z$-plane onto $[-K,K]$ of $u$-plane. It follows from the reflection principle that $F(\overline z)=\overline{F(z)}$. Observe also that $F$ is an odd function, so it will be sufficient for us to only investigate the behavior of $F$ in the first quadrant.

When $t$ is inside the first quadrant, we see immediately that $\arg(t^2)\in(0,\pi)$, so $\arg f(t)\in(0,\pi)$. In addition, $f$ is nonvanishing, so when $z_1$ and $z_2$ are distinct points inside the first quadrant, we have

$$
\Im\left({F(z_2)-F(z_1)\over z_2-z_1}\right)=\int_0^1\Im(f(z_1+r(z_2-z_1)))\mathrm dr>0.
$$

Therefore, $F$ is injective on the first quadrant. This indicates that the inverse function $z=\operatorname{sn}(u)$ is well defined on the image of $F$ of the first quadrant of $z$-plane. Therefore, the remaining task is to determine the shape of the image of $F$.

### Mapping properties of $F$ in the first quadrant

When $z$ lies on the upper half plane, we see that $F(z)$ can be computed using

$$
F(z)=\left(\int_0^{1-\delta}+\int_{C_\delta}+\int_{1+\delta}^z\right)f(t)\mathrm dt,\tag{10}
$$

where $C_\delta$ denotes a clockwise semicircle arc with radius $\delta$ centered at $t=1$. Observe that $f(t)=O( \vert 1-t \vert ^{-1/2})$ when $t\to1$, so it follows that

$$
\int_{C_\delta}f(t)\mathrm dt=O(\delta^{1/2})\tag{11}
$$

as $\delta\to0$. Observe also that $\arg(1-t)$ goes from 0 to $-\pi$ when $t$ travels through $C_\delta$, so we conclude as $\delta\to0$ that

$$
F(z)=K+i\int_1^z{\mathrm dt\over\sqrt{t^2-1}\sqrt{1-k^2t^2}}.\tag{12}
$$

Let constant $K'$ be defined by

$$
K'(k)=\int_1^{1/k}{\mathrm dt\over\sqrt{t^2-1}\sqrt{1-k^2t^2}}.\tag{13}
$$

Then it follows from (12) that $F$ maps the segment $[1,k^{-1}]$ of the first quadrant of $z$-plane onto the line segment connecting $K$ and $K+iK'$ of $u$-plane. By similar reasoning, we see that (12) can be further expanded into

$$
\begin{aligned}
F(z)
&=K+iK'-\int_{1/k}^z{\mathrm dt\over\sqrt{t^2-1}\sqrt{k^2t^2-1}} \\
&=K+iK'-\int_{1/kz}^1{\mathrm dr\over\sqrt{1-r^2}\sqrt{1-k^2r^2}} \\
&=iK'+F\left({1\over kz}\right).
\end{aligned}\tag{14}
$$

This suggests that $F\to iK'$ as $z\to\infty$ in the first quadrant, so $F$ maps $[k^{-1},+\infty)$ of the first quadrant of $z$-plane onto the line segment connecting $K+iK'$ and $iK'$ of $u$-plane. Lastly, Because the substitution $t=is$ suggests that

$$
F(z)=i\int_0^{z/i}{\mathrm ds\over\sqrt{1+s^2}\sqrt{1+k^2s^2}},\tag{15}
$$

we deduce also that $F$ maps the positive imaginary axis of $z$-plane onto the line segment connecting $0$ and $iK'$ of $u$-plane.

We see that _$u=F(z)$ maps the boundary of the first quadrant of $z$-plane onto the boundary of the rectangle in $u$-plane formed by vertices $0$, $K$, $K+iK'$, and $iK'$._

Let $C_1,C_2,C_3,\dots$ be any sequence of simple closed curves in the interior of the first quadrant of $z$-plane such that $C\_n$ tends to the boundary as $n\to\infty$. This indicates that $C'\_n=f(C\_n)$ tends to the rectangular boundary as described in the last paragraph when $n\to\infty$. For any point $u_0$ inside the rectangular region, there exists some $N$ such that $u_0$ is surrounded by $C\_n'$ for all $n>N$, which indicates that $\Delta_{C'\_n}\arg(u-u_0)=\pm2\pi$. Because of the argument principle, we have $\Delta_{C\_n}\arg(F(z)-u_0)\ge0$. This means that for all $n>N$

$$
\Delta_{C_n'}\arg(u-u_0)=\Delta_{C_n}\arg(F(z)-w_0)=1.\tag{16}
$$

This indicates that _$u=F(z)$ maps the first quadrant of $z$-plane onto the rectangle in $u$-plane formed by vertices $0$, $K$, $K+iK'$, and $iK'$._

## Analyticity of $\operatorname{sn}$ in $R$

The analyses in the above section allows us to define the inverse map $z=\operatorname{sn}(u)$ on the rectangular region $R$ described by

$$
u=x+iy,\quad 0\le x\le K,\quad 0\le y\le iK'\tag{17}
$$

We see immediately that $\operatorname{sn}$ possesses a zero at $u=0$ and a singularity at $u=iK'$. However, when $u$ is inside the rectangle described by (17), the open mapping theorem applied to $F$ indicates that $\operatorname{sn}$ is continuous inside $R$. Let $\Gamma$ be any triangular path inside $R$. Then there exists some $n$ such that $\Gamma$ is strictly inside $C\_n'$, so we have for any $u\in\Gamma$ that

$$
\operatorname{sn}(u)={1\over2\pi i}\oint_{C_n}{zF'(z)\over F(z)-u}\mathrm dz.\tag{18}
$$

Thus, we see that

$$
\oint_\Gamma\operatorname{sn}(u)\mathrm du={1\over2\pi i}\oint_{C_n}zF'(z)\oint_\Gamma{\mathrm du\over F(z)-u}\mathrm dz.\tag{19}
$$

Because $F(z)$ is always outside $\Gamma$, we conclude the left hand side of (19) is zero. Finally, Morera's theorem guarantees that $\operatorname{sn}$ is analytic inside $R$. From the previous section, we also see that $\operatorname{sn}$ has continuous extension to the points on the boundary of $R$ except for $u=iK'$.

## Double periodicity of $\operatorname{sn}$

> Readers are strongly suggested to verify these facts graphically.

Because $z=\operatorname{sn}(u)$ maps the segment $\ell$ described by $y=iK'$ and $0<x\le K$ onto $[k^{-1},+\infty)$, the reflection principle tells us that when $u_0$ and $u_1$ are symmetric about $\ell$, $\operatorname{sn}(u_1)$ and $\operatorname{sn}(u_2)$ are symmetric about $[k^{-1},+\infty)$. In other words, we have

$$
\operatorname{sn}(\overline u+2iK')=\overline{\operatorname{sn}(u)}\tag{20}
$$

On the other hand, because $y=0$ and $0\le x\le K$ corresponds to the segment $[0,1]$ of $z$-plane, we see that

$$
\operatorname{sn}(\overline u)=\overline{\operatorname{sn}(u)}.\tag{21}
$$

Combining this with (20) yields

$$
\operatorname{sn}(u+2iK')=\operatorname{sn}(u).\tag{22}
$$

Thus, we have demonstrated using complex analysis that $\operatorname{sn}$ is $2iK'$-periodic. To obtain the real period $4K$, we perform the reflection principle on the vertical segments in the boundary of $R$.

If $u_0$ and $u_1$ are symmetric about $x=0$, then $\operatorname{sn}(u_0)$ and $\operatorname{sn}(u_1)$ will be symmetric about the imaginary axis, so we have

$$
\operatorname{sn}(u)=-\overline{\operatorname{sn}(-\overline u)}\tag{23}
$$

Combining this with (21) shows that $\operatorname{sn}$ is an odd function:

$$
\operatorname{sn}(-u)=-\operatorname{sn}(u)\tag{24}
$$

As the symmetry about $x=K$ in $u$-plane corresponds to symmetriy about $[1,k^{-1}]$ in $z$-plane, we have

$$
\operatorname{sn}(u)=\overline{\operatorname{sn}(2K-\overline u)}.\tag{25}
$$

Combining this with (23) indicates that

$$
\operatorname{sn}(u+2K)=-\operatorname{sn}(u).\tag{26}
$$

Because of (14), we see that

$$
\operatorname{sn}(u-iK')={1\over k\operatorname{sn}(u)}.\tag{27}
$$

This means that $u=iK'$ is a pole of $\operatorname{sn}$. Combining this with (20)-(26), we conclude that _$\operatorname{sn}$ is a $4K,2iK'$-periodic meromorphic function with zeros at $u=2mK+2niK'$ and poles at $u=2mK+(2n-1)iK'$ for $m,n\in\mathbb Z$._ This is why in many textbooks elliptic functions are often introduced as doubly-periodic meromorphic functions in the complex plane.

## Properties of $\operatorname{cn}$ and $\operatorname{dn}$

In this section, we transfer the properties of $\operatorname{sn}$ to the other two Jacobian elliptic functions we defined in (3). Applying the principal squareroot to (4), we see that the formulas

$$
\operatorname{cn}(u)=\sqrt{1-\operatorname{sn}^2(u)}\tag{28}
$$

defines a one-valued meromorphic function in $R_1: \vert x \vert \le K$. By the identity theorem for analytic functions, (7) _extends $\operatorname{cn}$ to a $4K,2iK'$-periodic meromorphic function with zeros at $u=(2m-1)K+2niK'$ and poles at $u=2mK+(2n-1)iK'$ for $m,n\in\mathbb Z$_.

Applying the chain rule, we note that

$$
\operatorname{dn}(u)={\mathrm d\phi\over\mathrm d\sin\phi}\cdot{\mathrm d\sin\phi\over\mathrm du}={1\over\operatorname{cn}(u)}\cdot{\mathrm d\operatorname{sn}(u)\over\mathrm du}\tag{29}
$$

Because both $\operatorname{sn}$ and $\operatorname{cn}$ are quasi $2K,2iK'$-periodic functions with the same periodicity factors, we conclude that (29) _defines $\operatorname{dn}$ as a $2K,2iK'$-periodic meromorphic function with zeros at $u=(2m-1)K+(2n-1)iK'$ and poles at $2mK+(2n-1)iK'$ for $m,n\in\mathbb Z$._

## Summary

In this article, we first introduced Jacobian elliptic functions $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ by inverting an elliptic integral in real domain. Subsequently, by examining the elliptic integral in the complex plane, we successfully defined $\operatorname{sn}$ as a meromorphic doubly periodic function in the complex plane. Finally, by performing analytic continuation on relationships between Jacobian elliptic functions in real domain, we also obtained meromorphic descriptions of $\operatorname{cn}$ and $\operatorname{dn}$.

In the next article, we are going to explore further properties of $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ using the tools from complex analysis, which leads to a natural introduction to Jacobian theta functions.