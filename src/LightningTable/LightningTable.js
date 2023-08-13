
import './lightning.css'
import Folder from '../Media/encom_folder_big.png'
import React, { useEffect, useState, useRef } from "react";





 

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
  const [isClicked, setIsClicked] = React.useState(false);
  const [isKeyActive, setIsKeyActive] = React.useState(false);

  const handleKeyPress = () => {
    setIsClicked(true);
    setIsKeyActive(true);
    onClick(char);

    setTimeout(() => {
      setIsClicked(false);
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

  return (
    <div
      className={`key ${active ? "key-white" : "key-blue"} ${
        isClicked || isKeyActive ? "key-click-effect" : ""
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
       <img src={Folder} ></img>
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
                onClick={handleKeyPress}
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


const CommandLines = () => {
  // Implement the JSX for the command lines here

   
  return (
    <div>
      <CommandLines />
    </div>
  );
};

const CommandPrompt = () => {
  const [currentDir, setCurrentDir] = useState("encom_root");
  const [keyBuffer, setKeyBuffer] = useState([]);
  const [keysRunning, setKeysRunning] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const handleKeyClick = (keyCode) => {
    // Perform any logic needed when a key is clicked
    // For example, update the active key in state
    setActiveKey(keyCode);
    // ... Additional logic ...
  };
  return (
    <div>
      {/* ... Your other JSX code ... */}

      {/* Use the KeyboardKey component */}
      <KeyboardKey />
    </div>
  );

  const writeResponse = (txt) => {
    // You can implement this function if needed.
    // Instead of appending to a DOM element, use React state to store responses.
  };

  const writePrompt = () => {
    // You can implement this function if needed.
    // Instead of appending to a DOM element, use React state to store the prompt.
  };

  const writeLs = (exec) => {
    // You can implement this function if needed.
    // Instead of appending to a DOM element, use React state to store the ls output.
  };

  const executeCommand = () => {
    // You can implement this function if needed.
    // Instead of reading from DOM elements, use React state to retrieve the command.
    // Replace DOM manipulations with state updates and setKeyBuffer, etc.
  };

  const simulateCommand = (command) => {
    // You can implement this function if needed.
    // Instead of using simulateKey, use React state to manage the keyBuffer and keysRunning.
    //var cs = command.split("");
    //for (var i = 0; i < cs.length; i++) {
      //simulateKey(charToKeyCode(cs[i]));
    }
  };


  /*const writeKeyStroke = (keycode) => {
    // You can implement this function if needed.
    // Instead of manipulating the DOM, use React state to store the command text.
    var txt = (".command-text").last();
    switch(keycode){
        case 8: 
            txt.text(txt.text().substring(0,txt.text().length-1));
        break;
        case 27: 
            txt.text("");
        break;
        case 13:
            executeCommand();
        break;
        case 189:
            txt.append("_");
        break;
        case 187:
            txt.append("=");
        break;
        case 219:
            txt.append("{");
        break;
        case 221:
            txt.append("}");
        break;
        case 186:
            txt.append(";");
        break;
        case 222:
            txt.append("'");
        break;
        case 188:
            txt.append(",");
        break;
        case 190:
            txt.append(".");
        break;
        case 191:
            txt.append("/");
        break;
        case 192:
            txt.append("~");
        break;
        case 500:
            txt.append("");
        break;
        default:
            var key = String.fromCharCode(keycode).toLowerCase();
        txt.append(key)
    };
  };





 
*/