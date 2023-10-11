---
layout: post
title:  "Riemann mapping theorem and Dirichlet's principle"
date:   2023-10-10
des:    We give an account of Riemann's original proof of his famous mapping theorem and discuss its connections to Dirichlet's principle of the calculus of variations
tags:   complex-analysis
---

In his 1851 PhD thesis, Riemann introduced the following theorem concerning simply connected regions in $\mathbb C$:

**Riemann mapping theorem:** _For any non-empty simply connected open subset $\Omega\subset\mathbb C$ such that $\Omega\ne\mathbb C$, there exists a analytic $f:\Omega\to\mathbb C$ such that_

1. _$f(\Omega)$ is the open unit disk centered at the origin._
2. _$f$ is one-to-one on $\Omega$._

This indicates that to study the properties of simply connected regions in $\mathbb C$, it is sufficient to investigate $\mathbb C$ itself and the unit disk. In modern textbooks on complex analysis, this result is usually proved via the theory of [normal families][nf].

In this article, we present how Riemann originally investigated this theorem. This would allow us to see the connection of three seemingly separate areas of mathematics: Complex Analysis, Geometry, and Calculus of Variations.

> For simplicity, we assume $\partial\Omega$ to be smooth. The general case can be discussed by making smooth approximation to $\partial\Omega$.

## Bounding the image

The [maximum modulus principle][mmp] indicates that the maximum of $\vert f(z)\vert$ can only be achieved when $z$ lies on the boundary $\partial \Omega$. As a result, we can require

$$
\vert f(z)\vert=1\quad\forall z\in\partial \Omega.
$$

so that the image of $f(\Omega)$ will surely be contained within the unit disk. Now, we can look at the one-to-one property.

## One-to-one mappings in $\mathbb C$

Before constructing the desired $f$, we need to look at some necessary conditions satisfied by $f$. In this section, we prove in particular that _its derivative is nonvanishing throughout $\Omega$._

Suppose $f'(z_0)=0$ for some $z_0\in \Omega$. Then $f(z)-f(z_0)$ has a zero of order $\ge2$. Because the zeros of analytic functions are isolated, we can find some $m>0$ and $r>0$ such that $f'(z)\ne0$ on $0<\vert z-z_0\vert\le r$ and $\vert f(z)-f(z_0)\vert\ge m$ on $\vert z-z_0\vert=r$, so for any complex $\zeta$ satisfying $\vert\zeta\vert<m$, we have $\vert\zeta\vert<\vert f(z)-f(z_0)\vert\ge m$ on $\vert z-z_0\vert=r$. Thus, it follows from [Rouché's theorem][rt] that, the function $f(z)-f(z_0)+\zeta$ has $\ge2$ zeros in $0<\vert z-z_0\vert<r$. Since in this punctured region $f'(z)\ne0$, we conclude that there are distinct points $z_1,z_2\in \Omega$ such that $f(z_1)=f(z_2)=f(z_0)-\zeta$, which contradicts the one-to-one property.

This allows us to deduce the following sufficient condition for Riemann's theorem:

**Lemma 1:** _Riemann's theorem will follow from the existence of a analytic $f:\Omega\to\mathbb C$ satisfying the following:_

1. _There exists a unique $z_0\in \Omega$ such that $f(z_0)=0.$_
2. _$\vert f(z)\vert=1$ on $\partial \Omega$ and $f'(z)\ne0$ in $\Omega$._

_Proof._ For any $w$ inside the open unit disk, we have $\vert w\vert<\vert f(z)\vert$ on $\partial \Omega$, so by Rouché's theorem, the function $f(z)-w$ and $f(z)$ should have the same number of zeros in $\Omega$. Due to the first condition, this indicates that there is a unique $z_1\in \Omega$ satisfying $f(z_1)=w$. Because $w$ is chosen arbitrarily, we deduce that $f$ is one-to-one and $f(\Omega)$ is the open unit disk.

## Transition to harmonic functions

By our investigations in the previous section, the condition for Lemma 1 will be satisfied if $f(z_0)=0$ and there exists some analytic $h$ on $\Omega$ satisfying

$$
f(z)=(z-z_0)e^{h(z)},\quad z\in \Omega\tag1
$$

and

$$
\Re[h(z)]=-\log\vert z-z_0\vert,\quad z\in\partial \Omega.\tag2
$$

Cauchy-Riemann equations indicate that the real parts of analytic functions are harmonic. Conversely, for a given harmonic function, we can always construct its corresponding analytic function by recovering the harmonic conjugate via the Cauchy-Riemann equations. Therefore, we have

**Lemma 2:** _Riemann's theorem will follow from the existence of a harmonic function $u$ on $\Omega$ satisfying $u=-\log\vert z-z_0\vert$ on $\partial \Omega$._

## Dirichlet's problem

In general, if $\Omega$ is subset of $\mathbb R^n$ and $g$ is smooth on $\partial\Omega$, the problem of solving

$$
\Delta u=0\text{ in }\Omega,\quad u=g\text{ on }\partial\Omega\tag3
$$

is known as the **Dirichlet problem**, so we can complete the proof of Riemann's mapping theorem by solving this partial differential equation.

Explicit methods for solving are available only when $\Omega$ is in particlar shape (e.g. [Poisson kernel][pk] for disks), but to prove Riemann's theorem, we only need to establish the existence of solutions. Interestingly, this was first achieved by minimizing a certain energy integral.

## Energy integral and Dirichlet's principle

For a smooth function $\psi:[a,b]\to\mathbb R$, a method to determine how frequently $\psi$ varies in its domain is to consider the quantity

$$
\int_a^b\vert\psi'(x)\vert^2\mathrm dx.
$$

In general, for a smooth function $\psi$ defined on $\Omega\subset\mathbb R^n$, we consider its **Dirichlet energy** defined by

$$
D[\psi]=\int_\Omega\vert\nabla\psi\vert^2\mathrm dV.\tag4
$$

If no extra conditions are imposed on $D[\psi]$, it is clear that its minimum is attained whenever $\psi$ is constant, so Dirichlet introduced the boundary conditions for $\psi$. This produces the following optimization problem:

$$
\min D[\psi]\quad s.t.\quad\psi=g\text{ on }\partial\Omega.\tag5
$$

In the remaining part of this section, we will show that this optimization problem is equivalent to the partial differential equation (3).

**Lemma 3:** _A function solves the optimization problem (5) if and only if it solves the Dirichlet problem (3)._

For the sake of convenience, we let $A$ denote the set of all smooth functions $\psi:\Omega\to\mathbb R$ satisfying $\psi=g$ on $\partial\Omega$ and $B$ denote the set of all smooth functions $v:\Omega\to\mathbb R$ that vanish on $\partial\Omega$. Thus, every difference of two functions in $A$ is an element of $B$.

By definition, $u\in A$ solves (5) if and only if for any $v\in B$, there is $D[u+v]\ge D[u]$. In other words, if $v\in B$ is fixed and $t$ is any real number, the function

$$
S(t)=D[u+tv]
$$

has a minimum at $t=0$. This means that $S'(0)=0$. By definition, there is

$$
S(t)-S(0)=\int_\Omega[2t(\nabla u)\cdot(\nabla v)+t^2\vert\nabla v\vert^2]\mathrm dV,
$$

so $u$ being a minimizer of (5) implies that

$$
\int_\Omega(\nabla u)\cdot(\nabla v)\mathrm dV=0\quad\forall v\in B.\tag6
$$

Because (6) suggests $D[u+v]=D[u]+D[v]$ for all $v\in B$, we conclude that the optimization problem (5) is equivalent to finding a $u\in A$ to fulfill (6).

### Application of the divergence theorem

If $\rho$ is a scalar field and $\mathbf F$ is a vector field, then it is known that

$$
\nabla\cdot(\rho\mathbf F)=\mathbf F\cdot\nabla\rho+\rho\nabla\cdot\mathbf F,
$$

so plugging $\rho=v$ and $\mathbf F=\nabla g$ gives

$$
\begin{aligned}
(\nabla u)\cdot(\nabla g)
&=\nabla\cdot(v\nabla g)-v\nabla\cdot(\nabla g) \\
&=\nabla\cdot(v\nabla g)-v\Delta g.
\end{aligned}
$$

Hence, by divergence theorem, there is

$$
\begin{aligned}
\int_\Omega(\nabla u)\cdot(\nabla v)\mathrm dV
&=\int_\Omega[\nabla\cdot(v\nabla g)-v\Delta g]\mathrm dV \\
&=\int_{\partial\Omega}v\nabla g\mathrm dS-\int_\Omega v\Delta g\mathrm dV.
\end{aligned}
$$

Because $v\in B$, we find that the integral over $\partial\Omega$ vanishes, so (6) is equivalent to the statement that

$$
\int_\Omega v\Delta g\mathrm dV=0\quad\forall v\in B.\tag7
$$

### Proof of Lemma 3

At present, it is clear that solutions to the Dirichlet problem always satisfy (7), so it remains to prove that every $u\in A$ satisfying (7) must fulfill (3). Suppose $\Delta g\ne0$ at some $\boldsymbol{x_0}\in\Omega$. Then we can find some $r>0$ and $m>0$ such that $\vert\Delta g(\boldsymbol x)\vert\ge m$ whenever $\vert\boldsymbol x-\boldsymbol{x_0}\vert\le r$ ($r$ small enough so that the entire open ball is contained in $\Omega$).

Let

$$
\varphi(y)=
\begin{cases}
e^{-1/y} & y>0, \\
0 & y\le 0.
\end{cases}
$$

Then it is well known that $\varphi(y)$ is a smooth function on $\mathbb R$, so

$$
v(x)=\varphi(r-\vert\boldsymbol x-\boldsymbol{x_0}\vert)\in B.
$$

This indicates that

$$
\left\vert\int_\Omega v\Delta g\mathrm dV\right\vert=\int_{\vert\boldsymbol x-\boldsymbol{x_0}\vert\le r}v\vert\Delta g\vert\mathrm dV\ge m\int_{\vert\boldsymbol x-\boldsymbol{x_0}\vert\le r}v\mathrm dV>0,
$$

which is a contradiction. This indicates that we must have $\Delta u=0$ in $\Omega$, thereby completing the proof.

### Dirichlet's principle

By Lemma 3, we know that Dirichlet's problem can be solved if we can always find a minimizer for (5), and the claim that such minimizer always exists is known as the **Dirichlet's principle**.

## Riemann's proof of the mapping theorem

By Lemma 1, Lemma 2, and Lemma 3, we realize that Riemann's theorem can be deduced as long as we can find a minimizer of the energy integral

$$
D[\psi]=\int_\Omega\vert\nabla\psi\vert^2\mathrm dV
$$

satisfying $\psi=-\log\vert z-z_0\vert$ on $\partial\Omega$, and by Dirichlet's principle, this minimizer exists, thereby completing the proof.

### Flaws and remedies

Riemman's original proof is flawed because he justified Dirichlet's principle only from the fact that $D[\psi]$ is bounded below. However, Weierstrass proposed the following optimization problem

$$
J(\psi)=\int_{-1}^1 x^2\vert\psi'(x)\vert^2\mathrm dx,\quad\psi(-1)=-1,\psi(1)=1
$$

for continously differentiable $\psi$ and demonstrated that $\inf J(\psi)=0$ but no $\psi$ can fulfill $J(\psi)=0$. This undermined the reasoning of Riemann. Because many important results of Riemann were proved using Dirichlet's principle, Weierstrass's criticism caused mathematicians at the time to search for rigorous justification of Dirichlet's principle in order to salvage Riemann's works.

In 1900, by developing a rigorous theory of functional analysis Hilbert showed that Dirichlet's principle is valid provided that $\partial\Omega$ is smooth enough. Because an simply connected open set in $\mathbb C$ can have very complicated boundary behavior, instead of extending Dirichlet's principle, the first rigorous proof of the mapping theorem by W. F. Osgood is by looking at the Dirichlet problem itself.

## Conclusion

In this article, we began our discussion from Riemann's mapping theorem and eventually transformed the proof of this theorem into solving an optimization problem over space of functions. Finally, we present Riemann's proof of the mapping theorem and discussed its flaws and remedies.


[nf]: https://en.wikipedia.org/wiki/Normal_family
[mmp]: https://en.wikipedia.org/wiki/Maximum_modulus_principle
[rt]: https://en.wikipedia.org/wiki/Rouch%C3%A9%27s_theorem
[pk]: https://en.wikipedia.org/wiki/Poisson_kernel
