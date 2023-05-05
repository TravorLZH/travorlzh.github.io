---
layout: post
title:  "Jacobian elliptic functions and sum of squares"
date:   2023-04-09
des:    We use Jacobian elliptic functions to study the representations of integers as sum of squares
tags:   complex-analysis elliptic-functions number-theory special-functions
---

Let $r_s(n)$ be the number of ways to express $n$ as a sum of $s$ squares. We have obtained a formula for $r_2(n)$ in [a previous article](/2022/08/30/sum-of-two-squares.html) using [Gaussian integers](/2022/08/26/euclid-algorithm-and-unique-factorization-of-gaussian-integers.html). By developing the theory of quaternions, it is possible to obtain a formula for $r_4(n)$ as well, but this would involve a lot of abstract algebra.

In this article, we indicate that it is possible to study $r_s(n)$ using Jacobian elliptic functions. Specifically, we will give an approach allowing us to produce formulas for $r_2(n)$ and $r_4(n)$ altogether.

## Logarithmic series of $\operatorname{sn}$

Let $x=\pi u/2K$ and $q=e^{-\pi K'/K}$. Then it is known that

$$
\operatorname{sn}(u)={2q^{1/4}\over\sqrt k}\sin x\prod_{n\ge1}{(1-q^{2n}e^{2ix})(1-q^{2n}e^{-2ix})\over(1-q^{2n-1}e^{2ix})(1-q^{2n-1}e^{-ix})}.\tag1
$$

As a result, it follows from the power series expansion of $\log(1+z)$ that

$$
\begin{aligned}
\log\operatorname{sn}(u)
&=\log{2q^{1/4}\over\sqrt k}+\log\sin x-\sum_{m\ge1}{e^{2imx}+e^{-2imx}\over m}\sum_{n\ge1}q^{2nm} \\
&+\sum_{m\ge1}{e^{2imx}+e^{-2imx}\over m}\sum_{n\ge1}q^{(2n-1)m} \\
&=\log{2q^{1/4}\over\sqrt k}-2\sum_{m\ge1}{\cos(2mx)\over m}(1-q^{-m})\sum_{n\ge1}q^{2nm}. \\
\end{aligned}
$$

Finally, plugging in the formula for geometric series, we obtain

$$
\log\operatorname{sn}(u)=\log{2q^{1/4}\over\sqrt k}+\log\sin x+2\sum_{m\ge1}{q^m\cos(2mx)\over m(1+q^m)}.\tag2
$$

This is going to be the starting point of our investigation into $r_2(n)$ and $r_4(n)$.

## Sum of two squares

Differentiating (2) with respect to $u$ on both sides, we have

$$
{2K\over\pi}{\operatorname{cn}(u)\operatorname{dn}(u)\over\operatorname{sn}(u)}=-\cot x-4\sum_{m\ge1}{q^m\sin(2mx)\over1+q^m}.\tag3
$$

Using the [infinite product formulas](/2023/04/05/jacobian-elliptic-infinite-products.html) we obtained for Jacobian elliptic functions, we see that plugging in $u=K/2$ gives us

$$
\operatorname{sn}\left(\frac K2\right)={\sqrt2q^{1/4}\over\sqrt k}\prod_{n\ge1}{1+q^{4n}\over1+q^{4n-2}},\tag4
$$

$$
\operatorname{cn}\left(\frac K2\right)=\sqrt2q^{1/4}\sqrt{k'\over k}\prod_{n\ge1}{1+q^{4n}\over1+q^{4n-2}},\tag5
$$

$$
\operatorname{dn}\left(\frac K2\right)=\sqrt{k'}\prod_{n\ge1}{1+q^{4n-2}\over1+q^{2n-1}}=\sqrt{k'}.\tag6
$$

This allows us to transform (3) into

$$
\begin{aligned}
{2Kk'\over\pi}
&=1-4\sum_{m\ge1}{q^m\sin\left(m\pi\over2\right)\over1+q^m} \\
&=1-4\sum_{\substack{m\ge1\\m\text{ odd}}}{(-1)^{(m-1)/2}q^m\over1+q^m}.
\end{aligned}\tag7
$$

Using the infinite product formulas for $K$ and $k'$, we have

$$
{2Kk'\over\pi}=\prod_{n\ge1}(1-q^{2n-1})^4(1-q^{2n})^2.\tag8
$$

Now, apply Jacobi's triple product identity, so we have

$$
{2Kk'\over\pi}=\left(\sum_{m\in\mathbb Z}(-1)^mq^{m^2}\right)^2.\tag9
$$

Combining (10) and (12), we see that when $q$ is replaced with $-q$, there is

$$
\left(\sum_{m\in\mathbb Z}q^{m^2}\right)^2
=1+4\sum_{m\ge1}{(-1)^{(m-1)/2}q^m\over1-q^m}\tag{10}
$$

Observe that the left-hand side is exactly the power series generating function for $r_2(n)$, so comparing coefficients gives

$$
r_2(n)=4\sum_{\substack{d|n\\ d\text{ odd}}}(-1)^{(d-1)/2},\tag{11}
$$

which is consistent with our previous investigation using Gaussian integers.

## Sum of four squares

Differentiating (2) once more with respect to $u$ gives

$$
\left(2K\over\pi\right)^2\left\{ {\operatorname{dn}^2(u)\over\operatorname{sn}^2(u)}+k^2\operatorname{cn}^2(u)\right\}=\csc^2x+8\sum_{m\ge1}{mq^m\cos(2mx)\over1+q^m}.\tag{12}
$$

Note that $\operatorname{cn}(K)=0$, $\operatorname{sn}(K)=1$, and $\operatorname{dn}(K)=k'$, so (8) becomes

$$
\left(2Kk'\over\pi\right)^2=1+8\sum_{m\ge1}{m(-q)^m\over1+q^m}.\tag{13}
$$

Combining this result with (9), we see that when $q$ is replaced with $-q$, there is

$$
\begin{aligned}
\left(\sum_{m\in\mathbb Z}q^{m^2}\right)^4
&=1+8\sum_{\substack{m\ge1\\m\text{ odd}}}{mq^m\over1-q^m}+8\sum_{\substack{m\ge1\\m\text{ even}}}{mq^m\over1+q^m} \\
&=1+8\sum_{m\ge1}{mq^m\over1-q^m} \\
&+8\sum_{\substack{m\ge1\\m\text{ even}}}mq^m\left({1\over1+q^m}-{1\over1-q^m}\right) \\
&=1+8\sum_{m\ge1}{mq^m\over1-q^m}-8\sum_{\substack{m\ge1\\m\text{ even}}}{2mq^{2m}\over1-q^{2m}}.
\end{aligned}
$$

Simplifying gives us

$$
\left(\sum_{m\in\mathbb Z}q^{m^2}\right)^4=1+8\sum_{\substack{m\ge1\\4\nmid m}}{mq^m\over1-q^m}.\tag{14}
$$

Finally, comparing coefficients, we conclude that

$$
r_4(n)=8\sum_{\substack{d|n\\4\nmid d}}
d.\tag{15}
$$

Since $1$ is always a divisor of $n$ that is not a multiple of $4$, we see that $r_4(n)\ge8$ for every $n\ge1$, which proves the theorem of Lagrange that _every positive integer is a sum of four squares._

## Conclusion

In this article, we began from the series expansion of $\log\operatorname{sn}(u)$ and successfully obtained formulas for $r_2(n)$ and $r_4(n)$ by differentiations and plugging in special values.

It is also possible to use Jacobian elliptic functions to deduce expressions for $r_s(n)$ for even $s\ge4$, but the work will grow more and more complicated when $s$ becomes large. As a result, modern mathematicians took a different approach: they use another powerful class of functions called modular functions. A good reference for the topic would be Chapter IX and Chapter XII of Hardy's _Ramanujan: twelve lectures on subjects suggested by his life and work_.