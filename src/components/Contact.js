import './Contact.css';

function Contact(){
    return <>
            <div className = 'flex justify-center items-center border-t-2'>
                <img className = 'w-24 h-24 icon' src = '/boy.png' alt = 'boy' />
            </div>

            <div className = 'flex justify-center items-center my-8'>
                <div className = 'title text-center text-3xl w-9/12'>
                    If you'd like to chat then please fill in the form below and I'll get back.
                </div>
            </div>

            <form id = 'contactForm' onSubmit = { (e) => {
                        document.getElementById("contactForm").reset();
                        e.preventDefault();
                    }      
                } 
                name="contact" 
                method="POST" 
                netlify 
                netlify-honeypot="bot-field" 
                autoComplete='off'
            >
                <div className = 'form-container p-3 w-9/12 lg:w-7/12'>
                    <div className = 'grid grid-cols-1 md:grid-cols-2'>
                        <div className = 'mb-5'>
                            <div className = 'mb-3'>
                                <label htmlFor = 'fname'>
                                    First Name
                                </label>
                            </div>
                            <div>
                                <input className = 'px-3' id = 'fname' type = 'text' name = 'fname' placeholder = 'First Name' required />
                            </div>
                        </div>

                        <div className = 'mb-5'>
                            <div className = 'mb-3'>
                                <label htmlFor = 'lname'>
                                    Last Name
                                </label>
                            </div>
                            <div>
                                <input className = 'px-3' id = 'lname' type = 'text' name = 'lname' placeholder = 'Last Name' required />
                            </div>
                        </div>
                    </div>

                    <div className = 'mb-5'>
                        <div className = 'mb-3'>
                            <label htmlFor = 'email'>
                                Email Address
                            </label>
                        </div>
                        <div>
                            <input className = 'px-3' id = 'email' type = 'email' name = 'email' placeholder='email@address.com' required />
                        </div>
                    </div>

                    <div className = 'mb-5'>
                        <div className = 'mb-3'>
                            <label htmlFor = 'message'>
                                Message
                            </label>
                        </div>
                        <div>
                            <textarea id = 'message' name = 'message'></textarea>
                        </div>
                    </div>

                    <div className = 'flex justify-center items-center my-10'>
                        <button type = 'submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
}

export default Contact;