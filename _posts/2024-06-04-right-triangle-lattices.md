---
layout: post
title:  "On the number of lattices in a right triangle"
date:   2024-06-04
des:    We count the non-negative solutions $(m,n)$ to the Diophantine inequality $\alpha m+\beta n\le x$.
tags:   analysis asymptotics number-theory
---

Let $\alpha,\beta$ be positive real numbers and $N_{\alpha,\beta}(x)$ denote the number of integer pairs $(m,n)$ satisfying

$$
\alpha m+\beta n\le x,\quad m,n\ge0.\tag1
$$

Then it follows from some geometric motivations that $N_{\alpha,\beta}(x)$ should be well approximated by ${x^2\over2\alpha\beta}$, the area of the triangle. In this article, we prove that when

$$
P(x)={x^2\over2\alpha\beta}+{x\over2\alpha}+{x\over2\beta},
$$

we have

$$
N_{\alpha,\beta}(x)-P(x)=o(x)\tag2
$$

for irrational $\alpha/\beta$, and when $\alpha/\beta$ is rational, there exists $K>0$ such that for all $X>0$, there exist $x,x'>X$ satisfying

$$
N_{\alpha,\beta}(x)-P(x)>Kx\tag3
$$

and

$$
N_{\alpha,\beta}(x')-P(x')<-Kx'.\tag4
$$

> The methods used in this article is adapted from G. H. Hardy's book on Ramanujan[^1].

## Expression for the error term

Error terms in lattice counting problems often involve the difference of $x$ and $\lfloor x\rfloor$. Since $x-\lfloor x\rfloor$ is a periodic function taking values from $[0,1]$, it is expected that sums over it should be approximated by the sum over its "average value" $\frac12$, so we define a new function for convenience:

$$
\rho(x)=x-\lfloor x\rfloor-\frac12.\tag5
$$

As a result, there is

$$
\begin{aligned}
N_{\alpha,\beta}(x)
&=\sum_{0\le m\le x/\alpha}\sum_{0\le n\le(x-\alpha m)/\beta}1=\sum_{0\le m\le x/\alpha}\left(1+\left\lfloor x-\alpha m\over\beta\right\rfloor\right) \\
&=\sum_{m=0}^{\lfloor x/\alpha\rfloor}\left(\frac12+{x-\alpha m\over\beta}\right)+\sum_{m=0}^{\lfloor x/\alpha\rfloor}\rho\left(x-\alpha m\over\beta\right).
\end{aligned}
$$

Let $x/\alpha-\lfloor x/\alpha\rfloor=w$, so the first term becomes

$$
\begin{aligned}
\sum_{m=0}^{\lfloor x/\alpha\rfloor}\left(\frac12+{x-\alpha m\over\beta}\right)
&=\frac12\left\lfloor\frac x\alpha\right\rfloor+\frac x\beta\left\lfloor\frac x\alpha\right\rfloor-{\alpha\over2\beta}\left\lfloor\frac x\alpha\right\rfloor\left(\left\lfloor\frac x\alpha\right\rfloor+1\right) \\
&={x\over2\alpha}+{x^2\over\alpha\beta}-{xw\over\beta}-{\alpha\over2\beta}\left(\frac x\alpha-w\right)^2+{\alpha\over2\beta}\left\lfloor\frac x\alpha\right\rfloor+O(1) \\
&={x\over2\alpha}+{x^2\over\alpha\beta}-{xw\over\beta}-{\alpha\over2\beta}\left({x^2\over\alpha^2}-{2wx\over\alpha}+w^2\right)+{x\over2\beta}+O(1) \\
&={x^2\over2\alpha\beta}+{x\over2\alpha}+{x\over2\beta}+O(1)=P(x)+O(1).
\end{aligned}
$$

Combining everything, we see that

$$
N_{\alpha,\beta}(x)-P(x)=S_{\alpha,\beta}(x)+O(1),\tag6
$$

where

$$
S_{\alpha,\beta}(x)=\sum_{m=0}^{\lfloor x/\alpha\rfloor}\rho\left(x-\alpha m\over\beta\right).\tag7
$$

## Estimates of $S_{\alpha,\beta}(x)$ when $\alpha/\beta$ is irrational.

Notice that $S_{\alpha,\beta}(x)=S_{\alpha\beta^{-1},1}(x\beta^{-1})$, so we assume $\beta=1$ and $\alpha$ irrational for convenience, so (7) simplifies into

$$
S_{\alpha,1}(x)=\sum_{m=0}^{\lfloor x\rfloor}\rho(x-\alpha m).
$$

Let $\frac pq={p_n\over q_n}$ be an n'th continued fraction convergent to $\alpha$. Then it follows from the properties of continued fractions that $p,q$ are coprime and

$$
\alpha=\frac pq+(-1)^n\varepsilon,\quad 0<\varepsilon<{1\over q^2}.\tag8
$$

Write $\lfloor x\rfloor=rq+s$ for some $0\le s<q$, so there is

$$
\begin{aligned}
S_{\alpha,1}(x)
&=\sum_{m=0}^{rq-1}\rho(x-\alpha m)+O(s) \\
&=\sum_{\mu=0}^{r-1}\underbrace{\sum_{\nu=0}^{q-1}\rho(x-\alpha\mu q-\alpha\nu)}_{S^{(\mu)}(x)}+O(s).
\end{aligned}\tag9
$$

### Bounds for $S^{(\mu)}(x)$

Write $\theta_\mu=x-\alpha\mu q$ and choose $t\in\mathbb Z$ such that

$$
\theta_\mu=\frac tq+(-1)^n\delta,\quad 0\le\delta<\frac1q.\tag{10}
$$

Then it follows from (8) and $0\le\nu<q$ that

$$
\theta_\mu-\alpha\nu-{t-p\nu\over q}=(-1)^n(\delta+\nu\varepsilon)\in\left(-\frac1q,\frac1q\right).\tag{11}
$$

Because $\gcd(p,q)=1$, $\nu\mapsto p\nu$ permutes $\mathbb Z/q\mathbb Z$. As a result,

$$
r_\nu={t-p\nu\over q}-\left\lfloor t-p\nu\over q\right\rfloor
$$

takes each of $0,1/q,2/q,\dots,(q-1)/q$ exactly once when $\nu$ runs through $0,1,2,\dots,q-1$. It follows from (11) that

$$
\lfloor\theta_\mu-\alpha\nu\rfloor=\left\lfloor t-p\nu\over q\right\rfloor
$$

when $r_\nu\ne0$ and when $r_\nu=0$,

$$
\lfloor\theta_\mu-\alpha\nu\rfloor=\left\lfloor t-p\nu\over q\right\rfloor+g
$$

for some $g\in\lbrace 0,-1\rbrace$ according to whether there is an integer between $\theta_\mu-\alpha\nu$ and $t-p\nu\over q$. Since such exceptional $r_\nu$ only occurs once, we have

$$
\begin{aligned}
S^{(\mu)}(x)
&=\sum_{\nu=0}^{q-1}\left(\theta_\mu-\alpha\nu-\frac12\right)-\sum_{\nu=0}^{q-1}\lfloor\theta_\mu-\alpha\nu\rfloor \\
&=\left(\theta_\mu-\frac12\right)q-\frac\alpha2 q(q-1)-\sum_{\nu=0}^{q-1}\left\lfloor t-p\nu\over q\right\rfloor-g \\
&=\left(\theta_\mu-\frac12\right)q-\frac\alpha2 q(q-1)+\sum_{\nu=0}^{q-1}r_\nu-\sum_{\nu=0}^{q-1}{t-p\nu\over q}-g \\
&=\left(\theta_\mu-\frac12\right)q-\frac\alpha2 q(q-1)+\sum_{\nu=0}^{q-1}{\nu\over q}-\sum_{\nu=0}^{q-1}\left(\frac tq-\frac pq\cdot\nu\right)-g \\
&=\left(\theta_\mu-\frac12-\frac tq\right)q-\frac12\left(\alpha-\frac pq\right)q(q-1)+{q-1\over2}-g \\
&=\left(\theta_\mu-\frac tq\right)q-\frac12\left(\alpha-\frac pq\right)q(q-1)-\frac12-g.
\end{aligned}
$$

Combined with (8) and (10), we have

$$
\vert S^{(\mu)}(x)\vert\le 1+{q(q-1)\over 2q^2}+\frac12+\vert g\vert<3.
$$

Plugging this into (9), we obtain

$$
S_{\alpha,1}(x)=\sum_{\mu=0}^{r-1}O(1)+O(s)=O(r)+O(s).
$$

Since $r\le x/q$ and $0\le s<q$, we conclude that there is some fixed $A>0$ satisfying

$$
\vert S_{\alpha,1}(x)\vert\le A\left(\frac xq+q\right).
$$

When $\alpha$ is irrational, it follows from the theory of continued fractions that there are infinitely many pairs of coprime integers $(p,q)$ satisfying (8), so for any $\varepsilon>0$ we can choose $q>2A\varepsilon^{-1}$, so when $x>2Aq\varepsilon^{-1}$, there is

$$
\vert S_{\alpha,1}(x)\vert<\frac\varepsilon2x+\frac\varepsilon2x=\varepsilon x.
$$

This indicates that when $\alpha/\beta$ is irrational and $x\to+\infty$, there is

$$
S_{\alpha,\beta}(x)=o(x).
$$

Combining this with (6) completes the proof of (2).

## Oscillation of $S_{\alpha,\beta}(x)$ when $\alpha/\beta$ is rational

> The elementary approach presented below is my original idea, which is considerably simpler than the complex-analytic method in Hardy's book.

When $\alpha/\beta$ is rational, there are only finitely many coprime pairs $(p,q)$ satisfying (8), so the method above can only give us $S_{\alpha,\beta}(x)=O(x)$. In this section, we prove that no further improvements can be made.

Since $S_{\alpha,\beta}(x)=S_{\alpha\lambda,\beta\lambda}(\lambda x)$ for all $\lambda>0$, we assume without loss of generality that $\alpha$ and $\beta$ are coprime integers.

Write $\lfloor x/\alpha\rfloor=r\beta+s$ for some $0\le s<\beta$, so it follows from (7) and the fact that $\rho(x+1)=\rho(x)$,

$$
\begin{aligned}
S_{\alpha,\beta}(x)
&=\sum_{m=0}^{r\beta-1}\rho\left(x-\alpha m\over\beta\right)+O(1) \\
&=\sum_{\mu=0}^{r-1}\sum_{\nu=0}^{\beta-1}\rho\left(\frac x\beta-{\alpha(\mu\beta+\nu)\over\beta}\right)+O(1) \\
&=\sum_{\mu=0}^{r-1}\sum_{\nu=0}^{\beta-1}\rho\left(\frac x\beta-\alpha\mu-{\alpha\nu\over\beta}\right)+O(1) \\
&=r\sum_{\nu=0}^{\beta-1}\rho\left(\frac x\beta-{\alpha\nu\over\beta}\right)+O(1).
\end{aligned}
$$

Since $\nu\mapsto-\alpha\nu$ permutes $\mathbb Z/\beta\mathbb Z$, we can rewrite the remaining sum into

$$
\begin{aligned}
\sum_{\nu=0}^{\beta-1}\rho\left(\frac x\beta+{\alpha\nu\over\beta}\right)
&=\sum_{\nu=0}^{\beta-1}\rho\left(\frac x\beta+\frac\nu\beta\right) \\
&=\sum_{\nu=0}^{\beta-1}\left(\frac x\beta+\frac\nu\beta-\frac12\right)-\sum_{\nu=0}^{\beta-1}\left\lfloor\frac x\beta+\frac\nu\beta\right\rfloor \\
&=x-\frac\beta2+\frac1\beta\frac\beta2(\beta-1)-\sum_{\nu=0}^{\beta-1}\left\lfloor\frac x\beta+\frac\nu\beta\right\rfloor \\
&=x-\frac12-\sum_{\nu=0}^{\beta-1}\left\lfloor\frac x\beta+\frac\nu\beta\right\rfloor=x-\lfloor x\rfloor-\frac12,
\end{aligned}
$$

where the last equality invokes **Hermite's identity** for floor function.

Since $r={x\over\alpha\beta}+O(1)$, we conclude that

$$
S_{\alpha,\beta}(x)={x\over\alpha\beta}\left(x-\lfloor x\rfloor-\frac12\right)+O(1).\tag{12}
$$

Because $x-\lfloor x\rfloor-\frac12$ oscillates between $-\frac12$ and $\frac12$ as $x\to+\infty$, plugging (12) into (6) effectively finishes the proof of (3) and (4).

## Conclusion

In this article, we performed a systematic study of the error $N_{\alpha,\beta}(x)-P(x)$. By invoking the theory of continued fractions, we proved that the error is of order $o(x)$ when $\alpha/\beta$ is irrational. Subsequently, we gave an elementary proof that the error is oscillating with order of magnitude $x$ when $\alpha/\beta$ is rational.

[^1]: Hardy, G. H. (1940). *Ramanujan: Twelve lectures on subjects suggested by his life and work.* Cambridge University Press.
