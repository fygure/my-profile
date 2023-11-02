import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from './context/TransitionContext';
import TransitionComponent from './utils/Transition';

import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import ComingSoon from './components/ComingSoon';

export default function Router() {
    return (
        <TransitionProvider>
            <Routes>
                <Route
                    index
                    element={
                        <TransitionComponent>
                            <Hero />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/bio"
                    element={
                        <TransitionComponent>
                            <Bio />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/experience"
                    element={
                        <TransitionComponent>
                            <Experience />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/skills"
                    element={
                        <TransitionComponent>
                            <Skills />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <TransitionComponent>
                            <Projects />
                        </TransitionComponent>
                    }
                />
                {/* <Route
                    path="/contact"
                    element={
                        <TransitionComponent>
                            <Contact />
                        </TransitionComponent>
                    }
                /> */}
                <Route
                    path="/coming-soon"
                    element={
                        <TransitionComponent>
                            <ComingSoon />
                        </TransitionComponent>
                    }
                />
            </Routes>
        </TransitionProvider>
    );
}
