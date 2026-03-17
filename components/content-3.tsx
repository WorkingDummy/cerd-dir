import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-(--radius)"
                    src="me.webp"
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />
 <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Hobbies</h2>
                    <div className="space-y-6">
                        <p>Trying out new stuff and experimenting on it
                            Playing online games, mostly in PC
                            Listening to music
                            Drawing sometimes
                            Making build blueprints for building games I play (ex. terraria & minecraft )
                        </p>
                        <p>
                            Favorites/ things I do always <br></br> Drinking Coffee <br />Sleeping Randomly<br /> Petting Random Cats I See <br /> Overthinking Too Much
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
                    </div>
        </section>
    )
}
