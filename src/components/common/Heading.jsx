import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
	return (
		<div
			class="heading"
			className={`${className} mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20`}
		>
			{tag && <TagLine className="text4 mb-4 md:justify-center">{tag}</TagLine>}
			{title && (
				<h2 className="text1 h2 text-black dark:text-white">{title}</h2>
			)}
			{text && (
				<p className="body-2 mt-4 text-xl font-semibold text-black dark:font-light dark:text-n-1/80">
					{text}
				</p>
			)}
		</div>
	);
};

export default Heading;
