import React from 'react';
import styles from './Form.module.css';


interface FormTypes {
    name: string;
    email: string;
    isLoading: boolean;
    onsubmit: (event: React.FormEvent) => void;
    nameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({name, email, onsubmit, nameChange, emailChange, isLoading}: FormTypes) => {
    return (
        <div className=' w-screen justify-center flex h-screen'>
            <div className='w-1/2 m-auto h-1/2 border border-slate-800 rounded-lg p-3 justify-center'>
                <form className='flex flex-col'>
                    <label className={styles.label}>Name</label>
                    <input type='text' className={styles.input} onChange={nameChange} value={name}/>
                    <label className={styles.label}>Email</label>
                    <input type='email' className={styles.input} onChange={emailChange} value={email}/>
                    <input type='submit' onClick={onsubmit} className='bg-blue-500 mt-8 hover:bg-blue-400
                     text-white font-bold py-2 px-4  hover:border-blue-500 rounded' value={isLoading ? 'Loading...' : 'Submit'} />
                </form>
            </div>
        </div>
    );
}; 