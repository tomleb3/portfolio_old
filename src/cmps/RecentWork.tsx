import React from 'react';

import { Work } from '../services/workService';
import { WorkList } from './WorkList';

export const RecentWork = ({ works }: { readonly works: readonly Work[] }) => {
    const recentWorks = works.filter(work => work.category === 'recent');

    return (
        <section className='recent-work main-layout'>
            <strong>Recent Works</strong>
            <p>Here are a few projects I've worked on recently</p>
            <WorkList works={recentWorks} />
        </section>
    );
};
