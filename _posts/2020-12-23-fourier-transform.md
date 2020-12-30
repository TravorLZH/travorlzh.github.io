---
layout: post
title:  "A Complete Investigation on Fourier Transform"
date:   2020-12-23
des:    A comprehensive derivation of different forms of Fourier transform
tags: fourier-transform number-theory physics
---

> This post is also available at [HFI Programming Club's blog](https://hfi.me/2020/12/fourier-transform/).

Fourier transform is a commonly used techniques in many different fields. In mathematics, people use Fourier transform to solve differential equations, and in signal processing it is used to study the seasonality of time series. To prevent misuse, we had better understand theoretical background of Fourier transform before diving into applications. Prepare some papers and penciles, our adventure will begin from the heat equation.

## The Heat Equation

In the field of **partial differential equations (PDEs)**, heat equation is defined as follows

$$
{\partial u\over\partial t}=k\nabla^2u
$$

where $\nabla^2=\nabla\cdot\nabla$ is the Laplacian operator. To prevent too much digression, we only want to focus on its one-dimensional form:

$$
{\partial\over\partial t}u(x,t)=k{\partial^2\over\partial x^2}u(x,t)\tag1
$$

with the initial condition and the boundary condition being $u(x,0)=f(x)$ and $u(0,t)=u(L,t)=0$

> We will not go into too much detail about this equation since this is not the topic of this blog.

## Solving One-dimensional Heat Equation

Since the conditions and (1) are linear and homogenous, we are allowed to perform separation of variables. That is, we set

$$
u(x,t)=X(x)T(t)
$$

Plugging this new definition into (1), we get

$$
{T'\over T}(t)=k{X''\over X}(x)
$$

By the properties of this equation, we observe that any partial derivatives taken on this equation will give zero, so both side must equal to a constant. In order for this constant to be _physically meaningful_, we set it negative:

$$

\frac1k{T'\over T}(t)={X''\over X}(x)=-\lambda^2
$$

which allows us to separate this PDE into two **ordinary differential equations (ODEs)**:

$$
\begin{cases}
T'(t)&=-\lambda^2kT(t) \\
X''(x)&=-\lambda^2X(x)
\end{cases}
$$

and using techniques learned from calculus, we obtain a special solution for $u(x,t)$:

$$
u(x,t)=Ae^{-\lambda^2kt}\sin\left(\lambda x+\varphi\right)
$$

Now, if we were to plug in the boundary conditions of this problem, we get

$$
u_n(x,t)=Ae^{-\lambda_n^2kt}\sin(\lambda_nx)
$$

with $\lambda_n$ being $n\pi/L$. Finally, by the linearity of (1), we get its general solution:

$$
u(x,t)=\sum_{n=1}^\infty u_n(x,t)=\sum_{n=1}^\infty A_ne^{-\lambda_n^2kt}\sin(\lambda_nx)
$$

We are almost there. Plugging in the initial condition gives

$$
f(x)=\sum_{n=1}^\infty A_n\sin(\lambda_nx)\tag2
$$

All left is to determine the coefficients. To begin with, we consider the following integral

$$
I_{m,n}=\int_0^L\sin(\lambda_mx)\sin(\lambda_nx)\mathrm dx
$$

For $m=n$, we have

$$
\begin{aligned}
I_{m,m}
&=\int_0^L\sin^2(\lambda_mx)\mathrm dx \\
&=\int_0^L{1-\cos(2\lambda_mx)\over2}\mathrm dx \\
&=\frac L2
\end{aligned}
$$

but when $m\ne n$, we can use the fact that

$$
\sin\alpha\sin\beta={\cos(\alpha-\beta)-\cos(\alpha+\beta)\over2}
$$

to get

$$
I_{m,n}=\frac12\int_0^L[\cos(\lambda_{m-n}x)-\cos(\lambda_{m+n}x)]\mathrm dx=0
$$

Combining these results, we get

$$
\int_0^L\sin(\lambda_mx)\sin(\lambda_nx)\mathrm dx=\frac L2\delta_{mn}
$$

which, applied to (2), gives a formula to determine $A_n$:

$$
A_n=\frac2L\int_0^Lf(x)\sin(\lambda_n)\mathrm dx\tag3
$$

## Heat Equation and Fourier Series

As shown in (2), the solution to the heat equation requires us to determine the coefficients of a trigonometric series, and this type of series is known as the **Fourier series** to acknowledge Joseph Fourier for his contribution in the study of heat equation. Particularly, Fourier hypothesizes all functions defined on an arbitrary $[T_0,T_0+T]$ can be represented as superposition of sinusoids:

$$
f(x)=A_0+\sum_{n=1}^\infty A_n\sin(\lambda_nx+\varphi_n)\tag4
$$

with $\lambda_n=2\pi n/T$. However, (4) is not a good version of Fourier series to work with, so we may consider applying angle-sum identity of sine function:

$$
\begin{aligned}
f(x)
&=A_0+\sum_{n=1}^\infty A_n[\sin\varphi_n\cos(\lambda_nx)+\cos\varphi_n\sin(\lambda_nx)] \\
&=A_0+\sum_{n=1}^\infty[a_n\cos(\lambda_nx)+b_n\sin(\lambda_nx)]
\end{aligned}
$$

Hence, we are able to develop similar means in (3) to get

$$
\begin{aligned}
A_0&=\frac1T\int_{T_0}^{T_0+T}f(x)\mathrm dx \\
a_n&=\frac2T\int_{T_0}^{T_0+T}f(x)\cos(\lambda_nx)\mathrm dx \\
b_n&=\frac2T\int_{T_0}^{T_0+T}f(x)\sin(\lambda_nx)\mathrm dx
\end{aligned}
$$

Because the formula for $A_0$ and $a_n$ are too similar, we can often see some texts used the following fashion to define Fourier series:

$$
f(x)={a_0\over2}+\sum_{n=1}^\infty\left[a_n\cos\left(2\pi nx\over T\right)+b_n\sin\left(2\pi nx\over T\right)\right]\tag5
$$

## Application of Fourier Series - the Basel Problem

Oftentimes, Fourier expansion of certain functions help us evaluate values of certain series. For instance, let's set $T_0=0$, $T=2\pi$, and $f(x)=x^2$; we have

$$
{a_0\over2}={1\over2\pi}\int_0^{2\pi} x^2\mathrm dx={4\pi^2\over3}
$$

and for $n\ge1$:

$$
\begin{aligned}
a_n
&=\frac1\pi\int_0^{2\pi} x^2\cos(nx)\mathrm dx \\
&=\frac1\pi\left[\frac1nx^2\sin(nx) \vert _0^{2\pi}-\frac1n\int_0^{2\pi}2x\sin(nx)\mathrm dx\right] \\
&=\frac1\pi\left[{1\over n^2}2x\cos(nx) \vert _0^{2\pi}-{2\over n^2}\int_0^{2\pi}\cos(nx)\mathrm dx\right] \\
&={4\over n^2}
\end{aligned}
$$

which gives

$$
x^2={8\pi^3\over3}+\sum_{n=1}^\infty\left[{4\over n^2}\cos(nx)+b_n\sin(nx)\right]
$$

set $x=\pi$, we have

$$
\pi^2={4\pi^2\over3}+4\sum_{n=1}^\infty{(-1)^n\over n^2}
$$

resulting in

$$
\sum_{n=1}^\infty{(-1)^n\over n^2}=-{\pi^2\over12}
$$

which is an equivalent form of the **Basel problem**.

## Fourier Series in a Complex Sense

Equation (5) still looks a bit complicated, but **Euler's formula** for trigonometric functions can help us simplify:

$$
\cos\theta={e^{i\theta}+e^{-i\theta}\over2} \\
\sin\theta={e^{i\theta}-e^{-i\theta}\over2i}
$$

As a result, we obtain the following series

$$
f(x)=\sum_{n\in\mathbb Z}c_ne^{2\pi inx/T}\tag6
$$

and by similar means in previous sections, we acquire the following formula for $c_n$:

$$
c_n=\frac1T\int_{T_0}^{T_0+T}f(x)e^{-2\pi inx/T}\mathrm dx
$$

## Fourier Transform

Since sinusoids are periodic, Fourier series virtually serve to produce a trigonometric representations of periodic functions. Nonetheless, in mathematics most functions we study are not periodic, indicating that a stronger tool is needed.

If a function is aperiodic, then why not consider its period is the entire real line $(-\infty,\infty)$? In our case, set $T_0=-T/2$, so that if we take the limit $T\to\infty$ the Fourier series can express $f(x)$ entirely.

In addition, define

$$
\hat f\left(\xi\right)=Tc_n=\int_{-T/2}^{T/2}f(x)e^{-2\pi ix\xi}\mathrm dx\tag7
$$

so that

$$
f(x)=\lim_{M\to\infty}\frac1T\sum_{-MT/2\le n\le MT/2}\hat f\left(\frac nT\right)e^{2\pi ix(n/T)}
$$

Now, let's consider dividing the summation region into subintervals:

$$
-M\le\cdots<\xi_0<\xi_1<\cdots\le M
$$

and require that the length of each subintervals to be $1/T$, then we have

$$
f(x)=\lim_{M\to\infty}\sum_n\hat f(\xi_n)e^{2\pi ix\xi_n}\Delta\xi_n\tag8
$$

and if we take $T\to\infty$ then (8) and (7) becomes

$$
f(x)=\int_{-\infty}^\infty\hat f(\xi)e^{2\pi ix\xi}\mathrm d\xi
$$
$$
\hat f(\xi)=\int_{-\infty}^\infty f(x)e^{-2\pi ix\xi}\mathrm dx
$$

wherein $\hat f(\xi)$ is the **Fourier transform** of $f(x)$ and $f(x)$ is called the inverse Fourier transform of $\hat f(\xi)$. Moreover, because Fourier transform is regarded as continuous analog of Fourier series, the variable $\xi$ is usually called the **frequency**, and $\hat f(\xi)$ gives the amplitude of the sinusoid with frequency $\xi$.

> For these reasons, in the field of signal processing, $f(t)$ is often called the **time domain**, and $\hat f(\xi)$ is often referred as the **frequency domain** so that Fourier transform became a tool to connect them.

Combining the two identities above gives us the **Fourier inversion theorem**:

$$
f(t)=\int_{-\infty}^\infty e^{2\pi i\xi t}\int_{-\infty}^\infty f(x)e^{-2\pi i\xi x}\mathrm dx\mathrm d\xi
$$

For simplicity in the exponential terms, we define the **angular frequency** $\omega=2\pi\xi$, resulting in an alternative version of Fourier inversion formula:

$$
f(t)={1\over2\pi}\int_{-\infty}^\infty e^{i\omega t}\int_{-\infty}^\infty e^{-i\omega x}f(x)\mathrm dx\mathrm d\omega
$$

This implies a pair of Fourier transform equations using angular frequencies:

$$
F(\omega)=\int_{-\infty}^\infty e^{-i\omega t}f(t)\mathrm dt\tag9
$$

$$
f(t)={1\over2\pi}\int_{-\infty}^\infty e^{i\omega t}F(\omega)\mathrm d\omega\tag{10}
$$

> In order for $F(\omega)$ to exist, we ensure that $f(t)$ is square-integrable (i.e. this integral $\int\lvert f\rvert^2$ must converge).

### Application of Fourier Transform - Airy's Equation

Oftentimes in quantum mechanics, Schrodinger equations in particular problems were simplified into **Airy's equation**:

$$
y''-xy=0\tag{11}
$$

If we differentiate (9) with respect to $\omega$, we get

$$
F'(\omega)=-i\int_{-\infty}^\infty e^{-i\omega t}tf(t)\mathrm dt
$$

Moreover, if we differentiate (10) with respect to $t$ twice, we get

$$
f''(t)={1\over2\pi}\int_{-\infty}^\infty e^{i\omega t}[-\omega^2F(\omega)]\mathrm d\omega
$$

As a result, if we were to denote $Y$ as the Fourier transform of $y$, then the Fourier transform on (11) results in

$$
-\omega^2Y-iY'=0
$$

Using elementary techniques, we obtain the solution as follows:

$$
Y(\omega)=Y_0e^{i\omega^3/3}
$$

which gives us the spectrum of the square-integrable special solution to (11). Subsequently, inverse Fourier transform on both side gives

$$
y={Y_0\over2\pi}\int_{-\infty}^\infty e^{i\omega x}e^{\omega^3/3}\mathrm d\omega
$$

Because the complex exponential makes the solution look too *intimidating*, we may consider splitting the interval of integration to get a more friendly version:

$$
\begin{aligned}
y
&={Y_0\over2\pi}\left[\underbrace{\int_{-\infty}^0 e^{i(\omega x+\omega^3/3)}\mathrm d\omega}_{\omega\mapsto-\omega}+\int_0^\infty e^{i(\omega x+\omega^3/3)}\mathrm d\omega\right] \\
&={Y_0\over\pi}\int_0^\infty{e^{i(\omega x+\omega^3/3)}-e^{-i(\omega x+\omega^3/3)}\over2}\mathrm d\omega \\
&={Y_0\over\pi}\int_0^\infty\cos\left(\omega x+{\omega^3\over3}\right)\mathrm d\omega
\end{aligned}
$$

and if we specify $Y_0=1$, we get the Airy's function of the first kind:

$$
\operatorname{Ai}(x)=\frac1\pi\int_0^\infty\cos\left(\omega x+{\omega^3\over3}\right)\mathrm d\omega
$$

> As (11) suggests, Airy's equation is a second order ODE, meaning there exists another branch of solutions that are linearly independent to $Y_0\operatorname{Ai}(x)$. Consequently, Fourier transform only gives the square-integrable branch of the general solution.

## Discrete Fourier Transform

Although integrals look beautiful, it is not easy for computers to evaluate integrals, especially when it is integrating over the entire real line. As a result, we may consider discretizing the problem for computer use.

### Sampling the Time Domain - Discrete-time Fourier Transform

In reality, we do not capture signals as a continuous flow but instead a discrete sequence, so discretizing the time domain will help us apply Fourier transform to discrete signals. Particularly, if we were to discretize the time-domain with sampling period $1/T$, we get

$$
f_T(t)=f(t)\sum_{n=-\infty}^\infty\delta(t-nT)
$$

> The summation of delta functions are often called the **Dirac comb**.

Consequently, its Fourier transform became

$$
\begin{aligned}
F(\omega)
&=\int_{-\infty}^\infty f_T(t)e^{-i\omega t}\mathrm dt\\
&=\int_{-\infty}^\infty f(t)\sum_{n=-\infty}^\infty\delta(t-nT)e^{-i\omega t}\mathrm dt \\
&=\sum_{n=-\infty}^\infty\int_{-\infty}^\infty\delta(t-nT)f(t)e^{-i\omega t}\mathrm dt \\
\end{aligned}
$$

Now, using the property of **Dirac delta function** that

$$
\int_{-\infty}^\infty\delta(t-a)g(t)\mathrm dt=g(a)
$$

We deduce the formula for **discrete-time Fourier transform (DTFT)**.

$$
F(\omega)=\sum_{n=-\infty}^\infty f(nT)e^{-i\omega nT}
$$

wherein the inversion formula is the same as (10).

### Sampling the Frequency Domain - Discrete Fourier Transform

Thanks to delta function, we turn integrals into summation. However, the inversion formula for DTFT is still in terms of integrals, so it is needed for us to manipulate this expression to feet real-life use. Because in reality we process finitely sized signal, the discrete signals are only finite sequences. As a result, let's consider DTFT on an discrete signal with length $N$:

$$
f(nT)=
\begin{cases}
x_n & 0\le n\le N-1 \\
0 & \text{otherwise}
\end{cases}
$$

Then using this definition, we obtain the DTFT for discrete and finite signals:

$$
F(\omega)=\sum_{n=0}^{N-1}x_ne^{-i\omega nT}\tag{12}
$$

Since discrete signal only contains discrete periods, we only need to consider discrete frequencies. According to the definition of the sequence, its period is $NT$, as a result its discretized frequency can be written as

$$
\omega={2\pi k\over NT}
$$

which gives us

$$
F\left(2\pi k\over NT\right)=\sum_{n=0}^{N-1}x_ne^{-2\pi ikn/N}
$$

By the periodicity of complex exponential, we have that $k\in\{0,1,\dots,N-1\}$. To recover the original signal, we apply the (10) with the new discretized version of the frequency domain:

$$
\begin{aligned}
x_n
&=f(nT) \\
&={1\over2\pi}\int_{-\infty}^\infty e^{i\omega nT}\sum_{k=0}^{N-1}F(\omega)\delta\left({N\omega\over2\pi}-{k\over T}\right)\mathrm d\omega \\
&=\frac1N\sum_{k=0}^{N-1}e^{2\pi ikn/N}F\left(2\pi k\over NT\right)
\end{aligned}
$$

Now, if we were to define the **Fourier coefficients** $X_k$ as the amplitude of discrete frequencies $F(2\pi /NT)$, then we get the following equations for **discrete Fourier transform (DFT)** and its inversion:

$$
X_k=\sum_{n=0}^{N-1}x_ne^{-2\pi ink/N}\tag{13}
$$

$$
x_n=\frac1N\sum_{k=0}^{N-1}X_ke^{2\pi ikn/N}\tag{14}
$$

> It can be verified that (13) and (14) conforms to the definition of DFT in [numpy](https://numpy.org/doc/stable/reference/generated/numpy.fft.fft.html) and [scipy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.fft.fft.html).

### Application of DFT - Spectrum of the Greatest Common Divisor

It is well-known that DFT is frequently used in signal processing, and now let's try analyzing the spectrum of the greatest common divisor function:

$$
\begin{aligned}
X_k
&=\sum_{m=0}^{n-1}\gcd(n,m)e^{-2\pi imk/N} \\
&=\sum_{r=1}^n\gcd(n,r)e^{-2\pi irk/N}
\end{aligned}
$$

Since $\gcd(n,r)$ divides $n$, we can consider summing the summands using the value of $\gcd(n,r)$:

$$
\begin{aligned}
X_k
&=\sum_{d \vert n}d\sum_{r=jd\atop\gcd(j,n/d)=1}e^{-2\pi ijdk/N} \\
&=\sum_{d \vert n}d\sum_{1\le j\le n/d\atop\gcd(j,n/d)=1}e^{-2\pi ijk/(n/d)} \\
&\triangleq\sum_{d \vert n}d\cdot c_{n/d}(k)
\end{aligned}
$$

Now, let's turn our focus to $c_m(k)$:

$$
\begin{aligned}
c_m(k)
&=\sum_{1\le j\le m\atop\gcd(j,m)=1}e^{-2\pi ijk/m} \\
&=\sum_{j=1}^me^{-2\pi ijk/m}\left\lfloor1\over\gcd(j,m)\right\rfloor
\end{aligned}
$$

Now, apply [Mobius inversion formula](https://hfi.me/2020/10/mobius-inversion/) to the floor function, so we get

$$
\begin{aligned}
c_m(k)
&=\sum_{j=1}^me^{-2\pi ijk/m}\sum_{d \vert j,d \vert m}\mu(d) \\
&=\sum_{d \vert m}\mu(d)\sum_{j=qd}e^{-2\pi ijk/m} \\
&=\sum_{d \vert m}\mu(d)\sum_{q=1}^{m/d}e^{-2\pi iqk/(m/d)} \\
&=\sum_{d \vert m}\mu\left(\frac md\right)\sum_{q=1}^de^{-2\pi iqk/d}
\end{aligned}
$$

If $d \vert k$, the inner summation becomes $d$, but when $d\nmid k$ we have

$$
\sum_{q=1}^de^{-2\pi iqk/d}=e^{-2\pi iq/d}\cdot{e^{-2\pi iqk/d\cdot d}-1\over e^{-2\pi iq/d}-1}=0
$$

As a result, we obtain a nice expression for $c_m(k)$:

$$
c_m(k)=\sum_{d \vert m,d \vert k}\mu\left(\frac md\right)d
$$

In particular, if $k=1$ this expression becomes the mobius function. Accordingly, plugging $k=1$ in to the $X_k$ expression gives

$$
X_1=\sum_{d \vert n}\mu\left(\frac nd\right)d=c_n(0)=\sum_{1\le j\le n\atop\gcd(j,n)=1}1=\varphi(n)
$$

Eventually, we discover that the Fourier transform of the greatest commmon divisor function gives us the **Euler's totient function**. In addition, because $\varphi(n)$ is real, we can take the real component on the expression of $X_1$, yielding

$$
\varphi(n)=\sum_{r=1}^n\gcd(n,r)\cos\left(2\pi r\over n\right)
$$

## Summary

In this article, we began our exploration on a physics concepts. Then after we derived the continuous form of Fourier transform, we apply it to solving differential equation. In addition, we also discover application of discrete Fourier transform in number theory. Hence, we can see that Fourier transform has applications in different areas of mathematics because in the derivation we brought together different areas of mathematics: mathematical physics, mathematical analysis, and number theory!
