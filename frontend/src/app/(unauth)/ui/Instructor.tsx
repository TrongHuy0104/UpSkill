import Image from 'next/image';

export default function Avatar() {
    return (
        <div className="w-80 bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image
                    src="/profile-image.jpg"
                    alt="Profile"
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="mt-4">
                <div className="flex justify-around text-sm text-gray-500 mb-2">
                    <span>👥 345 Students</span>
                    <span>📚 34 Course</span>
                </div>
                <h3 className="text-xl font-bold">Savannah Nguyen</h3>
                <p className="text-sm text-gray-600">Professional Web Developer</p>
                <div className="mt-4 text-yellow-500 text-lg font-semibold">
                ⭐ 4.9
                </div>
            </div>
        </div>
    );
}
