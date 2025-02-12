import { title } from 'process';
import React from 'react'



export const Email = (name: string, intro: string = '', instructions: string = '', buttonColor: string = '#03A4FF', buttonText: string = '', outro: string = '', link: string = '') => {
    const styledEmail = {
        body: {
            
            name: name,
            intro: intro || 'Welcome to My Email Business!',
            action: {
                instructions: instructions || 'Click this button to visit our website.',
                button: {
                    color: buttonColor || '#03A4FF',
                    text: buttonText || 'Confirm your account',
                    link: link || 'https://www.sizodevelops.com/about'
                }
            },
            outro: outro || "This is from Sizo Develops' youtube channel",
        }
    };

    const plainText = `
    ${name} ${intro || 'Welcome to My Email Business!'}
    ${instructions || 'Click this button to visit our website.'}
    ${link || 'https://www.sizodevelops.com/about'}
    ${outro || "This is from Sizo Develops' youtube channel"}
    `
    return {styledEmail, plainText}
}

