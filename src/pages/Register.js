import Logo_Big from '../assets/img/logo-big.png'
import {useState} from 'react'
import RegisterInputs from '../components/RegisterInputs';

export default function Register() {

  const [data, setData] = useState({})

  const addUser = async () => {
      const response = await fetch('api/users', {
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
  }

  return (
    <main className="flex h-screen flex-col items-center space-y-10 bg-gradient-to-t from-pistachio-normal to-apricot-bright">
        <h1 className="font-zeyada text-5xl mt-8 text-gray-dark">Register Page</h1>
        
      <section className="flex flex-col items-center gap-y-1 bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <form className="p-4">
          <RegisterInputs data={data} setData={setData} />
          <input onClick={submit} className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2" type="submit" value="Become a Member"/>
        </form>
      </section>
      <figure className="w-20 h-20">
            <img className="" src={Logo_Big} alt="roam mate logo"/>
          <figcaption></figcaption>
        </figure>
    </main>
  );
}
