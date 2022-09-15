---
layout: post
title:  "Representing Integers as Sum of Two Squares"
date:   2022-08-30
des:    Theory from $\mathbb Z[i]$ is now applied to study $\mathbb Z$
tags:   number-theory
---
In this article, we investigate a problem emerged from Pythagorean theorem. That is, we want to know how many ways can we represent integers as a sum of two squares. In other words, if we define

$$
r(n)=\#\{(A,B)\in\mathbb Z^2:n=A^2+B^2\},
$$

then we want to investigate when is $r(n)>0$ true and other arithmetical properties of $r(n)$.

## Fermat's Christmas theorem

Since every integer greater than one is a product of primes, it is natural for us to first consider the situation in which $n=p$ is a prime number. Since $2=(\pm1)^2+(\pm1)^2$, we only investigate $p>2$. Solving the equation

$$
p=A^2+B^2
$$

is not an easy task at all, so we may consider first solving this in $\mathbb Z_p$ and generalize later:

$$
A^2+B^2\equiv0\pmod p.\tag1
$$

Since $0<\lvert A\rvert,\lvert B\rvert<\sqrt p$, both of these numbers are coprime to $p$. Consequently, there exists some integer $\ell$ such that

$$
A\equiv\ell B\pmod p,\tag2
$$

so we can plug this expression back to obtain

$$
B^2(\ell^2+1)\equiv0\pmod p\iff\ell^2+1\equiv0\pmod p.
$$

To see whether the rightmost equation has solutions in $\mathbb Z_p$, we employ Legendre symbol. Using Euler's criterion, we get

$$
\left(-1\over p\right)=
\begin{cases}
1 & p\equiv1\pmod4, \\
-1 & p\equiv3\pmod4.
\end{cases}
$$

Therefore, we observe that $p\equiv1\pmod4$ is a necessary condition for us to write $p$ as a sum of two squares.

On the other hand, $p\equiv1\pmod4$ is also a sufficient condition for us to write $p$ as a sum of two squares. To see this, it suffices to find $0<\vert A\vert,\vert B\vert<\sqrt p$ satisfying (1) and (2). For convenience, we define

$$
S=\{u-\ell v:0<u,v\le\sqrt p\}.
$$

Obviously, we have $\vert S\vert=(\lfloor\sqrt p\rfloor+1)^2>p$, so **pigeonhole principle** guarantees that there exists $(u_1,v_1)$ and $(u_2,v_2)$ such that

$$
u_1-\ell v_1\equiv u_2-\ell v_2\pmod p.
$$

This indicates that setting $A=u_1-u_2$ and $B=v_2-v_1$ allows us to conclude the following result:

**Fermat's Christmas Theorem:** _For prime $p>2$, it can be expressed as a sum of two squares if and only if $p\equiv1\pmod4$._

Since $A^2+B^2=(A+iB)(A-iB)$, the UFT of $\mathbb Z[i]$ indicates that there are exactly 8 pairs of $(A,B)$ solving $p=A^2+B^2$ (i.e. $(\pm A,\pm B)$ and $(\pm B,\pm A)$). This property will be extremely useful when considering the general case $n$ in the rest of this article.

## Factorizing integers in $\mathbb Z[i]$

By the UFT of $\mathbb Z$, we can write $n$ into

$$
\begin{aligned}
n
&=[(1+i)(1-i)]^u\prod_{\substack{p^r\Vert n\\p\equiv1(4)}}p^r\prod_{\substack{p^s\Vert n\\p\equiv3(4)}}p^s \\
&=2^u\prod(a+bi)^r(a-bi)^r\prod_{p\equiv3(4)}p^s
\end{aligned}
$$

This means that if we can write $n=A^2+B^2$ then

$$
A+iB=i^t(1+i)^{u_1}(1-i)^{u_2}\prod(a+ib)^{r_1}(a-ib)^{r_2}\prod_{p\equiv3(4)}p^{s_1}\tag3
$$

and

$$
A-iB=i^{-t}(1-i)^{u_1}(1+i)^{u_2}\prod(a-ib)^{r_1}(a+ib)^{r_2}\prod_{p\equiv3(4)}p^{s_2},\tag4
$$

where $r_1+r_2=r$, $s_1+s_2=s$, and $t\in\\{0,1,2,3\\}$. By the properties of complex conjugation, we see that $r(n)>0$ if and only if $s_1=s_2$. In other words, we deduce that _a positive integer $n$ is a sum of two squares if and only for a $p\equiv3\pmod4$, the exponent of $p$ in the canonical factorization of $n$ is even._

In fact, we can conclude more than this. (3) and (4) allows us to deduce a neat formula for $r(n)$.

## A formula for $r(n)$

Since $1-i=i^3(1+i)$, we see that (3) and (4) are simplified into

$$
A+iB=i^t(1+i)^u\prod(a+ib)^{r_1}(a-ib)^{r_2}\prod_{p\equiv3(4)}p^{s/2}
$$

and

$$
A-iB=i^{-t}(1-i)^u\prod(a-ib)^{r_1}(a+ib)^{r_2}\prod_{p\equiv3(4)}p^{s/2}.
$$

Since there are exactly $r+1$ ways to choose $r_1$ and $r_2$ and exactly 4 ways to choose $t$, we see that $r(n)$ is given by

$$
r(n)=\prod_{\substack{p^r\Vert n\\p\equiv1(4)}}(1+r)\prod_{\substack{p^s\Vert n\\p\equiv3(4)}}{1+(-1)^s\over2},
$$

wherein the second product is to ensure $n$ satisfies the condition that all $s$ are even. However, this expression is still not beautiful, so in the next section we are going to express $r(n)$ as a Dirichlet convolution.

## $r(n)$ as a Dirichlet convolution

For prime $p$, we define $\chi_4$ to be

$$
\chi_4(p)=
\begin{cases}
1 & p\equiv1\pmod4, \\
0 & p=2, \\
-1 & p\equiv3\pmod4.
\end{cases}\tag5
$$

Moreover, if we require $\chi_4(d)$ to be competely multiplicative, then $r(n)$ becomes a convolution between $1$ and $\chi_4$:

$$
\begin{aligned}
r(n)
&=\prod_{\substack{p^r\Vert n\\p\equiv1(4)}}\left(\sum_{0\le m\le r}(1)^m\right)\prod_{\substack{p^s\Vert n\\p\equiv3(4)}}\left(\sum_{0\le v\le s}(-1)^v\right) \\
&=\prod_{p^r\Vert n}\left(\sum_{0\le m\le r}\chi_4(p^m)\right)=\sum_{d|n}\chi_4(d).
\end{aligned}
$$

From (5), we see that $\chi_4(d)$ can be also defined directly:

$$
\chi_4(d)=
\begin{cases}
1 & d\equiv1\pmod4, \\
0 & d\equiv0\pmod2, \\
-1 & d\equiv3\pmod4,
\end{cases}
$$

which indicates that _$r(n)$ is the number of positive divisors of $n$ that are $\equiv1\pmod4$ subtracted by the number of positive divisors of $n$ that are $\equiv3\pmod4$._

Having written $r(n)$ a Dirichlet convolution, we can now try summing $r(n)$ over $n\le x$ to deduce an interesting result related to the circumference constant $\pi$.

## Average order of $r(n)$ and an alternating series for $\pi$

By some usual technique to interchange order of summation, we have

$$
\begin{aligned}
S(x)
&=\sum_{n\le x}r(n)=4\sum_{d\le x}\chi_4(d)\left\lfloor\frac xd\right\rfloor \\
&=4x\sum_{d\le x}{\chi_4(d)\over d}+O\left(\sum_{d\le x}|\chi_4(d)|\right).
\end{aligned}
$$

To continue from here, we need to study the convergence of the series.

### Convergence of $\sum\chi_4(d)/d$

For any integer $M$, we know that

$$
\sum_{M<d\le M+4}\chi_4(d)=0,
$$

so any sum of $\chi_4$ over interval are bounded. A partial summation gives

$$
\sum_{a<d\le b}{\chi_4(d)\over d}={O(1)\over a}+{O(1)\over b}+O(1)\int_a^b{\mathrm dx\over x^2}=O\left(\frac1a\right).\tag6
$$

Consequently, we have $S(x)=O(x)$. However, this is has not yet demonstrate the power of the convolution formula for $r(n)$.

### Application of hyperbola method

If we investigate the range of summation more carefully, we can obtain an asymptotic formula for $S(x)$. Using Dirichlet's hyperbola method, we have

$$
S(x)=4\sum_{d\le\sqrt x}\chi_4(d)\left\lfloor\frac xd\right\rfloor+4\sum_{m\le\sqrt x}\sum_{d\le x/m}\chi_4(d)-4\lfloor\sqrt x\rfloor\sum_{d\le\sqrt x}\chi_4(d).
$$

It is easy to verify the latter two sums are $O(\sqrt x)$, so combining with (6) gives

$$
S(x)=\sum_{n\le x}r(n)=4x\sum_{d\ge1}{\chi_4(d)\over d}+O(\sqrt x).\tag7
$$

### Connection to $\pi$

If we calculate $S(x)$ in an alternative way, we see that we are actually calculating the area of a circle with radius $\lfloor\sqrt x\rfloor$:

$$
\begin{aligned}
S(x)
&=\sum_{-\sqrt x\le a\le\sqrt x}\sum_{-\sqrt{x-a^2}\le b\le\sqrt{x-a^2}}1
=4\sum_{a\le\sqrt x}\sum_{b\le\sqrt{x-a^2}}1+O(\sqrt x) \\
&=4\sum_{a\le\sqrt x}\sqrt{x-a^2}+O(\sqrt x)=4\int_0^{\sqrt x}\sqrt{x-t^2}\mathrm dt+O(\sqrt x) \\
&=4x\int_0^1\sqrt{1-u^2}\mathrm du+O(\sqrt x)=\pi x+O(\sqrt x).
\end{aligned}
$$

Combining this with (7), we produce an arithmetical proof of **Gregory series** for $\pi$:

$$
\frac\pi4=\sum_{d\ge1}{\chi_4(d)\over d}=\sum_{n\ge0}{(-1)^n\over2n+1}.
$$

## Conclusion

In this article, we begin our investigation of $r(n)$ by considering the special case with $n$ being a prime. Employing the theory of quadratic residues, we obtain Fermat's Christmas theorem, which decides which primes can be decomposed into sum of 2 squares and which cannot. Subsequently, we apply the UFT of $\mathbb Z[i]$ to deduce an explicit formula for $r(n)$. Finally, by evaluating the average order of $r(n)$ in two ways, we produce a nice arithmetical proof of Gregory series, which is usually evaluated using the properties of arc tangent.