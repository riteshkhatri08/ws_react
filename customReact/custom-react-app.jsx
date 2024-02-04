

// This is fairly close to how react stores element in memory 
// before rendering them
const customReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Visit google.com'
}


// Similar to render from react,  
function customRender(reactElement, container) {
    console.log("START RENDERING - " + reactElement.type)

    // ! It is tough to add attributes one by one , 
    // ! use a loop instead
    /* * 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
     container.appendChild(domElement);
    */

    // ? Better way to do same

    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        // skip for children
        if (prop == 'children') continue;
        domelement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domelement);


    console.log("FINISHED RENDERING")
}


// Get div in which react componenets are  rendered
const mainContainer = document.querySelector("div")


// call render function
customRender(customReactElement, mainContainer);
