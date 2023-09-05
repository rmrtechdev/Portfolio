
import './lightning.css'
import Folder from '../Media/Images/encom_folder_big.png'
import React, { useEffect, useState, useRef } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { GiWhiteBook } from 'react-icons/gi';

function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
       <img src={Folder} alt="Folder" />
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
         
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1,
         backgroundColor: '#181818',
         color: 'white',
         fontSize: '18px' }}> Data Structures & Algo's.</Typography>
      </Popover>
    </div>
  );
}


const charToKeyCode = (char) => {
  if (char === "SHIFT1" || char === "SHIFT2") {
    // Replace with the actual key codes for SHIFT1 and SHIFT2
    return char === "SHIFT1" ? 16 : 16; // Example: 16 for SHIFT
  } else if (char === "SPACE") {
    return 32;
  }

  var cc = char.charCodeAt(0);
  if (cc <= 122 && cc >= 97) {
    return cc - 32;
  } else if (char === ".") {
    return 190;
  } else if (char === "$") {
    return 13;
  } else if (char === "|") {
    return 27;
  }

  return 0;
};



const KeyboardKey = ({ onClick, char, active }) => {
  const [isKeyActive, setIsKeyActive] = React.useState(false);


 

  const handleKeyPress = () => {
    setIsKeyActive(true);
    onClick(char);

    setTimeout(() => {
      setIsKeyActive(false);
    }, 160);
  };

  React.useEffect(() => {
    const keyPressListener = (e) => {
      if (charToKeyCode(char) === e.keyCode) {
        setIsKeyActive(true);
        setTimeout(() => {
          setIsKeyActive(false);
        }, 160);
      }
    };

    window.addEventListener("keydown", keyPressListener);

    return () => {
      window.removeEventListener("keydown", keyPressListener);
    };
  }, [char]);



    React.useEffect(() => {
      const KeyClickListener = (e) => {
        if (charToKeyCode(char) === e.keyCode) {
          setIsKeyActive(true);
          setTimeout(() => {
            setIsKeyActive(false);
          }, 160);
        }
      };

    window.addEventListener("keydown", KeyClickListener);

    return () => {
      window.removeEventListener("keydown", KeyClickListener);
    };
  }, [char]);

  return (
    <div
      className={`key ${active ? "key-white" : "key-blue"} ${
          isKeyActive ? "key-click-effect" : ""
      }`}
      onClick={handleKeyPress}
    >
      {char}
    </div>

    
  );
};


const Keyboard = () => {
  const commandTextRef = React.useRef(null);
  const [activeKeys, setActiveKeys] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (commandTextRef.current && !commandTextRef.current.contains(e.target)) {
        if (document.activeElement !== commandTextRef.current) {
          commandTextRef.current.focus();
        }
      }
    };
  
    window.addEventListener("click", handleClickOutside);
  
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  
  const handleKeyPress = (char) => {
    writeKeyStroke(char);

    setInputValue((prevInputValue) => prevInputValue + char); // Append the pressed character

    
    setActiveKeys((prevActiveKeys) =>
      prevActiveKeys.includes(char)
        ? prevActiveKeys.filter((key) => key !== char)
        : [...prevActiveKeys, char]
    );
  };


  const writeKeyStroke = (char) => {
    const txt = commandTextRef.current;
    if (!txt) return; // Ensure txt is not null before accessing properties

    // Rest of the writeKeyStroke function remains unchanged
  };


  const keyboardLayout = [
    ["ESC", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "_", "BACK"],
    ["TAB", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "()", "ENTER"],
    ["CAPS", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "ENTER"],
    ["SHIFT1", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "SHIFT2"],
    ["SPACE"]
  ];


  
  return (

    
    <div className="wrapper">

      <div className="image-container">
      <MouseOverPopover />


      </div>
      
   
     
      <div className="input-container">
        <input
          type="text"
          ref={commandTextRef}
          className="command-text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
          style={{ caretColor: "#08ffd8" }}
        />
      </div>
   
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((char, colIndex) => (
              <KeyboardKey
              key={char}
             
              onClick= {handleKeyPress}
                
              
              char={char}
              active={activeKeys.includes(char)}
              />
            ))}
          </div>
        ))}
     

    </div>

  );
};

export default Keyboard;

