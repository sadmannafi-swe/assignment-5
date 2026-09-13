# 🧱 Dev Stack Builder

A modern and responsive *Dev Stack Builder* website built with React.js. It allows developers to explore different technologies and build their own personalized technology stack.

Users can browse technologies, view their details, add technologies to their stack, remove individual technologies, and clear the entire stack.

---

## 🌐 Live Site

*Live Website:* [https://assignment-5-drab-two.vercel.app/]

---

## ✨ Features

- 🔎 Explore different technologies with their name, description, category, difficulty, rating, icon, and badge.
- 🧰 Build and manage a personal technology stack by adding and removing technologies.
- 🔔 Get toast notifications for adding, removing, duplicate attempts, and removing all technologies.
- 📱 Fully responsive design for mobile, tablet, and desktop devices.
- ⚡ Technology data is loaded dynamically from a separate JSON file.
- ⏳ Includes a loading state while technology data is being fetched.
- 🎨 Uses a shared Orange → Pink → Violet gradient theme throughout the website.
- 🚫 Prevents the same technology from being added to the stack more than once.

---

## 🛠️ Technologies Used

- *React.js*
- *JavaScript (ES6+)*
- *Tailwind CSS*
- *DaisyUI*
- *React-Toastify*
- *JSON*
- *Vite*
- *React Hooks*
  - useState
  - useEffect

---

## 📋 Technology Data

Technology information is stored in a separate JSON file instead of being hardcoded inside the React components.

Each technology contains:

- id
- name
- category
- description
- icon
- rating
- difficulty
- badge

### Technology Categories

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

---

## 🎯 Website Sections

### 🧭 Navbar

The navbar includes:

- Dev Stack brand logo and name
- Home
- Technologies
- Projects
- About
- Contact
- Sign In
- Sign Up

The navbar remains sticky at the top while scrolling.

On small devices, the navbar changes into a responsive mobile layout with a hamburger menu.

---

### 🎯 Hero Section

The hero section includes:

- Two-tone heading
- Gradient highlighted text
- Description
- Explore Technologies button
- Learn More button
- Banner image

The primary button uses the shared brand gradient.

---

### 🃏 Technology Cards

Technology cards are displayed in a responsive grid.

Each card contains:

- Technology icon
- Badge
- Technology name
- Description
- Category chip
- Difficulty level
- Rating with star
- Add to Stack button

### Responsive Grid

- 📱 Mobile: 1 column
- 📟 Tablet: 2 columns
- 💻 Desktop: 3 columns

---

### 🧰 Your Stack

The *Your Stack* section displays all technologies selected by the user.

Each selected technology contains:

- Icon
- Name
- Category
- Remove button

The section also displays the number of selected technologies.

When no technology is selected, an empty-state message is displayed.

Users can remove an individual technology or use the *Remove All* button to clear the complete stack.

---

## ➕ Add to Stack

Clicking the *Add to Stack* button adds the selected technology to the user's stack.

The same technology cannot be added twice.

If a technology has already been added, the user receives a warning toast notification.

After successfully adding a technology, its button becomes disabled and changes to:

*✓ Added to Stack*

---

## ❌ Remove Technology

Clicking the remove button on a stack item removes only that selected technology from the stack.

A toast notification is displayed after removing an item.

---

## 🗑️ Remove All

The *Remove All* button clears all selected technologies from the user's stack at once.

A toast notification is displayed after the stack is cleared.

---

## 🔔 React-Toastify

The project uses *React-Toastify* to provide user-friendly notifications.

Toast notifications are displayed for:

- ✅ Technology added successfully
- ⚠️ Duplicate technology add attempt
- ❌ Technology removed
- 🗑️ All technologies removed

---

## ⏳ Loading State

A loading state is implemented while the technology data is being fetched from the local JSON file.

Since the JSON file is local, the loading state may only be visible for a few milliseconds, which is expected.

---

## 🎨 Gradient Brand Theme

The project uses one shared gradient theme:

*Orange → Pink → Violet*

The gradient is used for:

- Dev Stack brand name
- Hero heading highlight
- Primary buttons

The gradient is defined in one place so the complete theme can easily be changed or re-themed.

---

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices
- 📟 Tablets
- 💻 Desktop screens

The layout automatically adapts according to the screen size.

The mobile navbar also provides a hamburger menu for easier navigation.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for *JavaScript XML*. It allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes UI code easier to write, read, and understand.

---

## 2. What is the difference between props and state?

*Props* are used to pass data from a parent component to a child component. Props are read-only.

*State* is data managed inside a component and can change over time.

In this project, technology information can be passed through props, while the selected technology stack is managed using state.

---

## 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows a React component to store and update data.

I used useState to manage the selected technologies in the *Your Stack* section.

    const [stack, setStack] = useState([]);

When a user adds or removes a technology, the state is updated and React automatically updates the UI.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component.

I used useEffect to fetch the technology data from the local JSON file when the application loads.

    useEffect(() => {
      fetch("/technologies.json")
        .then((res) => res.json())
        .then((data) => setTechnologies(data));
    }, []);

This allows the technology data to be loaded dynamically instead of hardcoding the data inside the component.

---

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key for each item in a list so it can identify each item correctly.

It helps React understand which items have changed, been added, or been removed and update the UI efficiently.

For example:

    technologies.map((technology) => (
      <TechnologyCard
        key={technology.id}
        technology={technology}
      />
    ))

Here, the unique technology id is used as the key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

I used conditional rendering in the *Your Stack* section.

If no technology is selected, an empty message is displayed. Otherwise, the selected technologies are shown.

    {stack.length === 0 ? (
      <p>Your Stack is empty</p>
    ) : (
      stack.map((technology) => (
        <StackItem
          key={technology.id}
          technology={technology}
        />
      ))
    )}

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using *props*.

For example:

    <TechnologyCard
      technology={technology}
      onAdd={handleAdd}
    />

Here, technology and onAdd are passed from the parent to the child.

The child can send information back to the parent by calling the function received through props.

    <button onClick={() => onAdd(technology)}>
      Add to Stack
    </button>

This allows the parent component to manage the main application state.

---

# 📂 Project Structure

    src/
    ├── assets/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── TechnologyCard.jsx
    │   ├── TechnologySection.jsx
    │   ├── Stack.jsx
    │   ├── StackItem.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── technologies.json
    ├── App.jsx
    ├── main.jsx
    └── index.css

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

---

## Installation

### 1. Clone the repository

    git clone YOUR_GITHUB_REPOSITORY_URL

### 2. Navigate to the project directory

    cd dev-stack-builder

### 3. Install dependencies

    npm install

### 4. Start the development server

    npm run dev

The project will run on the local development server provided by Vite.

---

# 📦 Build for Production

To create a production build:

    npm run build

To preview the production build:

    npm run preview

---

# 👨‍💻 Author

## Sadman Nahial Nafi

Software Engineering Student  
Daffodil International University

- *GitHub:* sadmannafi-swe
- *Portfolio:* sadmannafi.com