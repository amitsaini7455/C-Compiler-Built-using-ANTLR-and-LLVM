import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Split from 'react-split';
import { Play, Code2, Binary, Terminal, Github } from 'lucide-react';

const defaultCode = `// Sample code
int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

int main() {
  int result = factorial(5);
  return result;
}`;

function App() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('// Compilation output will appear here');
  const [llvmIR, setLlvmIR] = useState('// LLVM IR will be generated here');

  const handleCompile = () => {
    // Simulated compilation process
    setOutput('Compiling...\nSuccess: Code compiled without errors');
    setLlvmIR(`; LLVM IR for factorial function
define i32 @factorial(i32 %n) {
entry:
  %cmp = icmp sle i32 %n, 1
  br i1 %cmp, label %if.then, label %if.else

if.then:
  ret i32 1

if.else:
  %sub = sub i32 %n, 1
  %call = call i32 @factorial(i32 %sub)
  %mul = mul i32 %n, %call
  ret i32 %mul
}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-xl font-bold">C++ Compiler Frontend</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <Split
          className="flex"
          sizes={[60, 40]}
          minSize={300}
          gutterSize={10}
          gutterStyle={() => ({
            backgroundColor: '#374151',
            cursor: 'col-resize',
          })}
        >
          {/* Editor Section */}
          <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Binary className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-semibold">Source Code</h2>
              </div>
              <button
                onClick={handleCompile}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Compile</span>
              </button>
            </div>
            <div className="flex-1 overflow-hidden rounded-lg border border-gray-700">
              <Editor
                height="100%"
                defaultLanguage="cpp"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                }}
              />
            </div>
          </div>

          {/* Output Section */}
          <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
            {/* Compilation Output */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="w-5 h-5 text-green-400" />
                <h2 className="text-lg font-semibold">Compilation Output</h2>
              </div>
              <div className="h-full bg-gray-800 rounded-lg border border-gray-700 p-4 font-mono text-sm overflow-auto">
                <pre>{output}</pre>
              </div>
            </div>

            {/* LLVM IR */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold">LLVM IR</h2>
              </div>
              <div className="h-full bg-gray-800 rounded-lg border border-gray-700 p-4 font-mono text-sm overflow-auto">
                <pre>{llvmIR}</pre>
              </div>
            </div>
          </div>
        </Split>
      </main>
    </div>
  );
}

export default App;