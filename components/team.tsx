const members = [
    {
        name: 'AMA Computer College Fairview Branch',
        role: 'Current School',
        avatar: 'https://ama.edu.ph/img/cropped-AMA-University-and-Colleges-main-logo.png',
    },
    {
        name: 'Systems Technology Institute',
        role: 'Senior High School',
        avatar: 'https://cdn.browsercam.com/edu.sti.elms.app.android-header.png',
    },
    {
        name: 'La Concepcion College',
        role: 'High School',
        avatar: 'https://laconcepcioncollege.com/wp-content/uploads/2010/12/new-logo1.jpg?w=150',
    },
    {
        name: 'Tungkong Mangga Elementary School',
        role: 'Elementary',
        avatar:'https://th.bing.com/th/id/OIP.r_SMHOeRbmUyMdTaozYhjQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Education History</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Schools and Universities</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
                    </div>
        </section>
    )
}
