import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Student() {
    const [student, setStudent] = useState([]); //définir et initialiser un tableau de students vide

    useEffect(() => { //this useEffect hook is used to fetch data from the server when the component is mounted. It runs only once in this case.
        axios.get('http://localhost:8081')
        .then(res => setStudent (res.data)) //retourne en réponse les données
        .catch(err => console.log(err)); //log n'importe quelles erreurs
        },  []); //empty dependency array pour que le fetch se fasse une seule fois au chargement de la page

        const handleDelete = async (id) => {
            try {
                await axios.delete(`http://localhost:8081/student/`+id);
                window.location.reload()
            } catch(err) {
                console.log(err);
            }
        }

  return (
    <div className= 'd-flex vh-10 bg primary justify-content-center align-items-center mt-5'>
        <div className='w-50 bg-white rounded'>
            <h1 className='mb-5'>Student table</h1>
            {/* on remplace le bouton ci-dessous par le link to pour rediriger vers le formulaire */}
            {/* <button className='btn btn-success'>Add student</button>*/}
            <Link to="/create" className='btn btn-success'>Add student</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-primary'>Edit</Link>
                                    <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student
