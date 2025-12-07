---
layout: post
title: "Shoaling Analysis from Introduction to Fluid Dynamics"
date: 2023-12-18
tags: [fluid-dynamics, wave-shoaling, coursework]
category: research
---

[Read the original version (PDF)]({{ '/assets/img/waveshoaling/Final.pdf' | relative_url }})

This note reproduces a part of a take home exam for the *Introduction to Fluid Dynamics* course. The objective was to restate the linear wave framework, compute wave-energy transformations as a monochromatic train traverses a uniform slope, and document the resulting shoaling curves.

{% maincolumn 'assets/img/waveshoaling/surfacewave.png' 'Sketch of the linearized free-surface boundary conditions I re-derived before solving for pressure and velocity potentials.' %}

## Linear setup and pressure field

Using the control-volume momentum balance from the sketch above, the pressure perturbation over a flat bed may be stated as

$$
  P(x,z,t) = -\rho g z + \rho g A \, \frac{\cosh k(z+h)}{\cosh kh}\cos(kx-\omega t).
$$

The first term is the hydrostatic reference, and the second captures the oscillatory signal that damps exponentially with depth. This separation later feeds directly into the wave-energy calculations.

## Group velocity and energy flux

For two closely spaced components $(k_1,\omega_1)$ and $(k_2,\omega_2)$, the envelope travels with

$$
  C_g = \frac{\omega_1 - \omega_2}{k_1 - k_2} \to \frac{\mathrm{d}\omega}{\mathrm{d}k} = \frac{C}{2}\left(1 + \frac{2kh}{\sinh 2kh}\right).
$$

Kinetic and potential energies per unit crest width and wavelength satisfy

$$
  E_k = E_p = \frac{\rho g H^2 L}{16}, \quad E = E_k + E_p = \frac{\rho g H^2 L}{8}.
$$

Therefore the shoaling constraint across a control volume of width $b$ is

$$
  (E C_g b)_1 = (E C_g b)_2.
$$

{% maincolumn 'assets/img/waveshoaling/plot12181.png' 'Wave-steepness transformation computed from the conserved energy-flux relation.' %}

## Shoaling over a uniform slope

With the energy relation in hand, every quantity was mapped to the nondimensional depth $h/L_0$ (with $L_0 = gT^2/2\pi$). Assuming a constant channel width $b=b_0$ simplifies the algebra and yields

$$
  \frac{L}{L_0} = \frac{C}{C_0} = \tanh kh,
$$

$$
  \frac{H}{H_0} = \left[\frac{2\cosh^2 kh}{2kh + \sinh 2kh}\right]^{1/2},
$$

$$
  (kA) = (kA)_0\left[\frac{2\cosh^2 kh}{2kh+\sinh 2kh}\right]^{1/2}\coth kh.
$$

The dispersion relation was solved iteratively at each depth, allowing the subsequent plots to be parameterized only by $h/L_0$.

{% marginfigure 'shoal-celerity' 'assets/img/waveshoaling/plot12182.png' 'Celerity ratio $C/C_0$ tapering with depth as predicted by the dispersion relation.' %}

Beyond the steepness curve shown above, the following trends appear in the additional plots:

- Steepness $kA$ grows dramatically as $h/L_0$ decreases, signalling where the linear solution would predict breaking.
- Celerity ratios collapse to $\tanh kh$, confirming the non-dispersive limit in shallow water.
- Dynamic pressure and amplitude exhibit shallow-water minima near $h/L_0 \approx 0.16$ before increasing again; real waves would break before the singular behaviour implied by the small-amplitude framework.

## Additional observations

- Because $C = \sqrt{(g/k)\tanh kh}$, both wavelength and phase speed reduce to $L/L_0 = C/C_0 = \tanh kh$ as depth decreases.
- Eliminating $k$ in favour of $h/L_0$ relies on iterating the dispersion relation; a Newton–Raphson step keeps the sweep over depth smooth.
- The dynamic pressure ratio $P/P_0$ reaches a shallow minimum before rising again, underscoring where linear assumptions break down.
- Non-linear or breaking-focused models become necessary when crest elevation approaches roughly 0.8 times the local depth, well before the divergence predicted by the small-amplitude formulas.

