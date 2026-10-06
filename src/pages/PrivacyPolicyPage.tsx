import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const informationUses = [
	'Respond to your property enquiries.',
	'Provide project details, pricing, brochures, and availability information.',
	'Schedule site visits and property consultations.',
	'Contact you regarding properties and real estate services that may be relevant to your enquiry.',
	'Improve our customer service and marketing activities.',
];

export const PrivacyPolicyPage: React.FC = () => (
	<div className="min-h-screen">
		<PageHero
			badge="Your Information, Respected"
			title="Privacy"
			highlightText="Policy"
			subtitle="How Prime Realty Hyderabad collects, uses, and protects information you share with us."
			breadcrumbCurrent="Privacy Policy"
		/>

		<section className="bg-slate-50 py-14 sm:py-20">
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-10 lg:p-12">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 pb-6 border-b border-slate-200">
						<div>
							<p className="text-sm font-semibold text-brand-orange-600">Prime Realty Hyderabad</p>
							<h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
								Privacy Policy
							</h2>
						</div>
						<p className="text-sm text-slate-500">Effective Date: 4 October 2026</p>
					</div>

					<div className="space-y-8 pt-7 text-sm sm:text-base text-slate-600 leading-relaxed">
						<p>
							Prime Realty Hyderabad respects your privacy and is committed to protecting the personal information you provide through our website, advertisements, lead forms, phone calls, WhatsApp, or other communication channels.
						</p>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Information We Collect</h3>
							<p>
								When you submit an enquiry, we may collect information such as your name, phone number, email address, property preferences, budget, and other information voluntarily provided by you.
							</p>
						</section>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">How We Use Your Information</h3>
							<p className="mb-3">We use this information to:</p>
							<ul className="list-disc pl-5 space-y-2 marker:text-brand-orange-500">
								{informationUses.map((use) => <li key={use}>{use}</li>)}
							</ul>
						</section>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Sharing of Information</h3>
							<p>
								We do not sell or rent your personal information to third parties. Information may be shared with relevant developers, property partners, or service providers only when necessary to respond to your enquiry or provide the requested real estate service, subject to applicable law.
							</p>
						</section>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Third-Party Services</h3>
							<p>
								Our website and advertising campaigns may use services provided by third-party platforms such as Google for advertising, analytics, and lead generation. These services may process information according to their respective privacy policies.
							</p>
						</section>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Information Security</h3>
							<p>
								We take reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. However, no internet-based transmission or storage system can be guaranteed to be completely secure.
							</p>
						</section>

						<section>
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Your Choices</h3>
							<p>
								You may contact us at any time to request correction or deletion of personal information you have provided to us, or to request that we stop contacting you for marketing purposes.
							</p>
						</section>

						<section className="border-t border-slate-200 pt-7">
							<h3 className="font-heading text-lg font-bold text-slate-900 mb-4">Business Details</h3>
							<dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
								<div>
									<dt className="text-xs font-semibold uppercase text-slate-500 mb-1">Business Name</dt>
									<dd className="text-slate-800">Prime Realty Hyderabad</dd>
								</div>
								<div>
									<dt className="text-xs font-semibold uppercase text-slate-500 mb-1">Website</dt>
									<dd><a href="https://primerealtyhyderabad.in" className="text-brand-blue-800 hover:text-brand-orange-600">primerealtyhyderabad.in</a></dd>
								</div>
								<div>
									<dt className="text-xs font-semibold uppercase text-slate-500 mb-1">Contact Number</dt>
									<dd><a href="tel:+917901324546" className="inline-flex items-center gap-2 text-slate-800 hover:text-brand-orange-600"><Phone className="w-4 h-4 text-brand-orange-500" />+91 7901324546</a></dd>
								</div>
								<div>
									<dt className="text-xs font-semibold uppercase text-slate-500 mb-1">Location</dt>
									<dd className="inline-flex items-center gap-2 text-slate-800"><MapPin className="w-4 h-4 text-brand-orange-500" />Hyderabad, Telangana, India</dd>
								</div>
							</dl>
						</section>

						<p className="border-l-2 border-brand-orange-500 pl-4 text-slate-700">
							By using our website or submitting an enquiry, you acknowledge this Privacy Policy.
						</p>
						<p className="text-xs text-slate-500">Last Updated: 4 October 2026</p>
					</div>
				</div>
			</article>
		</section>
	</div>
);
