import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

// Pages
import PageHome from './pages/PageHome';
import PageCadastro from './pages/PageCadastro';
import PageDashboard from './pages/PageDashboard';

export default function AppComponent(props) {
	// Liferay configuration
	const liferayProps = {
		portletNamespace: props.portletNamespace,
		contextPath: props.contextPath,
		portletElementId: props.portletElementId,
		configuration: props.configuration,
	};
	
	// Routes
	const router = createHashRouter([
		{
			path: "/",
			element: <PageHome {...liferayProps} />,
			errorElement: <h1>404 - NOT FOUND</h1>,
		},
		{
			path: "/dashboard",
			element: <PageDashboard {...liferayProps} />,
			errorElement: <h1>404 - NOT FOUND</h1>,
		},
		{
			path: "/cadastro",
			element: <PageCadastro {...liferayProps} />,
			errorElement: <h1>404 - NOT FOUND</h1>,
		},
	]);
	
	// Return
	return <RouterProvider router={router} />;
}
