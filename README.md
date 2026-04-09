# <p align="center">luxury-restaurant-landing</p>
Landing page on the theme of the Luxury Restaurant. Built using React, Next.js, TypeScript, Tailwind CSS, Resend, Unisender, react-hook-form, Zod, Swiper.

## Contents 
0. [View](#view)
1. [Target](#target)
2. [Responsive Design](#responsive-design)
    1. [Mobile](#mobile)
    2. [Tablet](#tablet)
    3. [Desktop](#desktop)
4. [Unisender template](#unisender-template)
5. [Deploy on Vercel](#deploy-on-vercel)
6. [Setup](#setup)
7. [Getting Started](#getting-started)
8. [Link to the layout](#link-to-the-layout)
9. [What problems did I encounter?](#what-problems-did-i-encounter)
10. [Features](#features)
   
## View

<p align="center">
  <img width="897" height="579" src="https://github.com/user-attachments/assets/a640f9f0-141f-4835-b23a-9bb440793365" />
</p>    

[:arrow_up:Contents](#contents)    

## Target
The project was created as a training project to develop layout skills using Tailwind CSS, Swiper, react-hook-form, nodemailer, Resend. 

[:arrow_up:Contents](#contents) 

## Responsive Design

### Mobile
<p align="center">
  <img width="315" height="635" src="https://github.com/user-attachments/assets/71be77ea-6352-4ab7-bfdd-ef63128626f9" />
</p>

[:arrow_up:Contents](#contents) 

### Tablet
<p align="center">
  <img width="762" height="631" src="https://github.com/user-attachments/assets/8f48d7b0-ea38-4708-9234-e56228d0b559" />
</p>

[:arrow_up:Contents](#contents) 

### Desktop
<p align="center">
  <img width="1279" height="799" src="https://github.com/user-attachments/assets/cff4434b-39a5-44b0-8539-e3f49e962c6a" />
</p>

[:arrow_up:Contents](#contents) 

## Unisender template
<p align="center">
  <img width="914" height="620" src="https://github.com/user-attachments/assets/43d49002-8057-4a4f-bfe6-5ddbb2503546" />
</p>

[:arrow_up:Contents](#contents) 

## Deploy on Vercel
https://luxury-restaurant-landing.vercel.app/

[:arrow_up:Contents](#contents) 

## Setup

1. Go to the folder where you want to store the project.

2. Clone the repository:
```bash
git clone https://github.com/Tanya57790/luxury-restaurant-landing.git
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

[:arrow_up:Contents](#contents) 

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run the build and start production server:
```bash
npm run build:start
# or
yarn build:start
# or
pnpm build:start
# or
bun build:start
```

[:arrow_up:Contents](#contents) 

## Link to the layout

```
https://www.figma.com/design/qu5s4RrbEUiZphrv3IjNMB/Luxury-Restaurant-Landing-Page--Community-?node-id=54-46&t=yKyQuaONZEkk0ID8-0
```
If you want practice your skills.

[:arrow_up:Contents](#contents) 

## What problems did I encounter?
:heavy_multiplication_x: Choosing between Nodemailer and Resend. Nodemailer doesn't work reliably in Vercel, unlike Resend, so Resend's free plan is better suited for contact forms.    
:heavy_multiplication_x: Performance. Despite using WEBP images, code splitting, and optimizations in next.config.ts, Lighthouse yielded low scores of around 40-60. Using [WebPageTest](https://webpagetest.org/) yields more consistent results.    
:heavy_multiplication_x: Development speed. The mockup and API development took 27 days, and the timeframe is getting shorter with each project. In the future, I plan to use my own templates to speed up development.   

[:arrow_up:Contents](#contents) 

## Features
:heavy_check_mark: Modern form with feedback    
:heavy_check_mark: Form sending via email using Resend    
:heavy_check_mark: Form validation using Zod    
:heavy_check_mark: Fully responsive (mobile-first)    
:heavy_check_mark: TypeScript typing    

[:arrow_up:Contents](#contents) 


## Author
<a href="https://github.com/Tanya57790">Tanya57790</a>

## License
MIT License
