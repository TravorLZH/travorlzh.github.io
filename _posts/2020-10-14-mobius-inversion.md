---
title: Möbius Inversion and Beyond
des: Arithmetic functions are fun!
tags: number-theory
---

> This post is also available at [HFI Programming Club's blog](https://hfi.me/2020/10/mobius-inversion/) and [Zhihu](https://zhuanlan.zhihu.com/p/310471535).

In number theory, Möbius inversion is a common technique to study the properties of arithmetic functions (i.e. those that map $\mathbb N^+$ to $\mathbb C$), and all of these brilliant things are derived from the following formula: 

$$
\sum_{d \vert n}\mu(d)=\left\lfloor\frac1n\right\rfloor= \begin{cases} 1 & n=1 \\
0 & \text{otherwise} \end{cases} \tag1
$$

To understand this formula, let's first understand what it says:

## $\sum_{d \vert n}$ Summation over divisors

The first part of (1) is the summation symbol: $\sum_{d \vert n}$. Instead of summing over all positive integers within $n$, it is summing over the divisors of $n$. For instance, if $n=10$, then $\sum_{d \vert n}$ sums over $n=1,2,5,10$. Pedantically, we write
$$
\sum_{d \vert 10}f(d)=f(1)+f(2)+f(5)+f(10)
$$

> To enhance your understanding of this operator, try these exercises:
>
> 1. Calculate $\sum_{d \vert 15}d^2$
> 2. Explain the meaning of $\sum_{d \vert n}1$

## Formulating $\mu(n)$, the Möbius function

Usually, the Möbius function is defined as

$$
\mu(n)=
\begin{cases}
1 & \text{$n$ has even distinct prime factors} \\
-1 & \text{$n$ has odd distinct prime factors} \\
0 & \text{$n$ is not square-free}
\end{cases}
$$

This standard definition may appear to be strange: why would people care whether some number is square-free or not? To address this, let's turn to a totally different perspective: to expand the following product that runs over all prime numbers:

$$
F(s)=\prod_{p\text{ prime}}(1-p^{-s})
$$

By some combinatoric skills, we are able to expand it like this:

$$
\begin{aligned}
F(s) &=(1-2^{-s})(1-3^{-1})\cdots \\
&=1-{1\over2^s}-{1\over3^s}-{1\over5^s}+{1\over2^s\cdot3^s}-{1\over7^s} \\
&+\cdots-{1\over3^s\cdot5^s\cdot7^s}+\cdots \\
&\triangleq\sum_{n=1}^\infty{a(n)\over n^s}
\end{aligned}
$$

By observing the expansion, we discover that $a(n)$ must satisfy

- when the $n$ is composed of odd number of prime factors $a(n)=-1$
- when the $n$ consists of even number of prime factors $a(n)=1$.
- Because each prime only appears only once in the product, $a(n)=0$ for all $n$  that contains square factors

As a result, $a(n)$ is the Möbius function $\mu(n)$.

## The formula

With our understanding of the symbols, we can now be capable of understanding the implication of (1). That is, (1) declares that the summation of the Möbius function over divisors of some certain number $n$ is one for $n=1$ and zero for all $n\ne1$. Obviously, when $n=1$, we have

$$
\sum_{d \vert 1}\mu(d)=\mu(1)=1
$$

> Did you understand the definition of $\mu(n)$?  Try these problems!
>
> 1. $\mu(20)$
> 2. $\mu(5)\mu(2)$
> 3. $\mu(10)$

## Properties of $\mu(n)$

Generally, we say some arithmetic function $f(n)$ to be **multiplicative** when for all coprime positive integers $a$ and $b$, $f(ab)=f(a)f(b)$. Now, let's show the following fact of $\mu(n)$:

**Theorem**: _$\mu(n)$ is multiplicative_

_Proof._ For coprime positive integers $a$ and $b$, we may divide this proof
into two situations:

1. $a$ and/or $b$ contains square factors, their product $ab$ would also have
   square factors. As a result, $\mu(a)\mu(b)=\mu(ab)=0$
2. For $a$ and $b$ being square free, let's denote $r_n$ be the number of prime
   factors in $n$, so we have

$$
\mu(a)\mu(b)=(-1)^{r_a+r_b}=\mu(ab)
$$

which completes the proof. $\square$

With these tools being prepared, we can delve into proving (1).

## Proof of (1)

Let $n=ab$ where $a$ and $b$ are coprime positive integers, then

$$
\sum_{d \vert n}\mu(d)=\sum_{d_1 \vert a,d_2 \vert b}\mu(d_1d_2)
=\sum_{d_1 \vert a}\mu(d_1)\sum_{d_2 \vert b}\mu(d_2)
$$

Now, let's plug prime powers $n=p^k$ into (1), so we have

$$
\sum_{d \vert p^k}\mu(d)=\sum_{r=0}^k\mu(p^r)=\mu(1)+\mu(p)=1-1=0
$$

Due to the fact that $\sum_{d \vert n}\mu(d)$ is multiplicative, we conclude (1) is true.

## Application of Möbius inversion: Euler's totient function $\varphi(n)$

In fact, (1) can help us find a definition for Euler's totient function $\varphi(n)$, i.e. number of positive integers within $n$ that are coprime to $n$:

First, we write down $\varphi(n)$ in terms of summation:

$$
\varphi(n)=\sum_{k\le n\atop\gcd(k,n)=1}1
$$

Then, using the identity given by $(1)$, we have

$$
\begin{aligned}
\varphi(n)
&=\sum_{k\le n}\sum_{d \vert \gcd(k,n)}\mu(d)=\sum_{k\le n}\sum_{d \vert n}[d \vert k]\mu(d) \\
&=\sum_{d \vert n}\mu(d)\sum_{k\le n,k=qd}=\sum_{d \vert n}\mu(d)\sum_{q\le n/d}1 \\
\end{aligned}
$$

Eventually, we obtain the formula for Euler's totient function:

$$
\varphi(n)=\sum_{d \vert n}\mu(d)\frac nd\tag2
$$

As we can see, (1) actually helps us give definition to other arithmetic functions. Now, it is your job to discover the properties of this function:

> Show that $\varphi(n)$ is multiplicative and, in addition, $\varphi(n)$ can be expressed by
> 
> $$\displaystyle{\varphi(n)=n\prod_{p\text{ prime}\atop p \vert n}\left(1-\frac1p\right)}$$

## Divisor sum of Euler's totient function

If we were to sum $\varphi(n)$ over divisors of $n$, we could magically obtain $n$:

$$
\begin{aligned}
\sum_{d \vert n}\varphi(d)
&=\sum_{d \vert n}\varphi\left(\frac nd\right)
=\sum_{d \vert n}\sum_{k \vert n/d}k\mu\left(n\over dk\right) \\
&=\sum_{dk \vert n}k\mu\left(n\over dk\right)
=\sum_{k \vert n}k\sum_{d \vert n/k}\mu(d) \\
&=\sum_{k \vert n}k\left\lfloor\frac kn\right\rfloor=n
\end{aligned}
$$

This identity can also be seen by listing fractions. For instance let's consider the case for $n=20$

$$
{1\over20},{2\over20},{3\over20},{4\over20},\dots,
{18\over20},{19\over20},{20\over20}
$$

In total, there are $n$ fractions. If we were to simplify these fractions, we get

$$
{1\over20},{1\over10},{3\over20},{1\over5},\dots,
{9\over10},{19\over20},\frac11
$$

Particularly, the denominators in these simplified fractions are always the divisor of $n$. Moreover, for each $d \vert n$ there are exactly $\varphi(d)$ simplified fractions with denominator $d$. As a result, we can also observe that
$$
\sum_{d \vert n}\varphi(d)=n\tag3
$$

## Dirichlet convolution

If we juxtapose (2) and (3), we can see that $\varphi(n)$ and $n$ are closely related to each other, particularly if we define (4) as **Dirichlet convolution**, then we can say that $\varphi(n)$ can be obtained by convolving Möbius function with $n$. Similarly, $n$ can be obtained by convolving $\varphi(n)$ with $1$.
$$
(f*g)(n)\triangleq\sum_{d \vert n}f(d)g\left(\frac nd\right)
=\sum_{d \vert n}g(d)f\left(\frac nd\right)\tag4
$$

- Commutativity and associativity: Obviously this operation commutative. Moreover, it can be easily verified that Dirichlet convolution is also associative using similar techniques to prove (3).
  
- Identity element: There is also an identity function for Dirichlet convolution. That is, Dirichlet convolution between any arithmetic function and $\lfloor1/n\rfloor$ gives the original function:

$$
\sum_{d \vert n}f(d)\left\lfloor\frac dn\right\rfloor=f(n)
$$

- Dirichlet inverse: If $g(n)$ and $f(n)$ are Dirichlet inverse to each other, then

$$
\sum_{d \vert n}f(d)g\left(\frac nd\right)=\left\lfloor\frac1n\right\rfloor
$$

Although $\mu(n)$ and $1$ are inverses to each other, not every arithmetic functon has Dirichlet inverse. Hopefully, the following theorem helps us determine whether some arithmetic function is Dirichlet-invertible or not:

**Theorem**: _An arithmetic function $f(n)$ has Dirichlet inverse if and only if $f(1)\ne0$_

_Proof._ For convenience, suppose $f(n)$ has a Dirichlet inverse $g(n)$, so we need to ensure

$$
\sum_{d \vert n}f(d)g\left(\frac nd\right)=\left\lfloor\frac1n\right\rfloor
$$

For $n=1$, we have $g(1)=1/f(1)$, so $f(1)$ must be non-zero in order for its Dirichlet inverse to exist. In addition, for $n>1$ we have

$$
\begin{aligned}
0&=\sum_{d \vert n}f(d)g\left(\frac nd\right) \\
0&=\sum_{d \vert n,d<n}f(d)g\left(\frac nd\right)+f(1)g(n) \\
g(n)&=-{1\over f(1)}\sum_{d \vert n,d<n}f(d)g\left(\frac nd\right)
\end{aligned}
$$

which also implies the theorem. $\square$

## Algebraic properties of multiplicative functions

Let $G$ be the set containing all multiplicative functions and $*$ be the Dirichlet convolution operator, then we can verify that

- For all $f,g\in G$, we have $f*g=g*f\in G$
- For all $f,g,h\in G$, $(f*g)*h=f*(g*h)$
- For all $f\in G$, $(f*\lfloor1/n\rfloor)(n)=f(n)$
- For all $f\in G$, there exists $g\in G$ such that
  $(f*g)(n)=\lfloor1/n\rfloor$

> In order for the last condition to hold, readers could consider proving that every multiplicative function $f(n)$ satisfies $f(1)=1\ne0$.

As a result, we conclude that all multiplicative functions form an **abelian group** under Dirichlet convolution.

## Conclusion

In a nutshell, we begin our discussion with the explanation and proof Möbius inversion formula as in (1), and then we present Dirichlet convolution, a generalization of the sum-of-divisor operation. At last, we discover an algebraic property in multiplicative functions: that is, all multiplicative functions form an abelian group under Dirichlet convolution.