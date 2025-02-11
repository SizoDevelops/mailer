"use client";

import { Form } from "@/components/Form";
import React from "react";

export default function Home() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
 

  const onFormSubmitted  =(event: React.FormEvent) => {
      event.preventDefault();
      setLoading(true);
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
          setLoading(false);
          setEmail('');
          setName('');
          console.log(data);
      });

      
  }
  return (
   <React.Fragment> 
        <Form name={name} email={email} isLoading={loading} nameChange={handleNameChange} emailChange={handleEmailChange} onsubmit={onFormSubmitted}/>  
   </React.Fragment>
  );
}
