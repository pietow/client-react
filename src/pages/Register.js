// import Submit from '../components/SubmitBtn'
import Logo_Big from '../assets/img/logo-big.png'
import {useState} from 'react'

export default function Register() {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [data, setData] = useState({});


  const submit = (e) => {
    e.preventDefault()
    setData({
      fName,
      lName,
      email,
      date,
      password,
      rePassword
    })
    e.target.value = ''
    console.log(data)
  }

  return (
    <main className="flex h-screen flex-col items-center space-y-10 bg-gradient-to-t from-pistachio-normal to-apricot-bright">
        <h1 className="font-zeyada text-5xl mt-8 text-gray-dark">Register Page</h1>
        <figure className="w-20 h-20">
            <img className="" src={Logo_Big}/>
          <figcaption></figcaption>
        </figure>
      <section className="flex flex-col items-center gap-y-1 bg-apricot-bright m-4 rounded-md drop-shadow-md">
        <form action="POST" className="p-4">
          <input onChange={e => setFName(e.target.value)} className="p-1 m-1 rounded-md" type="text" id="fname" name="fname" placeholder="First Name*"/>
          <input onChange={e => setLName(e.target.value)} className="p-1 m-1 rounded-md" type="text" id="lname" name="lname" placeholder="Last Name*"/>
          <input onChange={e => setEmail(e.target.value)} className="p-1 m-1 rounded-md" type="email" id="email" name="email" placeholder="E-Mail*"/>
          <input onChange={e => setDate(e.target.value)} className="p-1 m-1 rounded-md" type="date" id="age" name="age" placeholder="Date of Birth"/>
          <input onChange={e => setPassword(e.target.value)} className="p-1 m-1 rounded-md" type="password" id="password" name="password" placeholder="Create Password"/>

          <input onChange={e => setRePassword(e.target.value)} className="p-1 m-1 rounded-md" type="password" id="rePassword" name="rePassword" placeholder="Repeat Password"/>
          <input onClick={submit} className="active:bg-light-orange hover:outline-1 m-1 hover:drop-shadow hover:outline-teal-dark rounded-md bg-pistachio-normal p-2" type="submit" value="Become a Member"/>
        </form>
      </section>
    </main>
  );
}
