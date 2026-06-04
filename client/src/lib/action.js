import toast from "react-hot-toast"

export const postData = async (v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success('data Added')
    }
    return data
}