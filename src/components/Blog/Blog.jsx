import React from 'react';

const Blog = () => {
    return (
        <div className='w-full my-8'>
            <h1 className='text-4xl text-amber-500 text-center font-bold my-4'>Some Important Questions Answers</h1>
            <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                <p className='text-2xl font-bold mb-4'>Q1. When should you use context API?</p>
                <p className='text-lg font-light text-justify mb-2'><strong className='font-bold'>Ans:</strong> The Context API in React is primarily used to manage global application state and avoid the prop drilling problem that can occur when passing data down through multiple levels of nested components. You should use the Context API when you have data or functionality that needs to be shared across multiple components in your application. This can include things like user authentication information, theming data, or any other type of global state that needs to be accessed by multiple components. However, it is important to note that using Context should be considered carefully, as it can add complexity to your application and may not be necessary for smaller applications. You should also consider using other state management solutions such as Redux or MobX if your application's state management needs become more complex.</p>
            </div>
            <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                <p className='text-2xl font-bold mb-4'>Q2. What is a custom hook?</p>
                <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> A custom hook is a reusable function in React that encapsulates stateful logic and can be used across multiple components. By using existing React hooks, custom hooks can be created to abstract away complex behavior and simplify the code in your components. They are created using the "use" prefix and can be used to extract logic that is common to multiple components and to implement higher-level abstractions that can be used throughout your application. Overall, custom hooks are a powerful tool that can help you write cleaner, more maintainable code in React.</p>
            </div>
            <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                <p className='text-2xl font-bold mb-4'>Q3. What is useRef?</p>
                <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> useRef is a React hook that creates a reference to an element or a value in a functional component. The reference created with useRef is mutable, which means that it can be modified without triggering a re-render of the component. This hook is commonly used to access and modify the properties of a DOM element, such as setting the focus to a text input or animating an element when a certain condition is met. The useRef hook returns an object with a single property called current, which can be used to access and modify the value of the reference. One important thing to note about useRef is that it does not trigger a re-render when the value of the reference changes. This makes it different from state variables, which do trigger a re-render when their value changes. Instead, useRef is designed for cases where you need to maintain a reference to a value or element that doesn't need to trigger a re-render when it's modified.</p>
            </div>
            <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                <p className='text-2xl font-bold mb-4'>Q4. What is useMemo?</p>
                <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> useMemo is a React Hook that allows you to memoize the result of a function that is expensive to compute. It works by caching the result of a function and returning the cached result when the function is called again with the same set of arguments. This can help improve the performance of your React application by avoiding unnecessary re-computations of expensive functions.</p>
            </div>
        </div>
    );
};

export default Blog;