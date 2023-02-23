import React from 'react';
import { MantineProvider } from '@mantine/core';
import './App.css';
import 'typeface-nunito';
import MainLayout from './component/MainLayout';
import AppContextProvider from './context';


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Nunito Sans, sans-serif',
      }}
    >
      <AppContextProvider>
        <MainLayout>
          <TodoLayout />
        </MainLayout>
      </AppContextProvider>
    </MantineProvider>
  );
}