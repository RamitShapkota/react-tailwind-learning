import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [strength, setStrength] = useState("Weak");
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);

    // --- Strength Logic ---
    let score = 0;
    if (length > 10) score++;
    if (length > 15) score++;
    if (numberAllowed) score++;
    if (charAllowed) score++;

    if (score <= 1) setStrength("Weak");
    else if (score === 2 || score === 3) setStrength("Medium");
    else setStrength("Strong");


  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadwo-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center py-0.5">

        <h1 className="text-white text-center my-5">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            readOnly
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:text-amber-200"
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>

        <div className="flex text-sm gap-x-5">
          <div className="flex items-center  gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="mb-0.5 ml-0.5">Lenght :{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className="mb-0.5 ">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput" className="mb-0.5 ">Characters</label>
          </div>
        </div>

        <div className="flex justify-between m-2 px-1">
          <span className="text-gray-400 text-xs uppercase font-bold">Strength:</span>
          <span className={`text-xs font-bold uppercase ${strength === "Strong" ? "text-green-500" :
              strength === "Medium" ? "text-yellow-500" : "text-red-500"
            }`}>
            {strength}
          </span>
        </div>
      </div>
    </>
  )
}


export default App
