---
layout: post
title:  "Infinite products for Jacobian elliptic functions"
date:   2023-04-05
des:    We deduce infinite product representations for Jacobian elliptic functions.
tags:   complex-analysis elliptic-functions
---

In the [previous article](/2023/04/02/jacobian-elliptic-functions-intro.html), we have proven that the Jacobian elliptic functions $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ defined from elliptic integrals satisfy the following properties in the complex plane:

- $\operatorname{sn}$ is quasi $2K,2iK'$-periodic with multipliers $-1,1$, zeros at $2mK+2niK'$, and poles at $2mK+(2n-1)iK'$.
- $\operatorname{cn}$ is quasi $2K,2iK'$-periodic with multipliers $-1,1$, zeros at $(2m-1)K+2niK'$, and poles at $2mK+(2n-1)iK'$.
- $\operatorname{dn}$ is $2K,2iK'$-periodic with zeros at $(2m-1)K+(2n-1)iK'$ and poles at $2mK+(2n-1)iK'$.
- All zeros and poles of these functions are simple.

We will show that these properties in the complex plane completely characterized $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ so that we will be able to deduce infinite product representations with ease.

Historically, infinite product representations are deduced via a repeated application of a certain algebraic transformation. Because it is too technical and complicated, we adopt a modern complex analysis approach instead. For readers interested in the original approach, read [Paramanand Singh's blog](https://paramanands.blogspot.com/2011/01/elliptic-functions-infinite-products.html).

## Zeros and poles of elliptic functions

In general, an elliptic function $f$ is defined as a doubly periodic meromorphic function in the complex plane. Let $\omega_1$ and $\omega_2$ denote two numbers such that $f(z+\omega_1)=f(z)$, $f(z+\omega_2)=f(z)$, and $\Im(\omega_1/\omega_2)>0$. Then it is possible for us to find some $z_0$ such that the parallelogram $P$ formed by

$$
z_0,z_0+\omega_1,z_0+\omega_1+\omega_2,z_0+\omega_2\tag1
$$

possessess no zeros or poles of $f$ on the boundary. In this case, we say $P$ is a fundamental parallelogram of $f$. Because $P$ is compact , if $f$ has no poles inside $P$ then it must be analytic and bounded in $P$. Due to double periodicity, this implies $f$ is a bounded entire function in $\mathbb C$. Hence, it follows from Liouville's theorem that $f$ must be constant.

Similarly, if $f$ has no zeros, then $1/f$ will be an bounded entire function, so zeroless elliptic functions are constant as well.

Conclusively, if elliptic functions $f$ and $g$ share the same periods, poles, and zeros, then $f/g$ must be constant. This indicates that we will be able to deduce explicit expressions for $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ by crafting elliptic functions that match their periods, zeros, and poles.

## Ratio $\tau$ and nome $q$

Hadamard's factorization tells us that if the zeros of an entire function $f(z)$ of finite order are known, then it is possible for us to represent them by an infinite product of the form

$$
z^me^{P(z)}\prod_\rho\left(1-\frac z\rho\right)e^{Q(z/\rho)},\tag2
$$

where $P,Q$ are some polynomial functions. However, it is difficult for us to adjust this representation into some periodic or quasi periodic function. Therefore, we need to think differently when finding a factorization for elliptic functions. It is known that the complex exponential $e^{iz}$ is $2\pi$-periodic, so it is reasonable for us to consider forming factorization using $e^{iz}$ instead of $z$. In addition, the complex exponential also allows us to store the information of zeros because the zeros themselves are also doubly periodic. If we let $x=\pi u/2K$, then it follows from the properties of $\operatorname{sn}$ that $\operatorname{sn}(u)=0$ if and only if

$$
2x=2\pi m+2\pi{iK'\over K}n\iff e^{2ix}=e^{2ni\pi\tau}=q^{2n},\tag3
$$

where $\tau=iK'/K$ is the _half-period ratio_ and $q=e^{i\pi\tau}$ is the _nome_. Having defined the two important quantities, we start working our the product formula for $\operatorname{sn}$.

## Infinite products for $\operatorname{sn}$, $K$, and $k$

To ensure the convergence of infinite product, we require $ \vert q^{2n} \vert <1$, so we construct the following auxiliary function to match the zeros of $\operatorname{sn}$:

$$
f(u)=(1-e^{-2ix})\prod_{n\ge1}(1-q^{2n}e^{2ix})(1-q^{2n}e^{-2ix}).\tag4
$$

Due to the periodicity of complex exponential, we see immediately that $f$ is $2K$-periodic, and an elementary manipulation tells us that $f$ is also quasi $2iK'$-periodic:

$$
\begin{aligned}
f(u+2iK')
&=(1-e^{-2ix-2i\pi\tau})\prod_{n\ge1}(1-q^{2n}e^{2ix+2i\pi\tau})(1-q^{2n}e^{-2ix-2i\pi\tau}) \\
&=(1-q^{-2}e^{-2ix})\prod_{n\ge1}(1-q^{2n+2}e^{2ix})(1-q^{2n-2}e^{-2ix}) \\
&={(1-q^{-2}e^{-2ix})\over1-q^2e^{2ix}}(1-e^{-2ix})\prod_{n\ge1}(1-q^{2n}e^{2ix+2i\pi\tau})(1-q^{2n}e^{-2ix-2i\pi\tau}) \\
&={(1-q^{-2}e^{-2ix})\over1-q^2e^{2ix}}f(u)=-q^{-2}e^{-2ix}f(u).
\end{aligned}\tag5
$$

Similarly, note that $\operatorname{sn}(u)=\infty$ if and only if $e^{2ix}=q^{2n-1}$, we construct the following auxiliary function to match the poles:

$$
g(u)=\prod_{n\ge1}(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix}),\tag6
$$

Similar to how we manipulated $f$ in (5), it can be checked that $g$ is quasi $2K,2iK'$-periodic with multipliers $1,-q^{-1}e^{-2ix}$. This suggests that if $f/g$ is quasi $2K,2iK'$-periodic with multipliers $1,q^{-1}$.

To complete the final adjustment, observe that $e^{ix}$ is quasi $2K,2iK'$-periodic with multipliers $-1,q$, so the function $e^{ix}f/g$ is an elliptic function that matches all the quasi-periods, multipliers, zeros, and poles of $\operatorname{sn}$. This indicates that there is some constant $A$ such that

$$
\operatorname{sn}(u)=A\sin(x)\prod_{n\ge1}{(1-q^{2n}e^{2ix})(1-q^{2n}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})}.\tag7
$$

From the previous article, we know $\operatorname{sn}(K)=1$, so plugging $x=\pi/2$ gives

$$
A=\prod_{n\ge1}\left(1+q^{2n-1}\over1+q^{2n}\right)^2.\tag8
$$

This allows us to express other quantities in Jacobian elliptic functions by $q$. For example, the fact that $\operatorname{sn}(u)\sim u$ and $\sin x\sim\pi u/2K$ as $u\to0$ gives us

$$
\begin{aligned}
{2K\over\pi}
&=\prod_{n\ge1}{(1+q^{2n-1})^2(1-q^{2n})^2\over(1+q^{2n})^2(1-q^{2n-1})^2} \\
&=\prod_{n\ge1}{(1+q^{2n-1})^2(1-q^{4n})^2(1-q^{4n-2})^2\over(1+q^{2n})^2(1-q^{2n-1})^2}.
\end{aligned}\tag9
$$

Simplifying the final expression gives us

$$
K=\frac\pi2\prod_{n\ge1}(1+q^{2n-1})^4(1-q^{2n})^2.\tag{10}
$$

It is also possible for us to represent $A$ by some parameters in Jacobian elliptic function. Because $\operatorname{sn}(K+iK')=k^{-1}$, we also have for $x=\frac\pi2+{\pi\tau\over2}$ that

$$
\begin{aligned}
\frac1k
&=\frac A2(q^{1/2}+q^{-1/2})\prod_{n\ge1}{(1+q^{2n+1})(1+q^{2n-1})\over(1+q^{2n})(1+q^{2n-2})} \\
&={q^{-1/2}\over 4}A\prod_{n\ge1}\left(1+q^{2n-1}\over1+q^{2n}\right)^2={q^{-1/2}\over4}A^2
\end{aligned}\tag{11}
$$

Consequently, we obtain

$$
k=4q^{1/2}\prod_{n\ge1}\left(1+q^{2n}\over1+q^{2n-1}\right)^4\tag{12}
$$

and plugging (12) into (7) gives

$$
\begin{aligned}
\operatorname{sn}(u)
&={2q^{1/4}\over\sqrt k}\sin(x)\prod_{n\ge1}{(1-q^{2n}e^{2ix})(1-q^{2n}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})} \\
&={2q^{1/4}\over\sqrt k}\sin(x)\prod_{n\ge1}{1-2q^{2n}\cos(2x)+q^{4n}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}}.
\end{aligned}\tag{13}
$$

## Infinite products for $\operatorname{cn}$, $\operatorname{dn}$, and $k'$

Under similar reasoning of the previous section, we construct the following products for $\operatorname{cn}$ and $\operatorname{dn}$:

$$
\operatorname{cn}(u)=B\cos(x)\prod_{n\ge1}{(1+q^{2n}e^{2ix})(1+q^{2n}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})},\tag{14}
$$

$$
\operatorname{dn}(u)=C\prod_{n\ge1}{(1+q^{2n-1}e^{2ix})(1+q^{2n-1}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})}.\tag{15}
$$

Plugging $u=0$ into (14) and (15) gives

$$
B=\prod_{n\ge1}\left(1-q^{2n-1}\over1+q^{2n}\right)^2,\quad C=\prod_{n\ge1}\left(1-q^{2n-1}\over1+q^{2n-1}\right)^2.\tag{16}
$$

Since $\operatorname{dn}(K)=\sqrt{1-k^2}=k'$, plugging $x=\pi/2$ into (15) gives

$$
k'=C^2=\prod_{n\ge1}\left(1-q^{2n-1}\over1+q^{2n-1}\right)^2.\tag{17}
$$

Combining this with (12) and (16), we obtain

$$
\begin{aligned}
\operatorname{cn}(u)
&=2q^{1/4}\sqrt{k'\over k}\cos(x)\prod_{n\ge1}{(1+q^{2n}e^{2ix})(1+q^{2n}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})} \\
&=2q^{1/4}\sqrt{k'\over k}\cos(x)\prod_{n\ge1}{1+2q^{2n}\cos(2x)+q^{4n}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}},
\end{aligned}\tag{18}
$$

$$
\begin{aligned}
\operatorname{dn}(u)
&=\sqrt{k'}\prod_{n\ge1}{(1+q^{2n-1}e^{2ix})(1+q^{2n-1}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-2ix})} \\
&=\sqrt{k'}\prod_{n\ge1}{1+2q^{2n-1}\cos(2x)+q^{4n-2}\over1-2q^{2n-1}\cos(2x)+q^{4n-2}}.
\end{aligned}\tag{19}
$$

## Conclusion

In this article, we began by studying the zeros and poles of elliptic functions and discovered that elliptic functions with prescribed periods, zeros, and poles are unique up to constant multiplication. As a result, we are able to reconstruct $\operatorname{sn}$, $\operatorname{cn}$, and $\operatorname{dn}$ using infinite products in terms of nome $q$. This also allows us to deduce product representations for $K$, $k$, and $k'$.

Observe that the function $g(u)$ defined in (6) all appear in the denominators in the product representations of Jacobian elliptic function, so one is motivated to think that _if we investigate the properties of $g(u)$ then it is possible for us to transfer these properties to Jacobian elliptic functions_. As history turns out, this is what Jacobi did in 1829. The first theta function he defined is exactly a constant multiple of $g$. By defining three more theta function, he successfully represented all the Jacobian elliptic functions using theta functions. As this is another fruitful topic, we will investigate it next time.