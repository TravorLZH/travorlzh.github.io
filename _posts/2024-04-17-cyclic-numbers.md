---
layout: post
title:  "On $n$ for which every group of order $n$ is cyclic"
date:   2024-04-17
des:    It is known that every group of prime order is cyclic. In this article, we present an arithmetical criterion on $n$ to determine whether every group of order $n$ is cyclic.
tags:   algebra number-theory
---

Lagrange's theorem in group theory tells us every group of prime order is cyclic. In general, a number $n$ is called **cyclic** if every group of order $n$ is cyclic. In this article, we show that

**Theorem:** _$n$ is cyclic if and only if $n$ is coprime to $\varphi(n)$, where $\varphi(n)$ is Euler's totient function._

The method used in this article is based on the 1992 paper of Dieter Jungnickel[^1].

## Proof of necessity

Write $n=p^am$ for $a\ge1$, some prime $p$, and $m$ coprime to $p$, so $(C_p)^a\times C_m$ is a group of order $n$ that is not cyclic when $a\ge2$. Notice that $\varphi(n)=p^{a-1}(p-1)\varphi(m)$, so $\gcd(n,\varphi(n))>1$ if $a\ge2$. Consequently, $n$ is assumed to be squarefree throughout the rest of this article.

**Lemma 1:** _If $p,q$ are primes such that $p$ divides $q-1$, then there exists a non-abelian group of order $pq$._

_Proof._ By Sylow's third theorem, a group $G$ of order $pq$ may possess multiple Sylow $p$-subgroups, which, by Sylow's second theorem, implies that $G$ may contain a non-normal subgroup, so $G$ is non-abelian. We can explicitly construct such a group via a semidirect product:

$$
G=C_q\rtimes_\theta C_p,
$$

If $C_q=\langle x\rangle$ and $C_p=\langle y\rangle$, then $\theta(y)$ corresponds to an element in $\operatorname{Aut}(C_q)\cong C_{q-1}$ of order $p$. $G$ can be presented as follows:

$$
G=\langle x,y\vert x^q=y^p=e,yx=x^ry\rangle,
$$

where $r$ is some integer such that $r\not\equiv1\pmod q$ and $r^p\equiv1\pmod q$.

_Proof of necessity._ If $\gcd(n,\varphi(n))>1$, then there are distinct primes $p,q$ such that $n=pqm$ and $p$ divides $q-1$, so by Lemma 1, there exists a non-abelian group $H$ of order $pq$, so $G=H\times C_m$ is a non-cyclic group of order $n$.

## Proof of sufficiency

Suppose the theorem is false. Then there exists a smallest positive integer $n$ such that $\gcd(n,\varphi(n))=1$ and some group $G$ of order $n$ that is not cyclic. However, we will show that such $G$ has contradictory properties. It should be noted that the multiplicative nature of $\gcd$ indicates that when $m$ divides $n$, $\gcd(m,\varphi(m))=1$, so combined with our assumption on $n$, there is

**Lemma 2:** _Every proper divisor $m$ of $n$ is a cyclic number._

**Lemma 3:** _The center $Z(G)$ of $G$ is trivial._

_Proof._ Suppose otherwise. Then the order of the quotient group $G/Z(G)$ is a proper divisor of $n$, so it follows from Lemma 2 that $G/Z(G)$ is cyclic. Let $gZ(G)$ be a generator of $G/Z(G)$, then every element $x$ of $G$ can be expressed as $x=g^kz$ for some integer $k$ and some $z\in\mathbb Z(G)$. This means that if $x'=g^{k'}z'\in G$, there is

$$
xx'=g^kzg^{k'}z'=g^{k+k'}zz'=g^{k'+k}z'z=g^{k'}z'g^kz=x'x,
$$

so $G$ is abelian. Because $n=p_1p_2\cdots p_k$ for distinct primes $p_1,p_2,\dots,p_k$, the structure theorem for finite abelian group indicates that

$$
G\cong C_{p_1}\times C_{p_2}\times\cdots\times C_{p_k}\cong C_n,
$$

so $G$ is cyclic, which leads to a contradiction.

Lemma 3 tells us that when $x\in G-\lbrace e\rbrace$, its centralizer $C_G(x)$ has to be a proper subgroup of $G$. Such subgroup must also be maximal (i.e. cannot be contained in any strictly larger proper subgroup):

**Lemma 4:** _A nontrivial subgroup $U\le G$ is maximal if and only if $U=C_G(x)$ for some $x\in G-\lbrace e\rbrace$._

_Proof._ Let $U$ be any proper subgroup containing some $x\in G-\lbrace e\rbrace$. Then by Lemma 2, $U$ is cyclic and abelian, so $U\le C_G(x)$ for any proper subgroup $U$ containing $x$, which means $U$ is maximal if and only if $U=C_G(x)$.

Lemma 4 indicates any maximal subgroup of $G$ containing some $x\in G-\lbrace e\rbrace$ must be equal to $C_G(x)$, so

**Lemma 5:** _Let $U,V\le G$ be maximal. Then either $U=V$ or $U\cap V=\lbrace e\rbrace$._

Now, we study how maximal subgroups behave under conjugation.

**Lemma 6:** _If $U\le G$ is maximal, then it is equal to its normalizer $N_G(U)$._

_Proof._ Let $\vert U\vert=m$, so Lemma 2 tells us that $U$ is cyclic, so its automorphism group $\operatorname{Aut}(U)$ is of order $\varphi(m)$. If $g\in N_G(U)$, then $f_g:x\mapsto gxg^{-1}$ is an automorphism of $U$. Since $g^n=e$, an application of Lagrange's theorem on $\operatorname{Aut}(U)$ indicates that the order of $f_g$ divides $\gcd(n,\varphi(m))=1$, so $f_g$ is an identity automorphism and $gxg^{-1}=x$ for some $x\in U-\lbrace e\rbrace$. Hence, $g\in C_G(x)=U$. This means $N_G(U)\subset U$, so $N_G(U)=U$.

Lemma 6, combined with the orbit-stabilizer theorem, suggests that when $U\le G$ is maximal, it has exactly

$$
[G:N_G(U)]={\vert G\vert\over\vert N_G(U)\vert}={n\over\vert U\vert}
$$

conjugate subgroups. Combined with Lemma 5, we conclude that

**Lemma 7:** _If $U\le G$ is maximal, then the conjugates of $U$ contain exactly_

$$
(\vert U\vert-1){n\over\vert U\vert}=n-{n\over\vert U\vert}
$$

_distinct non-identity elements._

_Proof of sufficiency._ Let $U\le G$ be a maximal subgroup, so Lemma 7 and the fact that $\vert U\vert>1$ suggest that we can choose an element $x\in G-\lbrace e\rbrace$ that does not lie inside any conjugates of $U$. Let $V=C_G(x)$, so Lemma 4 and Lemma 5 demonstrate that $V$ is a maximal subgroup each of whose conjugate only intersects trivially with each the conjugate of $U$. As a result, applying Lemma 7 to $V$ indicates that $G$ contains

$$
n-{n\over\vert U\vert}+n-{n\over\vert V\vert}=n\left(2-{1\over\vert U\vert}-{1\over\vert V\vert}\right)
$$

distinct non-identity elements. However, because $\vert U\vert,\vert V\vert\ge2$, we see that the right-hand side $\ge n$, but $G-\lbrace e\rbrace$ only has $n-1$ elements, so we reach a contradiction.

## Conclusion

In this article, we deduce an arithmetical criterion for cyclic numbers. This will enable us to study how cyclic numbers are distributed in positive integers. In the next article, we will prove that as $x\to+\infty$,

$$
\#\lbrace n\le x:\text{every group of order }n\text{ is cyclic}\rbrace\sim{e^{-\gamma}x\over\log\log\log x}.
$$

[^1]: Jungnickel, D. (1992). [On the Uniqueness of the Cyclic Group of Order $n$](https://doi.org/10.1080/00029890.1992.11995889). _The American Mathematical Monthly_, 99(6), 545–547.