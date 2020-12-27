---
title: Riemann-Stieltjes Integration and Asymptotics
des: Summation, but calculus approach
tags: number-theory asymptotics
---

> This post is also available at [HFI Programming Club's blog](https://hfi.me/2020/11/rs-integral) and [Zhihu](https://zhuanlan.zhihu.com/p/310474732).

As the title suggests, today we are going to do some integral calculus. First, let's recall the definition of Riemann integral:

## Riemann Integral and Its Formal Definition

Traditionally, an integral of some function $f(x)$ over some interval $[a,b]$ is defined as the signed area of $f(x)$ over the curve:

$$
\int_a^bf(x)\mathrm dx\triangleq\text{Signed area under $f(x)$ where $x\in[a,b]$}
$$

and Riemann integral is one way to define it rigorously. Particularly, we
define it as the sum of the areas of tiny rectangles:

$$
\int_a^bf(x)\mathrm dx\approx\sum_{k=1}^Nf(\xi_k)(x_k-x_{k-1})
$$

where $\xi_k$ are sampled in $[x_{k-1},x_k]$ and the increasing sequence $\{x_k\}$ is called a partition of the interval $[a,b]$:

$$
a=x_0\le x_1\le x_2\le\cdots\le x_N=b
$$

To formalize Riemann integral, let's define the $\operatorname{mesh}\{x_n\}$ as the length of the maximum of interval in a partition $\{x_n\}$:

$$
\operatorname{mesh}\{x_n\}\triangleq\max_{1\le n\le N}(x_n-x_{n-1})
$$

Then we say that some function $f(x)$ is **Riemann integrable** if for all $\varepsilon>0$, there exists $\delta>0$ such that when $\operatorname{mesh}\{x_n\}\le\delta$ we always have

$$
\left \vert \sum_{k=1}^Nf(\xi_k)(x_k-x_{k-1})-\int_a^bf(x)\mathrm dx\right \vert <\varepsilon
$$

Alternatively, if some function $f(x)$ is Riemann-integrable on $[a,b]$, then the limit

$$
\lim_{\operatorname{mesh}\{x_n\}\to0}\sum_{k=1}^Nf(\xi_k)(x_k-x_{k-1})
$$

exists and converges to $\int_a^bf(x)\mathrm dx$.

## From Riemann Integral to Riemann-Stieltjes Integral

Although Riemann integral appears to be sufficient to integrate functions, it is not friendly to integrate piecewise continuous functions. Let's first look at its definition:

$$
\int_a^bf(x)\mathrm dg(x)
=\lim_{\operatorname{mesh}\{x_n\}\to0}I(x_n,\xi_n)\triangleq\lim_{\operatorname{mesh}\{x_n\}\to0}\sum_{k=1}^Nf(\xi_k)[g(x_k)-g(x_{k-1})]
$$

In order for this it to exist, we need to set up constraints on $f(x)$ and $g(x)$:

**Theorem 1**: _The Riemann-Stieltjes integral $\int_a^bf\mathrm dg$ exists if $f$ is continuous on $[a,b]$ and $g$ is of bounded variation on $[a,b]$_

When we say $g$ is of bounded variation, we mean that the following quantity exists:

$$\displaystyle\operatorname{Var}_{[a,b]}(g)\triangleq\sup\sum_k \vert g(x_k)-g(x_{k-1}) \vert$$

_Proof._ Let's define $\{y_n\}=\{y_1,y_2,\dots,y_M\}$ as another partition of $[a,b]$ such that $\{x_n\}$ is its subsequence and $\eta_k$ be the sampled abscissa in $[y_k,y_{k-1}]$, so if  we designate $P_k$ to be the set of $m$ such that $y_m$'s are contained in interval $(x_{k-1},x_k]$:

$$
P_k=\{m \vert x_{k-1}<y_m\le x_k\}
$$

then we have

$$
\sum_{m\in P_k}[g(y_m)-g(y_{m-1})]=g(x_k)-g(x_{k-1})
$$

which implies

$$
I(x_n,\xi_n)=\sum_{k=1}^N\sum_{m\in P_k}f(\xi_k)[g(y_m)-g(y_{m-1})]\tag1
$$
$$
I(y_n,\eta_n)=\sum_{k=1}^N\sum_{m\in P_k}f(\eta_m)[g(y_m)-g(y_{m-1})]\tag2
$$

Because $f(x)$ is uniformly continuous within $[a,b]$, we know that for every $\varepsilon>0$ there exists $\delta>0$ such that when $s,t\in[a,b]$ satisfy $ \vert s-t \vert \le\operatorname{mesh}\{x_n\}\le\delta$ then $ \vert f(s)-f(t) \vert <\varepsilon$. Accordingly, if we were to take the absolute values of (1)  and (2), then

$$
\begin{aligned}
 \vert I(x_n,\xi_n)-I(y_n,\eta_ n) \vert 
&=\sum_{n=1}^N\sum_{m\in P_k} \vert f(\eta_m)-f(\xi_k) \vert  \vert g(y_m)-g(y_{m-1}) \vert  \\
&\le\varepsilon\sum_{m=1}^M \vert g(y_m)-g(y_{m-1}) \vert 
\le\varepsilon\operatorname{Var}_{[a,b]}(g)
\end{aligned}
$$

Now, let $\{z_n\}$ be another partition of $[a,b]$, $\zeta_n$ be its correponding samples abscissa and $\{y_n\}$ be the union of both partitions, then

$$
\begin{aligned}
 \vert I(x_n,\xi_n)-I(z_n,\zeta_n) \vert 
&= \vert I(x_n,\xi_n)-I(y_n,\eta_n)-[I(z_n,\zeta_n)-I(y_n,\eta_n)] \vert  \\
&\le \vert I(x_n,\xi_n)-I(y_n,\eta_n) \vert + \vert I(z_n,\zeta_n)-I(y_n,\eta_n) \vert  \\
&\le2\varepsilon\operatorname{Var}_{[a,b]}(g)
\end{aligned}
$$

which indicates the validness of this theorem. $\square$

## Properties of Riemann-Stieltjes Integral

In addition to the constraint for the Riemann-Stieltjes integral to exist, we can also transform it into a Riemann integral at specific occasions:

**Theorem 2**: _If $g'(x)$ exists and is continuous on $[a,b]$ then_

$$
\int_a^bf(x)\mathrm dg(x)=\int_a^bf(x)g'(x)\mathrm dx\tag3
$$

_Proof._ Since $g(x)$ is differentiable, we can use mean value theorem to guarantee the existence of $\xi_k\in[x_{k-1},x_k]$ such that $g(x_k)-g(x_{k-1})=g'(\eta_k)(x_k-x_{k-1})$, so

$$
\begin{aligned}
\sum_{k=1}^N \vert g(x_k)-g(x_{k-1}) \vert 
&=\sum_{k=1}^N \vert g'(\eta_k) \vert (x_k-x_{k-1}) \\
&\to\int_a^b \vert g'(x) \vert \mathrm dx\quad(\operatorname{mesh}\{x_n\}\to0)
\end{aligned}
$$

As a result, $g(x)$ is of bounded variation, implying the existence of the left hand side of (3).

$$
\begin{aligned}
S(x_n,\xi_n)
&=\sum_{k=1}^Nf(\xi_k)g'(\eta_k)(x_k-x_{k-1}) \\
&=\underbrace{\sum_{k=1}^Nf(\xi_k)g'(\xi_k)(x_k-x_{k-1})}_{T_1}
+\underbrace{\sum_{k=1}^Nf(\xi_k)[g'(\eta_k)-g'(\xi_k)](x_k-x_{k-1})}_{T_2} \\
\end{aligned}
$$

By the uniform continuity of $g'(x)$, we know that for all $\varepsilon>0$ there exists $\delta>0$ such that $ \vert g'(s)-g'(t) \vert <\varepsilon$ whenever $ \vert s-t \vert <\delta$, indicating $T_1\to\int_a^bfg'$ and $T_2\to0$ as $\operatorname{mesh}\{x_n\}\to0$. Accordingly, we arrive at the conclusion that

$$
\int_a^bf(x)\mathrm dg(x)=\int_a^bf(x)g'(x)\mathrm dx
$$
thus completing the proof. $\square$

In addition, we can also apply integration by parts on Riemann-Stieltjes integrals. Particularly, if we assume $f$ has a continuous derivative and $g$ is of bounded variation on $[a,b]$, then

$$
\int_a^bf(x)\mathrm dg(x)=f(x)g(x) \vert _q^b-\int_a^bg(x)f'(x)\mathrm dx
$$

## Riemann-Stieltjes Integral and Partial Summation

Let $h(n)$ be some arithmetic function and $H(x)$ be its summatory function

$$
R(x)=\sum_{n\le x}r(n)\tag4
$$

Let $f(t)$ have continuous derivative on $[0,\infty)$ and $b>a>0$ then we have

$$
\int_a^bf(x)\mathrm dR(x)=\sum_{k=1}^Nf(\xi_k)[R(x_k)-R(x_{k-1})]
$$

where we require that $\mathrm{mesh}\{x_n\}<1$. Recall (4), we observe that $R(x)$ is a step function that only jumps at integer values, so we only need to sum over $k_n$'s such that $n\in(x_{k_n-1},x_{k_n}]$. Hence, this integral becomes a summation that sums over integers values in $(a,b]$:

$$
\begin{aligned}
\int_a^bf(x)\mathrm dR(x)
&=\sum_{a<n\le b}f(\xi_{k_n})r(n) \\
&=\sum_{a<n\le b}f(n)r(n)+\sum_{a<n\le b}[f(\xi_{k_n})-f(n)]r(n) \\
\end{aligned}
$$

Since $f$ is uniformly continuous on $[a,b]$, we have that $ \vert f(x)-f(y) \vert <\delta$ when ever $ \vert x-y \vert <\varepsilon$, thus the second summation is of $\mathcal O(\delta)$, leaving us

$$
\int_a^bf(x)\mathrm dR(x)=\sum_{a<n\le b}f(n)r(n)\tag5
$$

Employing (5) in different situations can give us plentiful brilliant results. Let's have a look at some of them:

## Asymptotic Expansions

It was well-known that the harmonic series $1+\frac12+\frac13+\cdots$ diverges, and we can provide a formal proof using Riemann-Stieltjes integral:

$$
\begin{aligned}
\sum_{n\le N}\frac1n
&=\int_{1-\varepsilon}^N{\mathrm d\lfloor x\rfloor\over x} \\
&=\left.\lfloor x\rfloor\over x\right \vert _{1-\varepsilon}^N+\int_{1-\varepsilon}^N{\lfloor x\rfloor\over x^2}\mathrm dx \\
&=\int_{1-\varepsilon}^N{\mathrm dx\over x}+1-\int_{1-\varepsilon}^N{\{x\}\over x^2}\mathrm dx \\
&=\int_1^N{\mathrm dx\over x}+1-\int_1^N{\{x\}\over x^2}\mathrm dx \\
&=\log N+1-\int_1^\infty{\{x\}\over x^2}\mathrm dx+\int_N^\infty{\{x\}\over x^2}\mathrm dx \\
&=\log N+\gamma+\mathcal O\left(\frac1N\right)
\end{aligned}
$$

Since $\log N\to\infty$ as $N\to\infty$, we conclude that the harmonic series diverges.

## Evaluation of an Interesting Series

$$
\sum_{n\ge1}{(-1)^n\log n\over n}
$$

Now, let's first consider the finite case:

$$
\begin{aligned}
\sum_{n\le N}{(-1)^n\log n\over n}
&=2\sum_{n\le N/2}{\log(2n)\over2n}-\sum_{n\le N}{\log n\over n}+\mathcal O\left(\log N\over N\right) \\
&=\sum_{n\le N/2}{\log2+\log n\over n}-\sum_{n\le N}{\log n\over n}+\mathcal O\left(\log N\over N\right) \\
&=\log2\sum_{n\le N/2}\frac1n-\sum_{N/2<n\le N}{\log n\over n}+\mathcal O\left(\log N\over N\right) \\
\end{aligned}
$$

In fact, using Riemann-Stieltjes integral, we can show

$$
\begin{aligned}
\sum_{N/2<n\le N}{\log n\over n}
&=\int_{N/2}^N{\log x\over x}\mathrm d\lfloor x\rfloor \\
&={N\log(N)-N\log(N/2)\over N}-\int_{N/2}^N[x-\{x\}]\mathrm d\left(\log x\over x\right)+\mathcal O\left(\frac1n\right) \\
&=\log2-\int_{N/2}^N\left({1-\log x\over x}\right)\mathrm dx+\mathcal O\left(\log N\over N\right) \\
&=\int_{N/2}^N{\log x\over x}\mathrm dx+\mathcal O\left(\log N\over N\right) \\
&=\frac12[\log^2N-\log^2(N/2)]+\mathcal O\left(\log N\over N\right) \\
&=\frac12[\log N+\log(N/2)][\log N-\log(N/2)]+\mathcal O\left(\log N\over N\right) \\
&=\frac12\log2[2\log N-\log2]+\mathcal O\left(\log N\over N\right) \\
&=\log2\log N-\frac12\log^22+\mathcal O\left(\log N\over N\right)
\end{aligned}
$$

Now, employing this obtained identity and the asymptotic formula for harmonic series yields:

$$
\begin{aligned}
\sum_{n\le N}{(-1)^n\log n\over n}
&=\log2(\log N+\gamma)-\log2\log N+\frac12\log^22+\mathcal O\left(\log N\over N\right) \\
&=\gamma\log2+\frac12\log^22+\mathcal O\left(\log N\over N\right)
\end{aligned}
$$

Now, take the limit $n\to\infty$ on both side gives

$$
\sum_{n\ge1}{(-1)^n\log n\over n}=\gamma\log2+\frac12\log^22
$$

## The Prime Number Theorem

If we were to define the prime indicator function

$$
\mathbf1_p(n)=
\begin{cases}
1 & \text{$n$ is a prime} \\
0 & \text{otherwise}
\end{cases}
$$

Then the prime counting function can be defined as

$$
\pi(x)=\sum_{p\le x}1=\sum_{n\le x}\mathbf1_p(n)
$$

Now, let's also define Chebyshev's function $\vartheta(x)$:

$$
\vartheta(x)=\sum_{p\le x}\log p=\sum_{n\le x}\mathbf1_p(n)\log n
$$

Hence, we have

$$
\begin{aligned}
\pi(x)
&=\sum_{n\le x}{1\over\log n}\cdot\mathbf1_p(n)\log n\\
&=\int_{2-\varepsilon}^x{\mathrm d\vartheta(t)\over\log t} \\
&={\vartheta(x)\over\log x}+\int_2^x{\vartheta(t)\over t\log^2t}\mathrm dt
\end{aligned}
$$

It is known that $\vartheta(x)\sim x$, so plugging it into the above equation gives

$$
\pi(x)\sim{x\over\log x}
$$

which is the prime number theorem.

## Conclusion

To sum up, in this blog, we first define and explore the Riemann-Stieltjes integral, then uses this integration techniques to solve problems via asymptotic expansion. Lastly, we provide a conditional proof for the prime number theorem.