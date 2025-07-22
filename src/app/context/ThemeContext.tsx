'use client';
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import useLocalStorage from 'use-local-storage';

type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextType = {
	isDark: boolean;
	mode: ThemeMode;
	toggleDark: () => void;
	toggleLight: () => void;
	toggleSystem: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useLocalStorage<ThemeMode>('themeMode', 'system');
	const [systemPrefersDark, setSystemPrefersDark] = useState(
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: false,
	);

	const isDark = useMemo(() => {
		if (mode === 'dark') return true;
		if (mode === 'light') return false;
		return systemPrefersDark;
	}, [mode, systemPrefersDark]);

	useEffect(() => {
		if (mode !== 'system') return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => {
			setSystemPrefersDark(e.matches);
		};

		mediaQuery.addEventListener('change', handleChange);
		setSystemPrefersDark(mediaQuery.matches);

		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [mode]);

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	const toggleDark = () => setMode('dark');
	const toggleLight = () => setMode('light');
	const toggleSystem = () => setMode('system');

	return (
		<ThemeContext.Provider
			value={{ isDark, mode, toggleDark, toggleLight, toggleSystem }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');
	return context;
};
