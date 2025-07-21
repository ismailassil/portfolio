import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
	isDark: boolean;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('dark');
			if (stored !== null) return stored === 'true';
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		return false;
	});

	useEffect(() => {
		const root = document.body;
		root.setAttribute('data-theme', isDark ? 'dark' : 'light');
		localStorage.setItem('dark', isDark.toString());
	}, [isDark]);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const stored = localStorage.getItem('dark');

		const handleChange = (e: MediaQueryListEvent) => {
			if (stored === null) {
				setIsDark(e.matches);
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	const toggleTheme = () => setIsDark((prev) => !prev);

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');
	return context;
};
