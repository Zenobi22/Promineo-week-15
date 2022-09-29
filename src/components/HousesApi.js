
const Houses_Endpoint = 'https:// ancient-taiga-31359.herokupp.com/api/houses';

 export class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(Houses_Endpoint);
            const data = await resp.json();
            return data;
        }catch(e) {
            console.log('oops, looks like fetch Houses had an issue' , e);
        }
    }
    put = async (house) => {
        try {
            const resp = await fetch(`${Houses_Endpoint}/${house.id}`, {
                method:'Put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        }catch(e) {
            console.log('oops looks like updating houses had an issue', e);
      } 
    }
}



