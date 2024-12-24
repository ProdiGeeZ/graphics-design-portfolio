const companies = [
    { src: "/disney.svg", height: "h-20", width: "w-auto" },
    { src: "/jd.svg", height: "h-12", width: "w-auto" },
    { src: "/coca-cola.svg", height: "h-8", width: "w-auto" },
    { src: "/sony.svg", height: "h-[90px]", width: "w-auto" },
    { src: "/mcfc.svg", height: "h-[120px]", width: "w-auto" },
    { src: "/adidas.svg", height: "h-[90px]", width: "w-auto" },
    { src: "/kelloggs.svg", height: "h-[90px]", width: "w-auto" },
    { src: "/mitsubishi.svg", height: "h-10", width: "w-auto" },
];

export function ClientSection() {
    return (
        <section id="companies">
            <div className="py-14">
                <div className="container mx-auto px-4 md:px-8">
                    <h3 className="text-center text-sm font-semibold text-gray-500">
                        WORKED WITH LEADING COMPANIES
                    </h3>
                    <div className="relative mt-6">
                        <div className="grid grid-cols-4 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
                            {companies.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={logo.src}
                                    className={`${logo.height} ${logo.width} px-2`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
