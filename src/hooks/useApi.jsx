import React from 'react'

const useApi = () => {
    useEffect(() => {
        const fetchSession = async () => {
          const token = localStorage.getItem('token')
          const options = {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
          try {
            
            if (!token) {
              console.log('no active session')
              return
            } 
            const data = await axios.get('https://apitask.sunmence.com.ng/session.php', options)
            if (data) {
              console.log(data.data.user);
               setSessionData(data.data.user)
            }
    
          } catch (err) {
            setError("Failed to fetch session data");
          } finally {
            setLoading(false);
          }
        };
    
        fetchSession();
      }, []);
  return (
    <div>useApi</div>
  )
}

export default useApi