import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
