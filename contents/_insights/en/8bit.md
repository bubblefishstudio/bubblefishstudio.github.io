---
title: "8-bit Art"
date: 2022-01-02
author: Matteo
---

For this episode of the "Music Creation 2022" challenge, I wanted to propose a simple 8-bit style theme synchronised with some pixel-art graphics.

Back in the days, music for video-games was made using really simple technology. Simple square wave, sine wave or triangle wave oscillators were used.
Thus I made the soundtrack by layering 5 tracks of oscillators. The main theme is played by a triangle wave oscillator, the harmony is played by a sawtooth wave oscillator, while the remaining tracks are used to create the drum sounds (kick, snare and bell), which are obtained by layering filtered noises and various fundamental frequencies.

What matters more, however, is the composition part. The harmonic progression is quite typical and in C major. In particular, the first part jumps across tonic and dominant, while in the second part the tonic is replaced by the subdominant, and final tension is created by using a diminished chord on the raised fourth. Finally, the contour of the theme and the rhythm are inspired by Super Mario's theme.

For the graphical part I got the inspiration from Conway's "Game of Life", which is a notorious pixel-art graphic modelled using cellular automata. I didn't use the exact same transition rules of Conway's, but with some trial and error I got a set of rules that produce an interesting pattern of expanding squares. In particular, a cell stays alive if there are exactly 1 or 2 alive neighboors, while a dead cell spawns alive when there's exactly 1 alive neighboor. The rendering is done using Processing on a 160x90 matrix, where boundary conditions are periodic so patterns can expand indefinitely. The first initial configuration is generated using a uniform distribution where every cell has a probability of 0.0001 of being alive. Lastly, I set the animation to 6fps, in order to get a frame every 16th note of the music track.

The final result is quite effective and I had a great fun doing this little project, so stay tuned for more ;)