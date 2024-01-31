---
layout: post
title:  "On the factorization of polynomials"
date:   2024-01-30
des:    We derive Gauss's lemma and Eisenstein's criterion. Then we use them to prove that every cyclotomic polynomial is irreducible over $\mathbb Q[x]$.
tags:   algebra number-theory
---

Let polynomials $f,g$ be represented as

$$
f(x)=a_mx^m+a_{m-1}x^{m-1}+\dots+a_0,\tag1
$$

$$
g(x)=b_nx^n+b_{n-1}x^{n-1}+\dots+a_0.\tag2
$$

Define $h=fg$ by

$$
h(x)=c_{m+n}x^{m+n}+c_{m+n-1}x^{m+n-1}+\dots+c_0.\tag3
$$

Comparing coefficients, we deduce that for $0\le k\le m+n$, there is

$$
c_k=\sum_{\substack{0\le r\le m\\0\le s\le n\\ r+s=k}}a_r b_s.\tag4
$$

In particular, $c_0=a_0b_0$ and $c_{m+n}=a_mb_n$. In this article, we will be using these formulae to deduce a variety of results concerning polynomial factorizations.

## Reducibility of polynomials $\mathbb Z[x]$

In general rings $R$, a polynomial $h\in R[x]$ is said to be **irreducible** if it cannot be expressed as a product of two other polynomials in $R[x]$, each having a degree strictly less than that of $h$. By invoking the well-ordering property of natural numbers, we immediately deduce that _every polynomial in $R[x]$ is a product of irreducible factors in $R[x]$._

To study the reducibility of polynomials in $\mathbb Z[x]$, we focus on **primitive polynomials**, whose coefficients do not possess a common divisor. Primitive polynomials are useful in the study of reducibility because the primitiveness is preserved under multiplication:

Let $f$ and $g$ in (1) and (2) be primitive. Suppose there is a prime $p$ dividing all the $c_k$'s. Because $f$ and $g$ are primitive, there exists unique integers $0\le\mu\le m$ and $0\le\nu\le n$ satisfying

$$
p\vert \gcd(a_0,a_1,\dots,a_{\mu-1}),\quad p\nmid a_\mu,
$$

$$
p\vert \gcd(b_0,b_1,\dots,b_{\nu-1}),\quad p\nmid b_\nu.
$$

Plugging this result into (4), we have

$$
c_k\equiv\sum_{\substack{\mu\le r\le m\\ \nu\le s\le n\\r+s=k}}a_rb_s\pmod p,
$$

Setting $k=\mu+\nu$, this becomes

$$
c_{\mu+\nu}\equiv a_\mu b_\nu\not\equiv 0\pmod p,
$$

which is a direct contradiction to our assumption that $p\vert c_{\mu+\nu}$. Therefore, $h$ must be primitive. In general, we have

**Lemma 1:** *Let $f$, $g$, and $h$ be defined as in (1), (2), and (3). Then*

$$
\gcd(a_0,a_1,\dots,a_m)\gcd(b_0,b_1,\dots,b_n)=\gcd(c_0,c_1,\dots,c_{m+n}).\tag5
$$

From this property, we find that for polynomials with integral coefficients, their reducibility in $\mathbb Z[x]$ is equivalent to the reducibility in $\mathbb Q[x]$:

**Lemma 2:** *A polynomial in $\mathbb Z[x]$ is reducible over $\mathbb Z[x]$ if and only if it is reducible over $\mathbb Q[x]$.*

*Proof.* Reducibility in $\mathbb Z[x]$ trivially implies reducibility in $\mathbb Z[x]$. For the converse, without loss of generality, assume $H\in\mathbb Z[x]$ is primitive and is factored as $H=FG$ for some $F,G\in\mathbb Q[x]$. Choose integers $M,N$ such that $f(x)=M\cdot F(x),g=M\cdot G(x)\in\mathbb Z[x]$ and let $h(x)=MN\cdot H(x)$. Using the notations of (1), (2), and (3), it follows from Lemma 1 that

$$
MN=\gcd(a_0,a_1,\dots,a_m)\gcd(b_0,b_1,\dots,b_n).
$$

This indicates that when

$$
f_1(x)={M\over \gcd(a_0,a_1,\dots,a_m)}\cdot F(x),\tag6
$$

$$
g_1(x)={N\over \gcd(b_0,b_1,\dots,b_n)}\cdot G(x),\tag7
$$

we have $f_1,g_1\in\mathbb Z[x]$ and $H=f_1g_1$, so $H$ is reducible over $\mathbb Z[x]$ as well.

From the arguments in Lemma 2, we can also relate the divisibility of monic polynomials in $\mathbb Q[x]$ and $\mathbb Z[x]$.

**Lemma 3:** *For monic $H\in\mathbb Z[x]$, if $H=FG$ for some monic $F,G\in\mathbb Q[x]$, then $F,G\in\mathbb Z[x]$.*

*Proof.* Using the notations in the proof of Lemma 2, because the leading coefficient of $H$ is the product of leading coefficients of $f_1$ and $g_2$, we must have $M=\gcd(a_0,a_1,\dots,a_m)$ and $N=\gcd(b_0,b_1,\dots,b_n)$ in (6) and (7), so $f_1=F$ and $g_1=G$, which indicates that $F,G\in\mathbb Z[x]$.

These three results are all known as **Gauss's lemma**. In the rest of the article, we will use these results to produce a wide class of irreducible polynomials.

## Eisenstein's criterion

If $h\in\mathbb Z[x]$ and $p$ is any prime satisfying $p\vert c_k$ for $0\le k<m+n$ and $p\nmid c_{m+n}$. Then $p\nmid c_0=a_0b_0$, so by Euclid's lemma, we assume without loss of generality that $p\vert a_0$. This means there exists some $1\le\mu\le m$ satisfying

$$
p\vert\gcd(a_0,a_1,\dots,a_{\mu-1}),\quad p\nmid a_\mu,
$$

By (4), we have $c_\mu\equiv a_\mu b_0\pmod p$. Because $\mu<m+n$, we must have $p\vert b_0$, so $p^2\vert c_0$. The contrapositive of this result becomes a sufficient condition to ensure the irreducible for a given polynomial with integral coefficients:

**Theorem 1 (Eisenstein's criterion):** *For $f(x)=a_mx^m+a_{m-1}x^{m-1}+\dots+a_0\in\mathbb Z[x]$, if there exists some prime $p$ satisfying*

$$
p\vert\gcd(a_0,a_1,\dots,a_{m-1}),\quad p\nmid a_m,\quad p^2\nmid a_0,
$$

*then $f$ is irreducible over $\mathbb Z[x]$.*

## Irreducibility of cyclotomic polynomials

In this section, we prove that every cyclotomic polynomial $\Phi_n(x)$ is irreducible over $\mathbb Z[x]$. When $n=p$ is a prime, observe that

$$
\Phi_p(x)=x^{p-1}+x^{p-2}+\dots+1={x^p-1\over x-1},
$$

so we have

$$
\Phi_p(x+1)={(x+1)^p-1\over x}=x^{p-1}+\sum_{m=1}^{p-2}\binom p{m+1}x^m+p.
$$

Thus, it follows from Eisenstein's criterion that $\Phi_p(x+1)$, hence $\Phi_p(x)$, is irreducible over $\mathbb Z[x]$.

To prove the irreducibility of $\Phi_n(x)$ for general $n$, we need to invoke some algebraic number theory

### Algebraic numbers and minimal polynomials

In general, a complex number $\alpha$ is **algebraic** if and only if it is a zero of some polynomial in $\mathbb Q[x]$. In addition, each algebraic number is characterized by a unique polynomial in $\mathbb Q[x]$:

**Theorem 2:** *For each algebraic number $\alpha$, there exists a unique monic polynomial $f\in\mathbb Q[x]$ satisfying*

1. $f(\alpha)=0$.
2. $f$ is irreducible over $\mathbb Q[x]$.
3. For each $g\in\mathbb Q[x]$ satisfying $g(\alpha)=0$, $f$ divides $g$.

*Such $f$ is called the **minimal polynomial** of $\alpha$.*

*Proof.* By definition, the set

$$
S_n=\lbrace f\in\mathbb Q[x]:f\text{ monic}\wedge \deg f=n\wedge f(\alpha)=0\rbrace
$$

cannot be empty for all $n\in\mathbb N$. Let $d$ be the smallest integer for which $S_d\ne\varnothing$.

Let $f\in S_d$. Then for each $g\in\mathbb Q[x]$, there exists $q,r\in\mathbb Q[x]$ satisfying $g(x)=q(x)f(x)+r(x)$ and $0\le\deg r<d$, so we have $r(\alpha)=0$. If $d_1=\deg r>0$, then $S_{d_1}\ne\varnothing$ will cause a contradiction, so we must have $r\equiv0$. Hence, $f$ divides $g$.

If $f=gh$ for some nonconstant $g,h\in\mathbb Q[x]$, then we must have $g(\alpha)=0$ or $h(\alpha)=0$. For definiteness, assume $g(\alpha)=0$. Then $S_{d_2}\ne\varnothing$ for $d_2=\deg g<d$, which also causes a contradiction. Hence, we established the existence of a minimal polynomial for $\alpha$.

For uniqueness, if $f,g\in S_d$ are distinct, then $(f-g)(\alpha)=0$ and $0<d_3=\deg(f-g)<d$, so $f-g\in S_{d_3}$, which is yet another contradiction.

We will prove the irreducibility of $\Phi_n(x)$ by showing that it is the minimal polynomial of each $n$'th primitive root of unity.

### Minimality of cyclotomic polynomials

Let $\omega$ be a primitive $n$'th root of unity and $f\in\mathbb Q[x]$ be its minimal polynomial. Then clearly $f(x)\vert \Phi_n(x)$, and $f(x)=\Phi_n(x)$ will follows from

**Lemma 4:** If $\gcd(m,n)=1$, then $f(\omega^m)=0$.

*Proof.* Because $\omega^m$ is also a primitive root of unity and $m$ is a product of primes that do not divide $n$, we reduce our consideration to the case when $m=p$ is a prime not dividing $n$. Because $\Phi_n(x)$ is monic, it follows from Theorem 2 that is some monic $g\in\mathbb Q[x]$ satisfying

$$
\Phi_n(x)=f(x)g(x).\tag8
$$

By Lemma 3, we find that $f,g\in\mathbb Z[x]$. This allows us to play around $f,g$ using congruences. If $f(\omega^p)=0$, it follows from $\Phi_m(\omega^p)=0$ and (8) that $g(\omega^p)=0$. This indicates the existence of some monic $h\in\mathbb Q[x]$ for which

$$
g(x^p)=f(x)h(x),\tag9
$$

and $h$, by Lemma 3, is also an element belonging to $\mathbb Z[x]$. When $g(x)=\sum_ju_jx^j$, it follows from $(a+b)^p\equiv a^p+b^p\pmod p$ and Fermat's little theorem that

$$
g(x^p)\equiv\sum_j(u_jx^j)^p\equiv\left(\sum_ju_jx^j\right)^p=[g(x)]^p\pmod{p\mathbb Z[x]},
$$

This means when interpreting in $\mathbb F_p[x]$, there is $g(x^p)=[g(x)]^p$. Let $f_1\in\mathbb Z[x]$ be an irreducible divisor of $f$ in the sense of $\mathbb F_p[x]$. Then it follows from (9) that $f_1$ divides $[g(x)]^p$, hence dividing $g$ in the sense of $\mathbb F_p[x]$, so by (8), $\Phi_n$ is divisible by $(f_1)^2$ in the sense of $\mathbb F_p[x]$.

Because $x^n-1=\Phi_n(x)\phi(x)$ for some $\phi\in\mathbb Z[x]$, we conclude that $(f_1)^2$ divides $x^n-1$ in the sense of $\mathbb F_p[x]$. This means that $\varphi(x)=x^n-1$ has a repeated root in the algebraic closure of $\mathbb F_p$, so there is some $\alpha\in\overline{\mathbb F_p}$ such that $\varphi'(\alpha)=n\alpha^{n-1}=0$, but because $\alpha\ne0$ and $p\nmid n$, we arrive at a contradiction. This indicates that $g(\omega^p)\ne0$, so $f(\omega^p)=0$.

## Conclusion

In this article, we began our investigation from the arithmetical property of the coefficients of products of two polynomials. By studying the greatest common divisors, we derived Gauss's lemma and Eisenstein's criterion. Subsequently, we used these results to prove that every cyclotomic polynomial is irreducible over $\mathbb Z[x]$.