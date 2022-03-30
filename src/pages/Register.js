import Logo from '../components/Logo'
import {useState} from 'react'
import RegisterInputs from '../components/RegisterInputs';

export default function Register() {

  const [data, setData] = useState({})

  const addUser = async () => {
      const host = process.env.NODE_ENV === 'production' ? 'https://restfulcouchsharing.herokuapp.com/' : ''
      const response = await fetch(host + 'api/users', {
      method: "POST",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
      });
      const result = await response.json()
      console.log(result)
       
  }               

  const submit = (e) => {
    e.preventDefault();
    addUser();
      console.log(process.env.NODE_ENV === '')
  }

  return (
    <main className="flex flex-col items-center justify-evenly h-screen bg-register bg-fixed bg-cover bg-center">
        <h1 className="underline underline-offset-8 decoration-1 font-zeyada text-center text-6xl px-8 backdrop-brightness-75 backdrop-blur-sm text-best-white border rounded">Register</h1>
   
        
          <form onSubmit={submit} className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 backdrop-brightness-75 backdrop-blur-sm flex flex-col border-best-white border rounded">
            <RegisterInputs data={data} setData={setData} />
            <button onClick={submit} className="active:scale-95 mx-auto my-4 p-1 border border-best-white text-best-white rounded w-1/2" type="submit" value="Become a Member">Become Member</button>
          </form>
        

        <div className="bg-best-white opacity-40 w-fit scale-[2] border border-best-white rounded-full">{/* backdrop-blur-sm w-fit scale-[2] mx-auto border border-best-white rounded-full */}
          <a href="/"><Logo /></a>
        </div>                
    </main>
  );
}
