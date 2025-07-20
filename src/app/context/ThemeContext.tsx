import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
	isDark: boolean;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('dark') === 'true';
		}
		return false;
	});

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
		localStorage.setItem('dark', isDark.toString());
	}, [isDark]);

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
