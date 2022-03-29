import Logo from '../components/Logo'
import {useState} from 'react'
import RegisterInputs from '../components/RegisterInputs';

export default function Register() {

  const [data, setData] = useState({})

  const addUser = async () => {
      await fetch('api/users', {
      method: "POST",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    });
  }               

  const submit = (e) => {
    e.preventDefault();
    addUser();
  }

  return (
    <main className="h-screen bg-register bg-fixed bg-cover bg-center">
        <h1 className="font-zeyada text-center text-6xl py-8 text-best-white">Register</h1>
   
        
          <form onSubmit={submit} className="backdrop-blur-sm flex flex-col border-best-white border mx-4 mb-40 rounded">
            <RegisterInputs data={data} setData={setData} />
            <button onClick={submit} className="mx-auto my-4 p-1 border border-best-white text-best-white rounded w-1/2" type="submit" value="Become a Member">Become Member</button>
          </form>
        

        <div className="backdrop-blur-sm w-fit scale-[2] mx-auto border border-best-white rounded-full">
          <a href="/"><Logo /></a>
        </div>                
    </main>
  );
}
