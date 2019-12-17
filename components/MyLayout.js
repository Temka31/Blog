import Sidebar from './Sidebar'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout (props) {
  return (

    <div>
         <Sidebar />
    
    
     
      {props.children}
    </div>
  )
}


