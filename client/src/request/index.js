export const getCountries=()=>{
    return fetch(`api/countries`,{
        method:'GET',
    }).then(response=>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })
}

export const addUser=(user)=>{
    return fetch(`/api`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then(response=>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })
}


export const getUsers=()=>{
    return fetch(`/api`,{
        method:'GET',
    }).then(response=>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })
}

export const deleteUser=(id)=>{
    return fetch(`/api/${id}`,{
        method:'DELETE',
    }).then(response=>{
        return response.json()
    }).catch(err=>{
        console.log(err)
    })
}