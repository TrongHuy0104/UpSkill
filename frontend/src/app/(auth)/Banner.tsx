import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface Breadcrumb {
  href?: string;
  text: string;
}

interface BannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  contentAlignment?: 'center' | 'left' | 'right';
  backgroundColor?: string;
  children?: React.ReactNode;
}

function getAlignmentClass(alignment: 'center' | 'left' | 'right'): string {
    if (alignment === 'left') return 'text-left';
    if (alignment === 'right') return 'text-right';
    return 'text-center';
}

export default function Banner({
    title,
    breadcrumbs,
    contentAlignment = 'center',
    backgroundColor = 'bg-red-100',
    children,
}: BannerProps) {
    const alignmentClass = getAlignmentClass(contentAlignment);

    return (
        <div className={`page-title py-16 ${backgroundColor}`}>
            <div className="tf-container mx-auto px-4 max-w-screen-xl">
                <div className={`content ${alignmentClass}`}>
                    <Breadcrumbs breadcrumbs={breadcrumbs} alignment={contentAlignment} />
                    <h2 className="font-cardo font-bold text-4xl mb-2">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
}
    
