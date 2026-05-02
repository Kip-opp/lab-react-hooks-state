# Dynamic Shopping App with React Hooks

This project is a small React shopping app built with `useState` to manage UI behavior and user interactions. The app supports theme switching, cart updates, and category-based product filtering while keeping the interface responsive and easy to use. The `useState` hook is the standard React tool for local component state such as toggles, selected filters, and cart contents. [web:301][web:302]

## Features

- Dark mode toggle with dynamic button text.
- Add-to-cart functionality for grocery items.
- Category filter using a dropdown menu.
- Optional cart total showing how many items were added.
- Responsive UI with consistent styling across states.

## Core Functionality

### Dark Mode
Users can switch between light and dark mode using a button. Theme state is managed with `useState`, and the button label updates based on the current mode. [web:301][web:306]

### Add to Cart
Each product includes an **Add to Cart** button. When clicked, the selected item is added to the cart and displayed with text such as `Milk is in your cart.` Shopping cart state is commonly modeled as an array in React and updated immutably with state setters. [web:300][web:308]

### Category Filter
A dropdown allows users to filter visible products by category. When a category is selected, only matching products are rendered. Filtering the rendered product list from state is a common React pattern for simple UI controls. [web:300][web:307]

### Bonus: Cart Total
The application can also display the total number of items currently added to the cart. This total should update automatically as the cart changes. Derived totals like this are typically computed from existing state rather than stored separately when possible. [web:300][web:310]

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the tests:

```bash
npm test
```

Vite is a common development setup for React apps and is designed for fast local startup and hot reload. [web:290]

## Expected Behavior

- The dark mode button toggles the UI theme and updates its label.
- Clicking **Add to Cart** adds the selected item to the cart display.
- Selecting a category filters the visible products.
- The cart total updates dynamically as items are added.
- The app remains functional and visually consistent across interactions.

## Recommended Structure

```bash
src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   └── CategoryFilter.jsx
└── styles/
```


## Resources

- [React Docs: useState](https://react.dev/reference/react/useState)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
