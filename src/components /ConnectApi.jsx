import { useEffect } from 'react';

const ConnectAPI = ( {setPlayers} ) => {

    useEffect(() => {
        const APICall = async() => {
          try{
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players`);
            const puppyData = await response.json();
            const puppyArray = puppyData.data.players;
            console.log(puppyArray);
            setPlayers(puppyArray);
          } catch (error) {
            console.log(`Error fetching data:`, error)
          }  
        };
    
        APICall();
      },[setPlayers]);

};

export default ConnectAPI;