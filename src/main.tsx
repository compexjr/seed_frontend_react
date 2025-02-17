import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "sonner";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<AppRoutes />
				</ThemeProvider>
			</QueryClientProvider>

			<Toaster richColors />
		</BrowserRouter>
	</StrictMode>
);
