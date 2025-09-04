import { syncbimErrorPage } from "../assets";
import Section from "../components/common/Section";
import FancyButton from "../components/Effect/FancyButton";

export default function ErrorPage() {
	return (
		<Section className="grid min-h-screen place-items-center">
			<div className="text-center">
				<img
					src={syncbimErrorPage}
					className="w-full scale-[0.75] md:scale-[1]"
					width={300}
					height={300}
					alt="SyncBIMErrorPage"
				/>
				{/* <p className="text-base font-semibold text-indigo-600">404</p> */}
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
					404 Not Found
				</h1>
				<p className="mt-6 text-base leading-7 text-n-2">
					Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<FancyButton className="!min-w-[9.5rem ] !h-12 !rounded-2xl !px-6 !text-base font-semibold !leading-none tracking-wide text-gray-500 dark:text-white md:!h-14 md:!px-8 md:!text-lg">
						<a
							href="/"
							// className="rounded-md bg-red-700/50 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Về trang chủ
						</a>
					</FancyButton>
				</div>
			</div>
		</Section>
	);
}
