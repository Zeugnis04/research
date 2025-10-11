---
layout: post
title: "Low-Cost Stereo Imaging for Coastal Wave Field Reconstruction and Quantification of Wave Breaking"
date: 2025-05-15
tags: [coastal-engineering, computer-vision, wave-mechanics, stereo-imaging, civil-engineering]
category: research
---

{% maincolumn 'assets/img/stereo-imaging/project1.webp' 'Stereo Wave Images example' %}

## Project Overview

This research project, funded by the Seoul National University Undergraduate Independent Research Grant Program, focuses on developing affordable stereo vision systems for monitoring nearshore wave fields and quantifying wave breaking events. (KRW 3,000,000)

## Motivation

Traditional wave measurement instruments such as wave gauges and acoustic Doppler current profilers (ADCPs) are expensive and provide limited spatial coverage. Stereo imaging offers a cost-effective alternative for capturing detailed wave field information across larger areas.

## Methodology

### Stereo Camera System
- Multi-camera (dual, triple, quadruple) setup for capturing stereoscopic wave images
- Calibration procedures for accurate 3D reconstruction (currently private algorithm)

### Computer Vision Algorithms
- 3D wave surface reconstruction from multi-camera stereoscopic wave images
- Temporal tracking of wave propagation and breaking patterns

### Wave Breaking Detection
- Automated identification of wave breaking events (WIP)
- Quantification of breaking wave characteristics (height, crest length, breaking intensity)
- Statistical analysis of breaking wave patterns
- Comparison with traditional breaking wave research

## Photos

Here are some photos from the field experiment.

{% maincolumn 'assets/img/stereo-imaging/IMG_4112_111032.webp' 'Camera deployed near the sensor' %}

First, Ground control points are surveyed using RTK devices and deployed for georeferencing purposes.
{% maincolumn 'assets/img/stereo-imaging/IMG_4089_111105.webp' 'Ground Control Points' %}

After 3D reconstruction, we are able to obtain a 3D point cloud of wave fields, frame by frame. 

{% maincolumn 'assets/img/stereo-imaging/project1_2.webp' 'Stereo Reconstruction example'%}

{% maincolumn 'assets/img/stereo-imaging/IMG_4045_111132.webp' 'Waves breaking at Manlipo, South Korea' %} 

<!-- {% maincolumn 'assets/img/stereo-imaging/IMG_4048_111132.webp' '' %} -->

## Expected Outcomes

- Development of low-cost stereo imaging system for coastal wave monitoring
- Validation against traditional wave measurement techniques
<!-- - Open-source software package for wave field analysis -->
- Publications in coastal engineering journals

## Timeline

**May 2025 - August 2025**: System development and laboratory testing  
**September 2025 - November 2025**: Field deployment and data collection  
**December 2025**: Data analysis and report preparation

## Future Applications

This technology could be applied to:
- Beach erosion monitoring
- Coastal infrastructure design
- Surfing condition assessment
- Climate change impact studies on coastal systems

*This project is ongoing and expected to be completed in December 2025. Information about publication will be added later.*
