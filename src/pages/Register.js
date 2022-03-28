// import Submit from '../components/SubmitBtn'
import Logo_Big from '../assets/img/logo-big.png'
import {useState} from 'react'

export default function Register() {

  const [data, setData] = useState({})

  const addUser = async () => {
      /* const response = */ await fetch('api/users/', {
      method: "POST",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    });
    // const result = await response.json();
  }               

  const submit = (e) => {
    e.preventDefault();
    addUser();
    console.log(data);
  }

  return (
    <main className="flex h-screen flex-col items-center space-y-10 bg-gradient-to-t from-pistachio-normal to-apricot-bright">
        <h1 className="font-zeyada text-5xl mt-8 text-gray-dark">Register Page</h1>
        
      <section className="flex flex-col items-center gap-y-1 bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <form className="p-4">
          <input onChange={e => setData(data, data.fname = e.target.value)} className="p-1 m-1 rounded-md" type="text" id="fname" name="fname" placeholder="First Name*"/>
          <input onChange={e => setData(data, data.lname = e.target.value)} className="p-1 m-1 rounded-md" type="text" id="lname" name="lname" placeholder="Last Name*"/>
          <input onChange={e => setData(data, data.email = e.target.value)} className="p-1 m-1 rounded-md" type="email" id="email" name="email" placeholder="E-Mail*"/>
          <input onChange={e => setData(data, data.password = e.target.value)} className="p-1 m-1 rounded-md" type="password" id="password" name="password" placeholder="Create Password*"/>
          <input onChange={e => setData(data, data.rePassword = e.target.value)} className="p-1 m-1 rounded-md" type="password" id="rePassword" name="rePassword" placeholder="Repeat Password*"/>
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
