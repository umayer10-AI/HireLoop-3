export const companyJobs = async (id, status = 'active') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs?companyID=${id}&status=${status}`)
    return res.json()
}