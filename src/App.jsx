import { Analytics } from "@vercel/analytics/react";
import IDELayout from './ide/IDELayout';

function App() {
  return (
    <>
      <IDELayout />
      <Analytics />
    </>
  );
}

export default App;