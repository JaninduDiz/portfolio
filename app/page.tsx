import React from "react";
import Me from "./components/Me";
import About from "./components/About";
import MyJourney from "./components/MyJourney";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <Me />
        <About />
        <MyJourney />
        <Skills />
      </div>
    </main>
  );
}
