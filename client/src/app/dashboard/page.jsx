"use client"
import DashboardStats from '@/component/dashboard/Box1';
import { RecentApplications } from '@/component/dashboard/Box2';
import { TopCompanies } from '@/component/dashboard/Box3';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const page = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user)

    return (
        <div>
            <h2 className='text-3xl'>Welcome back, {user?.name}</h2>
            <DashboardStats></DashboardStats>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <RecentApplications></RecentApplications>
                </div>
                <TopCompanies></TopCompanies>
            </div>
        </div>
    );
};

export default page;