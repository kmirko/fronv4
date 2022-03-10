import { API_URL } from "../config/index";
import Link from 'next/link'

export default function Home({events}) {
  return (
    <div>
      <h1>Home Page</h1>
      {events.map(evt=>(
        <h3 key={evt.id}>{evt.id}</h3>
      ))}
      <Link href='/about'>About Page</Link>
    </div>
  )
}
export async function getServerSideProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const json = await res.json()
  const events = json.data;

  return{
    props:{
      events
    }
  }
}

