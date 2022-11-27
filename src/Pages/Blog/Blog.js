import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container text-left px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">1 What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? <br /><br />

                            In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. <br /><br />

                            <strong>There are four main types of state you need to properly manage in your React apps:</strong> <br /><br />

                            <ul>
                                <li>Local state</li>
                                <li>Global state</li>
                                <li>Server state</li>
                                <li>URL state</li>
                            </ul>

                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">2 How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                            Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                            JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                            Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">3 What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.

                            Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast. <br /><br />
                            <strong>There are two types of unit testing:</strong>
                            <ul>
                                <li>Manual unit testing</li>
                                <li>Automated unit testing</li>
                            </ul>
                            <br /><br />
                            <strong>Why Do We Need Unit Testing?</strong> <br /><br />

                            To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                            Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                            Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                            It simplifies the debugging process.
                            Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                            Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                            Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">4 React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:

                            “The modern web developer’s platform”

                            It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.



                            React is considered a UI library. They define themselves as:

                            “A JavaScript library for building user interfaces”

                            Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.



                            Last but not least, Vue.js is, according to its site:

                            “A progressive JavaScript framework”

                            Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.



                            These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;