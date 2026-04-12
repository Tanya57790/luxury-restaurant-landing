# <p align="center">luxury-restaurant-landing</p>
<div align="center">   
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=grey) 
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) 
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
  ![Swiper](https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=white)
  ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)
  ![Zod](https://img.shields.io/badge/Zod-408AFF?logo=zod&logoColor=white)
  ![Resend](https://img.shields.io/badge/Resend-000000?logo=resend&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
  ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)  
  
</div>




## View

<p align="center">
  <img alt="Luxury Restaurant responsive landing page homepage with hero section" width="897" height="579" src="https://github.com/user-attachments/assets/a640f9f0-141f-4835-b23a-9bb440793365" />
</p>    

## Features
:heavy_check_mark: Modern form with feedback    
:heavy_check_mark: Form sending via email using Resend    
:heavy_check_mark: Form validation using Zod    
:heavy_check_mark: Fully responsive (mobile-first)    
:heavy_check_mark: TypeScript typing    

## Responsive Design

### Mobile
<p align="center">
  <img alt="Luxury Restaurant responsive landing page homepage with hero section on mobile" width="315" height="635" src="https://github.com/user-attachments/assets/71be77ea-6352-4ab7-bfdd-ef63128626f9" />
</p>

### Tablet
<p align="center">
  <img alt="Luxury Restaurant responsive landing page homepage with hero section on tablet" width="762" height="631" src="https://github.com/user-attachments/assets/8f48d7b0-ea38-4708-9234-e56228d0b559" />
</p>

### Desktop
<p align="center">
  <img alt="Luxury Restaurant responsive landing page homepage with hero section on desktop" width="1279" height="799" src="https://github.com/user-attachments/assets/cff4434b-39a5-44b0-8539-e3f49e962c6a" />
</p>

## Unisender template
<p align="center">
  <img alt="Desktop email from Luxury Restaurant landing page" width="914" height="620" src="https://github.com/user-attachments/assets/43d49002-8057-4a4f-bfe6-5ddbb2503546" />
</p>

## Deploy on Vercel
https://luxury-restaurant-landing.vercel.app

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

## Link to the layout

```
https://www.figma.com/design/qu5s4RrbEUiZphrv3IjNMB/Luxury-Restaurant-Landing-Page--Community-?node-id=54-46&t=yKyQuaONZEkk0ID8-0
```
If you want practice your skills.

## Development Issues
:heavy_multiplication_x: Choosing between Nodemailer and Resend. Nodemailer doesn't work reliably in Vercel, unlike Resend, so Resend's free plan is better suited for contact forms.    
:heavy_multiplication_x: Performance. Despite using WEBP images, code splitting, and optimizations in next.config.ts, Lighthouse yielded low scores of around 40-60. Using [WebPageTest](https://webpagetest.org/) yields more consistent results.    
:heavy_multiplication_x: Development speed. The mockup and API development took 27 days, and the timeframe is getting shorter with each project. In the future, I plan to use my own templates to speed up development.   

## Author
<a href="https://github.com/Tanya57790">Tanya57790</a>

## License
MIT License
