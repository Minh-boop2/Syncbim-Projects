import {
	benefitIcon1,
	benefitIcon2,
	benefitIcon3,
	benefitIcon4,
	benefitImage2,
	chromecast,
	disc02,
	// discord,
	discordBlack,
	facebook,
	Sync_3DModel,
	Sync_Activity,
	Sync_Collaborate,
	Sync_Discussion,
	Sync_FileManager,
	Sync_Reports,
	Sync_Tasks,
	Sync_Team,
	file02,
	// framer,
	homeSmile,
	instagram,
	notification2,
	notification3,
	notification4,
	// notion,
	// photoshop,
	plusSquare,
	// protopie,
	// raindrop,
	recording01,
	recording03,
	roadmap1,
	roadmap2,
	roadmap3,
	roadmap4,
	searchMd,
	// slack,
	sliders04,
	telegram,
	twitter,
	yourlogo,
	logo_dda,
	logo_vtco,
	logo_las92,
} from "../assets";
import "../components/Effect/MenuHeader.css";

export const navigation = [
	// {
	// 	id: "0",
	// 	href: "/#intro",
	// 	title: "Giới Thiệu",
	// 	subItems: [],
	// },
	{
		id: "2",
		href: "/#overview",
		title: "Tổng Quan",
		subItems: [],
		classnme: "ul",
	},
	{
		id: "3",
		href: "/#feature",
		title: "Tính Năng",
		subItems: [],
	},
	{
		id: "4",
		href: "/#features",
		title: "Đặc trưng",
		subItems: [],
	},
	// {
	// 	id: "4",
	// 	title: "Ứng Dụng",
	// 	url: "/mobile",
	// },
	// {
	// 	id: "5",
	// 	title: "Hình Ảnh",
	// 	url: "/pictures",
	// },
	// {
	// 	id: "6",
	// 	title: "Đội Ngũ",
	// 	url: "/ourteam",
	// },
	//
	{
		id: "5",
		href: "/",
		title: "Sản phẩm",
		subItems: [
			{ id: 51, href: "https://3dlab.syncbim.com", title: "3DLab" },
			{ id: 52, href: "https://3dscan.syncbim.com", title: "3DScan" },
			{ id: 53, href: "https://platform.syncbim.com", title: "Platform" },
		],
	},
	{
		id: "6",
		href: "/#contact",
		title: "Liên hệ",
		subItems: [],
	},
	// {
	//   id: "4",
	//   title: "New account",
	//   url: "#signup",
	//   onlyMobile: true,
	// },
	// {
	// 	id: "6",
	// 	title: "Đăng nhập",
	// 	url: "https://platform.syncbim.com",
	// 	onlyMobile: true,
	// },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo_dda, logo_las92, logo_vtco];

export const brainwaveServices = [
	"Photo generating",
	"Photo enhance",
	"Seamless Integration",
];

export const linksync = [
	{ id: "0", product: "Platform", link: "https://platform.syncbim.com" },
	{ id: "1", product: "3DLab", link: "https://3dlab.syncbim.com" },
	{ id: "2", product: "3DScan", link: "https://3dscan.syncbim.com" },

	{
		id: "3",
		product: "Google Play",
		link: "https://play.google.com/store/apps/details?id=com.vtcode.sync_BIM",
	},
	{
		id: "4",
		product: "App Store",
		link: "https://play.google.com/store/apps/details?id=com.vtcode.sync_BIM",
	},
];

export const brainwaveServicesIcons = [
	recording03,
	recording01,
	disc02,
	chromecast,
	sliders04,
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const roadmap = [
	{
		id: "0",
		title: "Dashboard",
		text: "Cung cấp cho bạn cái nhìn tổng quan về hiệu suất của dự án một cách trực quan và dễ hiểu. Nó có thể giúp bạn theo dõi các chỉ số quan trọng và trực quan.",
		date: `${months[new Date().getMonth()] + " - " + new Date().getFullYear()}`,
		status: "done",
		imageUrl: roadmap1,
		colorful: true,
	},
	{
		id: "1",
		title: "Tasks",
		text: "Lên kế hoạch và sắp xếp các công việc một cách hiệu quả. Hoàn thành công việc đúng hạn và đạt được mục tiêu. Chỉ định nhiệm vụ cho người khác và theo dõi tiến độ của họ.",
		date: `${months[new Date().getMonth()] + " - " + new Date().getFullYear()}`,
		status: "progress",
		imageUrl: roadmap2,
		colorful: true,
	},
	{
		id: "2",
		title: "Chatbox",
		text: "Giao tiếp hiệu quả, dễ dàng kết nối và trao đổi thông tin với thành viên trong thời gian thực. Giảm thiểu thời gian lãng phí cho việc gửi email hoặc gọi điện thoại.",
		date: `${months[new Date().getMonth()] + " - " + new Date().getFullYear()}`,
		status: "done",
		imageUrl: roadmap3,
		colorful: true,
	},
	{
		id: "3",
		title: "Report",
		text: "Theo dõi tiến độ và hiệu suất của dự án. Chia sẻ thông tin quan trọng với các bên liên quan một cách hiệu quả.",
		date: `${months[new Date().getMonth()] + " - " + new Date().getFullYear()}`,
		status: "progress",
		imageUrl: roadmap4,
		colorful: true,
	},
];

export const collabText =
	"tính năng bổ trợ liền mạch và bảo mật, đây là giải pháp tốt cho các đội nhóm và công ty thiết kế.";

export const collabContent = [
	{
		id: "0",
		title: "Tích hợp liền mạch",
		text: collabText,
	},
	{
		id: "1",
		title: "Tự động hóa thông minh",
	},
	{
		id: "2",
		title: "Bảo mật dữ liệu",
	},
];
export const collabApps = [
	{
		id: "0",
		title: "Sync_Team",
		icon: Sync_Team,
		width: 40,
		height: 40,
	},
	{
		id: "1",
		title: "Sync_Discussion",
		icon: Sync_Discussion,
		width: 40,
		height: 40,
	},
	{
		id: "2",
		title: "Sync_FileManager",
		icon: Sync_FileManager,
		width: 40,
		height: 40,
	},
	{
		id: "3",
		title: "Sync_Collaborate",
		icon: Sync_Collaborate,
		width: 40,
		height: 40,
	},
	{
		id: "4",
		title: "Sync_Tasks",
		icon: Sync_Tasks,
		width: 40,
		height: 40,
	},
	{
		id: "5",
		title: "Sync_3DModel",
		icon: Sync_3DModel,
		width: 40,
		height: 40,
	},
	{
		id: "6",
		title: "Sync_Activity",
		icon: Sync_Activity,
		width: 40,
		height: 40,
	},
	{
		id: "7",
		title: "Sync_Reports",
		icon: Sync_Reports,
		width: 40,
		height: 40,
	},
];

export const pricing = [
	{
		id: "0",
		title: "Basic",
		description: "AI chatbot, personalized recommendations",
		price: "0",
		features: [
			"An AI chatbot that can understand your queries",
			"Personalized recommendations based on your preferences",
			"Ability to explore the app and its features without any cost",
		],
	},
	{
		id: "1",
		title: "Premium",
		description: "Advanced AI chatbot, priority support, analytics dashboard",
		price: "9.99",
		features: [
			"An advanced AI chatbot that can understand complex queries",
			"An analytics dashboard to track your conversations",
			"Priority support to solve issues quickly",
		],
	},
	{
		id: "2",
		title: "Enterprise",
		description: "Custom AI chatbot, advanced analytics, dedicated account",
		price: null,
		features: [
			"An AI chatbot that can understand your queries",
			"Personalized recommendations based on your preferences",
			"Ability to explore the app and its features without any cost",
		],
	},
];

// export const benefits = [
// 	{
// 		id: "0",
// 		title: "Thảo luận",
// 		text: [
// 			"Cung cấp môi trường trực tuyến để các bên liên quan trao đổi thông tin, cập nhật tiến độ và giải quyết vấn đề.",
// 			"Hỗ trợ các chức năng như tạo chủ đề thảo luận, bình luận, chia sẻ tệp tin để thu hút sự chú ý của người khác.",
// 			"Lưu trữ lịch sử thảo luận để truy cập và tham khảo sau này. Hỗ trợ tổng hợp và thống kê các nội dung trao đổi.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-1.svg",
// 		iconUrl: benefitIcon1,
// 		imageUrl: benefitImage2,
// 	},
// 	{
// 		id: "1",
// 		title: "Đội Ngũ",
// 		text: [
// 			"Quản lý thông tin của tất cả các thành viên tham gia dự án, bao gồm vai trò, trách nhiệm, thông tin liên hệ và chuyên môn.",
// 			"Phân quyền truy cập vào các tính năng và dữ liệu SyncBIM dựa trên vai trò và quyền hạn của từng thành viên.",
// 			"Theo dõi hiệu quả làm việc của từng thành viên, bao gồm thời gian hoạt động, nhiệm vụ hoàn thành và đóng góp cho dự án.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-2.svg",
// 		iconUrl: benefitIcon2,
// 		imageUrl: benefitImage2,
// 		light: true,
// 	},
// 	{
// 		id: "2",
// 		title: "Nhiệm Vụ",
// 		text: [
// 			"Cho phép tạo, giao và quản lý nhiệm vụ cho các thành viên trong nhóm.",
// 			"Xác định người phụ trách, thời hạn, mô tả công việc và mức độ ưu tiên cho mỗi nhiệm vụ.",
// 			"Theo dõi tiến độ thực hiện, cập nhật trạng thái và đánh giá hiệu quả hoàn thành.",
// 			"Gửi thông báo nhắc nhở và cảnh báo về các nhiệm vụ sắp đến hạn hoặc quá hạn.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-3.svg",
// 		iconUrl: benefitIcon3,
// 		imageUrl: benefitImage2,
// 	},
// 	{
// 		id: "3",
// 		title: "Tập Tin",
// 		text: [
// 			"Lưu trữ tập trung tất cả tài liệu dự án, bao gồm bản vẽ, mô hình, báo cáo, hình ảnh và video.",
// 			"Hỗ trợ quản lý phiên bản, theo dõi lịch sử thay đổi và truy cập các phiên bản trước đó.",
// 			"Chia sẻ tệp tin an toàn với các bên liên quan có quyền truy cập.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-4.svg",
// 		iconUrl: benefitIcon4,
// 		imageUrl: benefitImage2,
// 		light: true,
// 	},
// 	{
// 		id: "4",
// 		title: "3D Model",
// 		text: [
// 			"Cho phép xem, chia sẻ mô hình 3D của dự án trong môi trường trực tuyến.",
// 			"Hỗ trợ các định dạng mô hình phổ biến như IFC, Revit...",
// 			"Cung cấp các công cụ để đo lường, đánh dấu và chú thích mô hình.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-5.svg",
// 		iconUrl: benefitIcon1,
// 		imageUrl: benefitImage2,
// 	},
// 	{
// 		id: "5",
// 		title: "Hoạt Động",
// 		text: [
// 			"Theo dõi nhật ký hoạt động của các thành viên trong dự án, bao gồm các thao tác thực hiện, thời gian và nội dung thay đổi.",
// 			"Cung cấp cái nhìn tổng quan về tiến độ và hiệu quả cộng tác.",
// 			"Giúp xác định các vấn đề tiềm ẩn và đưa ra giải pháp phù hợp.",
// 			"Lọc và tìm kiếm các hoạt động cụ thể dựa trên thời gian, người thực hiện, loại thao tác và nội dung thay đổi.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-6.svg",
// 		iconUrl: benefitIcon2,
// 		imageUrl: benefitImage2,
// 	},
// 	{
// 		id: "6",
// 		title: "Phối hợp",
// 		text: [
// 			"Cung cấp công cụ để phối hợp hiệu quả giữa các bên liên quan, bao gồm công cụ trò chuyện trực tuyến, quản lý quy trình thực hiện và phân tích dữ liệu dự án.",
// 			"Giúp đảm bảo tính nhất quán và chính xác của thông tin dự án và giảm thiểu rủi ro liên quan đến xung đột dữ liệu.",
// 			"Kết nối với các hệ thống bên ngoài để trao đổi dữ liệu và thông tin.",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-6.svg",
// 		iconUrl: benefitIcon2,
// 		imageUrl: benefitImage2,
// 	},
// 	{
// 		id: "7",
// 		title: "Báo Cáo",
// 		text: [
// 			"Tạo báo cáo chi tiết về quá trình thực hiện dự án, hiệu quả hoạt động và công việc triển khai.",
// 			"Hỗ trợ nhiều dạng báo cáo khác nhau, bao gồm báo cáo tiến độ, báo cáo hoạt động, báo cáo nhiệm vụ triển khai...",
// 			"Nội dung và định dạng báo cáo để đáp ứng nhu cầu cụ thể của từng dự án.",
// 			"Xuất báo cáo sang các định dạng phổ biến như PDF, Word, Excel...",
// 		],
// 		backgroundUrl: "./src/assets/benefits/card-6.svg",
// 		iconUrl: benefitIcon2,
// 		imageUrl: benefitImage2,
// 		light: true,
// 	},
// ];
export const benefits = [
	{
		id: "0",
		title: "Thảo luận",
		text: [
			"Cung cấp môi trường trực tuyến để các bên liên quan trao đổi thông tin, cập nhật tiến độ và giải quyết vấn đề.",
			"Hỗ trợ các chức năng như tạo chủ đề thảo luận, bình luận, chia sẻ tệp tin để thu hút sự chú ý của người khác.",
			"Lưu trữ lịch sử thảo luận để truy cập và tham khảo sau này. Hỗ trợ tổng hợp và thống kê các nội dung trao đổi.",
		],
		backgroundUrl: "./src/assets/benefits/card-1.svg",
		iconUrl: benefitIcon1,
		// Meeting/Discussion
		imageUrl:
			"https://png.pngtree.com/png-clipart/20221002/original/pngtree-project-development-discuss-business-team-png-image_8651212.png",
	},
	{
		id: "1",
		title: "Đội Ngũ",
		text: [
			"Quản lý thông tin của tất cả các thành viên tham gia dự án, bao gồm vai trò, trách nhiệm, thông tin liên hệ và chuyên môn.",
			"Phân quyền truy cập vào các tính năng và dữ liệu SyncBIM dựa trên vai trò và quyền hạn của từng thành viên.",
			"Theo dõi hiệu quả làm việc của từng thành viên, bao gồm thời gian hoạt động, nhiệm vụ hoàn thành và đóng góp cho dự án.",
		],
		backgroundUrl: "./src/assets/benefits/card-2.svg",
		iconUrl: benefitIcon2,
		// Team working together
		imageUrl:
			"https://unsplash.com/photos/QckxruozjRg/download?force=true&w=1600",
		light: true,
	},
	{
		id: "2",
		title: "Nhiệm Vụ",
		text: [
			"Cho phép tạo, giao và quản lý nhiệm vụ cho các thành viên trong nhóm.",
			"Xác định người phụ trách, thời hạn, mô tả công việc và mức độ ưu tiên cho mỗi nhiệm vụ.",
			"Theo dõi tiến độ thực hiện, cập nhật trạng thái và đánh giá hiệu quả hoàn thành.",
			"Gửi thông báo nhắc nhở và cảnh báo về các nhiệm vụ sắp đến hạn hoặc quá hạn.",
		],
		backgroundUrl: "./src/assets/benefits/card-3.svg",
		iconUrl: benefitIcon3,
		// Kanban / sticky notes
		imageUrl:
			"https://unsplash.com/photos/fQOyF0D0cDU/download?force=true&w=1600",
	},
	{
		id: "3",
		title: "Tập Tin",
		text: [
			"Lưu trữ tập trung tất cả tài liệu dự án, bao gồm bản vẽ, mô hình, báo cáo, hình ảnh và video.",
			"Hỗ trợ quản lý phiên bản, theo dõi lịch sử thay đổi và truy cập các phiên bản trước đó.",
			"Chia sẻ tệp tin an toàn với các bên liên quan có quyền truy cập.",
		],
		backgroundUrl: "./src/assets/benefits/card-4.svg",
		iconUrl: benefitIcon4,
		// Files / code list (gợi ý trực quan cho “file”)
		imageUrl:
			"https://unsplash.com/photos/fhAfLtHToCs/download?force=true&w=1600",
		light: true,
	},
	{
		id: "4",
		title: "3D Model",
		text: [
			"Cho phép xem, chia sẻ mô hình 3D của dự án trong môi trường trực tuyến.",
			"Hỗ trợ các định dạng mô hình phổ biến như IFC, Revit...",
			"Cung cấp các công cụ để đo lường, đánh dấu và chú thích mô hình.",
		],
		backgroundUrl: "./src/assets/benefits/card-5.svg",
		iconUrl: benefitIcon1,
		// Abstract 3D/architecture render (đại diện cho “3D model”)
		imageUrl:
			"https://unsplash.com/photos/TZs_q7jH4Ck/download?force=true&w=1600",
	},
	{
		id: "5",
		title: "Hoạt Động",
		text: [
			"Theo dõi nhật ký hoạt động của các thành viên trong dự án, bao gồm các thao tác thực hiện, thời gian và nội dung thay đổi.",
			"Cung cấp cái nhìn tổng quan về tiến độ và hiệu quả cộng tác.",
			"Giúp xác định các vấn đề tiềm ẩn và đưa ra giải pháp phù hợp.",
			"Lọc và tìm kiếm các hoạt động cụ thể dựa trên thời gian, người thực hiện, loại thao tác và nội dung thay đổi.",
		],
		backgroundUrl: "./src/assets/benefits/card-6.svg",
		iconUrl: benefitIcon2,
		// Monitoring screen
		imageUrl:
			"https://unsplash.com/photos/qwtCeJ5cLYs/download?force=true&w=1600",
	},
	{
		id: "6",
		title: "Phối hợp",
		text: [
			"Cung cấp công cụ để phối hợp hiệu quả giữa các bên liên quan, bao gồm công cụ trò chuyện trực tuyến, quản lý quy trình thực hiện và phân tích dữ liệu dự án.",
			"Giúp đảm bảo tính nhất quán và chính xác của thông tin dự án và giảm thiểu rủi ro liên quan đến xung đột dữ liệu.",
			"Kết nối với các hệ thống bên ngoài để trao đổi dữ liệu và thông tin.",
		],
		backgroundUrl: "./src/assets/benefits/card-6.svg",
		iconUrl: benefitIcon2,
		// People collaborating around a laptop
		imageUrl:
			"https://unsplash.com/photos/m29D0DvAhF0/download?force=true&w=1600",
	},
	{
		id: "7",
		title: "Báo Cáo",
		text: [
			"Tạo báo cáo chi tiết về quá trình thực hiện dự án, hiệu quả hoạt động và công việc triển khai.",
			"Hỗ trợ nhiều dạng báo cáo khác nhau, bao gồm báo cáo tiến độ, báo cáo hoạt động, báo cáo nhiệm vụ triển khai...",
			"Nội dung và định dạng báo cáo để đáp ứng nhu cầu cụ thể của từng dự án.",
			"Xuất báo cáo sang các định dạng phổ biến như PDF, Word, Excel...",
		],
		backgroundUrl: "./src/assets/benefits/card-6.svg",
		iconUrl: benefitIcon2,
		// Analytics dashboard (đại diện “Báo cáo”)
		imageUrl:
			"https://unsplash.com/photos/JKUTrJ4vK00/download?force=true&w=1600",
		light: true,
	},
];

export const socials = [
	{
		id: "0",
		title: "Discord",
		iconUrl: discordBlack,
		url: "#",
	},
	{
		id: "1",
		title: "Twitter",
		iconUrl: twitter,
		url: "#",
	},
	{
		id: "2",
		title: "Instagram",
		iconUrl: instagram,
		url: "#",
	},
	{
		id: "3",
		title: "Telegram",
		iconUrl: telegram,
		url: "#",
	},
	{
		id: "4",
		title: "Facebook",
		iconUrl: facebook,
		url: "#",
	},
];

export const ourteam = [
	{
		id: "0",
		shortname: "@vinx",
		fullname: "Nguyễn Xuân Vi",
		role: "BIM Technology",
		github: "vinxeng",
		email: "vinx@vtcode.com.vn",
		telegram: "aloalo",
		phone: "0909999999",
	},
	{
		id: "1",
		shortname: "@cuongnm",
		fullname: "Nguyễn Mạnh Cường",
		role: "Full-stack Developer",
		github: "cuongnm",
		email: "cuongnm@vtcode.com.vn",
		telegram: "aloalo",
		phone: "0909999999",
	},
	{
		id: "2",
		shortname: "@vulnh",
		fullname: "Lê Nguyễn Huy Vũ",
		role: "Full-stack Developer",
		github: "vulnh",
		email: "vulnh@vtcode.com.vn",
		telegram: "aloalo",
		phone: "0909999999",
	},
	{
		id: "3",
		shortname: "@tudq",
		fullname: "Đinh Quốc Tú",
		role: "Full-stack Developer",
		github: "tudq",
		email: "tudq@vtcode.com.vn",
		telegram: "aloalo",
		phone: "0909999999",
	},
	{
		id: "4",
		shortname: "@longtnh",
		fullname: "Trần Ngọc Hiển Long",
		role: "Full-stack Developer",
		github: "longtnh",
		email: "longtnh@vtcode.com.vn",
		telegram: "aloalo",
		phone: "0909999999",
	},
];

export const company = {
	email: "info@vtcode.vn",
	phone: "1900 77 99 18",
	address: "234 Ngô Tất Tố, Phường 22, Quận Bình Thạnh, TP. HCM",
};
