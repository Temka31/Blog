import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';




export default function Header() {
  return (
    <div>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
     
     <Button>
      <Link href="/">
              <a >Home</a>
       
      </Link>
      </Button>
      <Button>
      <Link href="/about">
              <a>About</a>
              </Link>
      </Button>

      

</ButtonGroup>
    </div>


  )
}


