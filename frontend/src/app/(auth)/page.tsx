import Banner from './Banner';

const breadcrumbsData1 = [
    { href: 'index.html', text: 'Home' },
    { href: '#', text: 'Page' },
    { href: '#', text: 'Shop' },
];

const breadcrumbsData2 = [
    { href: 'index.html', text: 'Home' },
    { href: '#', text: 'Development' },
    { href: '#', text: 'Web Development' },
];

const breadcrumbsData3 = [
    { href: 'index.html', text: 'Home' },
    { href: '#', text: 'Pages' },
    { href: '#', text: 'Instructor' },
];

export default function Page() {
    return (
        <div>
            {/* Shop cart banner */}
            <Banner title="Shop Cart" breadcrumbs={breadcrumbsData1} contentAlignment="center">
                <h6 className="text-gray-600">
          Products that help beginner designers become true unicorns.
                </h6>
            </Banner>

            {/* Web Development banner */}
            <Banner
                title="Web Development Courses"
                breadcrumbs={breadcrumbsData2}
                contentAlignment="left"
            >
                <p className="text-gray-600 mb-6">
          With one of our online web development courses, you can explore different areas of this
          in-demand field.
                </p>
                <div className="widget tags-list mt-8">
                    <h6 className="font-medium text-lg mb-4">Topics related to Web Development</h6>
                    <ul className="flex flex-wrap gap-4">
                        {/* Add sample tags */}
                        <li className="px-4 py-2 rounded">Frontend</li>
                        <li className="px-4 py-2 rounded">Backend</li>
                        <li className="px-4 py-2 rounded">Fullstack</li>
                    </ul>
                </div>
            </Banner>

            {/* Instructor banner */}
            <Banner
                title="Hi, I Am Ali Tufan"
                breadcrumbs={breadcrumbsData3}
                contentAlignment="left"
            >
                <p className="text-gray-600 mb-4">Developer and Teacher</p>
                <ul className="entry-meta mb-6">
                    <li className="flex items-center mb-2">
                        <i className="flaticon-book text-lg mr-2" />
                        <p className="text-sm">11 Lessons</p>
                    </li>
                    <li className="flex items-center">
                        <i className="flaticon-user text-lg mr-2" />
                        <p className="text-sm">200 Students</p>
                    </li>
                </ul>
            </Banner>
        </div>
    );
}
