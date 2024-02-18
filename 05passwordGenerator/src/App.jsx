import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("Password");
  const [passLength, setPassLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);

  // Use callback optimizes memory usage ,  this is called only if new value of dependencies (second param) is different from previous
  // params
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (includeNumbers) {
      str += "0987654321";
    }
    if (includeSpecialCharacters) {
      str += "!@#$%^&*";
    }
    for (let index = 0; index < passLength; index++) {
      pass += str.charAt(Math.random() * str.length + 1);
    }

    setPassword(pass);
  }, [passLength, includeNumbers, includeSpecialCharacters, passLength]);

  // Call back effect passed in useEffect first param is triggered whenever a re render happens on dependencies pass in second param array
  useEffect(() => {
    generatePassword();
  }, [passLength, includeNumbers, includeSpecialCharacters, generatePassword]);

  // use ref hook
  const passwordReference = useRef(null);

  const copyToClipboard = () => {
    // Write the data to the clipboard
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <h1 className="text-center text-4xl text-white">Password Generator</h1>

      <div className="text-white bg-fuchsia-900 px-4 py-4 flex flex-wrap justify-center">
        <div className="rounded-xl text-white bg-orange-600 justify-center  px-4 py-4 flex flex-wrap align-middle flex-col">
          <div className="flex flex-wrap flex-row ">
            <input
              type="text"
              value={password}
              className="bg-gray-700 px-2 py-2 rounded-s-md flex-grow"
              readOnly
            />
            <button
              className="bg-blue-500 px-2 py-2 rounded-e-md"
              onClick={() => copyToClipboard()}
              ref={passwordReference}
            >
              COPY
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-x-5">
            <label>
              <input
                type="range"
                alt="length"
                min="6"
                max="20"
                value={passLength}
                onChange={(e) => setPassLength(e.target.value)}
              />
              Length({passLength})
            </label>

            <label>
              <input
                name="includeNumbers"
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Numbers
            </label>

            <label>
              <input
                name="includeSpecialCharacters"
                type="checkbox"
                checked={includeSpecialCharacters}
                onChange={(e) => setIncludeSpecialCharacters(e.target.checked)}
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
