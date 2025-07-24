import ThemeSwitcher from '../ThemeSwitcher';
import MainLinks from '../MainLinks';
import ScrollGif from '../ScrollGif';
import Greetings from '../Items/Greetings';
import Name from '../Items/Name';
import MainDescription from '../Items/MainDescription';
import MainButtons from '../Items/MainButtons';

function Main() {
	return (
		<main id="main"
			className="relative h-screen select-none
					flex flex-col items-center justify-center gap-15 dark:text-gray-200"
		>
			<ThemeSwitcher />
			<article className="flex flex-col items-center justify-center gap-5">
				<div className="flex flex-col gap-1 relative">
					<Greetings />
					<Name />
				</div>
				<MainDescription />
			</article>
			<MainButtons />
			<MainLinks />
			<ScrollGif />
		</main>
	);
}

export default Main;
