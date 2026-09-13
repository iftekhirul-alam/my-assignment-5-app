# Technology Learning Platform

## 📌 Project Overview

**Technology Learning Platform** is a responsive web application designed for technology enthusiasts and learners who want to explore different fields of technology used in the real world.

The platform allows users to discover various technology stacks, explore areas that match their interests, and build their own personalized **Tech Stack** by selecting the technologies they are interested in.


## 🛠️ Technologies Used

- **React**  Component-based UI development
- **TSX (TypeScript + JSX)**  Building React components with type safety
- **Tailwind CSS**  Responsive styling and modern UI design
- **React Toastify**  Toast notifications for user interactions

## 🚀 Key Features

- **Interactive Click Events**  
  React event handling is used to manage user interactions and dynamically update the Your Stack Section.

- **Toast Notifications**  
  **React Toastify** provides instant toast notifications when a technology is successfully added to the user's Tech Stack.

- **Responsive Design**  
  The website is fully responsive and automatically rearranges its layout to provide a better experience on smaller screens.

- **Mobile-Friendly Interface**  
  The layout, cards, navigation, and content are optimized for mobile devices as well as larger displays.



## 🎯 Project Purpose

This project was developed to practice and demonstrate modern frontend development concepts, including:

- React component architecture
- React state management
- Event handling
- Dynamic rendering
- TypeScript with TSX
- Tailwind CSS responsive design
- Third-party library integration
- Mobile-first web development

## 🔮 Future Improvements

Possible future improvements include:

- Add technology search functionality
- Add technology categories and filtering
- Provide detailed information about each technology
- Add technology learning resources
- Save the user's Tech Stack using local storage
- Add authentication and personalized user profiles
- Add dark mode
- Improve accessibility

## 👨‍💻 Author

**Md. Iftekhirul Alam**


1. What is JSX, and why is it used in React?
  - JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML code directly in a JavaScript files

2. What is the difference between props and state?
  - *Props* is like function arguments, it allow data to flow downward from a parent component to a child component.

  *state* work like a component's private memory. It tracks dynamic information that changes based on user interaction.

3. What does the `useState` hook do, and where did you use it in this project?
 - `useState` is use for manage state of a component.
    Step 1: Initialization: We pass an initial value to useState
    Step 2: Destructuring: It returns an array containing two items:
        * The current state value.
        * A setter function used to update that value.
    Step 3: Re-rendering: Whenever call the setter function, React automatically re-runs the component to reflect the new state on the screen.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
  - `useEffect` used to handle side effects in functional components.

5. Why does every item in a `.map()` list need a unique `key` prop?
  - As React use Virtual DOM, `key` helps to compare or reconciliation to update the changes efficiently.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  - Its a process of displaying different UI elements or components based on conditions. Such as whether a user is logged in, whether data is still loading, or whether a list/stack has items.


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
 - In React data flows in one direction that is top-down. But sometimes children need to change data or elements of their parents.
  Parent to Child: Passing Data via Props like passing an argument into a function.

  Child to Parent: Passing Data via Callback Functions
   * The parent creates a function that accepts data.
   * The parent passes that function down to the child as a prop.
   * The child calls that function and passes data into it as an argument when an event happens.
   * The parent's function executes, capturing the data and updating its own state.