"use client";

import { Form } from "@/components/Form";
import React from "react";

export default function Home() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
 

  const onFormSubmitted  =(event: React.FormEvent) => {
      event.preventDefault();
      fetch('/api/send-email', {
          method: 'POST',
          cache: 'no-cache',
          body: JSON.stringify({
            name,
            email
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
      });

      
  }
  return (
   <React.Fragment> 
        <Form name={name} email={email} onsubmit={onFormSubmitted} nameChange={handleNameChange} emailChange={handleEmailChange}/>  
   </React.Fragment>
  );
}
