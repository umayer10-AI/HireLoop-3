import { MyCompanies } from '@/component/dashboard/Company';
import { HeaderSection } from '@/component/dashboard/CompanyHeader';
import React from 'react';

const page = () => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <MyCompanies></MyCompanies>
        </div>
    );
};

export default page;