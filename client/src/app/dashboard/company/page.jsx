import { MyCompanies } from '@/component/dashboard/Company';
import { HeaderSection } from '@/component/dashboard/CompanyHeader';
import { getUserSession } from '@/lib/session';
import React from 'react';

const page = async () => {

    const user = await getUserSession()
    console.log(user)

    return (
        <div>
            <HeaderSection></HeaderSection>
            <MyCompanies></MyCompanies>
        </div>
    );
};

export default page;