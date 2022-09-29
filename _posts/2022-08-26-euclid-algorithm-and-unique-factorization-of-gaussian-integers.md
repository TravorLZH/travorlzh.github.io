---
layout: post
title:  "Euclid's Algorithm and Unique Factorization of Gaussian Integers"
date:   2022-08-26
des:    We prove unique factorization theorem for $\mathbb Z[i]$ using Euclid's algorithm
tags:   number-theory
---
In elementary number theory, Euclid's algorithm is often applied to calculate the greatest common divisor of two integers. In this article, we first prove the unique factorization theorem (UFT) for $\mathbb Z$ using Euclid's algorithm. Then, we develop the Euclid's algorithm for Gaussian integers $\mathbb Z[i]$ and show that Gaussian integers can also be factorized uniquely.

## Euclid's algorithm for $\mathbb Z$

Euclid's algorithm relies on the following fact for integers:

**Division algorithm:** _Let $a,b\in\mathbb Z$ then there exists $q\in\mathbb Z$ such that $0\le a-bq<b$._

As a result, we can construct integer sequences $q_1,q_2,\dots,q_n$ and $b>r_1>r_2>\dots >r_n\ge1$ such that

$$
\begin{aligned}
a&=q_1b+r_1, \\
b&=q_2r_1+r_2, \\
r_1&=q_3r_2+r_3, \\
r_2&=q_4r_3+r_4, \\
&\vdots \\
r_{n-1}&=q_nr_n.
\end{aligned}
$$

Since the common divisors of $a$ and $b$ are also the comon divisors of $a$ and $a\pm b$, we have

$$
\gcd(a,b)=\gcd(r_1,b)=\gcd(r_1,r_2)=\gcd(r_2,r_3)=\dots=\gcd(r_{n-1},r_n),
$$

so it follows from the definition of $r_{n-1}$ that $r_n=\gcd(a,b)$.

Having derived Euclid's algorithm for $\mathbb Z$, let's see how we can deduce from it the UFT of $\mathbb Z$.

## Existence of prime factorization in $\mathbb Z$

Before proving every integer greater than one can be expressed as a product of primes uniquely, we first need to ensure that it is <u>actually expressible</u> by the product of primes.

Let $n>1$ denote an integer and $\mathcal D_n$ denote the set of its divisors greater than one. Because $n=1\cdot n$, we know that $\mathcal D_n$ must be nonempty. Combining this with the fact that $\mathcal D_n\subset\mathbb Z_{>0}$, we conclude from **well-ordering principle** that $\mathcal D_n$ has a minimal element greater than one. It is certain that this minimal element is a prime, or otherwise the transitivity of divisibility allows us to find an even smaller element in $\mathcal D_n$. Thus, we see that _every integer greater than one has a prime divisor._

Now, let $\mathcal N$ denote the set of integers greater than one that are not the product of primes. If $\mathcal N$ is not empty, then well-ordering principle guarantees the existence of the minimal element $m\in\mathcal N$. Since $m>1$, we see that there exists a prime $p\ge2$ that divides $m$, so it follows from $m/p<m$ that $m/p$ is a product of primes, reaching contradiction. Consequently, _every integer greater than one is a product of primes._

Having proven the existence of factorization, we now proceed to prove its uniqueness.

## Euclid's lemma and UFT in $\mathbb Z$

In this section, we show that UFT can be deduced from the following fact:

**Euclid's lemma:** _If $\gcd(a,b)=1$ and $b\vert ac$ then $b\vert c$_.

When $b$ is a prime number, Euclid's lemma becomes the following:

_For prime $p$, if $p\vert ab$ and $\gcd(a,b)=1$ then one of $p\vert a$ and $p\vert c$ must be true._

From this statement, we prove UFT:

_Proof of UFT._ Let's suppose we can write $n>1$ in the following two ways

$$
n=p_1^{a_1}p_2^{a_2}\dots p_r^{a_r}=q_1^{b_1}q_2^{b_2}\dots q_s^{b_s}.
$$

where $p_1<p_2<\dots<p_r$ and $q_1<q_2<\dots<q_s$ denote primes and $a_i,b_i\in\mathbb Z_{>0}$. By Euclid's lemma, we see that for any $1\le i\le r$ there exists a unique $1\le j\le s$ such that $p_i=q_j$, so we must have $r=s$. In addition, we must have $a_i=b_j$ or otherwise $n/p_i^{\min(a_i,b_j)}$ would be divisible by $p_i$, reaching a contradiction. $\square$

_Proof of Euclid's lemma._ By definition we know that $b\vert(ac,bc)$. Multiplying both side of the Euclid algorithm by $c$ we have

$$
\begin{aligned}
ac&=q_1bc+r_1c, \\
bc&=q_2r_1c+r_2c, \\
r_1c&=q_3r_2c+r_3c, \\
r_2c&=q_4r_3+r_4c, \\
&\vdots \\
r_{n-1}c&=q_nr_nc,
\end{aligned}
$$

This indicates that $(ac,bc)=r_nc=\gcd(a,b)c=c$. $\square$

Up to now, we have merely justified unique factorization for integer greater than one. However, by symmetry we can generalize it to negative integers. For convenience, let $\pm1$ be called **units** of $\mathbb Z$ and $n\in\mathbb Z$ and let $n,-n\in\mathbb Z$ be called **associates** of each other. Then, we can extend the definition of primes to $\mathbb Z$:

**Prime numbers in $\mathbb Z$:** _An integer $p$ is a prime if and only if its only divisible by units and its associates._

With these considered, we can state the UFT for $\mathbb Z$ in the following way:

**UFT for $\mathbb Z$:** _Every number in $\mathbb Z$, not zero or a unit, can be expressed as a product of primes, and the representation is unique apart from the order of primes, presence of units in factorizations, and ambiguity of associate primes._

Under this definition, $(-2)\times3$, $(-1)\times(-2)\times(-3)$, and $2\times(-3)$ are considered the same factorization of 6.

## Remarks on Euclid's algorithm

From the previous sections, we derive the UFT for $\mathbb Z$ in the following order:

1. Division algorithm
2. Euclid's algorithm
3. Euclid's lemma
4. Unique factorization theorem

In the rest of this article, we see that we can replicate this process in the justification of UFT for $\mathbb Z[i]$, and the key to this replication is Euclid's algorithm.

For convenience, we derive another consequence of Euclid's algorithm useful for latter investigation:

**Bezout's lemma:** Let $a,b$ be two integers, then $ax+by=d$ has integer solutions if and only if $d$ is a divisible by $\gcd(a,b)$.

_Proof._ By definition, we see that whenever $x,y\in\mathbb Z$ the number $ax+by$ must be an integer multiple of $\gcd(a,b)$. Therefore, it suffices to show that $ax+by=\gcd(a,b)$ always has integer solutions.

Let $q_1,q_2,\dots,q_n$ and $r_1,r_2,\dots,r_n$ be defined as in Euclid's algorithm. Then we see that we can express $r_n$ in terms of $a$ and $b$ using iterations:

Suppose $r_n=P_kr_{n-k-1}+Q_kr_{n-k}$, then it follows from the definition of $r_n$ that $P_0=1$ and $Q_0=q_n-1$. For $k\le n-3$, it follows from $r_{n-k}=r_{n-k-2}-q_{n-k}r_{n-k-1}$ that $P_k$ and $Q_k$ obeys the recursive relation:

$$
\begin{cases}
P_{k+1} &=Q_k, \\
Q_{k+1} &=P_k-Q_kq_{n-k}.
\end{cases}
$$

This indicates that $P_m,Q_m\in\mathbb Z$ for all $m\le n-2$. When $m=n-2$ we have

$$
\begin{aligned}
r_n
&=P_{n-2}r_1+Q_{n-2}r_2=(P_{n-2}-Q_{n-2}q_2)r_1+Q_{n-2}b \\
&=(P_{n-2}-Q_{n-2}q_2)a+[Q_{n-2}+q_1(P_{n-2}-Q_{n-2}q_2)]b
\end{aligned}
$$

Setting $x=P_{n-2}-Q_{n-2}q_2$ and $y=Q_{n-2}(1-q_1q_2)+q_1P_{n-2}$ completes the proof. $\square$

## Basics of $\mathbb Z[i]$

From the definition $\mathbb Z[i]=\\{a+bi:a,b\in\mathbb Z\\}$, it is easily verified that the properties of divisibility $\mathbb Z$ can be easily generalized to $\mathbb Z[i]$. Moreover, because the deduction process of UFT from Euclid's lemma in the $\mathbb Z$ situation does not make use of properties that are specific to $\mathbb Z$, we only need to prove Euclid's lemma for $\mathbb Z[i]$, which relies on the corresponding Euclid's algorithm.

### Norms, units, and primes in $\mathbb Z[i]$

To convenience our investigation, we let $N\alpha=\lvert\alpha\rvert^2$ be the _norm_ of $\alpha\in\mathbb Z[i]$. If $\alpha=a+bi$ for some $a,b\in\mathbb Z$ then we have

$$
N\alpha=\overline\alpha\cdot\alpha=N(a+bi)=a^2+b^2
$$

Moreover, because

$$
\begin{aligned}
N(a+bi)N(c+di)
&=
\begin{vmatrix}
a & b \\ -b & a
\end{vmatrix}\cdot
\begin{vmatrix}
c & d \\ -d & c
\end{vmatrix} \\
&=
\begin{vmatrix}
ac-bd & ad+bc \\
-(ad+bc) & ac-bd
\end{vmatrix} \\
&=N[(a+bi)(c+di)],
\end{aligned}
$$

we see that _if $\alpha,\beta\in\mathbb Z[i]$ and $\alpha\vert\beta$, then $N\alpha\vert N\beta$._

We can also define units and associates for $\mathbb Z[i]$ using norms:

**Units in $\mathbb Z[i]$:** _$\alpha$ is a unit of $\mathbb Z[i]$ if and only if $N\alpha=1$._

**Associates in $\mathbb Z[i]$:** _$\alpha$ and $\beta$ are associates in $\mathbb Z[i]$ if and only if there exists a unit $\epsilon$ such that $\alpha=\epsilon\beta$._

Hence, the only units of $\mathbb Z[i]$ are $\pm1,\pm i$. With units well defined, we can introduce prime numbers in $\mathbb Z[i]$:

**Gaussian primes:** _A number in $\mathbb Z[i]$ is said to be prime if and only if it is not a unit and is only divisible by units and the associates of itself._

### Division algorithm

In the situation of $\mathbb Z$, we can directly compare the size of integers, but in $\mathbb Z[i]$ we can only compare size of the norms. Thus, we should phrase the division algorithm in the following way:

**Division algorithm for $\mathbb Z[i]$:** _For any $\alpha,\beta\in\mathbb Z[i]$ there exists $\gamma\in\mathbb Z[i]$ such that $N(\alpha-\gamma\beta)<N\beta$._

_Proof._ Using the properties of complex conjugates, we have $\gamma_0=\alpha/\beta=\alpha\overline\beta/N\beta$.

If the real parts and imaginary parts of $\alpha\overline\beta$ are divisible by $N\beta$ then $\gamma_0\in\mathbb Z[i]$, and choosing $\gamma=\gamma_0$ completes the proof.

If otherwise, then $\gamma_0$ must lie in a unit square formed by $\gamma_1,\gamma_2,\gamma_3,\gamma_4\in\mathbb Z[i]$. Because the distance of any points inside a square to the closest square vertex is always no more than half the diagonal, we conclude that there exist a $\gamma\in\\{\gamma_1,\gamma_2,\gamma_3,\gamma_4\\}$ such that $\lvert\gamma_0-\gamma\rvert\le1/\sqrt2$. This indicates that

$$
N(\alpha-\beta\gamma)\le\frac12N(\beta),
$$

which is a inequality stronger than the original statement. $\square$

Similarly, the greatest common divisor of Gaussian integers also needs to be redefined using norms:

**Greatest common divisor in $\mathbb Z[i]$:** _Let $\alpha,\beta\in\mathbb Z[i]$. If $\gamma$ is said to be a greatest common divisor of $\alpha$ and $\beta$ if it is the common divisor of $\alpha$ and $\beta$ with the greatest norm._

The existence of such divisor can be justified by the well-ordering principle. From this definition, we observe easily that _the greatest common divisor is unique apart from the ambiguities of associates._ Moreover, $\alpha$ and $\beta$ are said to be **coprime in $\mathbb Z[i]$** if and only if their only common divisors are units.

Finally, we are ready to deduce Euclid's algorithm for $\mathbb Z[i]$.

## Euclid's algorithm for $\mathbb Z[i]$

From division algorith, we see that for $\alpha,\beta\in\mathbb Z[i]$ we can construct $\mathbb Z[i]$ sequences $\tau_1,\tau_2,\dots,\tau_n$ and $\gamma_1,\gamma_2,\dots,\gamma_n$ satisfying

$$
N\beta>N\gamma_1>N\gamma_2>\dots>N\gamma_n\ge1
$$

and

$$
\begin{aligned}
\alpha&=\tau_1\beta+\gamma_1, \\
\beta&=\tau_2\gamma_1+\gamma_2, \\
\gamma_1&=\tau_3\gamma_2+\gamma_3, \\
\gamma_2&=\tau_4\gamma_3+\gamma_4, \\
&\vdots \\
\gamma_{n-1}&=\tau_n\gamma_n.
\end{aligned}
$$

Since the common divisors of $\alpha$ and $\beta$ are also the common divisors of $\alpha\pm\beta$, we conclude from the definition of $\gamma_{n-1}$ that $\gamma_n$ is a greatest common divisor of $\alpha$ and $\beta$.

With Euclid's algorithm ready, we can finally proceed to prove the UFT for $\mathbb Z[i]$.

## Euclid's lemma and UFT for $\mathbb Z[i]$

For an arbitrary $\alpha\in\mathbb Z[i]$, let $\mathcal D_\alpha$ denote the set of divisors of $\alpha$ apart from units. Because $\alpha\in\mathcal D_\alpha$, well-ordering principle guarantees the existence of $\gamma\in\mathcal D_\alpha$ having the smallest $N\gamma>1$. Using a proof-by-contradiction similar to the situation in $\mathbb Z$, we see that _every member of $\mathbb Z[i]$ apart from zero and units is divisible by a prime in $\mathbb Z[i]$._ Applying a similar well-ordering-principle argument as before, we also see that _every member of $\mathbb Z[i]$, not zero or a unit, is a product of Gaussian primes and units._

To show that the prime factorization is unique, we now proceed to prove the variant of Euclid's lemma for $\mathbb Z[i]$:

**Euclid's lemma for $\mathbb Z[i]$:** If $\alpha,\beta\in\mathbb Z[i]$ are coprime and $\alpha\vert\beta\gamma$, then $\alpha\vert\gamma$.

_Proof._ By definition, we know that $\alpha$ divides every greatest common divisor of $\alpha\gamma$ and $\beta\gamma$. Multiplying both side of Euclid's algorithm by $\gamma$ we see that $\gamma$ is one of such greatest common divisor, thereby completing the proof.

Using the arguments similar to those for $\mathbb Z$, we obtain the UFT:

**UFT for $\mathbb Z[i]$:** _Every number in $\mathbb Z[i]$, not zero or a unit, can be expressed as a product of primes, and the representation is unique apart from the order of primes, presence of units in factorizations, and ambiguity of associate primes._

### Application to the classification of Gaussian primes

Because the norm function $N(\cdot)$ is strictly multiplicative, we see that _every Gaussian integer whose norm is a prime is also a prime_. The converse is not true as the norm of any primes of $\mathbb Z$ is a square.

Viewing $\mathbb Z[i]$ from the complex plane, one easily finds it confusing to determine whether the Gaussian integers are prime or not. Luckily, there is a subtle result connecting primes in $\mathbb Z[i]$ and primes in $\mathbb Z$:

_A Gaussian prime is a divisor of exactly one positive prime._

_Proof._ Denote the Gaussian prime by $\pi$ and $\mathcal M_\pi$ the set of integers divisible by $\pi$. Then by definition we have $1\not\in\mathcal M_\pi$ and $N\pi\in\mathcal M_\pi$, and the well-ordering principle ensures that $\pi$ must divide at least one prime.

If $\pi$ divides two different positive primes $p,p'$. Then it follows from Bezout's lemma that there exists $x,y\in\mathbb Z$ such that $px+qy=1$. This indicates that $\pi$ must be a unit, which is a contradiction. $\square$

As a result of the theorem, we observe that every Gaussian primes can be identified by factorizing positive primes in $\mathbb Z[i]$:

- $p=2$: Since $2=(1+i)(1-i)$, we obtain $1+i$, $-1+i$, $1-i$, and $-1-i$.
- $p>2$ and not expressible as sum of two squares: we see that $p$ itself is a Gaussian prime.
- $p>2$ and expressible as sum of two squares. By UFT we can find unique $a,b\in\mathbb Z_{>0}$ such that $p=a^2+b^2$, which gives $\pm a\pm bi$ and $\pm b\pm ai$.

## Conclusion

In this article, we begin from the elementary ground of $\mathbb Z$ and explores the theoretical significance of Euclid's algorithm in the deduction of UFT in $\mathbb Z$. Finally, using the language of norms, we translate these arguments to give a proof of UFT in $\mathbb Z[i]$, and apply it to classify all types of Gaussian primes.

The topic of the current article is purely algebraic, but we will see in future articles that these algebraic properties, combined with analytic methods, would produce remarkable results in number theory.