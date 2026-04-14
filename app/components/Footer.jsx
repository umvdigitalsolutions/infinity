export default function Footer() {
	return (
		<footer className="bg-[#06111f] border-t border-white/10 mt-6 text-white">
			<div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
				<div>
					<div className="font-heading text-lg">Anay Infinity Pvt Ltd</div>
					<div className="text-sm text-slate-300">Powering India. Connecting the World.</div>
				</div>
				<div className="text-sm text-slate-300">© {new Date().getFullYear()} Anay Infinity Pvt Ltd. All rights reserved.</div>
			</div>
		</footer>
	);
}
