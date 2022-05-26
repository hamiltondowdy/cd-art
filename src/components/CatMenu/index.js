import React, { useState, render } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import "./style.css";

function CatMenu () {




        // The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  
  return(
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} variant="success">
        <a>Categories</a>
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1">Landscape</Dropdown.Item>
        <Dropdown.Item eventKey="2">Still Life</Dropdown.Item>
        <Dropdown.Item eventKey="3">
          Portrait
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Inquire</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
    
}

export default CatMenu;