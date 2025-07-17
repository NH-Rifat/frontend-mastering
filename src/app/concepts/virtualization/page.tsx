'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Virtualization = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Tutorial sections with progressive code evolution
  const sections = [
    {
      title: "Step Zero: Review",
      content: "Let's review some basic concepts. We'll use this React app, just three lines of code. The first one defines a React element. The next one gets a node from the DOM. The last one renders the React element into the container.",
      code: `const element = <h1 title="foo">Hello</h1>;
const container = document.getElementById("root");
ReactDOM.render(element, container);`
    },
    {
      title: "JSX Transformation",
      content: "JSX is transformed to JS by build tools like Babel. The transformation is usually simple: replace the code inside the tags with a call to createElement, passing the tag name, the props and the children as parameters.",
      code: `const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
);
const container = document.getElementById("root");
ReactDOM.render(element, container);`
    },
    {
      title: "React Element Object",
      content: "React.createElement creates an object from its arguments. Besides some validations, that's all it does. So we can safely replace the function call with its output.",
      code: `const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};
const container = document.getElementById("root");
ReactDOM.render(element, container);`
    },
    {
      title: "Custom createElement Function",
      content: "Let's start by writing our own createElement. An element is an object with type and props. The only thing that our function needs to do is create that object.",
      code: `function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const element = createElement("h1", { title: "foo" }, "Hello");
const container = document.getElementById("root");
ReactDOM.render(element, container);`
    },
    {
      title: "Custom render Function",
      content: "Next, we need to write our version of the ReactDOM.render function. For now, we only care about adding stuff to the DOM. We'll handle updating and deleting later.",
      code: `function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child =>
    render(child, dom)
  );

  container.appendChild(dom);
}

const element = createElement("h1", { title: "foo" }, "Hello");
const container = document.getElementById("root");
render(element, container);`
    },
    {
      title: "Concurrent Mode Setup",
      content: "There's a problem with recursive rendering. Once we start rendering, we won't stop until we have rendered the complete element tree. If the element tree is big, it may block the main thread for too long.",
      code: `function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(nextUnitOfWork) {
  // TODO
}

function render(element, container) {
  // Set up work in progress root
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}`
    },
    {
      title: "Fiber Implementation",
      content: "To organize the units of work we'll need a data structure: a fiber tree. We'll have one fiber for each element and each fiber will be a unit of work.",
      code: `function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name];
    });

  return dom;
}

let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    );
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;

  while (index < elements.length) {
    const element = elements[index];

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }

  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}`
    },
    {
      title: "Hooks Implementation",
      content: "Now that we have function components let's also add state. We need to initialize some global variables before calling the function component so we can use them inside of the useState function.",
      code: `function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

let nextUnitOfWork = null;
let currentRoot = null;
let wipRoot = null;
let deletions = null;
let wipFiber = null;
let hookIndex = null;

function useState(initial) {
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach(action => {
    hook.state = action(hook.state);
  });

  const setState = action => {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot;
    deletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.state, setState];
}

function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = [];
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

// Complete Didact implementation
const Didact = {
  createElement,
  render,
  useState,
};

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  );
}
const element = <Counter />;
const container = document.getElementById("root");
Didact.render(element, container);`
    }
  ];

  // Scroll handler to detect active section with smooth transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          const sectionCenter = sectionTop + (rect.height / 2);
          
          // Change active section when it reaches the center of viewport
          if (scrollY + windowHeight / 2 >= sectionCenter - rect.height / 4) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30">
      {/* Header */}
      <div className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6"
          >
            Build Your Own React
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Learn React internals by building it from scratch. Follow along with the interactive code examples.
          </motion.p>
        </div>
      </div>

      {/* Main Content with Split Layout */}
      <div className="container mx-auto px-6 pb-16">
        <div className="flex gap-8 lg:gap-12">
          {/* Left Side - Sticky Code Display */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-8">
              <motion.div
                className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 border border-gray-700 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">
                    {sections[activeSection]?.title || 'React Implementation'}
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Live Code</span>
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <motion.pre 
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="text-green-400 text-sm font-mono leading-relaxed overflow-x-auto min-h-[400px] max-h-[600px] overflow-y-auto"
                  >
                    <motion.code
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {sections[activeSection]?.code || '// Code will appear here as you scroll'}
                    </motion.code>
                  </motion.pre>
                  
                  {/* Code evolution indicator */}
                  <div className="absolute bottom-2 right-2 bg-gray-800 rounded-lg px-3 py-1 border border-gray-600">
                    <span className="text-xs text-gray-400">
                      Step {activeSection + 1}/{sections.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="w-full lg:w-1/2 space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                ref={el => { sectionsRef.current[index] = el; }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6 }}
                className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  activeSection === index 
                    ? 'border-blue-300 dark:border-blue-600 shadow-lg shadow-blue-500/10' 
                    : 'border-gray-200/50 dark:border-gray-700/50'
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                  <span className="text-2xl">
                    {index === 0 ? '🎯' : index === 1 ? '⚛️' : index === 2 ? '📦' : 
                     index === 3 ? '🛠️' : index === 4 ? '🎨' : index === 5 ? '⚡' : 
                     index === 6 ? '🧵' : '🪝'}
                  </span>
                  {section.title}
                </h2>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>

                {/* Mobile Code Display */}
                <div className="lg:hidden mt-6">
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 border border-gray-700">
                    <pre className="text-green-400 text-sm font-mono leading-relaxed overflow-x-auto">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Step {index + 1} of {sections.length}
                  </span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / sections.length) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">🎉 Congratulations!</h3>
              <p className="text-lg mb-6 text-blue-100">
                You've learned how React works under the hood by building your own version!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://pomb.us/build-your-own-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  📚 Read Full Tutorial
                </motion.a>
                
                <motion.a
                  href="https://codesandbox.io/s/didact-8-21ost"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  ⚡ Try Live Demo
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtualization;
