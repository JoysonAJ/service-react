import React, {useState} from 'react';

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [contact, setContact] = useState("");
    const [linkdIn, setLinkdIn] = useState("");
    const [github, setGithub] = useState("");
    const dataSaveBackend = () =>{
        // e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(course)
        console.log(contact)
        console.log(linkdIn)
        console.log(github)

        // console.log(e)
    }


    return (
        <>
            <div className="contact" >
                <main>
                    <h1>Join Us </h1>

                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text"
                                   placeholder="Abc"
                                   value={name}
                                   onChange={
                                (e) =>{
                                    setName(e.target.value)
                                }
                            }
                                   required/>
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email"
                                   placeholder="Abc@xyz.com"
                                   onChange={
                                       (e) =>{
                                           setEmail(e.target.value)
                                       }
                                   }
                                   required
                            />
                        </div>

                        <div>
                            <label>UG/PG  </label>
                            <input type={"text"}
                                   placeholder={"MCA,BE,Btech"}
                                   onChange={
                                       (e) =>{
                                           setCourse(e.target.value)
                                       }
                                   }
                                   required/>
                        </div>

                        <div>
                            <label>Contact</label>
                            <input type={"text"}
                                   placeholder={"+91548765"}
                                   onChange={
                                       (e) =>{
                                           setContact(e.target.value)
                                       }
                                   }
                                   required/>
                        </div>

                        <div>
                            <label>
                                LinkedIn
                            </label>
                            <input type={"text"}
                                    placeholder={"Enter the linkdin url"}
                                    onChange={
                                        (e)=>{
                                            setLinkdIn(e.target.value)
                                        }
                                    }
                                    required/>

                        </div>

                        <div>
                            <label>
                                Github
                            </label>
                            <input type={"text"}
                                    placeholder={"Enter the Github profile url"}
                                    onChange={
                                        (e) =>{
                                            setGithub(e.target.value)
                                        }
                                    }
                                    required/>

                        </div>

                        <button
                            onClick={dataSaveBackend}
                        >
                            Send
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Contact;