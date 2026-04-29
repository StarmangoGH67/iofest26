export interface ServiceTheme {
	primary: string;
	secondary: string;
	gradient: [string, string];
}

export interface ServiceAction {
	label: string;
	href: string;
	badge?: string;
	external?: boolean;
}

export interface ServiceItem {
	id: string;
	title: string;
	description: string;
	icon: string;
	iconBg?: string;
	action: ServiceAction;
}

export interface StatItem {
	value: string;
	label: string;
	suffix?: string;
}

export interface AccordionItem {
	id: string;
	label: string;
	content: string;
}

export interface FlowStep {
	number: number;
	label: string;
}

export interface ServicePage {
	slug: string;
	title: string;
	subtitle?: string;
	description: string;
	breadcrumb: string[];
	iconSvg: string;
	theme: ServiceTheme;
	stats?: {
		title: string;
		items: StatItem[];
		ctaLabel?: string;
		ctaHref?: string;
	};
	flow?: {
		title: string;
		steps: FlowStep[];
	};
	searchPlaceholder: string;
	servicesTitle: string;
	services: ServiceItem[];
}

export interface ParentPage {
	title: string;
	subtitle: string;
	description: string;
	iconSvg: string;
	theme: ServiceTheme;
	searchPlaceholder: string;
	categories: {
		slug: string;
		label: string;
		description: string;
		icon: string;
		services: ServicePage;
	}[];
}
