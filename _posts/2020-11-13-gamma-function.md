---
title: Factorial, Gamma Function, and More
des: One of the most commonly used way to implement factorials for complex numbers
tags: gamma-function beta-function
---

> This post is also available at [HFI Programming Club's blog](https://hfi.me/2020/11/gamma-function) and [Zhihu](https://zhuanlan.zhihu.com/p/310581970).

It is well-known that factorial is defined by the following recursive relation

$$
n!=n(n-1)!
$$

with $0!=1$, but however it is possible to generalize this operation to complex numbers. Let's begin our journey of generalizations!

## First generalization: integral representation

It can be easily shown that the following integral satisfies

$$
\int_0^\infty e^{-\lambda t}\mathrm dt=\frac1\lambda
$$

Differentiation with respect to $s$ on both side for $n-1$ times gives

$$
\int_0^\infty t^{n-1}e^{-\lambda t}\mathrm dt={(n-1)!\over\lambda^n}
$$

Setting $\lambda=1$ gives us the first generalization of factorial: the Gamma function.

$$
(s-1)!=\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\mathrm dt
$$

In fact, by integration by parts we can show that the Gamma function satisfies the recursive relationship:

$$
\Gamma(s+1)=s\Gamma(s)\tag1
$$

Furthermore, we have the relation

$$
\int_0^\infty t^{s-1}e^{-\lambda t}\mathrm dt={\Gamma(s)\over\lambda^s}
$$

## Digression: the Beta function

To convenience our derivation process, let's define the Euler integral of the first kind: the Beta function $B(x,y)$:

$$
B(x,y)=\int_0^1\tau^{x-1}(1-\tau)^{y-1}\mathrm d\tau\tag2
$$

which can be seen as a convolution between two power functions:

$$
B(x,y;t)=\int_0^t\tau^{x-1}(t-\tau)^{y-1}\mathrm d\tau
$$

If we were to perform Laplace transform on both side, we get

$$
\mathscr L\{B(x,y;t)\}(\lambda)={\Gamma(x)\Gamma(y)\over\lambda^{x+y}}
$$

If we juxtapose this fact with the relation

$$
\mathscr L\{t^{x+y-1}\}(\lambda)={\Gamma(x+y)\over\lambda^{x+y}}
$$

then we see that

$$
B(x,y)=B(x,y;1)={\Gamma(x)\Gamma(y)\over\Gamma(x+y)}
$$

which will be extremely useful for us to generalize factorial even further.

## $\Gamma(s)$ evaluated at complex numbers

Via taking absolute variable, we know that the Gamma integral converges whenever $\Re(s)>0$
$$
 \vert \Gamma(s) \vert \le\int_0^\infty t^{\Re(s)-1}e^{-t}\mathrm dt
$$

which means that this improper integral is converges absolutely on the right half plane. Hence, a stronger definition is needed for us to expand it to the entire complex plane.

## $\Gamma(s)$ as a limit

Let's consider a sequence of functions:

$$
f_n(t,s)=
\begin{cases}
t^{s-1}\left(1-\frac tn\right)^n & 0\le x\le n \\
0 & x>n
\end{cases}
$$

Then by the exponential limit we see that

$$
f_n(t,s)\to t^{s-1}\left(1-\frac tn\right)^n
$$

in a **pointwise** sense. However, it is possible to show that this sequence converges **uniformly** for $t\in[0,+\infty)$. Let's set $T>0$ such that for all $t>T$ we have

$$
 \vert t^{s-1}e^{-t} \vert <\varepsilon
$$

Then, let's consider the interval $[0,T]$:

$$
\begin{aligned}
 \vert t^{s-1}e^{-t}-f_n(t,s) \vert 
&=t^{\Re(s)-1}\left \vert e^{-t}-\left(1-\frac tn\right)^n\right \vert  \\
&=t^{\Re(s)-1}\left \vert e^{-t}-e^{-b_n(t)}\right \vert 
\end{aligned}
$$

where we define $b_n(t)$ as

$$
b_n(t)=-n\log\left(1-\frac tn\right)
$$

By the **uniform continuity** of $e^{-t}$ on $[0,T]$, all we need is to prove that $b_n(t)$ converges uniformly to $t$. In fact, for all $n>t$ we can use the Taylor expansion of logarithm to obtain

$$
\begin{aligned}
 \vert b_n(t)-t \vert 
&=\left \vert -n\log\left(1-\frac tn\right)-t\right \vert  \\
&=\left \vert -n\left[\frac tn+\mathcal O\left(1\over n^2\right)\right]-t\right \vert  \\
&=\mathcal O\left(\frac1n\right)
\end{aligned}
$$

As a result, we conclude that $f_n(s,t)$ converges uniformly to $t^{s-1}e^{-t}$, which allows us to interchange the limit operation and integral to obtain

$$
\lim_{n\to\infty}\int_0^n t^{s-1}\left(1-\frac tn\right)^n\mathrm dt=\Gamma(s)\tag3
$$

In the following procedure, we are going to expand the left hand side limit in a subtle sense so that the right hand side can be analytically continued to the left half plane.

## Expanding the integral sequence

Performing a change of variables on (3) gives

$$
\Gamma_n(s)\triangleq\underbrace{\int_0^nt^{s-1}\left(1-\frac tn\right)^n\mathrm dt}_{t=nr}=n^s\int_0^1r^{s-1}(1-r)^n\mathrm dr
$$

In fact, the right hand side can be expressed by Beta function as in (3), which yields

$$
\Gamma_n(s)=n^sB(s,n+1)=n^s{\Gamma(s)\Gamma(n+1)\over\Gamma(s+n+1)}
$$

Continuous application of (1) gives us

$$
\begin{aligned}
\Gamma_n(s)
&={\Gamma(s)n^sn!\over\Gamma(s+n+1)} \\
&={n^sn!\over s(s+1)(s+2)\cdots(s+n)} \\
&={n^s\over s}\prod_{k=1}^n{k\over s+k} \\
\end{aligned}
$$

which transforms Gamma function into a product representation, however this expression still looks ugly, why not go deeper?

## Weierstrass product for $\Gamma(s)$

First, let's turn this equation up side down to obtain

$$
\begin{aligned}
{1\over\Gamma_n(s)}
&=sn^{-s}\prod_{k=1}^n\left(1+\frac sk\right) \\
&=se^{-s\log n}\prod_{k=1}^n\left(1+\frac sk\right)
\end{aligned}
$$

Then, employing the fact that $H_n\triangleq\sum_{k=1}^n\frac1k=\log n+\gamma+\mathcal O(1/n)$ we can replace the logarithm with harmonic numbers:

$$
\begin{aligned}
{1\over\Gamma_n(s)}
&=se^{-s[H_n-\gamma+\mathcal O(1/n)]}\prod_{k=1}^n\left(1+\frac sk\right) \\
&=se^{s\gamma+\mathcal O(1/n)}\prod_{k=1}^n\left(1+\frac sk\right)e^{-s/k}
\end{aligned}
$$

Now, if we take logarithm on the product, we have

$$
\begin{aligned}
\log\left \vert \prod_{k=1}^n\left(1+\frac sk\right)e^{-s/k}\right \vert 
&\le \vert s^2 \vert \sum_{k=1}^n{1\over k^2}<{ \vert s \vert ^2\pi^2\over6}
\end{aligned}
$$

As a result, the product converges absolutely for all $s\in\mathbb C$, giving us the Weierstrass product representation of Gamma function:

$$
{1\over\Gamma(s)}=se^{\gamma s}\prod_{k=1}^\infty\left(1+\frac sk\right)e^{-s/k}
$$

which allows us to analytically continue $\Gamma(s)$ to the entire complex planes except for nonpositive integers:

$$
\Gamma(s)={e^{-\gamma s}\over s}\prod_{k=1}^\infty\left(1+\frac sk\right)^{-1}e^{s/k}\tag4
$$

> **Remark**: (4) also reveals $\Gamma(s)$ is non-zero for all $s\in\mathbb C$

Now, we successfully expanded factorial to the entire complex plane except at negative integers, but Gamma function has some other brilliant properties. Let's have a look at some of them:

## Alternative Definition for Euler-Mascheroni constant

From the [last article](/2020/11/02/rs-integral.html), we know that Euler-Mascheroni constant is defined by

$$
\gamma=\lim_{n\to\infty}(H_n-\log n)=1-\int_1^\infty{\{x\}\over x^2}\mathrm dx
$$

However, it is possible for us to create a new definition for $\gamma$ by using $\Gamma(s)$.

> **Remark**: I hypothesize this explains why they name the function $\Gamma$ and the constant $\gamma$ since they are highly correlated.

To begin with, we take logarithm on (4) to get

$$
\log\Gamma(s)=-\log s-\gamma s+\sum_{k=1}^\infty\left\{\frac sk-\log\left(1+\frac sk\right)\right\}
$$

If we were to define **Digamma function** $\psi(s)$ as the logarithmic derivative of $\Gamma(s)$, then

$$
\psi(s)=-\gamma-\frac1s+\sum_{k=1}^\infty\left\{\frac1k-{1\over s+k}\right\}
$$

If we were to move the $\frac1s$ term into the summation, we deduce the standard definition for Digamma function.

$$
\psi(s)=-\gamma+\sum_{m=0}^\infty\left\{\frac1{m+1}-{1\over m+s}\right\}\tag5
$$

Plugging $s=1$ gives $\psi(1)=\Gamma'(1)/\Gamma(1)=-\gamma$. Because $\Gamma(1)=1$, we also know that $\Gamma'(1)=-\gamma$. Combining this with the original integral definition for $\Gamma(s)$ gives this elegant integral identity to represent Euler-Mascheroni constant:

$$
\int_0^\infty e^{-t}\log(t)\mathrm dt=-\gamma\tag6
$$

## Integral representation for Digamma function

While deriving (5) in the previous section, we introduce the Digamma function, so why don't we do some calculus on that

$$
\begin{aligned}
\psi(s)
&=-\gamma+\sum_{m=0}^\infty\int_0^1(x^m-x^{m+s-1})\mathrm dt \\
&=-\gamma+\int_0^1(1-x^{s-1})\sum_{m=0}^\infty x^m\mathrm dt \\
&=-\gamma+\int_0^1{1-x^{s-1}\over1-x}\mathrm dt
\end{aligned}
$$

Well, the constant lying outside is not _beautiful_, so why not use (6):

$$
\begin{aligned}
-\gamma
&=\underbrace{\int_0^\infty e^{-t}\log(t)\mathrm dt}_{x=e^{-t}} \\
&=-\int_1^0\log(-\log x)\mathrm dx \\
&=\int_0^1\log\log\left(\frac1x\right)\mathrm dx
\end{aligned}
$$

Combining all these gives us the ultimate integral definition for $\psi(s)$:

$$
\psi(s)=\int_0^1\left\{\log\log\left(\frac1x\right)+{x^{s-1}-1\over x-1}\right\}\mathrm dx\tag7
$$

## Conclusion

In this blog, we first use the technique of differentiation under integral to deduce an integral representation for factorial that introduces the concept of Gamma function $\Gamma(s)$. Then, by using an identity connecting $B(x,y)$ and $\Gamma(s)$, we obtain a product formula that turns $\Gamma(s)$ into a **meromorphic** function on $\mathbb C$. Using this newly obtained product formula, we are also able to discover some new identities. In fact, Gamma function is a function that often appears in the field of analytic number theory, and we will begin future investigation based on the following identity (which you could try prove it yourself):

$$
\sum_{n=1}^\infty{1\over n^s}={1\over\Gamma(s)}\int_0^\infty{x^{s-1}\over e^x-1}\mathrm dx
$$