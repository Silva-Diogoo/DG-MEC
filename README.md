# 🚚 LogisticsPro - Sistema de Logística

Sistema web completo para gerenciamento de logística, rastreamento de encomendas e cotação de fretes, inspirado em DHL e DSV.

## 🎨 Design

- **Cores principais**: Amarelo (#EAB308) e Cinza (#1F2937)
- **Framework CSS**: Tailwind CSS 3.3
- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript

## ✨ Funcionalidades

- **Rastreamento de Encomendas**: Sistema completo com timeline visual
- **Página de Serviços**: Apresentação de todos os serviços logísticos
- **Formulário de Contato**: Sistema interativo de contato
- **Design Responsivo**: Totalmente adaptável para mobile, tablet e desktop
- **Interface Moderna**: Inspirada em DHL e DSV

## Project Structure

```
logistics-app
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── tracking
│   │   │   ├── page.tsx
│   │   │   └── [code]
│   │   │       └── page.tsx
│   │   ├── services
│   │   │   └── page.tsx
│   │   ├── about
│   │   │   └── page.tsx
│   │   └── contact
│   │       └── page.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── TrackingForm.tsx
│   │   └── ServiceCard.tsx
│   ├── services
│   │   └── trackingServices.ts
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── globals.css
├── public
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Getting Started

To get started with the Logistics App, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/logistics-app.git
   cd logistics-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React**: A JavaScript library for building user interfaces.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.