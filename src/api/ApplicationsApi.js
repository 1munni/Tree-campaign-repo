export const myApplicationPromise=(email,accessToken)=>{
    return fetch(`https://my-assignment-11-server-xi.vercel.app/applications?email=${email}`,{
        headers:{
            authorization:`Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())

}