# C-Compiler-Built-using-ANTLR-and-LLVM


https://github.com/user-attachments/assets/d7e69142-49f3-495e-8c4c-c072cd5f3f1c

# 🧠 C++ Compiler Frontend

I've created a professional and modern UI for a **C++ Compiler Frontend** project. This interface is designed for a smooth and efficient developer experience, combining a sleek layout with practical features.

---

## 🚀 Features

### 📝 Modern Code Editor
- Integrated **Monaco Editor** (same as in VS Code) with C++ syntax highlighting
- **Dark theme** for enhanced readability
- Pre-loaded **sample factorial code**

### 🧩 Split Layout
- **Resizable panels**: Drag to resize editor and output sections
- Split between **Source Code** and **Compilation Output**

### ⚙️ Professional Functionality
- **Compilation Output** panel with build status
- **LLVM IR Output** showing intermediate representation
- **Compile button** with visual feedback
- Placeholder GitHub icon (link to your actual repository)

### 🎨 Styling and UI
- **Dark theme** with a professional color palette
- Clean typography and well-managed spacing
- **Lucide icons** for enhanced visual clarity
- **Responsive layout** across screen sizes

---

## 🧠 Backend Integration

While the current version displays **simulated** compiler output and LLVM IR for demonstration purposes, the UI is fully prepared for integration with a real backend.

### 🛠️ Backend Options
You can connect your frontend to a backend service that:
- Compiles the user-written C++ code
- Returns compilation results, errors, and warnings
- Optionally returns **LLVM IR**, **assembly**, or **executable output**

### ⚙️ How to Integrate
- Modify the `handleCompile` function in your frontend code
- Send the user code via `fetch` or `axios` to your backend API
- Use technologies like:
  - **Docker** or **chroot** for code isolation and secure execution
  - **Clang** or **g++** as the compiler engine
  - **LLVM tools** to generate IR or bytecode
- Return the compilation result as a structured JSON object to be displayed in the UI

> ⚠️ Security Note: Always sandbox and limit execution time/resources when compiling arbitrary code from users.

---

## 📦 Getting Started

![Image](https://github.com/user-attachments/assets/bbc70af0-55ed-4b9d-bc51-a620310e0b6f)


```bash
# Install dependencies
npm install

# Start development server
npm run dev


