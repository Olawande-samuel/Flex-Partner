import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function authRoute<P extends object>(
	Component: ComponentType<P>,
): ComponentType<P> {
	function AuthRouteWrapper(props: P) {
		return <AuthComponent Component={Component} {...props} />;
	}

	function AuthComponent({
		Component,
		...props
	}: { Component: ComponentType<P> } & P) {
		const navigate = useNavigate();

		useEffect(() => {
			const user = localStorage.getItem("user");
			if (!user) {
				navigate("/login", { replace: true });
			}
		}, []);

		return <Component {...(props as P)} />;
	}

	const displayName = Component.displayName || Component.name || "Component";
	AuthRouteWrapper.displayName = `authRoute(${displayName})`;

	return AuthRouteWrapper;
}

export default authRoute;
