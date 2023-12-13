type BlockProps = {
    number: number,
    description: string
}

export default function Block({ number, description }: BlockProps) {
    return (
        <div className="bg-gray-800 flex flex-col justify-center items-center text-center p-5 rounded-lg">
            <p className="text-white md:text-[60px] text-[15px] font-bold">{number}</p>
            <p className="text-white md:text-[20px] text-[8px] font-bold">{description}</p>
        </div>
    )
}