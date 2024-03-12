# React Counter App

A simple React counter app with state management using the `useReducer` hook. The app allows users to count, save the count in local storage, reset the count, change the theme, set a custom count, and set a maximum count limit.

## Features

- **Counting:**

  - Increment and decrement the count using the "+" and "-" buttons.

- **Local Storage:**

  - Save the current count to local storage, ensuring the count persists even after page reloads.

- **Reset:**

  - Reset the count to zero with the "Reset" button.

- **Theme Change:**

  - Toggle between light and dark themes to customize the app's appearance.

- **Set Custom Count:**

  - Set a custom count value using the "Set Count" button.

- **Maximum Count Limit:**
  - Set a maximum limit for the count to prevent surpassing a certain value.

Inspired by [simplecounter.app](https://simplecounter.app/).

## Technologies Used

- React.js
- `useReducer` hook
- Local Storage API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/counter-app.git
   ```

2. Change into the project directory:

```bash
 cd counter-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit [(http://localhost:3000)] to see the app in action.

## Usage

1. **Counting:**

   - Use the "+" and "-" buttons to increment and decrement the count.

2. **Reset:**

   - Click the "Reset" button to reset the count to zero.

3. **Theme Change:**

   - Toggle the theme using the "Change Theme" button.

4. **Set Custom Count:**

   - Set a custom count value using the "Set Count" button.

5. **Maximum Count Limit:**
   - Define a maximum count limit using the provided input field.

### Example

Let's walk through a simple example to illustrate the usage:

- Initially, the count is set to zero.

- Click the "+" button three times to increase the count to 3.

- Press the "Reset" button to bring the count back to zero.

- Toggle the theme using the "Change Theme" button to switch between light and dark themes.

- Use the "Set Count" button to input a custom count value, e.g., 10.

- Enter a maximum count limit, preventing the count from exceeding the specified value.

Feel free to explore and interact with the app to discover its various features.
