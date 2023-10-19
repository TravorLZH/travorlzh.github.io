---
layout: post
title:  "On differentiation under integral signs"
date:   2023-10-19
des:    We derive a generalization of Leibniz integral rule to higher dimensions
tags:   real-analysis algebra
---

By the fundamental theorem of calculus, an integral over an interval can be computed by taking the difference of antiderivatives at two end points. Although functions like $f(x)=x^{-1}\sin x$ do not possess elementary antiderivatives, it is still sometimes possible to compute the definite integral

$$
\int_0^{+\infty}{\sin x\over x}\mathrm dx=\frac\pi2,\tag1
$$

and a typical approach is Feynman's trick. Because most accounts on this integral ignore the issue of convergence, we reproduce a rigorous derivation here.

## Proof of (1)

Let $I(s)$ be the function

$$
I(s)=\int_0^{+\infty}e^{-sx}{\sin x\over x}\mathrm dx.
$$

Because the integral converges absolutely when $s>0$, we can use the limit definition of derivative to show that

$$
I'(s)=-\int_0^{+\infty}e^{-sx}\sin x\mathrm dx=-{1\over s^2+1}.
$$

By the boundary condition $I(+\infty)=0$, we see that for $s>0$

$$
I(s)=\frac\pi2-\arctan s\tag2
$$

Therefore, it remains to justify the continuity of $I(s)$ at $s=0$. For any $T>0$, there is

$$
\begin{aligned}
I(s)-I(0)
&=\int_0^T{\sin x\over x}\cdot(e^{-sx}-1)\mathrm dx \\
&+\int_T^{+\infty}{\sin x\over x} e^{-sx}\mathrm dx-\int_T^{+\infty}{\sin x\over x}\mathrm dx \\
&=I_1+I_2-I_3.
\end{aligned}
$$

Since $\vert\sin x\vert\le\min(\vert x\vert,1)$, we have

$$
\vert I_1\vert\le\int_0^T(1-e^{-sx})\mathrm dx\le T(1-e^{-sT})
$$

and

$$
\vert I_2\vert\le{1\over T}\int_T^{+\infty}e^{-sx}\mathrm dx={e^{-sT}\over sT}.
$$

Using integration by parts, there is

$$
\vert I_3\vert=\left\vert\left[{-\cos x\over x}\right]_T^{+\infty}-\int_T^{+\infty}{\cos x\over x^2}\mathrm dx\right\vert\le{2\over T}.
$$

Combining everything, we have

$$
\vert I(s)-I(0)\vert\le T(1-e^{-sT})+{e^{-sT}\over sT}+\frac 2T.
$$

Setting $T=s^{\frac12}$ and letting $s\to0^+$, we see that (2) implies

$$
I(0)=\lim_{s\to0^+} I(s)=\frac\pi2-\lim_{s\to0^+}\arctan s=\frac\pi2,
$$

which gives the desired result (1).

## Leibniz integral rule

Feynman's trick is a consequence of the Leibniz integral rule:

$$
\begin{aligned}
{\mathrm d\over\mathrm dt}\int_{a(t)}^{b(t)}f(x,t)\mathrm dx
&=\int_{a(t)}^{b(t)}{\partial\over\partial t}f(x,t)\mathrm dx \\
&+f(b(t),t)b'(t)-f(a(t),t)a'(t)
\end{aligned}
$$

provided everything is continuously differentiable in the domain.

This can be proved by a deft use of Lagrange's mean value theorem, and a detailed account is available on [Wikipedia][lir]. Since our article is focusing on the higher-dimensional version of this result, we should stay no longer on this result.

## Differentiation of volume integral

Let $\Omega(t)\subset\mathbb R^n$ be open such that its boundary $\partial\Omega(t)$ is smooth. Then we investigate the time derivative of the following quantity:

$$
F=\int_{\Omega(t)}f(\boldsymbol x,t)\mathrm dV,\tag3
$$

where $f$ is a scalar function and $\mathrm dV$ is the volume differential. Because quantities like $F$ primarily appear in fluid mechanics, it would be advantageous for us to attach physical meaning to $F$.

## Lagrangian and Eulerian specification for fluids

Roughly speaking, fluids are matters that allow more flexible transformations than do the solids. Lagrange treats fluid as an aggregate of individual particles, so it labels each particle by its initial position. As a result, particle quantities $f_0$ in **Lagrangian specification** are functions of initial position $\boldsymbol X$ and time $t$.

Since individual particles may have complicated behaviors that prevent us from analyzing the fluid as a whole, Euler proposed another approach that requires no information of individual particles. Instead of requiring initial position, particle quantities $f$ in **Eulerian specification** are functions of position $\boldsymbol x$ and time $t$, which gives information about the particle that happens to be at $\boldsymbol x$ at time $t$. It is Eulerian model that enables us to study fluid via vector calculus.

Although quantities in Eulerian and Lagrangian specification have different domains, there will be no trouble of translating Eulerian quantities to Lagrangian quantities as long as we define an additional bijection $\varphi(\cdot,t)$ associating intial position $\boldsymbol X$ and the position $\boldsymbol x$ at time $t$ so that

$$
f(\boldsymbol x,t)=f(\varphi(\boldsymbol X,t),t)=f_0(\boldsymbol X,t).\tag4
$$

## Preliminary differentiation

Let $f$ be an Eulerian particle quantity and $\Omega(t)$ describe the fluid volume at time $t$. Then $F$ is a fluid quantity only depending on $t$, so $\mathrm dF/\mathrm dt$ just describes the rate of change of this fluid quantity. Suppose $\varphi(\cdot,t)$ is smooth for all $t$. Then by (4), when $\Omega_0$ is the initial state of $\Omega(t)$, we have

$$
F=\int_{\Omega_0}f_0(\boldsymbol X,t)J(\boldsymbol X,t)\mathrm dV_0,
$$

where $\mathrm dV_0$ is the volume differential for $\Omega_0$ and

$$
J(\boldsymbol X,t)=\left\vert\det\left(\partial\varphi\over\partial\boldsymbol X\right)\right\vert\tag5
$$

Consequently, by product rule, we have

$$
{\mathrm dF\over\mathrm dt}=\int_{\Omega_0}\left[{\partial f_0\over\partial t}J+f_0{\partial J\over\partial t}\right]\mathrm dV_0=A_1+A_2.
$$

## Computation of $A_1$

Using the multivariable chain rule, we have

$$
{\partial f_0\over\partial t}=\left({\partial\over\partial t}+{\partial\varphi\over\partial t}\cdot\nabla\right)f(\varphi,t).
$$

In fluid mechanics, it is convention to let $\boldsymbol u$ denote the Eulerian particle velocity. Since the intial position $\boldsymbol X$ is independent of time, we have

$$
\boldsymbol u={\mathrm d\boldsymbol x\over\mathrm dt}={\partial\varphi\over\partial t},
$$

so plugging into $A_1$ gives

$$
A_1=\int_{\Omega(t)}\left({\partial\over\partial t}+\boldsymbol u\cdot\nabla\right)f(\boldsymbol x,t)\mathrm dV.\tag6
$$

## Computation of $A_2$

Since $\varphi(\cdot,t)$ is bijective, the determinant in (5) is never vanishing, so by continuity, the determinant must preserve its sign in $\Omega_0$. Therefore, there exists a constant $s\in\lbrace-1,1\rbrace$ such that $J(\boldsymbol X,t)=s\det\left(\partial\varphi\over\partial\boldsymbol X\right)$, so in order to compute $\partial J\over\partial t$, we only need to differentiate the determinant.

### Determinant of a matrix

Let $M$ be some square matrix and $M_{ij}$ denote its entry at row $i$ and column $j$. Then by cofactor expansion, we have $M\operatorname{adj}(M)=(\det M)I$, so

$$
\det M=\sum_{k}M_{ik}\operatorname{adj}(M)_{ki}.
$$

Since $\operatorname{adj}(M) _{jk}$ is $\pm1$ of a determinant of a matrix that does not contain $A _ {ij}$, we deduce that

$$
{\partial\over\partial M_{ij}}\det M=\operatorname{adj}(M)_{ji},
$$

so we have

$$
\mathrm d(\det M)=\sum_j\sum_i\operatorname{adj}(M)_{ji}\mathrm dM_{ij}.
$$

The inner summation gives the $j,j$'th entery of the matrix product $\operatorname{adj}(M)\mathrm dM$, so we obtained [Jacobi's formula for determinants][jdt]:

$$
\mathrm d(\det M)=\operatorname{tr}(\operatorname{adj}(M)\mathrm dM)\tag7
$$

When $M$ is invertible, the right hand side can be replaced with $(\det M)\operatorname{tr}(M^{-1}\mathrm dM)$

### Expression for $A_2$

Plugging (7) into $J(\boldsymbol X,t)$, there is

$$
\begin{aligned}
{\partial J\over\partial t}
&=J\operatorname{tr}\left({\partial\boldsymbol X\over\partial\varphi}\cdot{\partial\over\partial t}{\partial\varphi\over\partial\boldsymbol X}\right) \\
&=J\sum_i\sum_j{\partial\boldsymbol X_i\over\partial\varphi_j}{\partial\over\partial\boldsymbol X_i}{\partial\varphi_j\over\partial t} \\
&=J\sum_i{\partial\boldsymbol u\over\partial \varphi_j}=J\sum_i{\partial\boldsymbol u\over\partial\boldsymbol x_j}=J(\nabla\cdot\boldsymbol u).
\end{aligned}
$$

Plugging this into $A_2$ gives

$$
A_2=\int_{\Omega(t)}(\nabla\cdot\boldsymbol u)f_0J\mathrm dV_0=\int_{\Omega(t)}(\nabla\cdot\boldsymbol u)f\mathrm dV.\tag8
$$

## Final result

Combining (6) and (8) gives

$$
{\mathrm dF\over\mathrm dt}=\int_{\Omega(t)}\left[{\partial\over\partial t}+\boldsymbol u\cdot\nabla+(\nabla\cdot\boldsymbol u)\right]f\mathrm dV.\tag9
$$

By the product rule for divergence, there is

$$
\nabla(f\boldsymbol u)=\boldsymbol u\cdot\nabla f+(\nabla\cdot\boldsymbol u)f,
$$

so by divergence theorem, (9) becomes

$$
{\mathrm dF\over\mathrm dt}=\int_{\Omega(t)}{\partial f\over\partial t}\mathrm dV+\int_{\partial\Omega(t)}(\boldsymbol u\cdot\hat n)f\mathrm dS.\tag{10}
$$

This is known as the **Reynolds transport theorem**.

### Incompressible fluids

When the flow is incompressible, it will be more convenient to use (9) instead of (10). Define [**material derivative**][md]:

$$
{D\over Dt}={\partial\over\partial t}+\boldsymbol u\cdot\nabla.
$$

Because incompressibility implies $\nabla\cdot\boldsymbol u\equiv 0$, we can simplify (9) into

$$
{\mathrm dF\over\mathrm dt}=\int_{\Omega(t)}{Df\over Dt}\mathrm dV.\tag{11}
$$

This indicates that when the flow is incompressible, (11) guarantees that the time derivative of $F$ is the volume integral of the material derivative of $f$.

## Conclusion

In this article, we began our discussion by computing an integral using Feynman's trick and introduced Leibniz integral rule and its generalization to $\mathbb R^n$. Subsequently, we import principles from fluid mechanics to execute the differentiation. During the computation of $A_2$, we also include a detailed account of how to differentiate determinants. Finally, we derive Reynolds transport theorem and its simplified form for incompressible fluids.

[lir]: https://en.wikipedia.org/wiki/Leibniz_integral_rule#General_form_with_variable_limits
[md]: https://en.wikipedia.org/wiki/Material_derivative
[jdt]: https://en.wikipedia.org/wiki/Jacobi%27s_formula